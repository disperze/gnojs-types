# Gnojs protobuf types

Typescript Protobuf Messages for Gnoland

## Install
```
npm i gnojs-types
```

## Usage

Example
```ts
import { MsgCall } from "gnojs-types/gnoland/vm/msg";

MsgCall.encode({
  caller: "g14vhcdsyf83ngsrrqc92kmw8q9xakqjm0v8448t",
  send: "",
  pkgPath: "gno.land/r/boards",
  func: "CreateReply",
  args: ["1", "1", "1", "Hello"],
})
```
