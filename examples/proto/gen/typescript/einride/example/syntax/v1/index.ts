// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

/**
 * Enum
 */
export enum Enum {
  /**
   * ENUM_UNSPECIFIED
   */
  EnumUnspecified = 0,
  /**
   * ENUM_ONE
   */
  EnumOne = 1,
  /**
   * ENUM_TWO
   */
  EnumTwo = 2,
}
/**
 * Message
 */
export type Message = {
  /**
   * double
   */
  double: number;
  /**
   * float
   */
  float: number;
  /**
   * int32
   */
  int32: number;
  /**
   * int64
   */
  int64: string;
  /**
   * uint32
   */
  uint32: number;
  /**
   * uint64
   */
  uint64: string;
  /**
   * sint32
   */
  sint32: number;
  /**
   * sint64
   */
  sint64: string;
  /**
   * fixed32
   */
  fixed32: number;
  /**
   * fixed64
   */
  fixed64: string;
  /**
   * sfixed32
   */
  sfixed32: number;
  /**
   * sfixed64
   */
  sfixed64: string;
  /**
   * bool
   */
  bool: boolean;
  /**
   * string
   */
  string: string;
  /**
   * bytes
   */
  bytes: string;
  /**
   * enum
   */
  enum: Enum;
  /**
   * message
   */
  message: Message | undefined;
  /**
   * optional double
   */
  optionalDouble?: number;
  /**
   * optional float
   */
  optionalFloat?: number;
  /**
   * optional int32
   */
  optionalInt32?: number;
  /**
   * optional int64
   */
  optionalInt64?: string;
  /**
   * optional uint32
   */
  optionalUint32?: number;
  /**
   * optional uint64
   */
  optionalUint64?: string;
  /**
   * optional sint32
   */
  optionalSint32?: number;
  /**
   * optional sint64
   */
  optionalSint64?: string;
  /**
   * optional fixed32
   */
  optionalFixed32?: number;
  /**
   * optional fixed64
   */
  optionalFixed64?: string;
  /**
   * optional sfixed32
   */
  optionalSfixed32?: number;
  /**
   * optional sfixed64
   */
  optionalSfixed64?: string;
  /**
   * optional bool
   */
  optionalBool?: boolean;
  /**
   * optional string
   */
  optionalString?: string;
  /**
   * optional bytes
   */
  optionalBytes?: string;
  /**
   * optional enum
   */
  optionalEnum?: Enum;
  /**
   * optional message
   */
  optionalMessage?: Message;
  /**
   * repeated_double
   */
  repeatedDouble: number[];
  /**
   * repeated_float
   */
  repeatedFloat: number[];
  /**
   * repeated_int32
   */
  repeatedInt32: number[];
  /**
   * repeated_int64
   */
  repeatedInt64: string[];
  /**
   * repeated_uint32
   */
  repeatedUint32: number[];
  /**
   * repeated_uint64
   */
  repeatedUint64: string[];
  /**
   * repeated_sint32
   */
  repeatedSint32: number[];
  /**
   * repeated_sint64
   */
  repeatedSint64: string[];
  /**
   * repeated_fixed32
   */
  repeatedFixed32: number[];
  /**
   * repeated_fixed64
   */
  repeatedFixed64: string[];
  /**
   * repeated_sfixed32
   */
  repeatedSfixed32: number[];
  /**
   * repeated_sfixed64
   */
  repeatedSfixed64: string[];
  /**
   * repeated_bool
   */
  repeatedBool: boolean[];
  /**
   * repeated_string
   */
  repeatedString: string[];
  /**
   * repeated_bytes
   */
  repeatedBytes: string[];
  /**
   * repeated_enum
   */
  repeatedEnum: Enum[];
  /**
   * repeated_message
   */
  repeatedMessage: Message[];
  /**
   * map_string_string
   */
  mapStringString: { [key: string]: string };
  /**
   * map_string_message
   */
  mapStringMessage: { [key: string]: Message };
  /**
   * oneof_string
   */
  oneofString?: string;
  /**
   * oneof_enum
   */
  oneofEnum?: Enum;
  /**
   * oneof_message1
   */
  oneofMessage1?: Message;
  /**
   * oneof_message2
   */
  oneofMessage2?: Message;
  /**
   * any
   */
  any: wellKnownAny | undefined;
  /**
   * repeated_any
   */
  repeatedAny: wellKnownAny[] | undefined;
  /**
   * duration
   */
  duration: wellKnownDuration | undefined;
  /**
   * repeated_duration
   */
  repeatedDuration: wellKnownDuration[] | undefined;
  /**
   * empty
   */
  empty: wellKnownEmpty | undefined;
  /**
   * repeated_empty
   */
  repeatedEmpty: wellKnownEmpty[] | undefined;
  /**
   * field_mask
   */
  fieldMask: wellKnownFieldMask | undefined;
  /**
   * repeated_field_mask
   */
  repeatedFieldMask: wellKnownFieldMask[] | undefined;
  /**
   * struct
   */
  struct: wellKnownStruct | undefined;
  /**
   * repeated_struct
   */
  repeatedStruct: wellKnownStruct[] | undefined;
  /**
   * value
   */
  value: wellKnownValue | undefined;
  /**
   * repeated_value
   */
  repeatedValue: wellKnownValue[] | undefined;
  /**
   * null_value
   */
  nullValue: wellKnownNullValue;
  /**
   * repeated_null_value
   */
  repeatedNullValue: wellKnownNullValue[];
  /**
   * list_value
   */
  listValue: wellKnownListValue | undefined;
  /**
   * repeated_list_value
   */
  repeatedListValue: wellKnownListValue[] | undefined;
  /**
   * bool_value
   */
  boolValue: wellKnownBoolValue | undefined;
  /**
   * repeated_bool_value
   */
  repeatedBoolValue: wellKnownBoolValue[] | undefined;
  /**
   * bytes_value
   */
  bytesValue: wellKnownBytesValue | undefined;
  /**
   * repeated_bytes_value
   */
  repeatedBytesValue: wellKnownBytesValue[] | undefined;
  /**
   * double_value
   */
  doubleValue: wellKnownDoubleValue | undefined;
  /**
   * repeated_double_value
   */
  repeatedDoubleValue: wellKnownDoubleValue[] | undefined;
  /**
   * float_value
   */
  floatValue: wellKnownFloatValue | undefined;
  /**
   * repeated_float_value
   */
  repeatedFloatValue: wellKnownFloatValue[] | undefined;
  /**
   * int32_value
   */
  int32Value: wellKnownInt32Value | undefined;
  /**
   * repeated_int32_value
   */
  repeatedInt32Value: wellKnownInt32Value[] | undefined;
  /**
   * int64_value
   */
  int64Value: wellKnownInt64Value | undefined;
  /**
   * repeated_int64_value
   */
  repeatedInt64Value: wellKnownInt64Value[] | undefined;
  /**
   * uint32_value
   */
  uint32Value: wellKnownUInt32Value | undefined;
  /**
   * repeated_uint32_value
   */
  repeatedUint32Value: wellKnownUInt32Value[] | undefined;
  /**
   * uint64_value
   */
  uint64Value: wellKnownUInt64Value | undefined;
  /**
   * repeated_uint64_value
   */
  repeatedUint64Value: wellKnownUInt64Value[] | undefined;
  /**
   * string_value
   */
  stringValue: wellKnownUInt64Value | undefined;
  /**
   * repeated_string_value
   */
  repeatedStringValue: wellKnownStringValue[] | undefined;
};

