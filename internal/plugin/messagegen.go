package plugin

import (
	"strings"

	"github.com/moecasts/protoc-gen-typescript-http/internal/codegen"
	"google.golang.org/protobuf/reflect/protoreflect"
)

type messageGenerator struct {
	opts    Options
	pkg     protoreflect.FullName
	message protoreflect.MessageDescriptor
}

func (m messageGenerator) Generate(f *codegen.File) {
	commentGenerator{opts: m.opts, descriptor: m.message}.generateLeading(f, 0)
	f.P("export type ", scopedDescriptorTypeName(m.pkg, m.message), " = {")
	rangeFields(m.message, func(field protoreflect.FieldDescriptor) {
		commentGenerator{opts: m.opts, descriptor: field}.generateLeading(f, 1)
		fieldType := typeFromField(m.pkg, field)

		name := field.JSONName()
		if m.opts.UseProtoNames {
			name = field.TextName()
		}

		var types []string

		reference := fieldType.Reference()

		if m.opts.ForceLongAsString && IsTypeLong(field) {
			reference = strings.ReplaceAll(reference, "number", "string")
		}

		types = append(types, reference)

		fieldUndefinable := !(IsWellKnownType(field.Message()) || m.opts.ForceMessageFieldUndefinable) &&
			!isFieldBehaviorRequired(field) &&
			(field.ContainingOneof() == nil && !field.HasOptionalKeyword() && !isFieldBehaviorOptional(field)) &&
			isFieldMessageKindOptional(field)

		if IsWellKnownType(field.Message()) || m.opts.ForceMessageFieldUndefinable || fieldUndefinable {
			types = append(types, "undefined")
		}

		typesString := strings.Join(types, " | ")

		fieldRequired := isFieldBehaviorRequired(field) ||
			(field.ContainingOneof() == nil && !field.HasOptionalKeyword() && !isFieldBehaviorOptional(field))

		if fieldRequired {
			f.P(t(1), name, ": ", typesString, ";")
		} else {
			f.P(t(1), name, "?: ", typesString, ";")
		}
	})

	f.P("};")
	f.P()
}
