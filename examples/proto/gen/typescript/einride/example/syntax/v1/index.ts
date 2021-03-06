export type Message = {
	double?: number;
	float?: number;
	int32?: number;
	int64?: number;
	uint32?: number;
	uint64?: number;
	sint32?: unknown;
	sint64?: unknown;
	fixed32?: number;
	fixed64?: number;
	sfixed32?: number;
	sfixed64?: number;
	bool?: boolean;
	string?: string;
	bytes?: string;
	enum?: unknown;
	message?: unknown;
	repeatedDouble?: number[];
	repeatedFloat?: number[];
	repeatedInt32?: number[];
	repeatedInt64?: number[];
	repeatedUint32?: number[];
	repeatedUint64?: number[];
	repeatedSint32?: unknown[];
	repeatedSint64?: unknown[];
	repeatedFixed32?: number[];
	repeatedFixed64?: number[];
	repeatedSfixed32?: number[];
	repeatedSfixed64?: number[];
	repeatedBool?: boolean[];
	repeatedString?: string[];
	repeatedBytes?: string[];
	repeatedEnum?: unknown[];
	repeatedMessage?: unknown[];
	mapStringString?: unknown[];
	mapStringMessage?: unknown[];
	oneofString?: string;
	oneofEnum?: unknown;
	oneofMessage1?: unknown;
	oneofMessage2?: unknown;
};

export type Message_NestedMessage = {
	string?: string;
};