// If the Any contains a value that has a special JSON mapping,
// it will be converted as follows:
// {"@type": xxx, "value": yyy}.
// Otherwise, the value will be converted into a JSON object,
// and the "@type" field will be inserted to indicate the actual data type.
interface wellKnownAny {
  "@type": string;
  [key: string]: unknown;
}

// Generated output always contains 0, 3, 6, or 9 fractional digits,
// depending on required precision, followed by the suffix "s".
// Accepted are any fractional digits (also none) as long as they fit
// into nano-seconds precision and the suffix "s" is required.
type wellKnownDuration = string;

// An empty JSON object
type wellKnownEmpty = Record<never, never>;

// In JSON, a field mask is encoded as a single string where paths are
// separated by a comma. Fields name in each path are converted
// to/from lower-camel naming conventions.
// As an example, consider the following message declarations:
//
//     message Profile {
//       User user = 1;
//       Photo photo = 2;
//     }
//     message User {
//       string display_name = 1;
//       string address = 2;
//     }
//
// In proto a field mask for `Profile` may look as such:
//
//     mask {
//       paths: "user.display_name"
//       paths: "photo"
//     }
//
// In JSON, the same mask is represented as below:
//
//     {
//       mask: "user.displayName,photo"
//     }
type wellKnownFieldMask = string;

// Any JSON value.
type wellKnownStruct = Record<string, unknown>;

type wellKnownValue = unknown;

type wellKnownNullValue = null;

type wellKnownListValue = wellKnownValue[];

type wellKnownBoolValue = boolean | null;

type wellKnownBytesValue = string | null;

type wellKnownDoubleValue = number | null;

type wellKnownFloatValue = number | null;

type wellKnownInt32Value = number | null;

type wellKnownInt64Value = string | null;

type wellKnownUInt32Value = number | null;

type wellKnownUInt64Value = string | null;

type wellKnownStringValue = string | null;

/**
 * NestedMessage
 */
export type Message_NestedMessage = {
  /**
   * nested_message.string
   */
  string: string;
};

/**
 * NestedEnum
 */
