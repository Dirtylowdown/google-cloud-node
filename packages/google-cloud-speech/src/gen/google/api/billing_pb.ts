// Copyright 2015 Google LLC
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
// @generated from file google/api/billing.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Billing related configuration of the service.
 *
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 *
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 *
 * @generated from message google.api.Billing
 */
export class Billing extends Message<Billing> {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   *
   * @generated from field: repeated google.api.Billing.BillingDestination consumer_destinations = 8;
   */
  consumerDestinations: Billing_BillingDestination[] = [];

  constructor(data?: PartialMessage<Billing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Billing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 8, name: "consumer_destinations", kind: "message", T: Billing_BillingDestination, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Billing {
    return new Billing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Billing {
    return new Billing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Billing {
    return new Billing().fromJsonString(jsonString, options);
  }

  static equals(a: Billing | PlainMessage<Billing> | undefined, b: Billing | PlainMessage<Billing> | undefined): boolean {
    return proto3.util.equals(Billing, a, b);
  }
}

/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 *
 * @generated from message google.api.Billing.BillingDestination
 */
export class Billing_BillingDestination extends Message<Billing_BillingDestination> {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   *
   * @generated from field: string monitored_resource = 1;
   */
  monitoredResource = "";

  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   *
   * @generated from field: repeated string metrics = 2;
   */
  metrics: string[] = [];

  constructor(data?: PartialMessage<Billing_BillingDestination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Billing.BillingDestination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "monitored_resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metrics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Billing_BillingDestination {
    return new Billing_BillingDestination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Billing_BillingDestination {
    return new Billing_BillingDestination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Billing_BillingDestination {
    return new Billing_BillingDestination().fromJsonString(jsonString, options);
  }

  static equals(a: Billing_BillingDestination | PlainMessage<Billing_BillingDestination> | undefined, b: Billing_BillingDestination | PlainMessage<Billing_BillingDestination> | undefined): boolean {
    return proto3.util.equals(Billing_BillingDestination, a, b);
  }
}

