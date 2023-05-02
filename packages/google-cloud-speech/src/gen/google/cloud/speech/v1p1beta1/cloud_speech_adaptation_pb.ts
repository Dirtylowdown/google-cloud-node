// Copyright 2022 Google LLC
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
// @generated from file google/cloud/speech/v1p1beta1/cloud_speech_adaptation.proto (package google.cloud.speech.v1p1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { CustomClass, PhraseSet } from "./resource_pb.js";

/**
 * Message sent by the client for the `CreatePhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.CreatePhraseSetRequest
 */
export class CreatePhraseSetRequest extends Message<CreatePhraseSetRequest> {
  /**
   * Required. The parent resource where this phrase set will be created.
   * Format:
   *
   * `projects/{project}/locations/{location}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Required. The ID to use for the phrase set, which will become the final
   * component of the phrase set's resource name.
   *
   * This value should restrict to letters, numbers, and hyphens, with the first
   * character a letter, the last a letter or a number, and be 4-63 characters.
   *
   * @generated from field: string phrase_set_id = 2;
   */
  phraseSetId = "";

  /**
   * Required. The phrase set to create.
   *
   * @generated from field: google.cloud.speech.v1p1beta1.PhraseSet phrase_set = 3;
   */
  phraseSet?: PhraseSet;

