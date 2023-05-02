// Copyright 2020 Google LLC
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
// @generated from file google/cloud/location/locations.proto (package google.cloud.location, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * The request message for [Locations.ListLocations][google.cloud.location.Locations.ListLocations].
 *
 * @generated from message google.cloud.location.ListLocationsRequest
 */
export class ListLocationsRequest extends Message<ListLocationsRequest> {
  /**
   * The resource that owns the locations collection, if applicable.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The standard list filter.
   *
   * @generated from field: string filter = 2;
   */
  filter = "";

  /**
   * The standard list page size.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  /**
   * The standard list page token.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListLocationsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.location.ListLocationsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLocationsRequest {
    return new ListLocationsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLocationsRequest {
    return new ListLocationsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLocationsRequest {
    return new ListLocationsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListLocationsRequest | PlainMessage<ListLocationsRequest> | undefined, b: ListLocationsRequest | PlainMessage<ListLocationsRequest> | undefined): boolean {
    return proto3.util.equals(ListLocationsRequest, a, b);
  }
}

/**
 * The response message for [Locations.ListLocations][google.cloud.location.Locations.ListLocations].
 *
 * @generated from message google.cloud.location.ListLocationsResponse
 */
export class ListLocationsResponse extends Message<ListLocationsResponse> {
  /**
   * A list of locations that matches the specified filter in the request.
   *
   * @generated from field: repeated google.cloud.location.Location locations = 1;
   */
  locations: Location[] = [];

  /**
   * The standard List next-page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListLocationsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.location.ListLocationsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "locations", kind: "message", T: Location, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLocationsResponse {
    return new ListLocationsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLocationsResponse {
    return new ListLocationsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLocationsResponse {
    return new ListLocationsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListLocationsResponse | PlainMessage<ListLocationsResponse> | undefined, b: ListLocationsResponse | PlainMessage<ListLocationsResponse> | undefined): boolean {
    return proto3.util.equals(ListLocationsResponse, a, b);
  }
}

/**
 * The request message for [Locations.GetLocation][google.cloud.location.Locations.GetLocation].
 *
 * @generated from message google.cloud.location.GetLocationRequest
 */
export class GetLocationRequest extends Message<GetLocationRequest> {
  /**
   * Resource name for the location.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetLocationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.location.GetLocationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLocationRequest {
    return new GetLocationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLocationRequest {
    return new GetLocationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLocationRequest {
    return new GetLocationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLocationRequest | PlainMessage<GetLocationRequest> | undefined, b: GetLocationRequest | PlainMessage<GetLocationRequest> | undefined): boolean {
    return proto3.util.equals(GetLocationRequest, a, b);
  }
}

/**
 * A resource that represents Google Cloud Platform location.
 *
 * @generated from message google.cloud.location.Location
 */
export class Location extends Message<Location> {
  /**
   * Resource name for the location, which may vary between implementations.
   * For example: `"projects/example-project/locations/us-east1"`
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The canonical id for this location. For example: `"us-east1"`.
   *
   * @generated from field: string location_id = 4;
   */
  locationId = "";

  /**
   * The friendly name for this location, typically a nearby city name.
   * For example, "Tokyo".
   *
   * @generated from field: string display_name = 5;
   */
  displayName = "";

  /**
   * Cross-service attributes for the location. For example
   *
   *     {"cloud.googleapis.com/region": "us-east1"}
   *
   * @generated from field: map<string, string> labels = 2;
   */
  labels: { [key: string]: string } = {};

  /**
   * Service-specific metadata. For example the available capacity at the given
   * location.
   *
   * @generated from field: google.protobuf.Any metadata = 3;
   */
  metadata?: Any;

  constructor(data?: PartialMessage<Location>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.location.Location";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "location_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "metadata", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Location {
    return new Location().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Location {
    return new Location().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Location {
    return new Location().fromJsonString(jsonString, options);
  }

  static equals(a: Location | PlainMessage<Location> | undefined, b: Location | PlainMessage<Location> | undefined): boolean {
    return proto3.util.equals(Location, a, b);
  }
}

