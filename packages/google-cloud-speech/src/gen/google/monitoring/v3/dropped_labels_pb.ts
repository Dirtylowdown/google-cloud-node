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
// @generated from file google/monitoring/v3/dropped_labels.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A set of (label, value) pairs that were removed from a Distribution
 * time series during aggregation and then added as an attachment to a
 * Distribution.Exemplar.
 *
 * The full label set for the exemplars is constructed by using the dropped
 * pairs in combination with the label values that remain on the aggregated
 * Distribution time series. The constructed full label set can be used to
 * identify the specific entity, such as the instance or job, which might be
 * contributing to a long-tail. However, with dropped labels, the storage
 * requirements are reduced because only the aggregated distribution values for
 * a large group of time series are stored.
 *
 * Note that there are no guarantees on ordering of the labels from
 * exemplar-to-exemplar and from distribution-to-distribution in the same
 * stream, and there may be duplicates.  It is up to clients to resolve any
 * ambiguities.
 *
 * @generated from message google.monitoring.v3.DroppedLabels
 */
export class DroppedLabels extends Message<DroppedLabels> {
  /**
   * Map from label to its value, for all labels dropped in any aggregation.
   *
   * @generated from field: map<string, string> label = 1;
   */
  label: { [key: string]: string } = {};

  constructor(data?: PartialMessage<DroppedLabels>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.DroppedLabels";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DroppedLabels {
    return new DroppedLabels().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DroppedLabels {
    return new DroppedLabels().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DroppedLabels {
    return new DroppedLabels().fromJsonString(jsonString, options);
  }

  static equals(a: DroppedLabels | PlainMessage<DroppedLabels> | undefined, b: DroppedLabels | PlainMessage<DroppedLabels> | undefined): boolean {
    return proto3.util.equals(DroppedLabels, a, b);
  }
}