  constructor(data?: PartialMessage<CreatePhraseSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.CreatePhraseSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phrase_set_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "phrase_set", kind: "message", T: PhraseSet },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePhraseSetRequest {
    return new CreatePhraseSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePhraseSetRequest {
    return new CreatePhraseSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePhraseSetRequest {
    return new CreatePhraseSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePhraseSetRequest | PlainMessage<CreatePhraseSetRequest> | undefined, b: CreatePhraseSetRequest | PlainMessage<CreatePhraseSetRequest> | undefined): boolean {
    return proto3.util.equals(CreatePhraseSetRequest, a, b);
  }
}

/**
 * Message sent by the client for the `UpdatePhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.UpdatePhraseSetRequest
 */
export class UpdatePhraseSetRequest extends Message<UpdatePhraseSetRequest> {
  /**
   * Required. The phrase set to update.
   *
   * The phrase set's `name` field is used to identify the set to be
   * updated. Format:
   *
   * `projects/{project}/locations/{location}/phraseSets/{phrase_set}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: google.cloud.speech.v1p1beta1.PhraseSet phrase_set = 1;
   */
  phraseSet?: PhraseSet;

  /**
   * The list of fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdatePhraseSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.UpdatePhraseSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phrase_set", kind: "message", T: PhraseSet },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePhraseSetRequest {
    return new UpdatePhraseSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePhraseSetRequest {
    return new UpdatePhraseSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePhraseSetRequest {
    return new UpdatePhraseSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdatePhraseSetRequest | PlainMessage<UpdatePhraseSetRequest> | undefined, b: UpdatePhraseSetRequest | PlainMessage<UpdatePhraseSetRequest> | undefined): boolean {
    return proto3.util.equals(UpdatePhraseSetRequest, a, b);
  }
}

/**
 * Message sent by the client for the `GetPhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.GetPhraseSetRequest
 */
export class GetPhraseSetRequest extends Message<GetPhraseSetRequest> {
  /**
   * Required. The name of the phrase set to retrieve. Format:
   *
   * `projects/{project}/locations/{location}/phraseSets/{phrase_set}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetPhraseSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.GetPhraseSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPhraseSetRequest {
    return new GetPhraseSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPhraseSetRequest {
    return new GetPhraseSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPhraseSetRequest {
    return new GetPhraseSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPhraseSetRequest | PlainMessage<GetPhraseSetRequest> | undefined, b: GetPhraseSetRequest | PlainMessage<GetPhraseSetRequest> | undefined): boolean {
    return proto3.util.equals(GetPhraseSetRequest, a, b);
  }
}

/**
 * Message sent by the client for the `ListPhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.ListPhraseSetRequest
 */
export class ListPhraseSetRequest extends Message<ListPhraseSetRequest> {
  /**
   * Required. The parent, which owns this collection of phrase set. Format:
   *
   * `projects/{project}/locations/{location}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The maximum number of phrase sets to return. The service may return
   * fewer than this value. If unspecified, at most 50 phrase sets will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * A page token, received from a previous `ListPhraseSet` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListPhraseSet` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListPhraseSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.ListPhraseSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPhraseSetRequest {
    return new ListPhraseSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPhraseSetRequest {
    return new ListPhraseSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPhraseSetRequest {
    return new ListPhraseSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListPhraseSetRequest | PlainMessage<ListPhraseSetRequest> | undefined, b: ListPhraseSetRequest | PlainMessage<ListPhraseSetRequest> | undefined): boolean {
    return proto3.util.equals(ListPhraseSetRequest, a, b);
  }
}

/**
 * Message returned to the client by the `ListPhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.ListPhraseSetResponse
 */
export class ListPhraseSetResponse extends Message<ListPhraseSetResponse> {
  /**
   * The phrase set.
   *
   * @generated from field: repeated google.cloud.speech.v1p1beta1.PhraseSet phrase_sets = 1;
   */
  phraseSets: PhraseSet[] = [];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListPhraseSetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.ListPhraseSetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phrase_sets", kind: "message", T: PhraseSet, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPhraseSetResponse {
    return new ListPhraseSetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPhraseSetResponse {
    return new ListPhraseSetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPhraseSetResponse {
    return new ListPhraseSetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListPhraseSetResponse | PlainMessage<ListPhraseSetResponse> | undefined, b: ListPhraseSetResponse | PlainMessage<ListPhraseSetResponse> | undefined): boolean {
    return proto3.util.equals(ListPhraseSetResponse, a, b);
  }
}

/**
 * Message sent by the client for the `DeletePhraseSet` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.DeletePhraseSetRequest
 */
export class DeletePhraseSetRequest extends Message<DeletePhraseSetRequest> {
  /**
   * Required. The name of the phrase set to delete. Format:
   *
   * `projects/{project}/locations/{location}/phraseSets/{phrase_set}`
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeletePhraseSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.DeletePhraseSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePhraseSetRequest {
    return new DeletePhraseSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePhraseSetRequest {
    return new DeletePhraseSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePhraseSetRequest {
    return new DeletePhraseSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeletePhraseSetRequest | PlainMessage<DeletePhraseSetRequest> | undefined, b: DeletePhraseSetRequest | PlainMessage<DeletePhraseSetRequest> | undefined): boolean {
    return proto3.util.equals(DeletePhraseSetRequest, a, b);
  }
}

/**
 * Message sent by the client for the `CreateCustomClass` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.CreateCustomClassRequest
 */
export class CreateCustomClassRequest extends Message<CreateCustomClassRequest> {
  /**
   * Required. The parent resource where this custom class will be created.
   * Format:
   *
   * `projects/{project}/locations/{location}/customClasses`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Required. The ID to use for the custom class, which will become the final
   * component of the custom class' resource name.
   *
   * This value should restrict to letters, numbers, and hyphens, with the first
   * character a letter, the last a letter or a number, and be 4-63 characters.
   *
   * @generated from field: string custom_class_id = 2;
   */
  customClassId = "";

  /**
   * Required. The custom class to create.
   *
   * @generated from field: google.cloud.speech.v1p1beta1.CustomClass custom_class = 3;
   */
  customClass?: CustomClass;

  constructor(data?: PartialMessage<CreateCustomClassRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.CreateCustomClassRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "custom_class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "custom_class", kind: "message", T: CustomClass },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCustomClassRequest {
    return new CreateCustomClassRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCustomClassRequest {
    return new CreateCustomClassRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCustomClassRequest {
    return new CreateCustomClassRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCustomClassRequest | PlainMessage<CreateCustomClassRequest> | undefined, b: CreateCustomClassRequest | PlainMessage<CreateCustomClassRequest> | undefined): boolean {
    return proto3.util.equals(CreateCustomClassRequest, a, b);
  }
}

/**
 * Message sent by the client for the `UpdateCustomClass` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.UpdateCustomClassRequest
 */
export class UpdateCustomClassRequest extends Message<UpdateCustomClassRequest> {
  /**
   * Required. The custom class to update.
   *
   * The custom class's `name` field is used to identify the custom class to be
   * updated. Format:
   *
   * `projects/{project}/locations/{location}/customClasses/{custom_class}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: google.cloud.speech.v1p1beta1.CustomClass custom_class = 1;
   */
  customClass?: CustomClass;

  /**
   * The list of fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateCustomClassRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.UpdateCustomClassRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "custom_class", kind: "message", T: CustomClass },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCustomClassRequest {
    return new UpdateCustomClassRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCustomClassRequest {
    return new UpdateCustomClassRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCustomClassRequest {
    return new UpdateCustomClassRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateCustomClassRequest | PlainMessage<UpdateCustomClassRequest> | undefined, b: UpdateCustomClassRequest | PlainMessage<UpdateCustomClassRequest> | undefined): boolean {
    return proto3.util.equals(UpdateCustomClassRequest, a, b);
  }
}

/**
 * Message sent by the client for the `GetCustomClass` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.GetCustomClassRequest
 */
export class GetCustomClassRequest extends Message<GetCustomClassRequest> {
  /**
   * Required. The name of the custom class to retrieve. Format:
   *
   * `projects/{project}/locations/{location}/customClasses/{custom_class}`
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetCustomClassRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.GetCustomClassRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomClassRequest {
    return new GetCustomClassRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomClassRequest {
    return new GetCustomClassRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomClassRequest {
    return new GetCustomClassRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCustomClassRequest | PlainMessage<GetCustomClassRequest> | undefined, b: GetCustomClassRequest | PlainMessage<GetCustomClassRequest> | undefined): boolean {
    return proto3.util.equals(GetCustomClassRequest, a, b);
  }
}

/**
 * Message sent by the client for the `ListCustomClasses` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.ListCustomClassesRequest
 */
export class ListCustomClassesRequest extends Message<ListCustomClassesRequest> {
  /**
   * Required. The parent, which owns this collection of custom classes. Format:
   *
   * `projects/{project}/locations/{location}/customClasses`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The maximum number of custom classes to return. The service may return
   * fewer than this value. If unspecified, at most 50 custom classes will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * A page token, received from a previous `ListCustomClass` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCustomClass` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListCustomClassesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.ListCustomClassesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCustomClassesRequest {
    return new ListCustomClassesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCustomClassesRequest {
    return new ListCustomClassesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCustomClassesRequest {
    return new ListCustomClassesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListCustomClassesRequest | PlainMessage<ListCustomClassesRequest> | undefined, b: ListCustomClassesRequest | PlainMessage<ListCustomClassesRequest> | undefined): boolean {
    return proto3.util.equals(ListCustomClassesRequest, a, b);
  }
}

/**
 * Message returned to the client by the `ListCustomClasses` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.ListCustomClassesResponse
 */
export class ListCustomClassesResponse extends Message<ListCustomClassesResponse> {
  /**
   * The custom classes.
   *
   * @generated from field: repeated google.cloud.speech.v1p1beta1.CustomClass custom_classes = 1;
   */
  customClasses: CustomClass[] = [];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListCustomClassesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.ListCustomClassesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "custom_classes", kind: "message", T: CustomClass, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCustomClassesResponse {
    return new ListCustomClassesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCustomClassesResponse {
    return new ListCustomClassesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCustomClassesResponse {
    return new ListCustomClassesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListCustomClassesResponse | PlainMessage<ListCustomClassesResponse> | undefined, b: ListCustomClassesResponse | PlainMessage<ListCustomClassesResponse> | undefined): boolean {
    return proto3.util.equals(ListCustomClassesResponse, a, b);
  }
}

/**
 * Message sent by the client for the `DeleteCustomClass` method.
 *
 * @generated from message google.cloud.speech.v1p1beta1.DeleteCustomClassRequest
 */
export class DeleteCustomClassRequest extends Message<DeleteCustomClassRequest> {
  /**
   * Required. The name of the custom class to delete. Format:
   *
   * `projects/{project}/locations/{location}/customClasses/{custom_class}`
   *
   * Speech-to-Text supports three locations: `global`, `us` (US North America),
   * and `eu` (Europe). If you are calling the `speech.googleapis.com`
   * endpoint, use the `global` location. To specify a region, use a
   * [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints)
   * with matching `us` or `eu` location value.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteCustomClassRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.speech.v1p1beta1.DeleteCustomClassRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCustomClassRequest {
    return new DeleteCustomClassRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCustomClassRequest {
    return new DeleteCustomClassRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCustomClassRequest {
    return new DeleteCustomClassRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteCustomClassRequest | PlainMessage<DeleteCustomClassRequest> | undefined, b: DeleteCustomClassRequest | PlainMessage<DeleteCustomClassRequest> | undefined): boolean {
    return proto3.util.equals(DeleteCustomClassRequest, a, b);
  }
}

