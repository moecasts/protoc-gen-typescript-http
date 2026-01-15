# examples/proto Makefile
.PHONY: all

# Colors
BLUE := \033[0;34m
GREEN := \033[0;32m
RESET := \033[0m

all: build buf-lint buf-format buf-generate

build:
	@echo "$(BLUE)Building protoc-gen-typescript-http...$(RESET)"
	@cd ../.. && $(MAKE) build

buf-lint:
	@echo "$(BLUE)Linting proto files...$(RESET)"
	buf lint

buf-format:
	@echo "$(BLUE)Formatting proto files...$(RESET)"
	buf format --write

buf-generate:
	@echo "$(BLUE)Generating from proto files...$(RESET)"
	@cd ../.. && $(MAKE) buf-generate

clean:
	@echo "$(BLUE)Cleaning generated files...$(RESET)"
	@rm -rf gen
	@echo "$(GREEN)✓ Cleaned$(RESET)"
