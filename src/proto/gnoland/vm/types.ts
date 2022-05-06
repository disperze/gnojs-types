/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "gnoland.vm";

export interface MemPackage {
  name: string;
  path: string;
  files: MemFile[];
}

export interface MemFile {
  name: string;
  body: string;
}

function createBaseMemPackage(): MemPackage {
  return { name: "", path: "", files: [] };
}

export const MemPackage = {
  encode(
    message: MemPackage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    for (const v of message.files) {
      MemFile.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemPackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemPackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.files.push(MemFile.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemPackage {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => MemFile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MemPackage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? MemFile.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemPackage>, I>>(
    object: I
  ): MemPackage {
    const message = createBaseMemPackage();
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.files = object.files?.map((e) => MemFile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMemFile(): MemFile {
  return { name: "", body: "" };
}

export const MemFile = {
  encode(
    message: MemFile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemFile {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: MemFile): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemFile>, I>>(object: I): MemFile {
    const message = createBaseMemFile();
    message.name = object.name ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
