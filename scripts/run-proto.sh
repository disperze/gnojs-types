#!/bin/bash

PROTO_PATH=./proto
OUT_DIR=./src/proto

FILES=`find proto/gnoland -type f -name "*.proto"`

mkdir -p ${OUT_DIR}

for x in ${FILES}
do
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="${OUT_DIR}" \
    --proto_path="${PROTO_PATH}" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
    ${x}
done
