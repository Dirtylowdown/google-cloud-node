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
// @generated from file google/type/money.proto (package google.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Represents an amount of money with its currency type.
 *
 * @generated from message google.type.Money
 */
export class Money extends Message<Money> {
  /**
   * The three-letter currency code defined in ISO 4217.
   *
   * @generated from field: string currency_code = 1;
   */
  currencyCode = "";

  /**
   * The whole units of the amount.
   * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
   *
   * @generated from field: int64 units = 2;
   */
  units = protoInt64.zero;

  /**
   * Number of nano (10^-9) units of the amount.
   * The value must be between -999,999,999 and +999,999,999 inclusive.
   * If `units` is positive, `nanos` must be positive or zero.
   * If `units` is zero, `nanos` can be positive, zero, or negative.
   * If `units` is negative, `nanos` must be negative or zero.
   * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   *
   * @generated from field: int32 nanos = 3;
   */
  nanos = 0;

  constructor(data?: PartialMessage<Money>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.type.Money";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "currency_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "units", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "nanos", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Money {
    return new Money().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Money {
    return new Money().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Money {
    return new Money().fromJsonString(jsonString, options);
  }

  static equals(a: Money | PlainMessage<Money> | undefined, b: Money | PlainMessage<Money> | undefined): boolean {
    return proto3.util.equals(Money, a, b);
  }
}