export enum Message_NestedEnum {
  /**
   * NESTEDENUM_UNSPECIFIED
   */
  NestedenumUnspecified = 0,
}
export type Request = {
  string: string;
  repeatedString: string[];
  nested: Request_Nested | undefined;
};

export type Request_Nested = {
  string: string;
};

/** The URIs for SyntaxService */
export interface SyntaxServiceURIs<T = unknown> {
  /** Get the URI of `QueryOnly` method */
  getQueryOnlyURI(request: Request, options?: T): string;
  /** Get the URI of `EmptyVerb` method */
  getEmptyVerbURI(request: wellKnownEmpty, options?: T): string;
  /** Get the URI of `StarBody` method */
  getStarBodyURI(request: Request, options?: T): string;
  /** Get the URI of `Body` method */
  getBodyURI(request: Request, options?: T): string;
  /** Get the URI of `Path` method */
  getPathURI(request: Request, options?: T): string;
  /** Get the URI of `PathBody` method */
  getPathBodyURI(request: Request, options?: T): string;
}

export interface SyntaxService<T = unknown> {
  uris: SyntaxServiceURIs<T>;
  queryOnly(request: Request, options?: T): Promise<Message>;
  emptyVerb(request: wellKnownEmpty, options?: T): Promise<wellKnownEmpty>;
  starBody(request: Request, options?: T): Promise<Message>;
  body(request: Request, options?: T): Promise<Message>;
  path(request: Request, options?: T): Promise<Message>;
  pathBody(request: Request, options?: T): Promise<Message>;
}

export function getSyntaxServiceURIs<T = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handlerOptions: {
    mapStringify?: (map: Record<string, unknown>) => string;
  } = {},
): SyntaxServiceURIs<T> {
  return {
    getQueryOnlyURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.string) {
        queryParams.push(`string=${encodeURIComponent(request.string.toString())}`);
      }
      if (request.repeatedString) {
        request.repeatedString.forEach((x) => {
          queryParams.push(`repeatedString=${encodeURIComponent(x.toString())}`);
        })
      }
      if (request.nested?.string) {
        queryParams.push(`nested.string=${encodeURIComponent(request.nested.string.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getEmptyVerbURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1:emptyVerb`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getStarBodyURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1:starBody`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getBodyURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `v1:body`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.string) {
        queryParams.push(`string=${encodeURIComponent(request.string.toString())}`);
      }
      if (request.repeatedString) {
        request.repeatedString.forEach((x) => {
          queryParams.push(`repeatedString=${encodeURIComponent(x.toString())}`);
        })
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getPathURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.string) {
        throw new Error("missing required field request.string");
      }
      const path = `v1/${request.string}:path`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.repeatedString) {
        request.repeatedString.forEach((x) => {
          queryParams.push(`repeatedString=${encodeURIComponent(x.toString())}`);
        })
      }
      if (request.nested?.string) {
        queryParams.push(`nested.string=${encodeURIComponent(request.nested.string.toString())}`);
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
    getPathBodyURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.string) {
        throw new Error("missing required field request.string");
      }
      const path = `v1/${request.string}:pathBody`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      if (request.repeatedString) {
        request.repeatedString.forEach((x) => {
          queryParams.push(`repeatedString=${encodeURIComponent(x.toString())}`);
        })
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
  };
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type RequestType<T = Record<string, any> | string | null> = {
  path: string;
  method: string;
  body: T;
};

type RequestHandler<T = unknown> = (
  request: RequestType & T,
  meta: { service: string, method: string },
) => Promise<unknown>;

export function createSyntaxServiceClient<T = unknown>(
  handler: RequestHandler<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handlerOptions: {
    mapStringify?: (map: Record<string, unknown>) => string;
  } = {},
): SyntaxService<T> {
  const uris = getSyntaxServiceURIs<T>(handlerOptions);
  return {
    uris,
    queryOnly(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getQueryOnlyURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "QueryOnly",
      }) as Promise<Message>;
    },
    emptyVerb(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getEmptyVerbURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "EmptyVerb",
      }) as Promise<wellKnownEmpty>;
    },
    starBody(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getStarBodyURI(request, options);
      const body = request;
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "StarBody",
      }) as Promise<Message>;
    },
    body(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getBodyURI(request, options);
      const body = request?.nested ?? {};
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "Body",
      }) as Promise<Message>;
    },
    path(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getPathURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "Path",
      }) as Promise<Message>;
    },
    pathBody(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getPathBodyURI(request, options);
      const body = request?.nested ?? {};
      return handler({
        path: uri,
        method: "POST",
        body,
        ...(options as T),
      }, {
        service: "SyntaxService",
        method: "PathBody",
      }) as Promise<Message>;
    },
  };
}

// @@protoc_insertion_point(typescript-http-eof)
