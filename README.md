# Gnojs protobuf types

Typescript Protobuf Messages for Gnoland

## Install
```
npm i gnojs-types
```

## Usage

Build a contract msg:
```ts
import { MsgCall } from "gnojs-types/gnoland/vm/msg";

const bytes = MsgCall.encode({
  caller: "g14vhcdsyf83ngsrrqc92kmw8q9xakqjm0v8448t",
  send: "",
  pkgPath: "gno.land/r/boards",
  func: "CreateReply",
  args: ["1", "1", "1", "Hello"],
}).finish();
```

Build a Tx:
```ts
import { MsgSend } from "gnojs-types/gnoland/bank/msg";
import { Tx, Signature, Fee } from "gnojs-types/gnoland/tx/tx";
import { PubKeySecp256k1 } from "gnojs-types/gnoland/tm/keys";

const txBytes = Tx.encode({
  messages: [
        {
          typeUrl: "/bank.MsgSend",
          value: MsgSend.encode({
            fromAddress: "g14vhcdsyf83ngsrrqc92kmw8q9xakqjm0v8448t",
            toAddress: "g1ehkfl7palwrh6w2hhr2yfrgrq8jetguc292ayw",
            amount: "100000ugnot",
          }).finish(),
        },
  ],
  fee: Fee.fromPartial({
    gasWanted: "60000",
    gasFee: "1ugnot",
  }),
  signatures: [
    Signature.fromPartial({
      pubKey: {
        typeUrl: "/tm.PubKeySecp256k1",
        value: PubKeySecp256k1.encode({
          key: Buffer.from("xxxxx=", "base64"),
        }).finish(),
      }),
      signature: Buffer.from("xxxxxxxx=", "base64"),
    },
  ],
  memo: "",
}).finish();
```
