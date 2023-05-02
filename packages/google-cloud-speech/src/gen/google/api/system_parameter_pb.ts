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
// @generated from file google/api/system_parameter.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ### System parameter configuration
 *
 * A system parameter is a special kind of parameter defined by the API
 * system, not by an individual API. It is typically mapped to an HTTP header
 * and/or a URL query parameter. This configuration specifies which methods
 * change the names of the system parameters.
 *
 * @generated from message google.api.SystemParameters
 */
export class SystemParameters extends Message<SystemParameters> {
  /**
   * Define system parameters.
   *
   * The parameters defined here will override the default parameters
   * implemented by the system. If this field is missing from the service
   * config, default system parameters will be used. Default system parameters
   * and names is implementation-dependent.
   *
   * Example: define api key for all methods
   *
   *     system_parameters
   *       rules:
   *         - selector: "*"
   *           parameters:
   *             - name: api_key
   *               url_query_parameter: api_key
   *
   *
   * Example: define 2 api key names for a specific method.
   *
   *     system_parameters
   *       rules:
   *         - selector: "/ListShelves"
   *           parameters:
   *             - name: api_key
   *               http_header: Api-Key1
   *             - name: api_key
   *               http_header: Api-Key2
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.SystemParameterRule rules = 1;
   */
  rules: SystemParameterRule[] = [];

  constructor(data?: PartialMessage<SystemParameters>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.SystemParameters";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rules", kind: "message", T: SystemParameterRule, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SystemParameters {
    return new SystemParameters().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SystemParameters {
    return new SystemParameters().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SystemParameters {
    return new SystemParameters().fromJsonString(jsonString, options);
  }

  static equals(a: SystemParameters | PlainMessage<SystemParameters> | undefined, b: SystemParameters | PlainMessage<SystemParameters> | undefined): boolean {
    return proto3.util.equals(SystemParameters, a, b);
  }
}

/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 *
 * @generated from message google.api.SystemParameterRule
 */
export class SystemParameterRule extends Message<SystemParameterRule> {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   *
   * @generated from field: string selector = 1;
   */
  selector = "";

  /**
   * Define parameters. Multiple names may be defined for a parameter.
   * For a given method call, only one of them should be used. If multiple
   * names are used the behavior is implementation-dependent.
   * If none of the specified names are present the behavior is
   * parameter-dependent.
   *
   * @generated from field: repeated google.api.SystemParameter parameters = 2;
   */
  parameters: SystemParameter[] = [];

  constructor(data?: PartialMessage<SystemParameterRule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.SystemParameterRule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parameters", kind: "message", T: SystemParameter, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SystemParameterRule {
    return new SystemParameterRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SystemParameterRule {
    return new SystemParameterRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SystemParameterRule {
    return new SystemParameterRule().fromJsonString(jsonString, options);
  }

  static equals(a: SystemParameterRule | PlainMessage<SystemParameterRule> | undefined, b: SystemParameterRule | PlainMessage<SystemParameterRule> | undefined): boolean {
    return proto3.util.equals(SystemParameterRule, a, b);
  }
}

/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 *
 * @generated from message google.api.SystemParameter
 */
export class SystemParameter extends Message<SystemParameter> {
  /**
   * Define the name of the parameter, such as "api_key" . It is case sensitive.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Define the HTTP header name to use for the parameter. It is case
   * insensitive.
   *
   * @generated from field: string http_header = 2;
   */
  httpHeader = "";

  /**
   * Define the URL query parameter name to use for the parameter. It is case
   * sensitive.
   *
   * @generated from field: string url_query_parameter = 3;
   */
  urlQueryParameter = "";

  constructor(data?: PartialMessage<SystemParameter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.SystemParameter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "http_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url_query_parameter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SystemParameter {
    return new SystemParameter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SystemParameter {
    return new SystemParameter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SystemParameter {
    return new SystemParameter().fromJsonString(jsonString, options);
  }

  static equals(a: SystemParameter | PlainMessage<SystemParameter> | undefined, b: SystemParameter | PlainMessage<SystemParameter> | undefined): boolean {
    return proto3.util.equals(SystemParameter, a, b);
  }
}

