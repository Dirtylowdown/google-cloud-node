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
// @generated from file google/type/fraction.proto (package google.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Represents a fraction in terms of a numerator divided by a denominator.
 *
 * @generated from message google.type.Fraction
 */
export class Fraction extends Message<Fraction> {
  /**
   * The numerator in the fraction, e.g. 2 in 2/3.
   *
   * @generated from field: int64 numerator = 1;
   */
  numerator = protoInt64.zero;

  /**
   * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
   * positive.
   *
   * @generated from field: int64 denominator = 2;
   */
  denominator = protoInt64.zero;

  constructor(data?: PartialMessage<Fraction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.type.Fraction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "numerator", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "denominator", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fraction {
    return new Fraction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fraction {
    return new Fraction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fraction {
    return new Fraction().fromJsonString(jsonString, options);
  }

  static equals(a: Fraction | PlainMessage<Fraction> | undefined, b: Fraction | PlainMessage<Fraction> | undefined): boolean {
    return proto3.util.equals(Fraction, a, b);
  }
}

