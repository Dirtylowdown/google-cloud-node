// Copyright 2025 Google LLC
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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace devtools. */
    namespace devtools {

        /** Namespace artifactregistry. */
        namespace artifactregistry {

            /** Namespace v1beta2. */
            namespace v1beta2 {

                /** Properties of an AptArtifact. */
                interface IAptArtifact {

                    /** AptArtifact name */
                    name?: (string|null);

                    /** AptArtifact packageName */
                    packageName?: (string|null);

                    /** AptArtifact packageType */
                    packageType?: (google.devtools.artifactregistry.v1beta2.AptArtifact.PackageType|keyof typeof google.devtools.artifactregistry.v1beta2.AptArtifact.PackageType|null);

                    /** AptArtifact architecture */
                    architecture?: (string|null);

                    /** AptArtifact component */
                    component?: (string|null);

                    /** AptArtifact controlFile */
                    controlFile?: (Uint8Array|string|null);
                }

                /** Represents an AptArtifact. */
                class AptArtifact implements IAptArtifact {

                    /**
                     * Constructs a new AptArtifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IAptArtifact);

                    /** AptArtifact name. */
                    public name: string;

                    /** AptArtifact packageName. */
                    public packageName: string;

                    /** AptArtifact packageType. */
                    public packageType: (google.devtools.artifactregistry.v1beta2.AptArtifact.PackageType|keyof typeof google.devtools.artifactregistry.v1beta2.AptArtifact.PackageType);

                    /** AptArtifact architecture. */
                    public architecture: string;

                    /** AptArtifact component. */
                    public component: string;

                    /** AptArtifact controlFile. */
                    public controlFile: (Uint8Array|string);

                    /**
                     * Creates a new AptArtifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AptArtifact instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IAptArtifact): google.devtools.artifactregistry.v1beta2.AptArtifact;

                    /**
                     * Encodes the specified AptArtifact message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.AptArtifact.verify|verify} messages.
                     * @param message AptArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IAptArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AptArtifact message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.AptArtifact.verify|verify} messages.
                     * @param message AptArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IAptArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AptArtifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AptArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.AptArtifact;

                    /**
                     * Decodes an AptArtifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AptArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.AptArtifact;

                    /**
                     * Verifies an AptArtifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AptArtifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AptArtifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.AptArtifact;

                    /**
                     * Creates a plain object from an AptArtifact message. Also converts values to other types if specified.
                     * @param message AptArtifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.AptArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AptArtifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AptArtifact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AptArtifact {

                    /** PackageType enum. */
                    enum PackageType {
                        PACKAGE_TYPE_UNSPECIFIED = 0,
                        BINARY = 1,
                        SOURCE = 2
                    }
                }

                /** Properties of an ImportAptArtifactsGcsSource. */
                interface IImportAptArtifactsGcsSource {

                    /** ImportAptArtifactsGcsSource uris */
                    uris?: (string[]|null);

                    /** ImportAptArtifactsGcsSource useWildcards */
                    useWildcards?: (boolean|null);
                }

                /** Represents an ImportAptArtifactsGcsSource. */
                class ImportAptArtifactsGcsSource implements IImportAptArtifactsGcsSource {

                    /**
                     * Constructs a new ImportAptArtifactsGcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource);

                    /** ImportAptArtifactsGcsSource uris. */
                    public uris: string[];

                    /** ImportAptArtifactsGcsSource useWildcards. */
                    public useWildcards: boolean;

                    /**
                     * Creates a new ImportAptArtifactsGcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAptArtifactsGcsSource instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource;

                    /**
                     * Encodes the specified ImportAptArtifactsGcsSource message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource.verify|verify} messages.
                     * @param message ImportAptArtifactsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAptArtifactsGcsSource message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource.verify|verify} messages.
                     * @param message ImportAptArtifactsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAptArtifactsGcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAptArtifactsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource;

                    /**
                     * Decodes an ImportAptArtifactsGcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAptArtifactsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource;

                    /**
                     * Verifies an ImportAptArtifactsGcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAptArtifactsGcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAptArtifactsGcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource;

                    /**
                     * Creates a plain object from an ImportAptArtifactsGcsSource message. Also converts values to other types if specified.
                     * @param message ImportAptArtifactsGcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportAptArtifactsGcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAptArtifactsGcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportAptArtifactsGcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportAptArtifactsRequest. */
                interface IImportAptArtifactsRequest {

                    /** ImportAptArtifactsRequest gcsSource */
                    gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource|null);

                    /** ImportAptArtifactsRequest parent */
                    parent?: (string|null);
                }

                /** Represents an ImportAptArtifactsRequest. */
                class ImportAptArtifactsRequest implements IImportAptArtifactsRequest {

                    /**
                     * Constructs a new ImportAptArtifactsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest);

                    /** ImportAptArtifactsRequest gcsSource. */
                    public gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource|null);

                    /** ImportAptArtifactsRequest parent. */
                    public parent: string;

                    /** ImportAptArtifactsRequest source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new ImportAptArtifactsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAptArtifactsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest;

                    /**
                     * Encodes the specified ImportAptArtifactsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest.verify|verify} messages.
                     * @param message ImportAptArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAptArtifactsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest.verify|verify} messages.
                     * @param message ImportAptArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAptArtifactsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAptArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest;

                    /**
                     * Decodes an ImportAptArtifactsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAptArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest;

                    /**
                     * Verifies an ImportAptArtifactsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAptArtifactsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAptArtifactsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest;

                    /**
                     * Creates a plain object from an ImportAptArtifactsRequest message. Also converts values to other types if specified.
                     * @param message ImportAptArtifactsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportAptArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAptArtifactsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportAptArtifactsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportAptArtifactsErrorInfo. */
                interface IImportAptArtifactsErrorInfo {

                    /** ImportAptArtifactsErrorInfo gcsSource */
                    gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource|null);

                    /** ImportAptArtifactsErrorInfo error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents an ImportAptArtifactsErrorInfo. */
                class ImportAptArtifactsErrorInfo implements IImportAptArtifactsErrorInfo {

                    /**
                     * Constructs a new ImportAptArtifactsErrorInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo);

                    /** ImportAptArtifactsErrorInfo gcsSource. */
                    public gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportAptArtifactsGcsSource|null);

                    /** ImportAptArtifactsErrorInfo error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ImportAptArtifactsErrorInfo source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new ImportAptArtifactsErrorInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAptArtifactsErrorInfo instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo;

                    /**
                     * Encodes the specified ImportAptArtifactsErrorInfo message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo.verify|verify} messages.
                     * @param message ImportAptArtifactsErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAptArtifactsErrorInfo message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo.verify|verify} messages.
                     * @param message ImportAptArtifactsErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAptArtifactsErrorInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAptArtifactsErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo;

                    /**
                     * Decodes an ImportAptArtifactsErrorInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAptArtifactsErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo;

                    /**
                     * Verifies an ImportAptArtifactsErrorInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAptArtifactsErrorInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAptArtifactsErrorInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo;

                    /**
                     * Creates a plain object from an ImportAptArtifactsErrorInfo message. Also converts values to other types if specified.
                     * @param message ImportAptArtifactsErrorInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportAptArtifactsErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAptArtifactsErrorInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportAptArtifactsErrorInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportAptArtifactsResponse. */
                interface IImportAptArtifactsResponse {

                    /** ImportAptArtifactsResponse aptArtifacts */
                    aptArtifacts?: (google.devtools.artifactregistry.v1beta2.IAptArtifact[]|null);

                    /** ImportAptArtifactsResponse errors */
                    errors?: (google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo[]|null);
                }

                /** Represents an ImportAptArtifactsResponse. */
                class ImportAptArtifactsResponse implements IImportAptArtifactsResponse {

                    /**
                     * Constructs a new ImportAptArtifactsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsResponse);

                    /** ImportAptArtifactsResponse aptArtifacts. */
                    public aptArtifacts: google.devtools.artifactregistry.v1beta2.IAptArtifact[];

                    /** ImportAptArtifactsResponse errors. */
                    public errors: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsErrorInfo[];

                    /**
                     * Creates a new ImportAptArtifactsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAptArtifactsResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsResponse): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse;

                    /**
                     * Encodes the specified ImportAptArtifactsResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse.verify|verify} messages.
                     * @param message ImportAptArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAptArtifactsResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse.verify|verify} messages.
                     * @param message ImportAptArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAptArtifactsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAptArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse;

                    /**
                     * Decodes an ImportAptArtifactsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAptArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse;

                    /**
                     * Verifies an ImportAptArtifactsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAptArtifactsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAptArtifactsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse;

                    /**
                     * Creates a plain object from an ImportAptArtifactsResponse message. Also converts values to other types if specified.
                     * @param message ImportAptArtifactsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportAptArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAptArtifactsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportAptArtifactsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportAptArtifactsMetadata. */
                interface IImportAptArtifactsMetadata {
                }

                /** Represents an ImportAptArtifactsMetadata. */
                class ImportAptArtifactsMetadata implements IImportAptArtifactsMetadata {

                    /**
                     * Constructs a new ImportAptArtifactsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsMetadata);

                    /**
                     * Creates a new ImportAptArtifactsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAptArtifactsMetadata instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsMetadata): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata;

                    /**
                     * Encodes the specified ImportAptArtifactsMetadata message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata.verify|verify} messages.
                     * @param message ImportAptArtifactsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAptArtifactsMetadata message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata.verify|verify} messages.
                     * @param message ImportAptArtifactsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAptArtifactsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAptArtifactsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata;

                    /**
                     * Decodes an ImportAptArtifactsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAptArtifactsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata;

                    /**
                     * Verifies an ImportAptArtifactsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAptArtifactsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAptArtifactsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata;

                    /**
                     * Creates a plain object from an ImportAptArtifactsMetadata message. Also converts values to other types if specified.
                     * @param message ImportAptArtifactsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportAptArtifactsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAptArtifactsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportAptArtifactsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Hash. */
                interface IHash {

                    /** Hash type */
                    type?: (google.devtools.artifactregistry.v1beta2.Hash.HashType|keyof typeof google.devtools.artifactregistry.v1beta2.Hash.HashType|null);

                    /** Hash value */
                    value?: (Uint8Array|string|null);
                }

                /** Represents a Hash. */
                class Hash implements IHash {

                    /**
                     * Constructs a new Hash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IHash);

                    /** Hash type. */
                    public type: (google.devtools.artifactregistry.v1beta2.Hash.HashType|keyof typeof google.devtools.artifactregistry.v1beta2.Hash.HashType);

                    /** Hash value. */
                    public value: (Uint8Array|string);

                    /**
                     * Creates a new Hash instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hash instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IHash): google.devtools.artifactregistry.v1beta2.Hash;

                    /**
                     * Encodes the specified Hash message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Hash.verify|verify} messages.
                     * @param message Hash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hash message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Hash.verify|verify} messages.
                     * @param message Hash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Hash;

                    /**
                     * Decodes a Hash message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Hash;

                    /**
                     * Verifies a Hash message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hash message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hash
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Hash;

                    /**
                     * Creates a plain object from a Hash message. Also converts values to other types if specified.
                     * @param message Hash
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hash to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hash
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Hash {

                    /** HashType enum. */
                    enum HashType {
                        HASH_TYPE_UNSPECIFIED = 0,
                        SHA256 = 1,
                        MD5 = 2
                    }
                }

                /** Properties of a File. */
                interface IFile {

                    /** File name */
                    name?: (string|null);

                    /** File sizeBytes */
                    sizeBytes?: (number|Long|string|null);

                    /** File hashes */
                    hashes?: (google.devtools.artifactregistry.v1beta2.IHash[]|null);

                    /** File createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** File updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** File owner */
                    owner?: (string|null);
                }

                /** Represents a File. */
                class File implements IFile {

                    /**
                     * Constructs a new File.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IFile);

                    /** File name. */
                    public name: string;

                    /** File sizeBytes. */
                    public sizeBytes: (number|Long|string);

                    /** File hashes. */
                    public hashes: google.devtools.artifactregistry.v1beta2.IHash[];

                    /** File createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** File updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** File owner. */
                    public owner: string;

                    /**
                     * Creates a new File instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns File instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IFile): google.devtools.artifactregistry.v1beta2.File;

                    /**
                     * Encodes the specified File message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.File.verify|verify} messages.
                     * @param message File message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified File message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.File.verify|verify} messages.
                     * @param message File message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a File message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns File
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.File;

                    /**
                     * Decodes a File message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns File
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.File;

                    /**
                     * Verifies a File message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a File message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns File
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.File;

                    /**
                     * Creates a plain object from a File message. Also converts values to other types if specified.
                     * @param message File
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this File to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for File
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFilesRequest. */
                interface IListFilesRequest {

                    /** ListFilesRequest parent */
                    parent?: (string|null);

                    /** ListFilesRequest filter */
                    filter?: (string|null);

                    /** ListFilesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFilesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFilesRequest. */
                class ListFilesRequest implements IListFilesRequest {

                    /**
                     * Constructs a new ListFilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListFilesRequest);

                    /** ListFilesRequest parent. */
                    public parent: string;

                    /** ListFilesRequest filter. */
                    public filter: string;

                    /** ListFilesRequest pageSize. */
                    public pageSize: number;

                    /** ListFilesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFilesRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListFilesRequest): google.devtools.artifactregistry.v1beta2.ListFilesRequest;

                    /**
                     * Encodes the specified ListFilesRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListFilesRequest.verify|verify} messages.
                     * @param message ListFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFilesRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListFilesRequest.verify|verify} messages.
                     * @param message ListFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListFilesRequest;

                    /**
                     * Decodes a ListFilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListFilesRequest;

                    /**
                     * Verifies a ListFilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListFilesRequest;

                    /**
                     * Creates a plain object from a ListFilesRequest message. Also converts values to other types if specified.
                     * @param message ListFilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListFilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFilesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFilesResponse. */
                interface IListFilesResponse {

                    /** ListFilesResponse files */
                    files?: (google.devtools.artifactregistry.v1beta2.IFile[]|null);

                    /** ListFilesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFilesResponse. */
                class ListFilesResponse implements IListFilesResponse {

                    /**
                     * Constructs a new ListFilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListFilesResponse);

                    /** ListFilesResponse files. */
                    public files: google.devtools.artifactregistry.v1beta2.IFile[];

                    /** ListFilesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFilesResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListFilesResponse): google.devtools.artifactregistry.v1beta2.ListFilesResponse;

                    /**
                     * Encodes the specified ListFilesResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListFilesResponse.verify|verify} messages.
                     * @param message ListFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFilesResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListFilesResponse.verify|verify} messages.
                     * @param message ListFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListFilesResponse;

                    /**
                     * Decodes a ListFilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListFilesResponse;

                    /**
                     * Verifies a ListFilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListFilesResponse;

                    /**
                     * Creates a plain object from a ListFilesResponse message. Also converts values to other types if specified.
                     * @param message ListFilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListFilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFilesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFileRequest. */
                interface IGetFileRequest {

                    /** GetFileRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFileRequest. */
                class GetFileRequest implements IGetFileRequest {

                    /**
                     * Constructs a new GetFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetFileRequest);

                    /** GetFileRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFileRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetFileRequest): google.devtools.artifactregistry.v1beta2.GetFileRequest;

                    /**
                     * Encodes the specified GetFileRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetFileRequest.verify|verify} messages.
                     * @param message GetFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFileRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetFileRequest.verify|verify} messages.
                     * @param message GetFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetFileRequest;

                    /**
                     * Decodes a GetFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetFileRequest;

                    /**
                     * Verifies a GetFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetFileRequest;

                    /**
                     * Creates a plain object from a GetFileRequest message. Also converts values to other types if specified.
                     * @param message GetFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Package. */
                interface IPackage {

                    /** Package name */
                    name?: (string|null);

                    /** Package displayName */
                    displayName?: (string|null);

                    /** Package createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Package updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Package. */
                class Package implements IPackage {

                    /**
                     * Constructs a new Package.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IPackage);

                    /** Package name. */
                    public name: string;

                    /** Package displayName. */
                    public displayName: string;

                    /** Package createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Package updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Package instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Package instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IPackage): google.devtools.artifactregistry.v1beta2.Package;

                    /**
                     * Encodes the specified Package message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Package message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Package message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Package;

                    /**
                     * Decodes a Package message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Package;

                    /**
                     * Verifies a Package message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Package message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Package
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Package;

                    /**
                     * Creates a plain object from a Package message. Also converts values to other types if specified.
                     * @param message Package
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Package to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Package
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPackagesRequest. */
                interface IListPackagesRequest {

                    /** ListPackagesRequest parent */
                    parent?: (string|null);

                    /** ListPackagesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPackagesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPackagesRequest. */
                class ListPackagesRequest implements IListPackagesRequest {

                    /**
                     * Constructs a new ListPackagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListPackagesRequest);

                    /** ListPackagesRequest parent. */
                    public parent: string;

                    /** ListPackagesRequest pageSize. */
                    public pageSize: number;

                    /** ListPackagesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPackagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPackagesRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListPackagesRequest): google.devtools.artifactregistry.v1beta2.ListPackagesRequest;

                    /**
                     * Encodes the specified ListPackagesRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListPackagesRequest.verify|verify} messages.
                     * @param message ListPackagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListPackagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPackagesRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListPackagesRequest.verify|verify} messages.
                     * @param message ListPackagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListPackagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPackagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPackagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListPackagesRequest;

                    /**
                     * Decodes a ListPackagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPackagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListPackagesRequest;

                    /**
                     * Verifies a ListPackagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPackagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPackagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListPackagesRequest;

                    /**
                     * Creates a plain object from a ListPackagesRequest message. Also converts values to other types if specified.
                     * @param message ListPackagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListPackagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPackagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPackagesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPackagesResponse. */
                interface IListPackagesResponse {

                    /** ListPackagesResponse packages */
                    packages?: (google.devtools.artifactregistry.v1beta2.IPackage[]|null);

                    /** ListPackagesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPackagesResponse. */
                class ListPackagesResponse implements IListPackagesResponse {

                    /**
                     * Constructs a new ListPackagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListPackagesResponse);

                    /** ListPackagesResponse packages. */
                    public packages: google.devtools.artifactregistry.v1beta2.IPackage[];

                    /** ListPackagesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPackagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPackagesResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListPackagesResponse): google.devtools.artifactregistry.v1beta2.ListPackagesResponse;

                    /**
                     * Encodes the specified ListPackagesResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListPackagesResponse.verify|verify} messages.
                     * @param message ListPackagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListPackagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPackagesResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListPackagesResponse.verify|verify} messages.
                     * @param message ListPackagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListPackagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPackagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPackagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListPackagesResponse;

                    /**
                     * Decodes a ListPackagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPackagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListPackagesResponse;

                    /**
                     * Verifies a ListPackagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPackagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPackagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListPackagesResponse;

                    /**
                     * Creates a plain object from a ListPackagesResponse message. Also converts values to other types if specified.
                     * @param message ListPackagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListPackagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPackagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPackagesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPackageRequest. */
                interface IGetPackageRequest {

                    /** GetPackageRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPackageRequest. */
                class GetPackageRequest implements IGetPackageRequest {

                    /**
                     * Constructs a new GetPackageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetPackageRequest);

                    /** GetPackageRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPackageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPackageRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetPackageRequest): google.devtools.artifactregistry.v1beta2.GetPackageRequest;

                    /**
                     * Encodes the specified GetPackageRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetPackageRequest.verify|verify} messages.
                     * @param message GetPackageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetPackageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPackageRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetPackageRequest.verify|verify} messages.
                     * @param message GetPackageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetPackageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPackageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPackageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetPackageRequest;

                    /**
                     * Decodes a GetPackageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPackageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetPackageRequest;

                    /**
                     * Verifies a GetPackageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPackageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPackageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetPackageRequest;

                    /**
                     * Creates a plain object from a GetPackageRequest message. Also converts values to other types if specified.
                     * @param message GetPackageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetPackageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPackageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPackageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePackageRequest. */
                interface IDeletePackageRequest {

                    /** DeletePackageRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePackageRequest. */
                class DeletePackageRequest implements IDeletePackageRequest {

                    /**
                     * Constructs a new DeletePackageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest);

                    /** DeletePackageRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePackageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePackageRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest): google.devtools.artifactregistry.v1beta2.DeletePackageRequest;

                    /**
                     * Encodes the specified DeletePackageRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeletePackageRequest.verify|verify} messages.
                     * @param message DeletePackageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePackageRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeletePackageRequest.verify|verify} messages.
                     * @param message DeletePackageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePackageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePackageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.DeletePackageRequest;

                    /**
                     * Decodes a DeletePackageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePackageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.DeletePackageRequest;

                    /**
                     * Verifies a DeletePackageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePackageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePackageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.DeletePackageRequest;

                    /**
                     * Creates a plain object from a DeletePackageRequest message. Also converts values to other types if specified.
                     * @param message DeletePackageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.DeletePackageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePackageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePackageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Repository. */
                interface IRepository {

                    /** Repository mavenConfig */
                    mavenConfig?: (google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig|null);

                    /** Repository name */
                    name?: (string|null);

                    /** Repository format */
                    format?: (google.devtools.artifactregistry.v1beta2.Repository.Format|keyof typeof google.devtools.artifactregistry.v1beta2.Repository.Format|null);

                    /** Repository description */
                    description?: (string|null);

                    /** Repository labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Repository createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Repository updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Repository kmsKeyName */
                    kmsKeyName?: (string|null);
                }

                /** Represents a Repository. */
                class Repository implements IRepository {

                    /**
                     * Constructs a new Repository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IRepository);

                    /** Repository mavenConfig. */
                    public mavenConfig?: (google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig|null);

                    /** Repository name. */
                    public name: string;

                    /** Repository format. */
                    public format: (google.devtools.artifactregistry.v1beta2.Repository.Format|keyof typeof google.devtools.artifactregistry.v1beta2.Repository.Format);

                    /** Repository description. */
                    public description: string;

                    /** Repository labels. */
                    public labels: { [k: string]: string };

                    /** Repository createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Repository updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Repository kmsKeyName. */
                    public kmsKeyName: string;

                    /** Repository formatConfig. */
                    public formatConfig?: "mavenConfig";

                    /**
                     * Creates a new Repository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Repository instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IRepository): google.devtools.artifactregistry.v1beta2.Repository;

                    /**
                     * Encodes the specified Repository message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Repository.verify|verify} messages.
                     * @param message Repository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Repository message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Repository.verify|verify} messages.
                     * @param message Repository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Repository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Repository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Repository;

                    /**
                     * Decodes a Repository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Repository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Repository;

                    /**
                     * Verifies a Repository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Repository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Repository
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Repository;

                    /**
                     * Creates a plain object from a Repository message. Also converts values to other types if specified.
                     * @param message Repository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.Repository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Repository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Repository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Repository {

                    /** Properties of a MavenRepositoryConfig. */
                    interface IMavenRepositoryConfig {

                        /** MavenRepositoryConfig allowSnapshotOverwrites */
                        allowSnapshotOverwrites?: (boolean|null);

                        /** MavenRepositoryConfig versionPolicy */
                        versionPolicy?: (google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.VersionPolicy|keyof typeof google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.VersionPolicy|null);
                    }

                    /** Represents a MavenRepositoryConfig. */
                    class MavenRepositoryConfig implements IMavenRepositoryConfig {

                        /**
                         * Constructs a new MavenRepositoryConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig);

                        /** MavenRepositoryConfig allowSnapshotOverwrites. */
                        public allowSnapshotOverwrites: boolean;

                        /** MavenRepositoryConfig versionPolicy. */
                        public versionPolicy: (google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.VersionPolicy|keyof typeof google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.VersionPolicy);

                        /**
                         * Creates a new MavenRepositoryConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MavenRepositoryConfig instance
                         */
                        public static create(properties?: google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig): google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig;

                        /**
                         * Encodes the specified MavenRepositoryConfig message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.verify|verify} messages.
                         * @param message MavenRepositoryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MavenRepositoryConfig message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig.verify|verify} messages.
                         * @param message MavenRepositoryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.Repository.IMavenRepositoryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MavenRepositoryConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MavenRepositoryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig;

                        /**
                         * Decodes a MavenRepositoryConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MavenRepositoryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig;

                        /**
                         * Verifies a MavenRepositoryConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MavenRepositoryConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MavenRepositoryConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig;

                        /**
                         * Creates a plain object from a MavenRepositoryConfig message. Also converts values to other types if specified.
                         * @param message MavenRepositoryConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.artifactregistry.v1beta2.Repository.MavenRepositoryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MavenRepositoryConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MavenRepositoryConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MavenRepositoryConfig {

                        /** VersionPolicy enum. */
                        enum VersionPolicy {
                            VERSION_POLICY_UNSPECIFIED = 0,
                            RELEASE = 1,
                            SNAPSHOT = 2
                        }
                    }

                    /** Format enum. */
                    enum Format {
                        FORMAT_UNSPECIFIED = 0,
                        DOCKER = 1,
                        MAVEN = 2,
                        NPM = 3,
                        APT = 5,
                        YUM = 6,
                        PYTHON = 8
                    }
                }

                /** Properties of a ListRepositoriesRequest. */
                interface IListRepositoriesRequest {

                    /** ListRepositoriesRequest parent */
                    parent?: (string|null);

                    /** ListRepositoriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRepositoriesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRepositoriesRequest. */
                class ListRepositoriesRequest implements IListRepositoriesRequest {

                    /**
                     * Constructs a new ListRepositoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest);

                    /** ListRepositoriesRequest parent. */
                    public parent: string;

                    /** ListRepositoriesRequest pageSize. */
                    public pageSize: number;

                    /** ListRepositoriesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRepositoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRepositoriesRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest): google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest;

                    /**
                     * Encodes the specified ListRepositoriesRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest.verify|verify} messages.
                     * @param message ListRepositoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRepositoriesRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest.verify|verify} messages.
                     * @param message ListRepositoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRepositoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRepositoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest;

                    /**
                     * Decodes a ListRepositoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRepositoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest;

                    /**
                     * Verifies a ListRepositoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRepositoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRepositoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest;

                    /**
                     * Creates a plain object from a ListRepositoriesRequest message. Also converts values to other types if specified.
                     * @param message ListRepositoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListRepositoriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRepositoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRepositoriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRepositoriesResponse. */
                interface IListRepositoriesResponse {

                    /** ListRepositoriesResponse repositories */
                    repositories?: (google.devtools.artifactregistry.v1beta2.IRepository[]|null);

                    /** ListRepositoriesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRepositoriesResponse. */
                class ListRepositoriesResponse implements IListRepositoriesResponse {

                    /**
                     * Constructs a new ListRepositoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListRepositoriesResponse);

                    /** ListRepositoriesResponse repositories. */
                    public repositories: google.devtools.artifactregistry.v1beta2.IRepository[];

                    /** ListRepositoriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRepositoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRepositoriesResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListRepositoriesResponse): google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse;

                    /**
                     * Encodes the specified ListRepositoriesResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse.verify|verify} messages.
                     * @param message ListRepositoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListRepositoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRepositoriesResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse.verify|verify} messages.
                     * @param message ListRepositoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListRepositoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRepositoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRepositoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse;

                    /**
                     * Decodes a ListRepositoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRepositoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse;

                    /**
                     * Verifies a ListRepositoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRepositoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRepositoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse;

                    /**
                     * Creates a plain object from a ListRepositoriesResponse message. Also converts values to other types if specified.
                     * @param message ListRepositoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRepositoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRepositoriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRepositoryRequest. */
                interface IGetRepositoryRequest {

                    /** GetRepositoryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRepositoryRequest. */
                class GetRepositoryRequest implements IGetRepositoryRequest {

                    /**
                     * Constructs a new GetRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest);

                    /** GetRepositoryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRepositoryRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest): google.devtools.artifactregistry.v1beta2.GetRepositoryRequest;

                    /**
                     * Encodes the specified GetRepositoryRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetRepositoryRequest.verify|verify} messages.
                     * @param message GetRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRepositoryRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetRepositoryRequest.verify|verify} messages.
                     * @param message GetRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetRepositoryRequest;

                    /**
                     * Decodes a GetRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetRepositoryRequest;

                    /**
                     * Verifies a GetRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetRepositoryRequest;

                    /**
                     * Creates a plain object from a GetRepositoryRequest message. Also converts values to other types if specified.
                     * @param message GetRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRepositoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRepositoryRequest. */
                interface ICreateRepositoryRequest {

                    /** CreateRepositoryRequest parent */
                    parent?: (string|null);

                    /** CreateRepositoryRequest repositoryId */
                    repositoryId?: (string|null);

                    /** CreateRepositoryRequest repository */
                    repository?: (google.devtools.artifactregistry.v1beta2.IRepository|null);
                }

                /** Represents a CreateRepositoryRequest. */
                class CreateRepositoryRequest implements ICreateRepositoryRequest {

                    /**
                     * Constructs a new CreateRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest);

                    /** CreateRepositoryRequest parent. */
                    public parent: string;

                    /** CreateRepositoryRequest repositoryId. */
                    public repositoryId: string;

                    /** CreateRepositoryRequest repository. */
                    public repository?: (google.devtools.artifactregistry.v1beta2.IRepository|null);

                    /**
                     * Creates a new CreateRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRepositoryRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest): google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest;

                    /**
                     * Encodes the specified CreateRepositoryRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest.verify|verify} messages.
                     * @param message CreateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRepositoryRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest.verify|verify} messages.
                     * @param message CreateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest;

                    /**
                     * Decodes a CreateRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest;

                    /**
                     * Verifies a CreateRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest;

                    /**
                     * Creates a plain object from a CreateRepositoryRequest message. Also converts values to other types if specified.
                     * @param message CreateRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.CreateRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRepositoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRepositoryRequest. */
                interface IUpdateRepositoryRequest {

                    /** UpdateRepositoryRequest repository */
                    repository?: (google.devtools.artifactregistry.v1beta2.IRepository|null);

                    /** UpdateRepositoryRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRepositoryRequest. */
                class UpdateRepositoryRequest implements IUpdateRepositoryRequest {

                    /**
                     * Constructs a new UpdateRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest);

                    /** UpdateRepositoryRequest repository. */
                    public repository?: (google.devtools.artifactregistry.v1beta2.IRepository|null);

                    /** UpdateRepositoryRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRepositoryRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest): google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest;

                    /**
                     * Encodes the specified UpdateRepositoryRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest.verify|verify} messages.
                     * @param message UpdateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRepositoryRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest.verify|verify} messages.
                     * @param message UpdateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest;

                    /**
                     * Decodes an UpdateRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest;

                    /**
                     * Verifies an UpdateRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest;

                    /**
                     * Creates a plain object from an UpdateRepositoryRequest message. Also converts values to other types if specified.
                     * @param message UpdateRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.UpdateRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRepositoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRepositoryRequest. */
                interface IDeleteRepositoryRequest {

                    /** DeleteRepositoryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteRepositoryRequest. */
                class DeleteRepositoryRequest implements IDeleteRepositoryRequest {

                    /**
                     * Constructs a new DeleteRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest);

                    /** DeleteRepositoryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRepositoryRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest): google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest;

                    /**
                     * Encodes the specified DeleteRepositoryRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest.verify|verify} messages.
                     * @param message DeleteRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRepositoryRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest.verify|verify} messages.
                     * @param message DeleteRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest;

                    /**
                     * Decodes a DeleteRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest;

                    /**
                     * Verifies a DeleteRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest;

                    /**
                     * Creates a plain object from a DeleteRepositoryRequest message. Also converts values to other types if specified.
                     * @param message DeleteRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.DeleteRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRepositoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an ArtifactRegistry */
                class ArtifactRegistry extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ArtifactRegistry service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ArtifactRegistry service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ArtifactRegistry;

                    /**
                     * Calls ImportAptArtifacts.
                     * @param request ImportAptArtifactsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importAptArtifacts(request: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifactsCallback): void;

                    /**
                     * Calls ImportAptArtifacts.
                     * @param request ImportAptArtifactsRequest message or plain object
                     * @returns Promise
                     */
                    public importAptArtifacts(request: google.devtools.artifactregistry.v1beta2.IImportAptArtifactsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ImportYumArtifacts.
                     * @param request ImportYumArtifactsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importYumArtifacts(request: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifactsCallback): void;

                    /**
                     * Calls ImportYumArtifacts.
                     * @param request ImportYumArtifactsRequest message or plain object
                     * @returns Promise
                     */
                    public importYumArtifacts(request: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRepositories.
                     * @param request ListRepositoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRepositoriesResponse
                     */
                    public listRepositories(request: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositoriesCallback): void;

                    /**
                     * Calls ListRepositories.
                     * @param request ListRepositoriesRequest message or plain object
                     * @returns Promise
                     */
                    public listRepositories(request: google.devtools.artifactregistry.v1beta2.IListRepositoriesRequest): Promise<google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse>;

                    /**
                     * Calls GetRepository.
                     * @param request GetRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Repository
                     */
                    public getRepository(request: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepositoryCallback): void;

                    /**
                     * Calls GetRepository.
                     * @param request GetRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public getRepository(request: google.devtools.artifactregistry.v1beta2.IGetRepositoryRequest): Promise<google.devtools.artifactregistry.v1beta2.Repository>;

                    /**
                     * Calls CreateRepository.
                     * @param request CreateRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRepository(request: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepositoryCallback): void;

                    /**
                     * Calls CreateRepository.
                     * @param request CreateRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public createRepository(request: google.devtools.artifactregistry.v1beta2.ICreateRepositoryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateRepository.
                     * @param request UpdateRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Repository
                     */
                    public updateRepository(request: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepositoryCallback): void;

                    /**
                     * Calls UpdateRepository.
                     * @param request UpdateRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public updateRepository(request: google.devtools.artifactregistry.v1beta2.IUpdateRepositoryRequest): Promise<google.devtools.artifactregistry.v1beta2.Repository>;

                    /**
                     * Calls DeleteRepository.
                     * @param request DeleteRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRepository(request: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepositoryCallback): void;

                    /**
                     * Calls DeleteRepository.
                     * @param request DeleteRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRepository(request: google.devtools.artifactregistry.v1beta2.IDeleteRepositoryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPackages.
                     * @param request ListPackagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPackagesResponse
                     */
                    public listPackages(request: google.devtools.artifactregistry.v1beta2.IListPackagesRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackagesCallback): void;

                    /**
                     * Calls ListPackages.
                     * @param request ListPackagesRequest message or plain object
                     * @returns Promise
                     */
                    public listPackages(request: google.devtools.artifactregistry.v1beta2.IListPackagesRequest): Promise<google.devtools.artifactregistry.v1beta2.ListPackagesResponse>;

                    /**
                     * Calls GetPackage.
                     * @param request GetPackageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Package
                     */
                    public getPackage(request: google.devtools.artifactregistry.v1beta2.IGetPackageRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackageCallback): void;

                    /**
                     * Calls GetPackage.
                     * @param request GetPackageRequest message or plain object
                     * @returns Promise
                     */
                    public getPackage(request: google.devtools.artifactregistry.v1beta2.IGetPackageRequest): Promise<google.devtools.artifactregistry.v1beta2.Package>;

                    /**
                     * Calls DeletePackage.
                     * @param request DeletePackageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePackage(request: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackageCallback): void;

                    /**
                     * Calls DeletePackage.
                     * @param request DeletePackageRequest message or plain object
                     * @returns Promise
                     */
                    public deletePackage(request: google.devtools.artifactregistry.v1beta2.IDeletePackageRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListVersions.
                     * @param request ListVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVersionsResponse
                     */
                    public listVersions(request: google.devtools.artifactregistry.v1beta2.IListVersionsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersionsCallback): void;

                    /**
                     * Calls ListVersions.
                     * @param request ListVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listVersions(request: google.devtools.artifactregistry.v1beta2.IListVersionsRequest): Promise<google.devtools.artifactregistry.v1beta2.ListVersionsResponse>;

                    /**
                     * Calls GetVersion.
                     * @param request GetVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Version
                     */
                    public getVersion(request: google.devtools.artifactregistry.v1beta2.IGetVersionRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersionCallback): void;

                    /**
                     * Calls GetVersion.
                     * @param request GetVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getVersion(request: google.devtools.artifactregistry.v1beta2.IGetVersionRequest): Promise<google.devtools.artifactregistry.v1beta2.Version>;

                    /**
                     * Calls DeleteVersion.
                     * @param request DeleteVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteVersion(request: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersionCallback): void;

                    /**
                     * Calls DeleteVersion.
                     * @param request DeleteVersionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteVersion(request: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListFiles.
                     * @param request ListFilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFilesResponse
                     */
                    public listFiles(request: google.devtools.artifactregistry.v1beta2.IListFilesRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFilesCallback): void;

                    /**
                     * Calls ListFiles.
                     * @param request ListFilesRequest message or plain object
                     * @returns Promise
                     */
                    public listFiles(request: google.devtools.artifactregistry.v1beta2.IListFilesRequest): Promise<google.devtools.artifactregistry.v1beta2.ListFilesResponse>;

                    /**
                     * Calls GetFile.
                     * @param request GetFileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and File
                     */
                    public getFile(request: google.devtools.artifactregistry.v1beta2.IGetFileRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFileCallback): void;

                    /**
                     * Calls GetFile.
                     * @param request GetFileRequest message or plain object
                     * @returns Promise
                     */
                    public getFile(request: google.devtools.artifactregistry.v1beta2.IGetFileRequest): Promise<google.devtools.artifactregistry.v1beta2.File>;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTagsResponse
                     */
                    public listTags(request: google.devtools.artifactregistry.v1beta2.IListTagsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTagsCallback): void;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @returns Promise
                     */
                    public listTags(request: google.devtools.artifactregistry.v1beta2.IListTagsRequest): Promise<google.devtools.artifactregistry.v1beta2.ListTagsResponse>;

                    /**
                     * Calls GetTag.
                     * @param request GetTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public getTag(request: google.devtools.artifactregistry.v1beta2.IGetTagRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTagCallback): void;

                    /**
                     * Calls GetTag.
                     * @param request GetTagRequest message or plain object
                     * @returns Promise
                     */
                    public getTag(request: google.devtools.artifactregistry.v1beta2.IGetTagRequest): Promise<google.devtools.artifactregistry.v1beta2.Tag>;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public createTag(request: google.devtools.artifactregistry.v1beta2.ICreateTagRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTagCallback): void;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @returns Promise
                     */
                    public createTag(request: google.devtools.artifactregistry.v1beta2.ICreateTagRequest): Promise<google.devtools.artifactregistry.v1beta2.Tag>;

                    /**
                     * Calls UpdateTag.
                     * @param request UpdateTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public updateTag(request: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTagCallback): void;

                    /**
                     * Calls UpdateTag.
                     * @param request UpdateTagRequest message or plain object
                     * @returns Promise
                     */
                    public updateTag(request: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest): Promise<google.devtools.artifactregistry.v1beta2.Tag>;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTag(request: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTagCallback): void;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTag(request: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls GetProjectSettings.
                     * @param request GetProjectSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProjectSettings
                     */
                    public getProjectSettings(request: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettingsCallback): void;

                    /**
                     * Calls GetProjectSettings.
                     * @param request GetProjectSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getProjectSettings(request: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest): Promise<google.devtools.artifactregistry.v1beta2.ProjectSettings>;

                    /**
                     * Calls UpdateProjectSettings.
                     * @param request UpdateProjectSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProjectSettings
                     */
                    public updateProjectSettings(request: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest, callback: google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettingsCallback): void;

                    /**
                     * Calls UpdateProjectSettings.
                     * @param request UpdateProjectSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateProjectSettings(request: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest): Promise<google.devtools.artifactregistry.v1beta2.ProjectSettings>;
                }

                namespace ArtifactRegistry {

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|importAptArtifacts}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportAptArtifactsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|importYumArtifacts}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportYumArtifactsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|listRepositories}.
                     * @param error Error, if any
                     * @param [response] ListRepositoriesResponse
                     */
                    type ListRepositoriesCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ListRepositoriesResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getRepository}.
                     * @param error Error, if any
                     * @param [response] Repository
                     */
                    type GetRepositoryCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Repository) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|createRepository}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRepositoryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|updateRepository}.
                     * @param error Error, if any
                     * @param [response] Repository
                     */
                    type UpdateRepositoryCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Repository) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|deleteRepository}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRepositoryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|listPackages}.
                     * @param error Error, if any
                     * @param [response] ListPackagesResponse
                     */
                    type ListPackagesCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ListPackagesResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getPackage}.
                     * @param error Error, if any
                     * @param [response] Package
                     */
                    type GetPackageCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Package) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|deletePackage}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePackageCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|listVersions}.
                     * @param error Error, if any
                     * @param [response] ListVersionsResponse
                     */
                    type ListVersionsCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ListVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getVersion}.
                     * @param error Error, if any
                     * @param [response] Version
                     */
                    type GetVersionCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Version) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|deleteVersion}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteVersionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|listFiles}.
                     * @param error Error, if any
                     * @param [response] ListFilesResponse
                     */
                    type ListFilesCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ListFilesResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getFile}.
                     * @param error Error, if any
                     * @param [response] File
                     */
                    type GetFileCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.File) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|listTags}.
                     * @param error Error, if any
                     * @param [response] ListTagsResponse
                     */
                    type ListTagsCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ListTagsResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type GetTagCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Tag) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|createTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type CreateTagCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Tag) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|updateTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type UpdateTagCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.Tag) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|deleteTag}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|getProjectSettings}.
                     * @param error Error, if any
                     * @param [response] ProjectSettings
                     */
                    type GetProjectSettingsCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ProjectSettings) => void;

                    /**
                     * Callback as used by {@link google.devtools.artifactregistry.v1beta2.ArtifactRegistry|updateProjectSettings}.
                     * @param error Error, if any
                     * @param [response] ProjectSettings
                     */
                    type UpdateProjectSettingsCallback = (error: (Error|null), response?: google.devtools.artifactregistry.v1beta2.ProjectSettings) => void;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IOperationMetadata);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IOperationMetadata): google.devtools.artifactregistry.v1beta2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProjectSettings. */
                interface IProjectSettings {

                    /** ProjectSettings name */
                    name?: (string|null);

                    /** ProjectSettings legacyRedirectionState */
                    legacyRedirectionState?: (google.devtools.artifactregistry.v1beta2.ProjectSettings.RedirectionState|keyof typeof google.devtools.artifactregistry.v1beta2.ProjectSettings.RedirectionState|null);
                }

                /** Represents a ProjectSettings. */
                class ProjectSettings implements IProjectSettings {

                    /**
                     * Constructs a new ProjectSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IProjectSettings);

                    /** ProjectSettings name. */
                    public name: string;

                    /** ProjectSettings legacyRedirectionState. */
                    public legacyRedirectionState: (google.devtools.artifactregistry.v1beta2.ProjectSettings.RedirectionState|keyof typeof google.devtools.artifactregistry.v1beta2.ProjectSettings.RedirectionState);

                    /**
                     * Creates a new ProjectSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProjectSettings instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IProjectSettings): google.devtools.artifactregistry.v1beta2.ProjectSettings;

                    /**
                     * Encodes the specified ProjectSettings message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ProjectSettings.verify|verify} messages.
                     * @param message ProjectSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IProjectSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProjectSettings message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ProjectSettings.verify|verify} messages.
                     * @param message ProjectSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IProjectSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProjectSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProjectSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ProjectSettings;

                    /**
                     * Decodes a ProjectSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProjectSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ProjectSettings;

                    /**
                     * Verifies a ProjectSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProjectSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProjectSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ProjectSettings;

                    /**
                     * Creates a plain object from a ProjectSettings message. Also converts values to other types if specified.
                     * @param message ProjectSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ProjectSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProjectSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProjectSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProjectSettings {

                    /** RedirectionState enum. */
                    enum RedirectionState {
                        REDIRECTION_STATE_UNSPECIFIED = 0,
                        REDIRECTION_FROM_GCR_IO_DISABLED = 1,
                        REDIRECTION_FROM_GCR_IO_ENABLED = 2,
                        REDIRECTION_FROM_GCR_IO_FINALIZED = 3
                    }
                }

                /** Properties of a GetProjectSettingsRequest. */
                interface IGetProjectSettingsRequest {

                    /** GetProjectSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProjectSettingsRequest. */
                class GetProjectSettingsRequest implements IGetProjectSettingsRequest {

                    /**
                     * Constructs a new GetProjectSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest);

                    /** GetProjectSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProjectSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProjectSettingsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest): google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest;

                    /**
                     * Encodes the specified GetProjectSettingsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest.verify|verify} messages.
                     * @param message GetProjectSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProjectSettingsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest.verify|verify} messages.
                     * @param message GetProjectSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetProjectSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProjectSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProjectSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest;

                    /**
                     * Decodes a GetProjectSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProjectSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest;

                    /**
                     * Verifies a GetProjectSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProjectSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProjectSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest;

                    /**
                     * Creates a plain object from a GetProjectSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetProjectSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetProjectSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProjectSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetProjectSettingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateProjectSettingsRequest. */
                interface IUpdateProjectSettingsRequest {

                    /** UpdateProjectSettingsRequest projectSettings */
                    projectSettings?: (google.devtools.artifactregistry.v1beta2.IProjectSettings|null);

                    /** UpdateProjectSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateProjectSettingsRequest. */
                class UpdateProjectSettingsRequest implements IUpdateProjectSettingsRequest {

                    /**
                     * Constructs a new UpdateProjectSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest);

                    /** UpdateProjectSettingsRequest projectSettings. */
                    public projectSettings?: (google.devtools.artifactregistry.v1beta2.IProjectSettings|null);

                    /** UpdateProjectSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateProjectSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateProjectSettingsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest): google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest;

                    /**
                     * Encodes the specified UpdateProjectSettingsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest.verify|verify} messages.
                     * @param message UpdateProjectSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateProjectSettingsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest.verify|verify} messages.
                     * @param message UpdateProjectSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IUpdateProjectSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateProjectSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateProjectSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest;

                    /**
                     * Decodes an UpdateProjectSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateProjectSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest;

                    /**
                     * Verifies an UpdateProjectSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateProjectSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateProjectSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateProjectSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateProjectSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.UpdateProjectSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateProjectSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateProjectSettingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Tag. */
                interface ITag {

                    /** Tag name */
                    name?: (string|null);

                    /** Tag version */
                    version?: (string|null);
                }

                /** Represents a Tag. */
                class Tag implements ITag {

                    /**
                     * Constructs a new Tag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.ITag);

                    /** Tag name. */
                    public name: string;

                    /** Tag version. */
                    public version: string;

                    /**
                     * Creates a new Tag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tag instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.ITag): google.devtools.artifactregistry.v1beta2.Tag;

                    /**
                     * Encodes the specified Tag message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tag message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Tag;

                    /**
                     * Decodes a Tag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Tag;

                    /**
                     * Verifies a Tag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tag
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Tag;

                    /**
                     * Creates a plain object from a Tag message. Also converts values to other types if specified.
                     * @param message Tag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Tag
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTagsRequest. */
                interface IListTagsRequest {

                    /** ListTagsRequest parent */
                    parent?: (string|null);

                    /** ListTagsRequest filter */
                    filter?: (string|null);

                    /** ListTagsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTagsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTagsRequest. */
                class ListTagsRequest implements IListTagsRequest {

                    /**
                     * Constructs a new ListTagsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListTagsRequest);

                    /** ListTagsRequest parent. */
                    public parent: string;

                    /** ListTagsRequest filter. */
                    public filter: string;

                    /** ListTagsRequest pageSize. */
                    public pageSize: number;

                    /** ListTagsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTagsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListTagsRequest): google.devtools.artifactregistry.v1beta2.ListTagsRequest;

                    /**
                     * Encodes the specified ListTagsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListTagsRequest;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListTagsRequest;

                    /**
                     * Verifies a ListTagsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListTagsRequest;

                    /**
                     * Creates a plain object from a ListTagsRequest message. Also converts values to other types if specified.
                     * @param message ListTagsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListTagsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTagsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTagsResponse. */
                interface IListTagsResponse {

                    /** ListTagsResponse tags */
                    tags?: (google.devtools.artifactregistry.v1beta2.ITag[]|null);

                    /** ListTagsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTagsResponse. */
                class ListTagsResponse implements IListTagsResponse {

                    /**
                     * Constructs a new ListTagsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListTagsResponse);

                    /** ListTagsResponse tags. */
                    public tags: google.devtools.artifactregistry.v1beta2.ITag[];

                    /** ListTagsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTagsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListTagsResponse): google.devtools.artifactregistry.v1beta2.ListTagsResponse;

                    /**
                     * Encodes the specified ListTagsResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListTagsResponse;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListTagsResponse;

                    /**
                     * Verifies a ListTagsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListTagsResponse;

                    /**
                     * Creates a plain object from a ListTagsResponse message. Also converts values to other types if specified.
                     * @param message ListTagsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListTagsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTagsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTagRequest. */
                interface IGetTagRequest {

                    /** GetTagRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTagRequest. */
                class GetTagRequest implements IGetTagRequest {

                    /**
                     * Constructs a new GetTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetTagRequest);

                    /** GetTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTagRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetTagRequest): google.devtools.artifactregistry.v1beta2.GetTagRequest;

                    /**
                     * Encodes the specified GetTagRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetTagRequest.verify|verify} messages.
                     * @param message GetTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTagRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetTagRequest.verify|verify} messages.
                     * @param message GetTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetTagRequest;

                    /**
                     * Decodes a GetTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetTagRequest;

                    /**
                     * Verifies a GetTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetTagRequest;

                    /**
                     * Creates a plain object from a GetTagRequest message. Also converts values to other types if specified.
                     * @param message GetTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTagRequest. */
                interface ICreateTagRequest {

                    /** CreateTagRequest parent */
                    parent?: (string|null);

                    /** CreateTagRequest tagId */
                    tagId?: (string|null);

                    /** CreateTagRequest tag */
                    tag?: (google.devtools.artifactregistry.v1beta2.ITag|null);
                }

                /** Represents a CreateTagRequest. */
                class CreateTagRequest implements ICreateTagRequest {

                    /**
                     * Constructs a new CreateTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.ICreateTagRequest);

                    /** CreateTagRequest parent. */
                    public parent: string;

                    /** CreateTagRequest tagId. */
                    public tagId: string;

                    /** CreateTagRequest tag. */
                    public tag?: (google.devtools.artifactregistry.v1beta2.ITag|null);

                    /**
                     * Creates a new CreateTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTagRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.ICreateTagRequest): google.devtools.artifactregistry.v1beta2.CreateTagRequest;

                    /**
                     * Encodes the specified CreateTagRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTagRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.CreateTagRequest;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.CreateTagRequest;

                    /**
                     * Verifies a CreateTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.CreateTagRequest;

                    /**
                     * Creates a plain object from a CreateTagRequest message. Also converts values to other types if specified.
                     * @param message CreateTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.CreateTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTagRequest. */
                interface IUpdateTagRequest {

                    /** UpdateTagRequest tag */
                    tag?: (google.devtools.artifactregistry.v1beta2.ITag|null);

                    /** UpdateTagRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTagRequest. */
                class UpdateTagRequest implements IUpdateTagRequest {

                    /**
                     * Constructs a new UpdateTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest);

                    /** UpdateTagRequest tag. */
                    public tag?: (google.devtools.artifactregistry.v1beta2.ITag|null);

                    /** UpdateTagRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTagRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest): google.devtools.artifactregistry.v1beta2.UpdateTagRequest;

                    /**
                     * Encodes the specified UpdateTagRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateTagRequest.verify|verify} messages.
                     * @param message UpdateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTagRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.UpdateTagRequest.verify|verify} messages.
                     * @param message UpdateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IUpdateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.UpdateTagRequest;

                    /**
                     * Decodes an UpdateTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.UpdateTagRequest;

                    /**
                     * Verifies an UpdateTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.UpdateTagRequest;

                    /**
                     * Creates a plain object from an UpdateTagRequest message. Also converts values to other types if specified.
                     * @param message UpdateTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.UpdateTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTagRequest. */
                interface IDeleteTagRequest {

                    /** DeleteTagRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTagRequest. */
                class DeleteTagRequest implements IDeleteTagRequest {

                    /**
                     * Constructs a new DeleteTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest);

                    /** DeleteTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTagRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest): google.devtools.artifactregistry.v1beta2.DeleteTagRequest;

                    /**
                     * Encodes the specified DeleteTagRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTagRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.DeleteTagRequest;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.DeleteTagRequest;

                    /**
                     * Verifies a DeleteTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.DeleteTagRequest;

                    /**
                     * Creates a plain object from a DeleteTagRequest message. Also converts values to other types if specified.
                     * @param message DeleteTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.DeleteTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** VersionView enum. */
                enum VersionView {
                    VERSION_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a Version. */
                interface IVersion {

                    /** Version name */
                    name?: (string|null);

                    /** Version description */
                    description?: (string|null);

                    /** Version createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Version updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Version relatedTags */
                    relatedTags?: (google.devtools.artifactregistry.v1beta2.ITag[]|null);

                    /** Version metadata */
                    metadata?: (google.protobuf.IStruct|null);
                }

                /** Represents a Version. */
                class Version implements IVersion {

                    /**
                     * Constructs a new Version.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IVersion);

                    /** Version name. */
                    public name: string;

                    /** Version description. */
                    public description: string;

                    /** Version createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Version updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Version relatedTags. */
                    public relatedTags: google.devtools.artifactregistry.v1beta2.ITag[];

                    /** Version metadata. */
                    public metadata?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new Version instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Version instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IVersion): google.devtools.artifactregistry.v1beta2.Version;

                    /**
                     * Encodes the specified Version message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Version message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Version message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.Version;

                    /**
                     * Decodes a Version message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.Version;

                    /**
                     * Verifies a Version message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Version message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Version
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.Version;

                    /**
                     * Creates a plain object from a Version message. Also converts values to other types if specified.
                     * @param message Version
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Version to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Version
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVersionsRequest. */
                interface IListVersionsRequest {

                    /** ListVersionsRequest parent */
                    parent?: (string|null);

                    /** ListVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVersionsRequest view */
                    view?: (google.devtools.artifactregistry.v1beta2.VersionView|keyof typeof google.devtools.artifactregistry.v1beta2.VersionView|null);

                    /** ListVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListVersionsRequest. */
                class ListVersionsRequest implements IListVersionsRequest {

                    /**
                     * Constructs a new ListVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListVersionsRequest);

                    /** ListVersionsRequest parent. */
                    public parent: string;

                    /** ListVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListVersionsRequest view. */
                    public view: (google.devtools.artifactregistry.v1beta2.VersionView|keyof typeof google.devtools.artifactregistry.v1beta2.VersionView);

                    /** ListVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVersionsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListVersionsRequest): google.devtools.artifactregistry.v1beta2.ListVersionsRequest;

                    /**
                     * Encodes the specified ListVersionsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListVersionsRequest.verify|verify} messages.
                     * @param message ListVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVersionsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListVersionsRequest.verify|verify} messages.
                     * @param message ListVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListVersionsRequest;

                    /**
                     * Decodes a ListVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListVersionsRequest;

                    /**
                     * Verifies a ListVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListVersionsRequest;

                    /**
                     * Creates a plain object from a ListVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVersionsResponse. */
                interface IListVersionsResponse {

                    /** ListVersionsResponse versions */
                    versions?: (google.devtools.artifactregistry.v1beta2.IVersion[]|null);

                    /** ListVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListVersionsResponse. */
                class ListVersionsResponse implements IListVersionsResponse {

                    /**
                     * Constructs a new ListVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IListVersionsResponse);

                    /** ListVersionsResponse versions. */
                    public versions: google.devtools.artifactregistry.v1beta2.IVersion[];

                    /** ListVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVersionsResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IListVersionsResponse): google.devtools.artifactregistry.v1beta2.ListVersionsResponse;

                    /**
                     * Encodes the specified ListVersionsResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListVersionsResponse.verify|verify} messages.
                     * @param message ListVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IListVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVersionsResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ListVersionsResponse.verify|verify} messages.
                     * @param message ListVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IListVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ListVersionsResponse;

                    /**
                     * Decodes a ListVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ListVersionsResponse;

                    /**
                     * Verifies a ListVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ListVersionsResponse;

                    /**
                     * Creates a plain object from a ListVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ListVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetVersionRequest. */
                interface IGetVersionRequest {

                    /** GetVersionRequest name */
                    name?: (string|null);

                    /** GetVersionRequest view */
                    view?: (google.devtools.artifactregistry.v1beta2.VersionView|keyof typeof google.devtools.artifactregistry.v1beta2.VersionView|null);
                }

                /** Represents a GetVersionRequest. */
                class GetVersionRequest implements IGetVersionRequest {

                    /**
                     * Constructs a new GetVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IGetVersionRequest);

                    /** GetVersionRequest name. */
                    public name: string;

                    /** GetVersionRequest view. */
                    public view: (google.devtools.artifactregistry.v1beta2.VersionView|keyof typeof google.devtools.artifactregistry.v1beta2.VersionView);

                    /**
                     * Creates a new GetVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVersionRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IGetVersionRequest): google.devtools.artifactregistry.v1beta2.GetVersionRequest;

                    /**
                     * Encodes the specified GetVersionRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetVersionRequest.verify|verify} messages.
                     * @param message GetVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.GetVersionRequest.verify|verify} messages.
                     * @param message GetVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.GetVersionRequest;

                    /**
                     * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.GetVersionRequest;

                    /**
                     * Verifies a GetVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.GetVersionRequest;

                    /**
                     * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
                     * @param message GetVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.GetVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteVersionRequest. */
                interface IDeleteVersionRequest {

                    /** DeleteVersionRequest name */
                    name?: (string|null);

                    /** DeleteVersionRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteVersionRequest. */
                class DeleteVersionRequest implements IDeleteVersionRequest {

                    /**
                     * Constructs a new DeleteVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest);

                    /** DeleteVersionRequest name. */
                    public name: string;

                    /** DeleteVersionRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteVersionRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest): google.devtools.artifactregistry.v1beta2.DeleteVersionRequest;

                    /**
                     * Encodes the specified DeleteVersionRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteVersionRequest.verify|verify} messages.
                     * @param message DeleteVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteVersionRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.DeleteVersionRequest.verify|verify} messages.
                     * @param message DeleteVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.DeleteVersionRequest;

                    /**
                     * Decodes a DeleteVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.DeleteVersionRequest;

                    /**
                     * Verifies a DeleteVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.DeleteVersionRequest;

                    /**
                     * Creates a plain object from a DeleteVersionRequest message. Also converts values to other types if specified.
                     * @param message DeleteVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.DeleteVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a YumArtifact. */
                interface IYumArtifact {

                    /** YumArtifact name */
                    name?: (string|null);

                    /** YumArtifact packageName */
                    packageName?: (string|null);

                    /** YumArtifact packageType */
                    packageType?: (google.devtools.artifactregistry.v1beta2.YumArtifact.PackageType|keyof typeof google.devtools.artifactregistry.v1beta2.YumArtifact.PackageType|null);

                    /** YumArtifact architecture */
                    architecture?: (string|null);
                }

                /** Represents a YumArtifact. */
                class YumArtifact implements IYumArtifact {

                    /**
                     * Constructs a new YumArtifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IYumArtifact);

                    /** YumArtifact name. */
                    public name: string;

                    /** YumArtifact packageName. */
                    public packageName: string;

                    /** YumArtifact packageType. */
                    public packageType: (google.devtools.artifactregistry.v1beta2.YumArtifact.PackageType|keyof typeof google.devtools.artifactregistry.v1beta2.YumArtifact.PackageType);

                    /** YumArtifact architecture. */
                    public architecture: string;

                    /**
                     * Creates a new YumArtifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns YumArtifact instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IYumArtifact): google.devtools.artifactregistry.v1beta2.YumArtifact;

                    /**
                     * Encodes the specified YumArtifact message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.YumArtifact.verify|verify} messages.
                     * @param message YumArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IYumArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified YumArtifact message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.YumArtifact.verify|verify} messages.
                     * @param message YumArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IYumArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a YumArtifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns YumArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.YumArtifact;

                    /**
                     * Decodes a YumArtifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns YumArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.YumArtifact;

                    /**
                     * Verifies a YumArtifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a YumArtifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns YumArtifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.YumArtifact;

                    /**
                     * Creates a plain object from a YumArtifact message. Also converts values to other types if specified.
                     * @param message YumArtifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.YumArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this YumArtifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for YumArtifact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace YumArtifact {

                    /** PackageType enum. */
                    enum PackageType {
                        PACKAGE_TYPE_UNSPECIFIED = 0,
                        BINARY = 1,
                        SOURCE = 2
                    }
                }

                /** Properties of an ImportYumArtifactsGcsSource. */
                interface IImportYumArtifactsGcsSource {

                    /** ImportYumArtifactsGcsSource uris */
                    uris?: (string[]|null);

                    /** ImportYumArtifactsGcsSource useWildcards */
                    useWildcards?: (boolean|null);
                }

                /** Represents an ImportYumArtifactsGcsSource. */
                class ImportYumArtifactsGcsSource implements IImportYumArtifactsGcsSource {

                    /**
                     * Constructs a new ImportYumArtifactsGcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource);

                    /** ImportYumArtifactsGcsSource uris. */
                    public uris: string[];

                    /** ImportYumArtifactsGcsSource useWildcards. */
                    public useWildcards: boolean;

                    /**
                     * Creates a new ImportYumArtifactsGcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportYumArtifactsGcsSource instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource;

                    /**
                     * Encodes the specified ImportYumArtifactsGcsSource message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource.verify|verify} messages.
                     * @param message ImportYumArtifactsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportYumArtifactsGcsSource message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource.verify|verify} messages.
                     * @param message ImportYumArtifactsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportYumArtifactsGcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportYumArtifactsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource;

                    /**
                     * Decodes an ImportYumArtifactsGcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportYumArtifactsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource;

                    /**
                     * Verifies an ImportYumArtifactsGcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportYumArtifactsGcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportYumArtifactsGcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource;

                    /**
                     * Creates a plain object from an ImportYumArtifactsGcsSource message. Also converts values to other types if specified.
                     * @param message ImportYumArtifactsGcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportYumArtifactsGcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportYumArtifactsGcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportYumArtifactsGcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportYumArtifactsRequest. */
                interface IImportYumArtifactsRequest {

                    /** ImportYumArtifactsRequest gcsSource */
                    gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource|null);

                    /** ImportYumArtifactsRequest parent */
                    parent?: (string|null);
                }

                /** Represents an ImportYumArtifactsRequest. */
                class ImportYumArtifactsRequest implements IImportYumArtifactsRequest {

                    /**
                     * Constructs a new ImportYumArtifactsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest);

                    /** ImportYumArtifactsRequest gcsSource. */
                    public gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource|null);

                    /** ImportYumArtifactsRequest parent. */
                    public parent: string;

                    /** ImportYumArtifactsRequest source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new ImportYumArtifactsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportYumArtifactsRequest instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest;

                    /**
                     * Encodes the specified ImportYumArtifactsRequest message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest.verify|verify} messages.
                     * @param message ImportYumArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportYumArtifactsRequest message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest.verify|verify} messages.
                     * @param message ImportYumArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportYumArtifactsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportYumArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest;

                    /**
                     * Decodes an ImportYumArtifactsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportYumArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest;

                    /**
                     * Verifies an ImportYumArtifactsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportYumArtifactsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportYumArtifactsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest;

                    /**
                     * Creates a plain object from an ImportYumArtifactsRequest message. Also converts values to other types if specified.
                     * @param message ImportYumArtifactsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportYumArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportYumArtifactsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportYumArtifactsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportYumArtifactsErrorInfo. */
                interface IImportYumArtifactsErrorInfo {

                    /** ImportYumArtifactsErrorInfo gcsSource */
                    gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource|null);

                    /** ImportYumArtifactsErrorInfo error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents an ImportYumArtifactsErrorInfo. */
                class ImportYumArtifactsErrorInfo implements IImportYumArtifactsErrorInfo {

                    /**
                     * Constructs a new ImportYumArtifactsErrorInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo);

                    /** ImportYumArtifactsErrorInfo gcsSource. */
                    public gcsSource?: (google.devtools.artifactregistry.v1beta2.IImportYumArtifactsGcsSource|null);

                    /** ImportYumArtifactsErrorInfo error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ImportYumArtifactsErrorInfo source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new ImportYumArtifactsErrorInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportYumArtifactsErrorInfo instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo;

                    /**
                     * Encodes the specified ImportYumArtifactsErrorInfo message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo.verify|verify} messages.
                     * @param message ImportYumArtifactsErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportYumArtifactsErrorInfo message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo.verify|verify} messages.
                     * @param message ImportYumArtifactsErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportYumArtifactsErrorInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportYumArtifactsErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo;

                    /**
                     * Decodes an ImportYumArtifactsErrorInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportYumArtifactsErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo;

                    /**
                     * Verifies an ImportYumArtifactsErrorInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportYumArtifactsErrorInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportYumArtifactsErrorInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo;

                    /**
                     * Creates a plain object from an ImportYumArtifactsErrorInfo message. Also converts values to other types if specified.
                     * @param message ImportYumArtifactsErrorInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportYumArtifactsErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportYumArtifactsErrorInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportYumArtifactsErrorInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportYumArtifactsResponse. */
                interface IImportYumArtifactsResponse {

                    /** ImportYumArtifactsResponse yumArtifacts */
                    yumArtifacts?: (google.devtools.artifactregistry.v1beta2.IYumArtifact[]|null);

                    /** ImportYumArtifactsResponse errors */
                    errors?: (google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo[]|null);
                }

                /** Represents an ImportYumArtifactsResponse. */
                class ImportYumArtifactsResponse implements IImportYumArtifactsResponse {

                    /**
                     * Constructs a new ImportYumArtifactsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsResponse);

                    /** ImportYumArtifactsResponse yumArtifacts. */
                    public yumArtifacts: google.devtools.artifactregistry.v1beta2.IYumArtifact[];

                    /** ImportYumArtifactsResponse errors. */
                    public errors: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsErrorInfo[];

                    /**
                     * Creates a new ImportYumArtifactsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportYumArtifactsResponse instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsResponse): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse;

                    /**
                     * Encodes the specified ImportYumArtifactsResponse message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse.verify|verify} messages.
                     * @param message ImportYumArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportYumArtifactsResponse message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse.verify|verify} messages.
                     * @param message ImportYumArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportYumArtifactsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportYumArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse;

                    /**
                     * Decodes an ImportYumArtifactsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportYumArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse;

                    /**
                     * Verifies an ImportYumArtifactsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportYumArtifactsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportYumArtifactsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse;

                    /**
                     * Creates a plain object from an ImportYumArtifactsResponse message. Also converts values to other types if specified.
                     * @param message ImportYumArtifactsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportYumArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportYumArtifactsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportYumArtifactsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportYumArtifactsMetadata. */
                interface IImportYumArtifactsMetadata {
                }

                /** Represents an ImportYumArtifactsMetadata. */
                class ImportYumArtifactsMetadata implements IImportYumArtifactsMetadata {

                    /**
                     * Constructs a new ImportYumArtifactsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsMetadata);

                    /**
                     * Creates a new ImportYumArtifactsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportYumArtifactsMetadata instance
                     */
                    public static create(properties?: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsMetadata): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata;

                    /**
                     * Encodes the specified ImportYumArtifactsMetadata message. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata.verify|verify} messages.
                     * @param message ImportYumArtifactsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportYumArtifactsMetadata message, length delimited. Does not implicitly {@link google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata.verify|verify} messages.
                     * @param message ImportYumArtifactsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.artifactregistry.v1beta2.IImportYumArtifactsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportYumArtifactsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportYumArtifactsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata;

                    /**
                     * Decodes an ImportYumArtifactsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportYumArtifactsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata;

                    /**
                     * Verifies an ImportYumArtifactsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportYumArtifactsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportYumArtifactsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata;

                    /**
                     * Creates a plain object from an ImportYumArtifactsMetadata message. Also converts values to other types if specified.
                     * @param message ImportYumArtifactsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.artifactregistry.v1beta2.ImportYumArtifactsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportYumArtifactsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportYumArtifactsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expr
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
