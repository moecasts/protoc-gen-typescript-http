package plugin

import (
	"strings"

	"github.com/moecasts/protoc-gen-typescript-http/internal/codegen"
	"google.golang.org/genproto/googleapis/api/annotations"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

type commentGenerator struct {
	opts       Options
	descriptor protoreflect.Descriptor
}

func (c commentGenerator) generateLeading(f *codegen.File, indent int) {
	loc := c.descriptor.ParentFile().SourceLocations().ByDescriptor(c.descriptor)

	// Asterisks in comments may break multi-line comments, so they need to be escaped
	if c.opts.UseMultiLineComment && len(loc.LeadingComments) > 0 {
		loc.LeadingComments = escapeCommentAsterisk(loc.LeadingComments)
	}

	lines := strings.Split(loc.LeadingComments, "\n")

	commentPrefix := getCommentPrefix(c.opts.UseMultiLineComment)

	behaviorComment := ""

	if field, ok := c.descriptor.(protoreflect.FieldDescriptor); ok {
		behaviorComment = fieldBehaviorComment(field)
	}

	shouldPrintComment := c.opts.UseMultiLineComment && (len(loc.LeadingComments) > 0 || len(behaviorComment) > 0)

	if shouldPrintComment {
		f.P(t(indent), "/**")
	}

	for _, line := range lines {
		if line == "" {
			continue
		}
		f.P(t(indent), commentPrefix, " ", strings.TrimSpace(line))
	}

	if len(behaviorComment) > 0 {
		f.P(t(indent), commentPrefix)
		f.P(t(indent), commentPrefix, " ", behaviorComment)
	}

	if shouldPrintComment {
		f.P(t(indent), " */")
	}
}

func fieldBehaviorComment(field protoreflect.FieldDescriptor) string {
	behaviors := getFieldBehaviors(field)
	if len(behaviors) == 0 {
		return ""
	}

	behaviorStrings := make([]string, 0, len(behaviors))
	for _, b := range behaviors {
		behaviorStrings = append(behaviorStrings, b.String())
	}
	return "Behaviors: " + strings.Join(behaviorStrings, ", ")
}

func escapeCommentAsterisk(s string) string {
	return strings.ReplaceAll(s, "*/", "∗/")
}

func getFieldBehaviors(field protoreflect.FieldDescriptor) []annotations.FieldBehavior {
	if behaviors, ok := proto.GetExtension(
		field.Options(), annotations.E_FieldBehavior,
	).([]annotations.FieldBehavior); ok {
		return behaviors
	}
	return nil
}

func getCommentPrefix(multiline bool) string {
	if multiline {
		return " *"
	}

	return "//"
}

func isFieldBehaviorOptional(field protoreflect.FieldDescriptor) bool {
	behaviors := getFieldBehaviors(field)
	if len(behaviors) == 0 {
		return false
	}

	for _, b := range behaviors {
		if b.String() == "OPTIONAL" {
			return true
		}
	}

	return false
}

func isFieldBehaviorRequired(field protoreflect.FieldDescriptor) bool {
	behaviors := getFieldBehaviors(field)
	if len(behaviors) == 0 {
		return false
	}

	for _, b := range behaviors {
		if b.String() == "REQUIRED" {
			return true
		}
	}

	return false
}

func isFieldMessageKind(field protoreflect.FieldDescriptor) bool {
	return field.Kind() == protoreflect.MessageKind
}

func isFieldMessageKindOptional(field protoreflect.FieldDescriptor) bool {
	return isFieldMessageKind(field) && field.Cardinality() == protoreflect.Optional
}
