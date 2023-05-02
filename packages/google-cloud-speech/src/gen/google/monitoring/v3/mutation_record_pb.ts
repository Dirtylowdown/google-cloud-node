// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file google/monitoring/v3/mutation_record.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Describes a change made to a configuration.
 *
 * @generated from message google.monitoring.v3.MutationRecord
 */
export class MutationRecord extends Message<MutationRecord> {
  /**
   * When the change occurred.
   *
   * @generated from field: google.protobuf.Timestamp mutate_time = 1;
   */
  mutateTime?: Timestamp;

  /**
   * The email address of the user making the change.
   *
   * @generated from field: string mutated_by = 2;
   */
  mutatedBy = "";

  constructor(data?: PartialMessage<MutationRecord>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.MutationRecord";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "mutate_time", kind: "message", T: Timestamp },
    { no: 2, name: "mutated_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MutationRecord {
    return new MutationRecord().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MutationRecord {
    return new MutationRecord().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MutationRecord {
    return new MutationRecord().fromJsonString(jsonString, options);
  }

  static equals(a: MutationRecord | PlainMessage<MutationRecord> | undefined, b: MutationRecord | PlainMessage<MutationRecord> | undefined): boolean {
    return proto3.util.equals(MutationRecord, a, b);
  }
}

