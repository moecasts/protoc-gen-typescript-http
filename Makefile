# protoc-gen-typescript-http Makefile
.PHONY: all
.DEFAULT_GOAL := all

# Variables
BINARY_NAME = protoc-gen-typescript-http
BINARY_PATH = bin/$(BINARY_NAME)
PROTO_DIR = examples/proto
TS_GEN_DIR = $(PROTO_DIR)/gen/typescript

# Go variables
export GOWORK ?= off
export PATH := $(shell go env GOPATH)/bin:$(PATH)
GO = go
GOFLAGS = -v

# Tool versions
GOLANGCI_LINT_VERSION = 1.62.2

# Tool paths
TOOLS_DIR = .tools
GOLANGCI_LINT = $(TOOLS_DIR)/golangci-lint

# Detect OS
UNAME_S := $(shell uname -s)
UNAME_M := $(shell uname -m)

ifeq ($(UNAME_S),Linux)
	OS = linux
endif
ifeq ($(UNAME_S),Darwin)
	OS = darwin
endif

ifeq ($(UNAME_M),x86_64)
	ARCH = amd64
endif
ifeq ($(UNAME_M),aarch64)
	ARCH = arm64
endif
ifeq ($(UNAME_M),arm64)
	ARCH = arm64
endif

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RESET := \033[0m

## Primary Targets

all: check lint test generate format typescript-lint verify-no-diff
	@echo "$(GREEN)✓ All checks passed!$(RESET)"

check: commit-check

lint: go-lint

test: go-test

generate: build buf-generate

format: format-markdown format-yaml buf-format typescript-format

verify-no-diff: go-mod-tidy git-verify-no-diff

## Proto Targets

proto: build buf-lint buf-format buf-generate

build:
	@echo "$(BLUE)Building $(BINARY_NAME)...$(RESET)"
	@mkdir -p bin
	$(GO) build $(GOFLAGS) -o $(BINARY_PATH) .
	@echo "$(GREEN)✓ Built $(BINARY_PATH)$(RESET)"

buf-lint:
	@echo "$(BLUE)Linting proto files...$(RESET)"
	cd $(PROTO_DIR) && buf lint

buf-format:
	@echo "$(BLUE)Formatting proto files...$(RESET)"
	cd $(PROTO_DIR) && buf format --write

buf-generate: build
	@echo "$(BLUE)Generating from proto files...$(RESET)"
	cd $(PROTO_DIR) && buf generate --template buf.gen.yaml --path einride
	@echo "$(GREEN)✓ Generated TypeScript files$(RESET)"

## Go Targets

go-test:
	@echo "$(BLUE)Running Go tests...$(RESET)"
	$(GO) test -v -race ./...
	@echo "$(GREEN)✓ Tests passed$(RESET)"

go-lint: $(GOLANGCI_LINT)
	@echo "$(BLUE)Linting Go files...$(RESET)"
	$(GOLANGCI_LINT) run ./...

go-mod-tidy:
	@echo "$(BLUE)Tidying Go module files...$(RESET)"
	$(GO) mod tidy -v

## TypeScript Targets

typescript-lint:
	@echo "$(BLUE)Linting TypeScript files...$(RESET)"
	@which biome > /dev/null || pnpm install
	pnpm exec biome check examples/proto/gen/typescript
	@echo "$(GREEN)✓ TypeScript lint passed$(RESET)"

typescript-format:
	@echo "$(BLUE)Formatting TypeScript files...$(RESET)"
	@which biome > /dev/null || pnpm install
	pnpm exec biome check --write --unsafe examples/proto/gen/typescript
	@echo "$(GREEN)✓ TypeScript formatted$(RESET)"

## Format Targets

format-markdown:
	@echo "$(BLUE)Formatting Markdown files...$(RESET)"
	@which markdownfmt > /dev/null || $(GO) install github.com/shurcooL/markdownfmt@latest
	markdownfmt -w .
	@echo "$(GREEN)✓ Markdown formatted$(RESET)"

format-yaml:
	@echo "$(BLUE)Formatting YAML files...$(RESET)"
	@which yamlfmt > /dev/null || $(GO) install github.com/google/yamlfmt/cmd/yamlfmt@latest
	yamlfmt .
	@echo "$(GREEN)✓ YAML formatted$(RESET)"

## Git Targets

commit-check:
	@echo "$(BLUE)Checking git commits...$(RESET)"
	@which commitlint > /dev/null || pnpm install
	@pnpm exec commitlint --from origin/master --to HEAD 2>/dev/null || pnpm exec commitlint --from origin/main --to HEAD 2>/dev/null || true
	@echo "$(GREEN)✓ Commit check passed$(RESET)"

git-verify-no-diff:
	@echo "$(BLUE)Verifying that git has no diff...$(RESET)"
	@git diff --exit-code || (echo "$(YELLOW)Uncommitted changes detected. Please commit or stash them.$(RESET)" && exit 1)
	@echo "$(GREEN)✓ No uncommitted changes$(RESET)"

## Tool Installation

tools: $(GOLANGCI_LINT) install-go-tools
	@echo "$(GREEN)✓ All tools installed$(RESET)"

install-go-tools:
	@echo "$(BLUE)Installing Go tools...$(RESET)"
	@which markdownfmt > /dev/null || $(GO) install github.com/shurcooL/markdownfmt@latest || true
	@which yamlfmt > /dev/null || $(GO) install github.com/google/yamlfmt/cmd/yamlfmt@latest || true
	@echo "$(GREEN)✓ Go tools installed$(RESET)"

$(GOLANGCI_LINT):
	@echo "$(YELLOW)Installing golangci-lint...$(RESET)"
	@mkdir -p $(TOOLS_DIR)
	@curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(TOOLS_DIR) v$(GOLANGCI_LINT_VERSION)
	@chmod +x $(GOLANGCI_LINT)

## Development Targets

dev:
	@echo "$(BLUE)Starting development workflow...$(RESET)"
	@$(MAKE) format
	@$(MAKE) build
	@$(MAKE) buf-generate
	@$(MAKE) typescript-lint

clean:
	@echo "$(BLUE)Cleaning...$(RESET)"
	@rm -rf bin $(TOOLS_DIR)
	@echo "$(GREEN)✓ Cleaned$(RESET)"

clean-tools:
	@echo "$(BLUE)Cleaning tools...$(RESET)"
	@rm -rf $(TOOLS_DIR)
	@echo "$(GREEN)✓ Tools cleaned$(RESET)"

## Help Target

help:
	@echo "$(BINARY_NAME) Makefile"
	@echo ""
	@echo "Primary targets:"
	@echo "  all             - Run all checks (default)"
	@echo "  check           - Run git commit checks"
	@echo "  lint            - Run all linters"
	@echo "  test            - Run tests"
	@echo "  generate        - Build and generate code from proto"
	@echo "  format          - Format all files"
	@echo "  verify-no-diff  - Verify no uncommitted changes"
	@echo ""
	@echo "Proto targets:"
	@echo "  proto           - Run all proto tasks"
	@echo "  build           - Build the binary"
	@echo "  buf-lint        - Lint proto files"
	@echo "  buf-format      - Format proto files"
	@echo "  buf-generate    - Generate code from proto"
	@echo ""
	@echo "Go targets:"
	@echo "  go-test         - Run Go tests"
	@echo "  go-lint         - Lint Go code"
	@echo "  go-mod-tidy     - Tidy Go modules"
	@echo ""
	@echo "TypeScript targets:"
	@echo "  typescript-lint  - Lint TypeScript code"
	@echo "  typescript-format - Format TypeScript code"
	@echo ""
	@echo "Format targets:"
	@echo "  format-markdown - Format Markdown files"
	@echo "  format-yaml     - Format YAML files"
	@echo ""
	@echo "Git targets:"
	@echo "  commit-check    - Check git commits"
	@echo "  git-verify-no-diff - Verify no uncommitted changes"
	@echo ""
	@echo "Development:"
	@echo "  dev             - Format, build, and generate"
	@echo "  tools           - Install all tools"
	@echo "  clean           - Clean build artifacts"
	@echo "  clean-tools     - Clean installed tools"
	@echo "  help            - Show this help message"
