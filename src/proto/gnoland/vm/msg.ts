/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MemPackage } from "../../gnoland/vm/types";

export const protobufPackage = "gnoland.vm";

/** vm.m_addpkg */
export interface MsgAddPackage {
  creator: string;
  package?: MemPackage;
  deposit: string;
}

/** vm.m_call */
export interface MsgCall {
  caller: string;
  send: string;
  pkgPath: string;
  func: string;
  args: string[];
}

function createBaseMsgAddPackage(): MsgAddPackage {
  return { creator: "", package: undefined, deposit: "" };
}

export const MsgAddPackage = {
  encode(
    message: MsgAddPackage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.package !== undefined) {
      MemPackage.encode(message.package, writer.uint32(18).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(26).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.package = MemPackage.decode(reader, reader.uint32());
          break;
        case 3:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPackage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      package: isSet(object.package)
        ? MemPackage.fromJSON(object.package)
        : undefined,
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
    };
  },

  toJSON(message: MsgAddPackage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.package !== undefined &&
      (obj.package = message.package
        ? MemPackage.toJSON(message.package)
        : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPackage>, I>>(
    object: I
  ): MsgAddPackage {
    const message = createBaseMsgAddPackage();
    message.creator = object.creator ?? "";
    message.package =
      object.package !== undefined && object.package !== null
        ? MemPackage.fromPartial(object.package)
        : undefined;
    message.deposit = object.deposit ?? "";
    return message;
  },
};

function createBaseMsgCall(): MsgCall {
  return { caller: "", send: "", pkgPath: "", func: "", args: [] };
}

export const MsgCall = {
  encode(
    message: MsgCall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.send !== "") {
      writer.uint32(18).string(message.send);
    }
    if (message.pkgPath !== "") {
      writer.uint32(26).string(message.pkgPath);
    }
    if (message.func !== "") {
      writer.uint32(34).string(message.func);
    }
    for (const v of message.args) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caller = reader.string();
          break;
        case 2:
          message.send = reader.string();
          break;
        case 3:
          message.pkgPath = reader.string();
          break;
        case 4:
          message.func = reader.string();
          break;
        case 5:
          message.args.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCall {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      send: isSet(object.send) ? String(object.send) : "",
      pkgPath: isSet(object.pkgPath) ? String(object.pkgPath) : "",
      func: isSet(object.func) ? String(object.func) : "",
      args: Array.isArray(object?.args)
        ? object.args.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgCall): unknown {
    const obj: any = {};
    message.caller !== undefined && (obj.caller = message.caller);
    message.send !== undefined && (obj.send = message.send);
    message.pkgPath !== undefined && (obj.pkgPath = message.pkgPath);
    message.func !== undefined && (obj.func = message.func);
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCall>, I>>(object: I): MsgCall {
    const message = createBaseMsgCall();
    message.caller = object.caller ?? "";
    message.send = object.send ?? "";
    message.pkgPath = object.pkgPath ?? "";
    message.func = object.func ?? "";
    message.args = object.args?.map((e) => e) || [];
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
