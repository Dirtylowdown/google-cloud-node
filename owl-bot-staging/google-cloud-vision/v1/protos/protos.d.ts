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

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace vision. */
        namespace vision {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Vertex. */
                interface IVertex {

                    /** Vertex x */
                    x?: (number|null);

                    /** Vertex y */
                    y?: (number|null);
                }

                /** Represents a Vertex. */
                class Vertex implements IVertex {

                    /**
                     * Constructs a new Vertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IVertex);

                    /** Vertex x. */
                    public x: number;

                    /** Vertex y. */
                    public y: number;

                    /**
                     * Creates a new Vertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vertex instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IVertex): google.cloud.vision.v1.Vertex;

                    /**
                     * Encodes the specified Vertex message. Does not implicitly {@link google.cloud.vision.v1.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vertex message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Vertex;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Vertex;

                    /**
                     * Verifies a Vertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Vertex;

                    /**
                     * Creates a plain object from a Vertex message. Also converts values to other types if specified.
                     * @param message Vertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Vertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Vertex
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NormalizedVertex. */
                interface INormalizedVertex {

                    /** NormalizedVertex x */
                    x?: (number|null);

                    /** NormalizedVertex y */
                    y?: (number|null);
                }

                /** Represents a NormalizedVertex. */
                class NormalizedVertex implements INormalizedVertex {

                    /**
                     * Constructs a new NormalizedVertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.vision.v1.INormalizedVertex): google.cloud.vision.v1.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.vision.v1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.vision.v1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.NormalizedVertex;

                    /**
                     * Verifies a NormalizedVertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedVertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedVertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NormalizedVertex
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BoundingPoly. */
                interface IBoundingPoly {

                    /** BoundingPoly vertices */
                    vertices?: (google.cloud.vision.v1.IVertex[]|null);

                    /** BoundingPoly normalizedVertices */
                    normalizedVertices?: (google.cloud.vision.v1.INormalizedVertex[]|null);
                }

                /** Represents a BoundingPoly. */
                class BoundingPoly implements IBoundingPoly {

                    /**
                     * Constructs a new BoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBoundingPoly);

                    /** BoundingPoly vertices. */
                    public vertices: google.cloud.vision.v1.IVertex[];

                    /** BoundingPoly normalizedVertices. */
                    public normalizedVertices: google.cloud.vision.v1.INormalizedVertex[];

                    /**
                     * Creates a new BoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPoly instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBoundingPoly): google.cloud.vision.v1.BoundingPoly;

                    /**
                     * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.vision.v1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BoundingPoly;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BoundingPoly;

                    /**
                     * Verifies a BoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BoundingPoly;

                    /**
                     * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                     * @param message BoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BoundingPoly
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Position. */
                interface IPosition {

                    /** Position x */
                    x?: (number|null);

                    /** Position y */
                    y?: (number|null);

                    /** Position z */
                    z?: (number|null);
                }

                /** Represents a Position. */
                class Position implements IPosition {

                    /**
                     * Constructs a new Position.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IPosition);

                    /** Position x. */
                    public x: number;

                    /** Position y. */
                    public y: number;

                    /** Position z. */
                    public z: number;

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Position instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IPosition): google.cloud.vision.v1.Position;

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link google.cloud.vision.v1.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Position;

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Position;

                    /**
                     * Verifies a Position message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Position
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Position;

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @param message Position
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Position to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Position
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an ImageAnnotator */
                class ImageAnnotator extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ImageAnnotator service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ImageAnnotator service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ImageAnnotator;

                    /**
                     * Calls BatchAnnotateImages.
                     * @param request BatchAnnotateImagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchAnnotateImagesResponse
                     */
                    public batchAnnotateImages(request: google.cloud.vision.v1.IBatchAnnotateImagesRequest, callback: google.cloud.vision.v1.ImageAnnotator.BatchAnnotateImagesCallback): void;

                    /**
                     * Calls BatchAnnotateImages.
                     * @param request BatchAnnotateImagesRequest message or plain object
                     * @returns Promise
                     */
                    public batchAnnotateImages(request: google.cloud.vision.v1.IBatchAnnotateImagesRequest): Promise<google.cloud.vision.v1.BatchAnnotateImagesResponse>;

                    /**
                     * Calls BatchAnnotateFiles.
                     * @param request BatchAnnotateFilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchAnnotateFilesResponse
                     */
                    public batchAnnotateFiles(request: google.cloud.vision.v1.IBatchAnnotateFilesRequest, callback: google.cloud.vision.v1.ImageAnnotator.BatchAnnotateFilesCallback): void;

                    /**
                     * Calls BatchAnnotateFiles.
                     * @param request BatchAnnotateFilesRequest message or plain object
                     * @returns Promise
                     */
                    public batchAnnotateFiles(request: google.cloud.vision.v1.IBatchAnnotateFilesRequest): Promise<google.cloud.vision.v1.BatchAnnotateFilesResponse>;

                    /**
                     * Calls AsyncBatchAnnotateImages.
                     * @param request AsyncBatchAnnotateImagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public asyncBatchAnnotateImages(request: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest, callback: google.cloud.vision.v1.ImageAnnotator.AsyncBatchAnnotateImagesCallback): void;

                    /**
                     * Calls AsyncBatchAnnotateImages.
                     * @param request AsyncBatchAnnotateImagesRequest message or plain object
                     * @returns Promise
                     */
                    public asyncBatchAnnotateImages(request: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls AsyncBatchAnnotateFiles.
                     * @param request AsyncBatchAnnotateFilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public asyncBatchAnnotateFiles(request: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest, callback: google.cloud.vision.v1.ImageAnnotator.AsyncBatchAnnotateFilesCallback): void;

                    /**
                     * Calls AsyncBatchAnnotateFiles.
                     * @param request AsyncBatchAnnotateFilesRequest message or plain object
                     * @returns Promise
                     */
                    public asyncBatchAnnotateFiles(request: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest): Promise<google.longrunning.Operation>;
                }

                namespace ImageAnnotator {

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ImageAnnotator|batchAnnotateImages}.
                     * @param error Error, if any
                     * @param [response] BatchAnnotateImagesResponse
                     */
                    type BatchAnnotateImagesCallback = (error: (Error|null), response?: google.cloud.vision.v1.BatchAnnotateImagesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ImageAnnotator|batchAnnotateFiles}.
                     * @param error Error, if any
                     * @param [response] BatchAnnotateFilesResponse
                     */
                    type BatchAnnotateFilesCallback = (error: (Error|null), response?: google.cloud.vision.v1.BatchAnnotateFilesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ImageAnnotator|asyncBatchAnnotateImages}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AsyncBatchAnnotateImagesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ImageAnnotator|asyncBatchAnnotateFiles}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AsyncBatchAnnotateFilesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Likelihood enum. */
                enum Likelihood {
                    UNKNOWN = 0,
                    VERY_UNLIKELY = 1,
                    UNLIKELY = 2,
                    POSSIBLE = 3,
                    LIKELY = 4,
                    VERY_LIKELY = 5
                }

                /** Properties of a Feature. */
                interface IFeature {

                    /** Feature type */
                    type?: (google.cloud.vision.v1.Feature.Type|keyof typeof google.cloud.vision.v1.Feature.Type|null);

                    /** Feature maxResults */
                    maxResults?: (number|null);

                    /** Feature model */
                    model?: (string|null);
                }

                /** Represents a Feature. */
                class Feature implements IFeature {

                    /**
                     * Constructs a new Feature.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IFeature);

                    /** Feature type. */
                    public type: (google.cloud.vision.v1.Feature.Type|keyof typeof google.cloud.vision.v1.Feature.Type);

                    /** Feature maxResults. */
                    public maxResults: number;

                    /** Feature model. */
                    public model: string;

                    /**
                     * Creates a new Feature instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Feature instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IFeature): google.cloud.vision.v1.Feature;

                    /**
                     * Encodes the specified Feature message. Does not implicitly {@link google.cloud.vision.v1.Feature.verify|verify} messages.
                     * @param message Feature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Feature message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Feature.verify|verify} messages.
                     * @param message Feature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Feature message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Feature;

                    /**
                     * Decodes a Feature message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Feature;

                    /**
                     * Verifies a Feature message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Feature message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Feature
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Feature;

                    /**
                     * Creates a plain object from a Feature message. Also converts values to other types if specified.
                     * @param message Feature
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Feature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Feature to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Feature
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Feature {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        FACE_DETECTION = 1,
                        LANDMARK_DETECTION = 2,
                        LOGO_DETECTION = 3,
                        LABEL_DETECTION = 4,
                        TEXT_DETECTION = 5,
                        DOCUMENT_TEXT_DETECTION = 11,
                        SAFE_SEARCH_DETECTION = 6,
                        IMAGE_PROPERTIES = 7,
                        CROP_HINTS = 9,
                        WEB_DETECTION = 10,
                        PRODUCT_SEARCH = 12,
                        OBJECT_LOCALIZATION = 19
                    }
                }

                /** Properties of an ImageSource. */
                interface IImageSource {

                    /** ImageSource gcsImageUri */
                    gcsImageUri?: (string|null);

                    /** ImageSource imageUri */
                    imageUri?: (string|null);
                }

                /** Represents an ImageSource. */
                class ImageSource implements IImageSource {

                    /**
                     * Constructs a new ImageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImageSource);

                    /** ImageSource gcsImageUri. */
                    public gcsImageUri: string;

                    /** ImageSource imageUri. */
                    public imageUri: string;

                    /**
                     * Creates a new ImageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageSource instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImageSource): google.cloud.vision.v1.ImageSource;

                    /**
                     * Encodes the specified ImageSource message. Does not implicitly {@link google.cloud.vision.v1.ImageSource.verify|verify} messages.
                     * @param message ImageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageSource message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImageSource.verify|verify} messages.
                     * @param message ImageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImageSource;

                    /**
                     * Decodes an ImageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImageSource;

                    /**
                     * Verifies an ImageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImageSource;

                    /**
                     * Creates a plain object from an ImageSource message. Also converts values to other types if specified.
                     * @param message ImageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Image. */
                interface IImage {

                    /** Image content */
                    content?: (Uint8Array|string|null);

                    /** Image source */
                    source?: (google.cloud.vision.v1.IImageSource|null);
                }

                /** Represents an Image. */
                class Image implements IImage {

                    /**
                     * Constructs a new Image.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImage);

                    /** Image content. */
                    public content: (Uint8Array|string);

                    /** Image source. */
                    public source?: (google.cloud.vision.v1.IImageSource|null);

                    /**
                     * Creates a new Image instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Image instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImage): google.cloud.vision.v1.Image;

                    /**
                     * Encodes the specified Image message. Does not implicitly {@link google.cloud.vision.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Image message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Image;

                    /**
                     * Decodes an Image message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Image;

                    /**
                     * Verifies an Image message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Image message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Image
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Image;

                    /**
                     * Creates a plain object from an Image message. Also converts values to other types if specified.
                     * @param message Image
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Image to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Image
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FaceAnnotation. */
                interface IFaceAnnotation {

                    /** FaceAnnotation boundingPoly */
                    boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** FaceAnnotation fdBoundingPoly */
                    fdBoundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** FaceAnnotation landmarks */
                    landmarks?: (google.cloud.vision.v1.FaceAnnotation.ILandmark[]|null);

                    /** FaceAnnotation rollAngle */
                    rollAngle?: (number|null);

                    /** FaceAnnotation panAngle */
                    panAngle?: (number|null);

                    /** FaceAnnotation tiltAngle */
                    tiltAngle?: (number|null);

                    /** FaceAnnotation detectionConfidence */
                    detectionConfidence?: (number|null);

                    /** FaceAnnotation landmarkingConfidence */
                    landmarkingConfidence?: (number|null);

                    /** FaceAnnotation joyLikelihood */
                    joyLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation sorrowLikelihood */
                    sorrowLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation angerLikelihood */
                    angerLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation surpriseLikelihood */
                    surpriseLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation underExposedLikelihood */
                    underExposedLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation blurredLikelihood */
                    blurredLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** FaceAnnotation headwearLikelihood */
                    headwearLikelihood?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);
                }

                /** Represents a FaceAnnotation. */
                class FaceAnnotation implements IFaceAnnotation {

                    /**
                     * Constructs a new FaceAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IFaceAnnotation);

                    /** FaceAnnotation boundingPoly. */
                    public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** FaceAnnotation fdBoundingPoly. */
                    public fdBoundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** FaceAnnotation landmarks. */
                    public landmarks: google.cloud.vision.v1.FaceAnnotation.ILandmark[];

                    /** FaceAnnotation rollAngle. */
                    public rollAngle: number;

                    /** FaceAnnotation panAngle. */
                    public panAngle: number;

                    /** FaceAnnotation tiltAngle. */
                    public tiltAngle: number;

                    /** FaceAnnotation detectionConfidence. */
                    public detectionConfidence: number;

                    /** FaceAnnotation landmarkingConfidence. */
                    public landmarkingConfidence: number;

                    /** FaceAnnotation joyLikelihood. */
                    public joyLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation sorrowLikelihood. */
                    public sorrowLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation angerLikelihood. */
                    public angerLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation surpriseLikelihood. */
                    public surpriseLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation underExposedLikelihood. */
                    public underExposedLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation blurredLikelihood. */
                    public blurredLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** FaceAnnotation headwearLikelihood. */
                    public headwearLikelihood: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /**
                     * Creates a new FaceAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FaceAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IFaceAnnotation): google.cloud.vision.v1.FaceAnnotation;

                    /**
                     * Encodes the specified FaceAnnotation message. Does not implicitly {@link google.cloud.vision.v1.FaceAnnotation.verify|verify} messages.
                     * @param message FaceAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IFaceAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FaceAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.FaceAnnotation.verify|verify} messages.
                     * @param message FaceAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IFaceAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FaceAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FaceAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.FaceAnnotation;

                    /**
                     * Decodes a FaceAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FaceAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.FaceAnnotation;

                    /**
                     * Verifies a FaceAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FaceAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FaceAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.FaceAnnotation;

                    /**
                     * Creates a plain object from a FaceAnnotation message. Also converts values to other types if specified.
                     * @param message FaceAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.FaceAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FaceAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FaceAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FaceAnnotation {

                    /** Properties of a Landmark. */
                    interface ILandmark {

                        /** Landmark type */
                        type?: (google.cloud.vision.v1.FaceAnnotation.Landmark.Type|keyof typeof google.cloud.vision.v1.FaceAnnotation.Landmark.Type|null);

                        /** Landmark position */
                        position?: (google.cloud.vision.v1.IPosition|null);
                    }

                    /** Represents a Landmark. */
                    class Landmark implements ILandmark {

                        /**
                         * Constructs a new Landmark.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.FaceAnnotation.ILandmark);

                        /** Landmark type. */
                        public type: (google.cloud.vision.v1.FaceAnnotation.Landmark.Type|keyof typeof google.cloud.vision.v1.FaceAnnotation.Landmark.Type);

                        /** Landmark position. */
                        public position?: (google.cloud.vision.v1.IPosition|null);

                        /**
                         * Creates a new Landmark instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Landmark instance
                         */
                        public static create(properties?: google.cloud.vision.v1.FaceAnnotation.ILandmark): google.cloud.vision.v1.FaceAnnotation.Landmark;

                        /**
                         * Encodes the specified Landmark message. Does not implicitly {@link google.cloud.vision.v1.FaceAnnotation.Landmark.verify|verify} messages.
                         * @param message Landmark message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.FaceAnnotation.ILandmark, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Landmark message, length delimited. Does not implicitly {@link google.cloud.vision.v1.FaceAnnotation.Landmark.verify|verify} messages.
                         * @param message Landmark message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.FaceAnnotation.ILandmark, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Landmark message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Landmark
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.FaceAnnotation.Landmark;

                        /**
                         * Decodes a Landmark message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Landmark
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.FaceAnnotation.Landmark;

                        /**
                         * Verifies a Landmark message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Landmark message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Landmark
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.FaceAnnotation.Landmark;

                        /**
                         * Creates a plain object from a Landmark message. Also converts values to other types if specified.
                         * @param message Landmark
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.FaceAnnotation.Landmark, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Landmark to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Landmark
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Landmark {

                        /** Type enum. */
                        enum Type {
                            UNKNOWN_LANDMARK = 0,
                            LEFT_EYE = 1,
                            RIGHT_EYE = 2,
                            LEFT_OF_LEFT_EYEBROW = 3,
                            RIGHT_OF_LEFT_EYEBROW = 4,
                            LEFT_OF_RIGHT_EYEBROW = 5,
                            RIGHT_OF_RIGHT_EYEBROW = 6,
                            MIDPOINT_BETWEEN_EYES = 7,
                            NOSE_TIP = 8,
                            UPPER_LIP = 9,
                            LOWER_LIP = 10,
                            MOUTH_LEFT = 11,
                            MOUTH_RIGHT = 12,
                            MOUTH_CENTER = 13,
                            NOSE_BOTTOM_RIGHT = 14,
                            NOSE_BOTTOM_LEFT = 15,
                            NOSE_BOTTOM_CENTER = 16,
                            LEFT_EYE_TOP_BOUNDARY = 17,
                            LEFT_EYE_RIGHT_CORNER = 18,
                            LEFT_EYE_BOTTOM_BOUNDARY = 19,
                            LEFT_EYE_LEFT_CORNER = 20,
                            RIGHT_EYE_TOP_BOUNDARY = 21,
                            RIGHT_EYE_RIGHT_CORNER = 22,
                            RIGHT_EYE_BOTTOM_BOUNDARY = 23,
                            RIGHT_EYE_LEFT_CORNER = 24,
                            LEFT_EYEBROW_UPPER_MIDPOINT = 25,
                            RIGHT_EYEBROW_UPPER_MIDPOINT = 26,
                            LEFT_EAR_TRAGION = 27,
                            RIGHT_EAR_TRAGION = 28,
                            LEFT_EYE_PUPIL = 29,
                            RIGHT_EYE_PUPIL = 30,
                            FOREHEAD_GLABELLA = 31,
                            CHIN_GNATHION = 32,
                            CHIN_LEFT_GONION = 33,
                            CHIN_RIGHT_GONION = 34,
                            LEFT_CHEEK_CENTER = 35,
                            RIGHT_CHEEK_CENTER = 36
                        }
                    }
                }

                /** Properties of a LocationInfo. */
                interface ILocationInfo {

                    /** LocationInfo latLng */
                    latLng?: (google.type.ILatLng|null);
                }

                /** Represents a LocationInfo. */
                class LocationInfo implements ILocationInfo {

                    /**
                     * Constructs a new LocationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ILocationInfo);

                    /** LocationInfo latLng. */
                    public latLng?: (google.type.ILatLng|null);

                    /**
                     * Creates a new LocationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationInfo instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ILocationInfo): google.cloud.vision.v1.LocationInfo;

                    /**
                     * Encodes the specified LocationInfo message. Does not implicitly {@link google.cloud.vision.v1.LocationInfo.verify|verify} messages.
                     * @param message LocationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ILocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationInfo message, length delimited. Does not implicitly {@link google.cloud.vision.v1.LocationInfo.verify|verify} messages.
                     * @param message LocationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ILocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.LocationInfo;

                    /**
                     * Decodes a LocationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.LocationInfo;

                    /**
                     * Verifies a LocationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.LocationInfo;

                    /**
                     * Creates a plain object from a LocationInfo message. Also converts values to other types if specified.
                     * @param message LocationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.LocationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Property. */
                interface IProperty {

                    /** Property name */
                    name?: (string|null);

                    /** Property value */
                    value?: (string|null);

                    /** Property uint64Value */
                    uint64Value?: (number|Long|string|null);
                }

                /** Represents a Property. */
                class Property implements IProperty {

                    /**
                     * Constructs a new Property.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProperty);

                    /** Property name. */
                    public name: string;

                    /** Property value. */
                    public value: string;

                    /** Property uint64Value. */
                    public uint64Value: (number|Long|string);

                    /**
                     * Creates a new Property instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Property instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProperty): google.cloud.vision.v1.Property;

                    /**
                     * Encodes the specified Property message. Does not implicitly {@link google.cloud.vision.v1.Property.verify|verify} messages.
                     * @param message Property message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Property message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Property.verify|verify} messages.
                     * @param message Property message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Property message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Property;

                    /**
                     * Decodes a Property message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Property;

                    /**
                     * Verifies a Property message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Property message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Property
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Property;

                    /**
                     * Creates a plain object from a Property message. Also converts values to other types if specified.
                     * @param message Property
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Property to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Property
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EntityAnnotation. */
                interface IEntityAnnotation {

                    /** EntityAnnotation mid */
                    mid?: (string|null);

                    /** EntityAnnotation locale */
                    locale?: (string|null);

                    /** EntityAnnotation description */
                    description?: (string|null);

                    /** EntityAnnotation score */
                    score?: (number|null);

                    /** EntityAnnotation confidence */
                    confidence?: (number|null);

                    /** EntityAnnotation topicality */
                    topicality?: (number|null);

                    /** EntityAnnotation boundingPoly */
                    boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** EntityAnnotation locations */
                    locations?: (google.cloud.vision.v1.ILocationInfo[]|null);

                    /** EntityAnnotation properties */
                    properties?: (google.cloud.vision.v1.IProperty[]|null);
                }

                /** Represents an EntityAnnotation. */
                class EntityAnnotation implements IEntityAnnotation {

                    /**
                     * Constructs a new EntityAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IEntityAnnotation);

                    /** EntityAnnotation mid. */
                    public mid: string;

                    /** EntityAnnotation locale. */
                    public locale: string;

                    /** EntityAnnotation description. */
                    public description: string;

                    /** EntityAnnotation score. */
                    public score: number;

                    /** EntityAnnotation confidence. */
                    public confidence: number;

                    /** EntityAnnotation topicality. */
                    public topicality: number;

                    /** EntityAnnotation boundingPoly. */
                    public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** EntityAnnotation locations. */
                    public locations: google.cloud.vision.v1.ILocationInfo[];

                    /** EntityAnnotation properties. */
                    public properties: google.cloud.vision.v1.IProperty[];

                    /**
                     * Creates a new EntityAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntityAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IEntityAnnotation): google.cloud.vision.v1.EntityAnnotation;

                    /**
                     * Encodes the specified EntityAnnotation message. Does not implicitly {@link google.cloud.vision.v1.EntityAnnotation.verify|verify} messages.
                     * @param message EntityAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IEntityAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntityAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.EntityAnnotation.verify|verify} messages.
                     * @param message EntityAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IEntityAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntityAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.EntityAnnotation;

                    /**
                     * Decodes an EntityAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntityAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.EntityAnnotation;

                    /**
                     * Verifies an EntityAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntityAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.EntityAnnotation;

                    /**
                     * Creates a plain object from an EntityAnnotation message. Also converts values to other types if specified.
                     * @param message EntityAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.EntityAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EntityAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LocalizedObjectAnnotation. */
                interface ILocalizedObjectAnnotation {

                    /** LocalizedObjectAnnotation mid */
                    mid?: (string|null);

                    /** LocalizedObjectAnnotation languageCode */
                    languageCode?: (string|null);

                    /** LocalizedObjectAnnotation name */
                    name?: (string|null);

                    /** LocalizedObjectAnnotation score */
                    score?: (number|null);

                    /** LocalizedObjectAnnotation boundingPoly */
                    boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);
                }

                /** Represents a LocalizedObjectAnnotation. */
                class LocalizedObjectAnnotation implements ILocalizedObjectAnnotation {

                    /**
                     * Constructs a new LocalizedObjectAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ILocalizedObjectAnnotation);

                    /** LocalizedObjectAnnotation mid. */
                    public mid: string;

                    /** LocalizedObjectAnnotation languageCode. */
                    public languageCode: string;

                    /** LocalizedObjectAnnotation name. */
                    public name: string;

                    /** LocalizedObjectAnnotation score. */
                    public score: number;

                    /** LocalizedObjectAnnotation boundingPoly. */
                    public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /**
                     * Creates a new LocalizedObjectAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocalizedObjectAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ILocalizedObjectAnnotation): google.cloud.vision.v1.LocalizedObjectAnnotation;

                    /**
                     * Encodes the specified LocalizedObjectAnnotation message. Does not implicitly {@link google.cloud.vision.v1.LocalizedObjectAnnotation.verify|verify} messages.
                     * @param message LocalizedObjectAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ILocalizedObjectAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocalizedObjectAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.LocalizedObjectAnnotation.verify|verify} messages.
                     * @param message LocalizedObjectAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ILocalizedObjectAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocalizedObjectAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocalizedObjectAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.LocalizedObjectAnnotation;

                    /**
                     * Decodes a LocalizedObjectAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocalizedObjectAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.LocalizedObjectAnnotation;

                    /**
                     * Verifies a LocalizedObjectAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocalizedObjectAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocalizedObjectAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.LocalizedObjectAnnotation;

                    /**
                     * Creates a plain object from a LocalizedObjectAnnotation message. Also converts values to other types if specified.
                     * @param message LocalizedObjectAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.LocalizedObjectAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocalizedObjectAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocalizedObjectAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SafeSearchAnnotation. */
                interface ISafeSearchAnnotation {

                    /** SafeSearchAnnotation adult */
                    adult?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** SafeSearchAnnotation spoof */
                    spoof?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** SafeSearchAnnotation medical */
                    medical?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** SafeSearchAnnotation violence */
                    violence?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);

                    /** SafeSearchAnnotation racy */
                    racy?: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood|null);
                }

                /** Represents a SafeSearchAnnotation. */
                class SafeSearchAnnotation implements ISafeSearchAnnotation {

                    /**
                     * Constructs a new SafeSearchAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ISafeSearchAnnotation);

                    /** SafeSearchAnnotation adult. */
                    public adult: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** SafeSearchAnnotation spoof. */
                    public spoof: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** SafeSearchAnnotation medical. */
                    public medical: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** SafeSearchAnnotation violence. */
                    public violence: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /** SafeSearchAnnotation racy. */
                    public racy: (google.cloud.vision.v1.Likelihood|keyof typeof google.cloud.vision.v1.Likelihood);

                    /**
                     * Creates a new SafeSearchAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafeSearchAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ISafeSearchAnnotation): google.cloud.vision.v1.SafeSearchAnnotation;

                    /**
                     * Encodes the specified SafeSearchAnnotation message. Does not implicitly {@link google.cloud.vision.v1.SafeSearchAnnotation.verify|verify} messages.
                     * @param message SafeSearchAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ISafeSearchAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafeSearchAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.SafeSearchAnnotation.verify|verify} messages.
                     * @param message SafeSearchAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ISafeSearchAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafeSearchAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafeSearchAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.SafeSearchAnnotation;

                    /**
                     * Decodes a SafeSearchAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafeSearchAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.SafeSearchAnnotation;

                    /**
                     * Verifies a SafeSearchAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafeSearchAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafeSearchAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.SafeSearchAnnotation;

                    /**
                     * Creates a plain object from a SafeSearchAnnotation message. Also converts values to other types if specified.
                     * @param message SafeSearchAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.SafeSearchAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafeSearchAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafeSearchAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LatLongRect. */
                interface ILatLongRect {

                    /** LatLongRect minLatLng */
                    minLatLng?: (google.type.ILatLng|null);

                    /** LatLongRect maxLatLng */
                    maxLatLng?: (google.type.ILatLng|null);
                }

                /** Represents a LatLongRect. */
                class LatLongRect implements ILatLongRect {

                    /**
                     * Constructs a new LatLongRect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ILatLongRect);

                    /** LatLongRect minLatLng. */
                    public minLatLng?: (google.type.ILatLng|null);

                    /** LatLongRect maxLatLng. */
                    public maxLatLng?: (google.type.ILatLng|null);

                    /**
                     * Creates a new LatLongRect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LatLongRect instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ILatLongRect): google.cloud.vision.v1.LatLongRect;

                    /**
                     * Encodes the specified LatLongRect message. Does not implicitly {@link google.cloud.vision.v1.LatLongRect.verify|verify} messages.
                     * @param message LatLongRect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ILatLongRect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LatLongRect message, length delimited. Does not implicitly {@link google.cloud.vision.v1.LatLongRect.verify|verify} messages.
                     * @param message LatLongRect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ILatLongRect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LatLongRect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LatLongRect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.LatLongRect;

                    /**
                     * Decodes a LatLongRect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LatLongRect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.LatLongRect;

                    /**
                     * Verifies a LatLongRect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LatLongRect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LatLongRect
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.LatLongRect;

                    /**
                     * Creates a plain object from a LatLongRect message. Also converts values to other types if specified.
                     * @param message LatLongRect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.LatLongRect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LatLongRect to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LatLongRect
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ColorInfo. */
                interface IColorInfo {

                    /** ColorInfo color */
                    color?: (google.type.IColor|null);

                    /** ColorInfo score */
                    score?: (number|null);

                    /** ColorInfo pixelFraction */
                    pixelFraction?: (number|null);
                }

                /** Represents a ColorInfo. */
                class ColorInfo implements IColorInfo {

                    /**
                     * Constructs a new ColorInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IColorInfo);

                    /** ColorInfo color. */
                    public color?: (google.type.IColor|null);

                    /** ColorInfo score. */
                    public score: number;

                    /** ColorInfo pixelFraction. */
                    public pixelFraction: number;

                    /**
                     * Creates a new ColorInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ColorInfo instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IColorInfo): google.cloud.vision.v1.ColorInfo;

                    /**
                     * Encodes the specified ColorInfo message. Does not implicitly {@link google.cloud.vision.v1.ColorInfo.verify|verify} messages.
                     * @param message ColorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ColorInfo message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ColorInfo.verify|verify} messages.
                     * @param message ColorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ColorInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ColorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ColorInfo;

                    /**
                     * Decodes a ColorInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ColorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ColorInfo;

                    /**
                     * Verifies a ColorInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ColorInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ColorInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ColorInfo;

                    /**
                     * Creates a plain object from a ColorInfo message. Also converts values to other types if specified.
                     * @param message ColorInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ColorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ColorInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ColorInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DominantColorsAnnotation. */
                interface IDominantColorsAnnotation {

                    /** DominantColorsAnnotation colors */
                    colors?: (google.cloud.vision.v1.IColorInfo[]|null);
                }

                /** Represents a DominantColorsAnnotation. */
                class DominantColorsAnnotation implements IDominantColorsAnnotation {

                    /**
                     * Constructs a new DominantColorsAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IDominantColorsAnnotation);

                    /** DominantColorsAnnotation colors. */
                    public colors: google.cloud.vision.v1.IColorInfo[];

                    /**
                     * Creates a new DominantColorsAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DominantColorsAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IDominantColorsAnnotation): google.cloud.vision.v1.DominantColorsAnnotation;

                    /**
                     * Encodes the specified DominantColorsAnnotation message. Does not implicitly {@link google.cloud.vision.v1.DominantColorsAnnotation.verify|verify} messages.
                     * @param message DominantColorsAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IDominantColorsAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DominantColorsAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.DominantColorsAnnotation.verify|verify} messages.
                     * @param message DominantColorsAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IDominantColorsAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DominantColorsAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DominantColorsAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.DominantColorsAnnotation;

                    /**
                     * Decodes a DominantColorsAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DominantColorsAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.DominantColorsAnnotation;

                    /**
                     * Verifies a DominantColorsAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DominantColorsAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DominantColorsAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.DominantColorsAnnotation;

                    /**
                     * Creates a plain object from a DominantColorsAnnotation message. Also converts values to other types if specified.
                     * @param message DominantColorsAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.DominantColorsAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DominantColorsAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DominantColorsAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageProperties. */
                interface IImageProperties {

                    /** ImageProperties dominantColors */
                    dominantColors?: (google.cloud.vision.v1.IDominantColorsAnnotation|null);
                }

                /** Represents an ImageProperties. */
                class ImageProperties implements IImageProperties {

                    /**
                     * Constructs a new ImageProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImageProperties);

                    /** ImageProperties dominantColors. */
                    public dominantColors?: (google.cloud.vision.v1.IDominantColorsAnnotation|null);

                    /**
                     * Creates a new ImageProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageProperties instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImageProperties): google.cloud.vision.v1.ImageProperties;

                    /**
                     * Encodes the specified ImageProperties message. Does not implicitly {@link google.cloud.vision.v1.ImageProperties.verify|verify} messages.
                     * @param message ImageProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImageProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageProperties message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImageProperties.verify|verify} messages.
                     * @param message ImageProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImageProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImageProperties;

                    /**
                     * Decodes an ImageProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImageProperties;

                    /**
                     * Verifies an ImageProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImageProperties;

                    /**
                     * Creates a plain object from an ImageProperties message. Also converts values to other types if specified.
                     * @param message ImageProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImageProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CropHint. */
                interface ICropHint {

                    /** CropHint boundingPoly */
                    boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** CropHint confidence */
                    confidence?: (number|null);

                    /** CropHint importanceFraction */
                    importanceFraction?: (number|null);
                }

                /** Represents a CropHint. */
                class CropHint implements ICropHint {

                    /**
                     * Constructs a new CropHint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICropHint);

                    /** CropHint boundingPoly. */
                    public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** CropHint confidence. */
                    public confidence: number;

                    /** CropHint importanceFraction. */
                    public importanceFraction: number;

                    /**
                     * Creates a new CropHint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CropHint instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICropHint): google.cloud.vision.v1.CropHint;

                    /**
                     * Encodes the specified CropHint message. Does not implicitly {@link google.cloud.vision.v1.CropHint.verify|verify} messages.
                     * @param message CropHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICropHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CropHint message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CropHint.verify|verify} messages.
                     * @param message CropHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICropHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CropHint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CropHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CropHint;

                    /**
                     * Decodes a CropHint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CropHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CropHint;

                    /**
                     * Verifies a CropHint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CropHint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CropHint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CropHint;

                    /**
                     * Creates a plain object from a CropHint message. Also converts values to other types if specified.
                     * @param message CropHint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CropHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CropHint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CropHint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CropHintsAnnotation. */
                interface ICropHintsAnnotation {

                    /** CropHintsAnnotation cropHints */
                    cropHints?: (google.cloud.vision.v1.ICropHint[]|null);
                }

                /** Represents a CropHintsAnnotation. */
                class CropHintsAnnotation implements ICropHintsAnnotation {

                    /**
                     * Constructs a new CropHintsAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICropHintsAnnotation);

                    /** CropHintsAnnotation cropHints. */
                    public cropHints: google.cloud.vision.v1.ICropHint[];

                    /**
                     * Creates a new CropHintsAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CropHintsAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICropHintsAnnotation): google.cloud.vision.v1.CropHintsAnnotation;

                    /**
                     * Encodes the specified CropHintsAnnotation message. Does not implicitly {@link google.cloud.vision.v1.CropHintsAnnotation.verify|verify} messages.
                     * @param message CropHintsAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICropHintsAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CropHintsAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CropHintsAnnotation.verify|verify} messages.
                     * @param message CropHintsAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICropHintsAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CropHintsAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CropHintsAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CropHintsAnnotation;

                    /**
                     * Decodes a CropHintsAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CropHintsAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CropHintsAnnotation;

                    /**
                     * Verifies a CropHintsAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CropHintsAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CropHintsAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CropHintsAnnotation;

                    /**
                     * Creates a plain object from a CropHintsAnnotation message. Also converts values to other types if specified.
                     * @param message CropHintsAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CropHintsAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CropHintsAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CropHintsAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CropHintsParams. */
                interface ICropHintsParams {

                    /** CropHintsParams aspectRatios */
                    aspectRatios?: (number[]|null);
                }

                /** Represents a CropHintsParams. */
                class CropHintsParams implements ICropHintsParams {

                    /**
                     * Constructs a new CropHintsParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICropHintsParams);

                    /** CropHintsParams aspectRatios. */
                    public aspectRatios: number[];

                    /**
                     * Creates a new CropHintsParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CropHintsParams instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICropHintsParams): google.cloud.vision.v1.CropHintsParams;

                    /**
                     * Encodes the specified CropHintsParams message. Does not implicitly {@link google.cloud.vision.v1.CropHintsParams.verify|verify} messages.
                     * @param message CropHintsParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICropHintsParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CropHintsParams message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CropHintsParams.verify|verify} messages.
                     * @param message CropHintsParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICropHintsParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CropHintsParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CropHintsParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CropHintsParams;

                    /**
                     * Decodes a CropHintsParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CropHintsParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CropHintsParams;

                    /**
                     * Verifies a CropHintsParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CropHintsParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CropHintsParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CropHintsParams;

                    /**
                     * Creates a plain object from a CropHintsParams message. Also converts values to other types if specified.
                     * @param message CropHintsParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CropHintsParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CropHintsParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CropHintsParams
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WebDetectionParams. */
                interface IWebDetectionParams {

                    /** WebDetectionParams includeGeoResults */
                    includeGeoResults?: (boolean|null);
                }

                /** Represents a WebDetectionParams. */
                class WebDetectionParams implements IWebDetectionParams {

                    /**
                     * Constructs a new WebDetectionParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IWebDetectionParams);

                    /** WebDetectionParams includeGeoResults. */
                    public includeGeoResults: boolean;

                    /**
                     * Creates a new WebDetectionParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebDetectionParams instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IWebDetectionParams): google.cloud.vision.v1.WebDetectionParams;

                    /**
                     * Encodes the specified WebDetectionParams message. Does not implicitly {@link google.cloud.vision.v1.WebDetectionParams.verify|verify} messages.
                     * @param message WebDetectionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IWebDetectionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebDetectionParams message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetectionParams.verify|verify} messages.
                     * @param message WebDetectionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IWebDetectionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebDetectionParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebDetectionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetectionParams;

                    /**
                     * Decodes a WebDetectionParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebDetectionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetectionParams;

                    /**
                     * Verifies a WebDetectionParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebDetectionParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebDetectionParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetectionParams;

                    /**
                     * Creates a plain object from a WebDetectionParams message. Also converts values to other types if specified.
                     * @param message WebDetectionParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.WebDetectionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebDetectionParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WebDetectionParams
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextDetectionParams. */
                interface ITextDetectionParams {

                    /** TextDetectionParams enableTextDetectionConfidenceScore */
                    enableTextDetectionConfidenceScore?: (boolean|null);

                    /** TextDetectionParams advancedOcrOptions */
                    advancedOcrOptions?: (string[]|null);
                }

                /** Represents a TextDetectionParams. */
                class TextDetectionParams implements ITextDetectionParams {

                    /**
                     * Constructs a new TextDetectionParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ITextDetectionParams);

                    /** TextDetectionParams enableTextDetectionConfidenceScore. */
                    public enableTextDetectionConfidenceScore: boolean;

                    /** TextDetectionParams advancedOcrOptions. */
                    public advancedOcrOptions: string[];

                    /**
                     * Creates a new TextDetectionParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextDetectionParams instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ITextDetectionParams): google.cloud.vision.v1.TextDetectionParams;

                    /**
                     * Encodes the specified TextDetectionParams message. Does not implicitly {@link google.cloud.vision.v1.TextDetectionParams.verify|verify} messages.
                     * @param message TextDetectionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ITextDetectionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextDetectionParams message, length delimited. Does not implicitly {@link google.cloud.vision.v1.TextDetectionParams.verify|verify} messages.
                     * @param message TextDetectionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ITextDetectionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextDetectionParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextDetectionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.TextDetectionParams;

                    /**
                     * Decodes a TextDetectionParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextDetectionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.TextDetectionParams;

                    /**
                     * Verifies a TextDetectionParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextDetectionParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextDetectionParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.TextDetectionParams;

                    /**
                     * Creates a plain object from a TextDetectionParams message. Also converts values to other types if specified.
                     * @param message TextDetectionParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.TextDetectionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextDetectionParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextDetectionParams
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageContext. */
                interface IImageContext {

                    /** ImageContext latLongRect */
                    latLongRect?: (google.cloud.vision.v1.ILatLongRect|null);

                    /** ImageContext languageHints */
                    languageHints?: (string[]|null);

                    /** ImageContext cropHintsParams */
                    cropHintsParams?: (google.cloud.vision.v1.ICropHintsParams|null);

                    /** ImageContext productSearchParams */
                    productSearchParams?: (google.cloud.vision.v1.IProductSearchParams|null);

                    /** ImageContext webDetectionParams */
                    webDetectionParams?: (google.cloud.vision.v1.IWebDetectionParams|null);

                    /** ImageContext textDetectionParams */
                    textDetectionParams?: (google.cloud.vision.v1.ITextDetectionParams|null);
                }

                /** Represents an ImageContext. */
                class ImageContext implements IImageContext {

                    /**
                     * Constructs a new ImageContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImageContext);

                    /** ImageContext latLongRect. */
                    public latLongRect?: (google.cloud.vision.v1.ILatLongRect|null);

                    /** ImageContext languageHints. */
                    public languageHints: string[];

                    /** ImageContext cropHintsParams. */
                    public cropHintsParams?: (google.cloud.vision.v1.ICropHintsParams|null);

                    /** ImageContext productSearchParams. */
                    public productSearchParams?: (google.cloud.vision.v1.IProductSearchParams|null);

                    /** ImageContext webDetectionParams. */
                    public webDetectionParams?: (google.cloud.vision.v1.IWebDetectionParams|null);

                    /** ImageContext textDetectionParams. */
                    public textDetectionParams?: (google.cloud.vision.v1.ITextDetectionParams|null);

                    /**
                     * Creates a new ImageContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageContext instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImageContext): google.cloud.vision.v1.ImageContext;

                    /**
                     * Encodes the specified ImageContext message. Does not implicitly {@link google.cloud.vision.v1.ImageContext.verify|verify} messages.
                     * @param message ImageContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImageContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageContext message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImageContext.verify|verify} messages.
                     * @param message ImageContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImageContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImageContext;

                    /**
                     * Decodes an ImageContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImageContext;

                    /**
                     * Verifies an ImageContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImageContext;

                    /**
                     * Creates a plain object from an ImageContext message. Also converts values to other types if specified.
                     * @param message ImageContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImageContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateImageRequest. */
                interface IAnnotateImageRequest {

                    /** AnnotateImageRequest image */
                    image?: (google.cloud.vision.v1.IImage|null);

                    /** AnnotateImageRequest features */
                    features?: (google.cloud.vision.v1.IFeature[]|null);

                    /** AnnotateImageRequest imageContext */
                    imageContext?: (google.cloud.vision.v1.IImageContext|null);
                }

                /** Represents an AnnotateImageRequest. */
                class AnnotateImageRequest implements IAnnotateImageRequest {

                    /**
                     * Constructs a new AnnotateImageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAnnotateImageRequest);

                    /** AnnotateImageRequest image. */
                    public image?: (google.cloud.vision.v1.IImage|null);

                    /** AnnotateImageRequest features. */
                    public features: google.cloud.vision.v1.IFeature[];

                    /** AnnotateImageRequest imageContext. */
                    public imageContext?: (google.cloud.vision.v1.IImageContext|null);

                    /**
                     * Creates a new AnnotateImageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateImageRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAnnotateImageRequest): google.cloud.vision.v1.AnnotateImageRequest;

                    /**
                     * Encodes the specified AnnotateImageRequest message. Does not implicitly {@link google.cloud.vision.v1.AnnotateImageRequest.verify|verify} messages.
                     * @param message AnnotateImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAnnotateImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateImageRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AnnotateImageRequest.verify|verify} messages.
                     * @param message AnnotateImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAnnotateImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateImageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AnnotateImageRequest;

                    /**
                     * Decodes an AnnotateImageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AnnotateImageRequest;

                    /**
                     * Verifies an AnnotateImageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateImageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateImageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AnnotateImageRequest;

                    /**
                     * Creates a plain object from an AnnotateImageRequest message. Also converts values to other types if specified.
                     * @param message AnnotateImageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AnnotateImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateImageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateImageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageAnnotationContext. */
                interface IImageAnnotationContext {

                    /** ImageAnnotationContext uri */
                    uri?: (string|null);

                    /** ImageAnnotationContext pageNumber */
                    pageNumber?: (number|null);
                }

                /** Represents an ImageAnnotationContext. */
                class ImageAnnotationContext implements IImageAnnotationContext {

                    /**
                     * Constructs a new ImageAnnotationContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImageAnnotationContext);

                    /** ImageAnnotationContext uri. */
                    public uri: string;

                    /** ImageAnnotationContext pageNumber. */
                    public pageNumber: number;

                    /**
                     * Creates a new ImageAnnotationContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageAnnotationContext instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImageAnnotationContext): google.cloud.vision.v1.ImageAnnotationContext;

                    /**
                     * Encodes the specified ImageAnnotationContext message. Does not implicitly {@link google.cloud.vision.v1.ImageAnnotationContext.verify|verify} messages.
                     * @param message ImageAnnotationContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImageAnnotationContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageAnnotationContext message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImageAnnotationContext.verify|verify} messages.
                     * @param message ImageAnnotationContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImageAnnotationContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageAnnotationContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageAnnotationContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImageAnnotationContext;

                    /**
                     * Decodes an ImageAnnotationContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageAnnotationContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImageAnnotationContext;

                    /**
                     * Verifies an ImageAnnotationContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageAnnotationContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageAnnotationContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImageAnnotationContext;

                    /**
                     * Creates a plain object from an ImageAnnotationContext message. Also converts values to other types if specified.
                     * @param message ImageAnnotationContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImageAnnotationContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageAnnotationContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageAnnotationContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateImageResponse. */
                interface IAnnotateImageResponse {

                    /** AnnotateImageResponse faceAnnotations */
                    faceAnnotations?: (google.cloud.vision.v1.IFaceAnnotation[]|null);

                    /** AnnotateImageResponse landmarkAnnotations */
                    landmarkAnnotations?: (google.cloud.vision.v1.IEntityAnnotation[]|null);

                    /** AnnotateImageResponse logoAnnotations */
                    logoAnnotations?: (google.cloud.vision.v1.IEntityAnnotation[]|null);

                    /** AnnotateImageResponse labelAnnotations */
                    labelAnnotations?: (google.cloud.vision.v1.IEntityAnnotation[]|null);

                    /** AnnotateImageResponse localizedObjectAnnotations */
                    localizedObjectAnnotations?: (google.cloud.vision.v1.ILocalizedObjectAnnotation[]|null);

                    /** AnnotateImageResponse textAnnotations */
                    textAnnotations?: (google.cloud.vision.v1.IEntityAnnotation[]|null);

                    /** AnnotateImageResponse fullTextAnnotation */
                    fullTextAnnotation?: (google.cloud.vision.v1.ITextAnnotation|null);

                    /** AnnotateImageResponse safeSearchAnnotation */
                    safeSearchAnnotation?: (google.cloud.vision.v1.ISafeSearchAnnotation|null);

                    /** AnnotateImageResponse imagePropertiesAnnotation */
                    imagePropertiesAnnotation?: (google.cloud.vision.v1.IImageProperties|null);

                    /** AnnotateImageResponse cropHintsAnnotation */
                    cropHintsAnnotation?: (google.cloud.vision.v1.ICropHintsAnnotation|null);

                    /** AnnotateImageResponse webDetection */
                    webDetection?: (google.cloud.vision.v1.IWebDetection|null);

                    /** AnnotateImageResponse productSearchResults */
                    productSearchResults?: (google.cloud.vision.v1.IProductSearchResults|null);

                    /** AnnotateImageResponse error */
                    error?: (google.rpc.IStatus|null);

                    /** AnnotateImageResponse context */
                    context?: (google.cloud.vision.v1.IImageAnnotationContext|null);
                }

                /** Represents an AnnotateImageResponse. */
                class AnnotateImageResponse implements IAnnotateImageResponse {

                    /**
                     * Constructs a new AnnotateImageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAnnotateImageResponse);

                    /** AnnotateImageResponse faceAnnotations. */
                    public faceAnnotations: google.cloud.vision.v1.IFaceAnnotation[];

                    /** AnnotateImageResponse landmarkAnnotations. */
                    public landmarkAnnotations: google.cloud.vision.v1.IEntityAnnotation[];

                    /** AnnotateImageResponse logoAnnotations. */
                    public logoAnnotations: google.cloud.vision.v1.IEntityAnnotation[];

                    /** AnnotateImageResponse labelAnnotations. */
                    public labelAnnotations: google.cloud.vision.v1.IEntityAnnotation[];

                    /** AnnotateImageResponse localizedObjectAnnotations. */
                    public localizedObjectAnnotations: google.cloud.vision.v1.ILocalizedObjectAnnotation[];

                    /** AnnotateImageResponse textAnnotations. */
                    public textAnnotations: google.cloud.vision.v1.IEntityAnnotation[];

                    /** AnnotateImageResponse fullTextAnnotation. */
                    public fullTextAnnotation?: (google.cloud.vision.v1.ITextAnnotation|null);

                    /** AnnotateImageResponse safeSearchAnnotation. */
                    public safeSearchAnnotation?: (google.cloud.vision.v1.ISafeSearchAnnotation|null);

                    /** AnnotateImageResponse imagePropertiesAnnotation. */
                    public imagePropertiesAnnotation?: (google.cloud.vision.v1.IImageProperties|null);

                    /** AnnotateImageResponse cropHintsAnnotation. */
                    public cropHintsAnnotation?: (google.cloud.vision.v1.ICropHintsAnnotation|null);

                    /** AnnotateImageResponse webDetection. */
                    public webDetection?: (google.cloud.vision.v1.IWebDetection|null);

                    /** AnnotateImageResponse productSearchResults. */
                    public productSearchResults?: (google.cloud.vision.v1.IProductSearchResults|null);

                    /** AnnotateImageResponse error. */
                    public error?: (google.rpc.IStatus|null);

                    /** AnnotateImageResponse context. */
                    public context?: (google.cloud.vision.v1.IImageAnnotationContext|null);

                    /**
                     * Creates a new AnnotateImageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateImageResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAnnotateImageResponse): google.cloud.vision.v1.AnnotateImageResponse;

                    /**
                     * Encodes the specified AnnotateImageResponse message. Does not implicitly {@link google.cloud.vision.v1.AnnotateImageResponse.verify|verify} messages.
                     * @param message AnnotateImageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAnnotateImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateImageResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AnnotateImageResponse.verify|verify} messages.
                     * @param message AnnotateImageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAnnotateImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateImageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateImageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AnnotateImageResponse;

                    /**
                     * Decodes an AnnotateImageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateImageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AnnotateImageResponse;

                    /**
                     * Verifies an AnnotateImageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateImageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateImageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AnnotateImageResponse;

                    /**
                     * Creates a plain object from an AnnotateImageResponse message. Also converts values to other types if specified.
                     * @param message AnnotateImageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AnnotateImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateImageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateImageResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchAnnotateImagesRequest. */
                interface IBatchAnnotateImagesRequest {

                    /** BatchAnnotateImagesRequest requests */
                    requests?: (google.cloud.vision.v1.IAnnotateImageRequest[]|null);

                    /** BatchAnnotateImagesRequest parent */
                    parent?: (string|null);

                    /** BatchAnnotateImagesRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchAnnotateImagesRequest. */
                class BatchAnnotateImagesRequest implements IBatchAnnotateImagesRequest {

                    /**
                     * Constructs a new BatchAnnotateImagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBatchAnnotateImagesRequest);

                    /** BatchAnnotateImagesRequest requests. */
                    public requests: google.cloud.vision.v1.IAnnotateImageRequest[];

                    /** BatchAnnotateImagesRequest parent. */
                    public parent: string;

                    /** BatchAnnotateImagesRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new BatchAnnotateImagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchAnnotateImagesRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBatchAnnotateImagesRequest): google.cloud.vision.v1.BatchAnnotateImagesRequest;

                    /**
                     * Encodes the specified BatchAnnotateImagesRequest message. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateImagesRequest.verify|verify} messages.
                     * @param message BatchAnnotateImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBatchAnnotateImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchAnnotateImagesRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateImagesRequest.verify|verify} messages.
                     * @param message BatchAnnotateImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBatchAnnotateImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchAnnotateImagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchAnnotateImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BatchAnnotateImagesRequest;

                    /**
                     * Decodes a BatchAnnotateImagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchAnnotateImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BatchAnnotateImagesRequest;

                    /**
                     * Verifies a BatchAnnotateImagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchAnnotateImagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchAnnotateImagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BatchAnnotateImagesRequest;

                    /**
                     * Creates a plain object from a BatchAnnotateImagesRequest message. Also converts values to other types if specified.
                     * @param message BatchAnnotateImagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BatchAnnotateImagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchAnnotateImagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchAnnotateImagesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchAnnotateImagesResponse. */
                interface IBatchAnnotateImagesResponse {

                    /** BatchAnnotateImagesResponse responses */
                    responses?: (google.cloud.vision.v1.IAnnotateImageResponse[]|null);
                }

                /** Represents a BatchAnnotateImagesResponse. */
                class BatchAnnotateImagesResponse implements IBatchAnnotateImagesResponse {

                    /**
                     * Constructs a new BatchAnnotateImagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBatchAnnotateImagesResponse);

                    /** BatchAnnotateImagesResponse responses. */
                    public responses: google.cloud.vision.v1.IAnnotateImageResponse[];

                    /**
                     * Creates a new BatchAnnotateImagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchAnnotateImagesResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBatchAnnotateImagesResponse): google.cloud.vision.v1.BatchAnnotateImagesResponse;

                    /**
                     * Encodes the specified BatchAnnotateImagesResponse message. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateImagesResponse.verify|verify} messages.
                     * @param message BatchAnnotateImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBatchAnnotateImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchAnnotateImagesResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateImagesResponse.verify|verify} messages.
                     * @param message BatchAnnotateImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBatchAnnotateImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchAnnotateImagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchAnnotateImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BatchAnnotateImagesResponse;

                    /**
                     * Decodes a BatchAnnotateImagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchAnnotateImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BatchAnnotateImagesResponse;

                    /**
                     * Verifies a BatchAnnotateImagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchAnnotateImagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchAnnotateImagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BatchAnnotateImagesResponse;

                    /**
                     * Creates a plain object from a BatchAnnotateImagesResponse message. Also converts values to other types if specified.
                     * @param message BatchAnnotateImagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BatchAnnotateImagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchAnnotateImagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchAnnotateImagesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateFileRequest. */
                interface IAnnotateFileRequest {

                    /** AnnotateFileRequest inputConfig */
                    inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AnnotateFileRequest features */
                    features?: (google.cloud.vision.v1.IFeature[]|null);

                    /** AnnotateFileRequest imageContext */
                    imageContext?: (google.cloud.vision.v1.IImageContext|null);

                    /** AnnotateFileRequest pages */
                    pages?: (number[]|null);
                }

                /** Represents an AnnotateFileRequest. */
                class AnnotateFileRequest implements IAnnotateFileRequest {

                    /**
                     * Constructs a new AnnotateFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAnnotateFileRequest);

                    /** AnnotateFileRequest inputConfig. */
                    public inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AnnotateFileRequest features. */
                    public features: google.cloud.vision.v1.IFeature[];

                    /** AnnotateFileRequest imageContext. */
                    public imageContext?: (google.cloud.vision.v1.IImageContext|null);

                    /** AnnotateFileRequest pages. */
                    public pages: number[];

                    /**
                     * Creates a new AnnotateFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateFileRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAnnotateFileRequest): google.cloud.vision.v1.AnnotateFileRequest;

                    /**
                     * Encodes the specified AnnotateFileRequest message. Does not implicitly {@link google.cloud.vision.v1.AnnotateFileRequest.verify|verify} messages.
                     * @param message AnnotateFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAnnotateFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateFileRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AnnotateFileRequest.verify|verify} messages.
                     * @param message AnnotateFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAnnotateFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AnnotateFileRequest;

                    /**
                     * Decodes an AnnotateFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AnnotateFileRequest;

                    /**
                     * Verifies an AnnotateFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AnnotateFileRequest;

                    /**
                     * Creates a plain object from an AnnotateFileRequest message. Also converts values to other types if specified.
                     * @param message AnnotateFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AnnotateFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateFileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateFileResponse. */
                interface IAnnotateFileResponse {

                    /** AnnotateFileResponse inputConfig */
                    inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AnnotateFileResponse responses */
                    responses?: (google.cloud.vision.v1.IAnnotateImageResponse[]|null);

                    /** AnnotateFileResponse totalPages */
                    totalPages?: (number|null);

                    /** AnnotateFileResponse error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents an AnnotateFileResponse. */
                class AnnotateFileResponse implements IAnnotateFileResponse {

                    /**
                     * Constructs a new AnnotateFileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAnnotateFileResponse);

                    /** AnnotateFileResponse inputConfig. */
                    public inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AnnotateFileResponse responses. */
                    public responses: google.cloud.vision.v1.IAnnotateImageResponse[];

                    /** AnnotateFileResponse totalPages. */
                    public totalPages: number;

                    /** AnnotateFileResponse error. */
                    public error?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new AnnotateFileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateFileResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAnnotateFileResponse): google.cloud.vision.v1.AnnotateFileResponse;

                    /**
                     * Encodes the specified AnnotateFileResponse message. Does not implicitly {@link google.cloud.vision.v1.AnnotateFileResponse.verify|verify} messages.
                     * @param message AnnotateFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAnnotateFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateFileResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AnnotateFileResponse.verify|verify} messages.
                     * @param message AnnotateFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAnnotateFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateFileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AnnotateFileResponse;

                    /**
                     * Decodes an AnnotateFileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AnnotateFileResponse;

                    /**
                     * Verifies an AnnotateFileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateFileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateFileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AnnotateFileResponse;

                    /**
                     * Creates a plain object from an AnnotateFileResponse message. Also converts values to other types if specified.
                     * @param message AnnotateFileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AnnotateFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateFileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateFileResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchAnnotateFilesRequest. */
                interface IBatchAnnotateFilesRequest {

                    /** BatchAnnotateFilesRequest requests */
                    requests?: (google.cloud.vision.v1.IAnnotateFileRequest[]|null);

                    /** BatchAnnotateFilesRequest parent */
                    parent?: (string|null);

                    /** BatchAnnotateFilesRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchAnnotateFilesRequest. */
                class BatchAnnotateFilesRequest implements IBatchAnnotateFilesRequest {

                    /**
                     * Constructs a new BatchAnnotateFilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBatchAnnotateFilesRequest);

                    /** BatchAnnotateFilesRequest requests. */
                    public requests: google.cloud.vision.v1.IAnnotateFileRequest[];

                    /** BatchAnnotateFilesRequest parent. */
                    public parent: string;

                    /** BatchAnnotateFilesRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new BatchAnnotateFilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchAnnotateFilesRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBatchAnnotateFilesRequest): google.cloud.vision.v1.BatchAnnotateFilesRequest;

                    /**
                     * Encodes the specified BatchAnnotateFilesRequest message. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateFilesRequest.verify|verify} messages.
                     * @param message BatchAnnotateFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBatchAnnotateFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchAnnotateFilesRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateFilesRequest.verify|verify} messages.
                     * @param message BatchAnnotateFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBatchAnnotateFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchAnnotateFilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchAnnotateFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BatchAnnotateFilesRequest;

                    /**
                     * Decodes a BatchAnnotateFilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchAnnotateFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BatchAnnotateFilesRequest;

                    /**
                     * Verifies a BatchAnnotateFilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchAnnotateFilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchAnnotateFilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BatchAnnotateFilesRequest;

                    /**
                     * Creates a plain object from a BatchAnnotateFilesRequest message. Also converts values to other types if specified.
                     * @param message BatchAnnotateFilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BatchAnnotateFilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchAnnotateFilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchAnnotateFilesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchAnnotateFilesResponse. */
                interface IBatchAnnotateFilesResponse {

                    /** BatchAnnotateFilesResponse responses */
                    responses?: (google.cloud.vision.v1.IAnnotateFileResponse[]|null);
                }

                /** Represents a BatchAnnotateFilesResponse. */
                class BatchAnnotateFilesResponse implements IBatchAnnotateFilesResponse {

                    /**
                     * Constructs a new BatchAnnotateFilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBatchAnnotateFilesResponse);

                    /** BatchAnnotateFilesResponse responses. */
                    public responses: google.cloud.vision.v1.IAnnotateFileResponse[];

                    /**
                     * Creates a new BatchAnnotateFilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchAnnotateFilesResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBatchAnnotateFilesResponse): google.cloud.vision.v1.BatchAnnotateFilesResponse;

                    /**
                     * Encodes the specified BatchAnnotateFilesResponse message. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateFilesResponse.verify|verify} messages.
                     * @param message BatchAnnotateFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBatchAnnotateFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchAnnotateFilesResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BatchAnnotateFilesResponse.verify|verify} messages.
                     * @param message BatchAnnotateFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBatchAnnotateFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchAnnotateFilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchAnnotateFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BatchAnnotateFilesResponse;

                    /**
                     * Decodes a BatchAnnotateFilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchAnnotateFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BatchAnnotateFilesResponse;

                    /**
                     * Verifies a BatchAnnotateFilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchAnnotateFilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchAnnotateFilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BatchAnnotateFilesResponse;

                    /**
                     * Creates a plain object from a BatchAnnotateFilesResponse message. Also converts values to other types if specified.
                     * @param message BatchAnnotateFilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BatchAnnotateFilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchAnnotateFilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchAnnotateFilesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncAnnotateFileRequest. */
                interface IAsyncAnnotateFileRequest {

                    /** AsyncAnnotateFileRequest inputConfig */
                    inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AsyncAnnotateFileRequest features */
                    features?: (google.cloud.vision.v1.IFeature[]|null);

                    /** AsyncAnnotateFileRequest imageContext */
                    imageContext?: (google.cloud.vision.v1.IImageContext|null);

                    /** AsyncAnnotateFileRequest outputConfig */
                    outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);
                }

                /** Represents an AsyncAnnotateFileRequest. */
                class AsyncAnnotateFileRequest implements IAsyncAnnotateFileRequest {

                    /**
                     * Constructs a new AsyncAnnotateFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncAnnotateFileRequest);

                    /** AsyncAnnotateFileRequest inputConfig. */
                    public inputConfig?: (google.cloud.vision.v1.IInputConfig|null);

                    /** AsyncAnnotateFileRequest features. */
                    public features: google.cloud.vision.v1.IFeature[];

                    /** AsyncAnnotateFileRequest imageContext. */
                    public imageContext?: (google.cloud.vision.v1.IImageContext|null);

                    /** AsyncAnnotateFileRequest outputConfig. */
                    public outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);

                    /**
                     * Creates a new AsyncAnnotateFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncAnnotateFileRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncAnnotateFileRequest): google.cloud.vision.v1.AsyncAnnotateFileRequest;

                    /**
                     * Encodes the specified AsyncAnnotateFileRequest message. Does not implicitly {@link google.cloud.vision.v1.AsyncAnnotateFileRequest.verify|verify} messages.
                     * @param message AsyncAnnotateFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncAnnotateFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncAnnotateFileRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncAnnotateFileRequest.verify|verify} messages.
                     * @param message AsyncAnnotateFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncAnnotateFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncAnnotateFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncAnnotateFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncAnnotateFileRequest;

                    /**
                     * Decodes an AsyncAnnotateFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncAnnotateFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncAnnotateFileRequest;

                    /**
                     * Verifies an AsyncAnnotateFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncAnnotateFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncAnnotateFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncAnnotateFileRequest;

                    /**
                     * Creates a plain object from an AsyncAnnotateFileRequest message. Also converts values to other types if specified.
                     * @param message AsyncAnnotateFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncAnnotateFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncAnnotateFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncAnnotateFileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncAnnotateFileResponse. */
                interface IAsyncAnnotateFileResponse {

                    /** AsyncAnnotateFileResponse outputConfig */
                    outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);
                }

                /** Represents an AsyncAnnotateFileResponse. */
                class AsyncAnnotateFileResponse implements IAsyncAnnotateFileResponse {

                    /**
                     * Constructs a new AsyncAnnotateFileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncAnnotateFileResponse);

                    /** AsyncAnnotateFileResponse outputConfig. */
                    public outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);

                    /**
                     * Creates a new AsyncAnnotateFileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncAnnotateFileResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncAnnotateFileResponse): google.cloud.vision.v1.AsyncAnnotateFileResponse;

                    /**
                     * Encodes the specified AsyncAnnotateFileResponse message. Does not implicitly {@link google.cloud.vision.v1.AsyncAnnotateFileResponse.verify|verify} messages.
                     * @param message AsyncAnnotateFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncAnnotateFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncAnnotateFileResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncAnnotateFileResponse.verify|verify} messages.
                     * @param message AsyncAnnotateFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncAnnotateFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncAnnotateFileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncAnnotateFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncAnnotateFileResponse;

                    /**
                     * Decodes an AsyncAnnotateFileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncAnnotateFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncAnnotateFileResponse;

                    /**
                     * Verifies an AsyncAnnotateFileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncAnnotateFileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncAnnotateFileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncAnnotateFileResponse;

                    /**
                     * Creates a plain object from an AsyncAnnotateFileResponse message. Also converts values to other types if specified.
                     * @param message AsyncAnnotateFileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncAnnotateFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncAnnotateFileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncAnnotateFileResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncBatchAnnotateImagesRequest. */
                interface IAsyncBatchAnnotateImagesRequest {

                    /** AsyncBatchAnnotateImagesRequest requests */
                    requests?: (google.cloud.vision.v1.IAnnotateImageRequest[]|null);

                    /** AsyncBatchAnnotateImagesRequest outputConfig */
                    outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);

                    /** AsyncBatchAnnotateImagesRequest parent */
                    parent?: (string|null);

                    /** AsyncBatchAnnotateImagesRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents an AsyncBatchAnnotateImagesRequest. */
                class AsyncBatchAnnotateImagesRequest implements IAsyncBatchAnnotateImagesRequest {

                    /**
                     * Constructs a new AsyncBatchAnnotateImagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest);

                    /** AsyncBatchAnnotateImagesRequest requests. */
                    public requests: google.cloud.vision.v1.IAnnotateImageRequest[];

                    /** AsyncBatchAnnotateImagesRequest outputConfig. */
                    public outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);

                    /** AsyncBatchAnnotateImagesRequest parent. */
                    public parent: string;

                    /** AsyncBatchAnnotateImagesRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new AsyncBatchAnnotateImagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncBatchAnnotateImagesRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest): google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest;

                    /**
                     * Encodes the specified AsyncBatchAnnotateImagesRequest message. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest.verify|verify} messages.
                     * @param message AsyncBatchAnnotateImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncBatchAnnotateImagesRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest.verify|verify} messages.
                     * @param message AsyncBatchAnnotateImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncBatchAnnotateImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncBatchAnnotateImagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncBatchAnnotateImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest;

                    /**
                     * Decodes an AsyncBatchAnnotateImagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncBatchAnnotateImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest;

                    /**
                     * Verifies an AsyncBatchAnnotateImagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncBatchAnnotateImagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncBatchAnnotateImagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest;

                    /**
                     * Creates a plain object from an AsyncBatchAnnotateImagesRequest message. Also converts values to other types if specified.
                     * @param message AsyncBatchAnnotateImagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncBatchAnnotateImagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncBatchAnnotateImagesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncBatchAnnotateImagesResponse. */
                interface IAsyncBatchAnnotateImagesResponse {

                    /** AsyncBatchAnnotateImagesResponse outputConfig */
                    outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);
                }

                /** Represents an AsyncBatchAnnotateImagesResponse. */
                class AsyncBatchAnnotateImagesResponse implements IAsyncBatchAnnotateImagesResponse {

                    /**
                     * Constructs a new AsyncBatchAnnotateImagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateImagesResponse);

                    /** AsyncBatchAnnotateImagesResponse outputConfig. */
                    public outputConfig?: (google.cloud.vision.v1.IOutputConfig|null);

                    /**
                     * Creates a new AsyncBatchAnnotateImagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncBatchAnnotateImagesResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateImagesResponse): google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse;

                    /**
                     * Encodes the specified AsyncBatchAnnotateImagesResponse message. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse.verify|verify} messages.
                     * @param message AsyncBatchAnnotateImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncBatchAnnotateImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncBatchAnnotateImagesResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse.verify|verify} messages.
                     * @param message AsyncBatchAnnotateImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncBatchAnnotateImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncBatchAnnotateImagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncBatchAnnotateImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse;

                    /**
                     * Decodes an AsyncBatchAnnotateImagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncBatchAnnotateImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse;

                    /**
                     * Verifies an AsyncBatchAnnotateImagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncBatchAnnotateImagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncBatchAnnotateImagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse;

                    /**
                     * Creates a plain object from an AsyncBatchAnnotateImagesResponse message. Also converts values to other types if specified.
                     * @param message AsyncBatchAnnotateImagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncBatchAnnotateImagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncBatchAnnotateImagesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncBatchAnnotateFilesRequest. */
                interface IAsyncBatchAnnotateFilesRequest {

                    /** AsyncBatchAnnotateFilesRequest requests */
                    requests?: (google.cloud.vision.v1.IAsyncAnnotateFileRequest[]|null);

                    /** AsyncBatchAnnotateFilesRequest parent */
                    parent?: (string|null);

                    /** AsyncBatchAnnotateFilesRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents an AsyncBatchAnnotateFilesRequest. */
                class AsyncBatchAnnotateFilesRequest implements IAsyncBatchAnnotateFilesRequest {

                    /**
                     * Constructs a new AsyncBatchAnnotateFilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest);

                    /** AsyncBatchAnnotateFilesRequest requests. */
                    public requests: google.cloud.vision.v1.IAsyncAnnotateFileRequest[];

                    /** AsyncBatchAnnotateFilesRequest parent. */
                    public parent: string;

                    /** AsyncBatchAnnotateFilesRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new AsyncBatchAnnotateFilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncBatchAnnotateFilesRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest): google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest;

                    /**
                     * Encodes the specified AsyncBatchAnnotateFilesRequest message. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest.verify|verify} messages.
                     * @param message AsyncBatchAnnotateFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncBatchAnnotateFilesRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest.verify|verify} messages.
                     * @param message AsyncBatchAnnotateFilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncBatchAnnotateFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncBatchAnnotateFilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncBatchAnnotateFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest;

                    /**
                     * Decodes an AsyncBatchAnnotateFilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncBatchAnnotateFilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest;

                    /**
                     * Verifies an AsyncBatchAnnotateFilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncBatchAnnotateFilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncBatchAnnotateFilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest;

                    /**
                     * Creates a plain object from an AsyncBatchAnnotateFilesRequest message. Also converts values to other types if specified.
                     * @param message AsyncBatchAnnotateFilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncBatchAnnotateFilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncBatchAnnotateFilesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsyncBatchAnnotateFilesResponse. */
                interface IAsyncBatchAnnotateFilesResponse {

                    /** AsyncBatchAnnotateFilesResponse responses */
                    responses?: (google.cloud.vision.v1.IAsyncAnnotateFileResponse[]|null);
                }

                /** Represents an AsyncBatchAnnotateFilesResponse. */
                class AsyncBatchAnnotateFilesResponse implements IAsyncBatchAnnotateFilesResponse {

                    /**
                     * Constructs a new AsyncBatchAnnotateFilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateFilesResponse);

                    /** AsyncBatchAnnotateFilesResponse responses. */
                    public responses: google.cloud.vision.v1.IAsyncAnnotateFileResponse[];

                    /**
                     * Creates a new AsyncBatchAnnotateFilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsyncBatchAnnotateFilesResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAsyncBatchAnnotateFilesResponse): google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse;

                    /**
                     * Encodes the specified AsyncBatchAnnotateFilesResponse message. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse.verify|verify} messages.
                     * @param message AsyncBatchAnnotateFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAsyncBatchAnnotateFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsyncBatchAnnotateFilesResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse.verify|verify} messages.
                     * @param message AsyncBatchAnnotateFilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAsyncBatchAnnotateFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsyncBatchAnnotateFilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsyncBatchAnnotateFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse;

                    /**
                     * Decodes an AsyncBatchAnnotateFilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsyncBatchAnnotateFilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse;

                    /**
                     * Verifies an AsyncBatchAnnotateFilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsyncBatchAnnotateFilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsyncBatchAnnotateFilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse;

                    /**
                     * Creates a plain object from an AsyncBatchAnnotateFilesResponse message. Also converts values to other types if specified.
                     * @param message AsyncBatchAnnotateFilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsyncBatchAnnotateFilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsyncBatchAnnotateFilesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.vision.v1.IGcsSource|null);

                    /** InputConfig content */
                    content?: (Uint8Array|string|null);

                    /** InputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IInputConfig);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.vision.v1.IGcsSource|null);

                    /** InputConfig content. */
                    public content: (Uint8Array|string);

                    /** InputConfig mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IInputConfig): google.cloud.vision.v1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.vision.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.vision.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.vision.v1.IGcsDestination|null);

                    /** OutputConfig batchSize */
                    batchSize?: (number|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.vision.v1.IGcsDestination|null);

                    /** OutputConfig batchSize. */
                    public batchSize: number;

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IOutputConfig): google.cloud.vision.v1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.vision.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.vision.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource uri */
                    uri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IGcsSource);

                    /** GcsSource uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IGcsSource): google.cloud.vision.v1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.vision.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.vision.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IGcsDestination): google.cloud.vision.v1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.vision.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.vision.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata state */
                    state?: (google.cloud.vision.v1.OperationMetadata.State|keyof typeof google.cloud.vision.v1.OperationMetadata.State|null);

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IOperationMetadata);

                    /** OperationMetadata state. */
                    public state: (google.cloud.vision.v1.OperationMetadata.State|keyof typeof google.cloud.vision.v1.OperationMetadata.State);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IOperationMetadata): google.cloud.vision.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.vision.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.vision.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace OperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATED = 1,
                        RUNNING = 2,
                        DONE = 3,
                        CANCELLED = 4
                    }
                }

                /** Properties of a ProductSearchParams. */
                interface IProductSearchParams {

                    /** ProductSearchParams boundingPoly */
                    boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** ProductSearchParams productSet */
                    productSet?: (string|null);

                    /** ProductSearchParams productCategories */
                    productCategories?: (string[]|null);

                    /** ProductSearchParams filter */
                    filter?: (string|null);
                }

                /** Represents a ProductSearchParams. */
                class ProductSearchParams implements IProductSearchParams {

                    /**
                     * Constructs a new ProductSearchParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProductSearchParams);

                    /** ProductSearchParams boundingPoly. */
                    public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** ProductSearchParams productSet. */
                    public productSet: string;

                    /** ProductSearchParams productCategories. */
                    public productCategories: string[];

                    /** ProductSearchParams filter. */
                    public filter: string;

                    /**
                     * Creates a new ProductSearchParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductSearchParams instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProductSearchParams): google.cloud.vision.v1.ProductSearchParams;

                    /**
                     * Encodes the specified ProductSearchParams message. Does not implicitly {@link google.cloud.vision.v1.ProductSearchParams.verify|verify} messages.
                     * @param message ProductSearchParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProductSearchParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductSearchParams message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSearchParams.verify|verify} messages.
                     * @param message ProductSearchParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProductSearchParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductSearchParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductSearchParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSearchParams;

                    /**
                     * Decodes a ProductSearchParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductSearchParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSearchParams;

                    /**
                     * Verifies a ProductSearchParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductSearchParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductSearchParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSearchParams;

                    /**
                     * Creates a plain object from a ProductSearchParams message. Also converts values to other types if specified.
                     * @param message ProductSearchParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ProductSearchParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductSearchParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProductSearchParams
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProductSearchResults. */
                interface IProductSearchResults {

                    /** ProductSearchResults indexTime */
                    indexTime?: (google.protobuf.ITimestamp|null);

                    /** ProductSearchResults results */
                    results?: (google.cloud.vision.v1.ProductSearchResults.IResult[]|null);

                    /** ProductSearchResults productGroupedResults */
                    productGroupedResults?: (google.cloud.vision.v1.ProductSearchResults.IGroupedResult[]|null);
                }

                /** Represents a ProductSearchResults. */
                class ProductSearchResults implements IProductSearchResults {

                    /**
                     * Constructs a new ProductSearchResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProductSearchResults);

                    /** ProductSearchResults indexTime. */
                    public indexTime?: (google.protobuf.ITimestamp|null);

                    /** ProductSearchResults results. */
                    public results: google.cloud.vision.v1.ProductSearchResults.IResult[];

                    /** ProductSearchResults productGroupedResults. */
                    public productGroupedResults: google.cloud.vision.v1.ProductSearchResults.IGroupedResult[];

                    /**
                     * Creates a new ProductSearchResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductSearchResults instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProductSearchResults): google.cloud.vision.v1.ProductSearchResults;

                    /**
                     * Encodes the specified ProductSearchResults message. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.verify|verify} messages.
                     * @param message ProductSearchResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProductSearchResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductSearchResults message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.verify|verify} messages.
                     * @param message ProductSearchResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProductSearchResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductSearchResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductSearchResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSearchResults;

                    /**
                     * Decodes a ProductSearchResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductSearchResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSearchResults;

                    /**
                     * Verifies a ProductSearchResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductSearchResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductSearchResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSearchResults;

                    /**
                     * Creates a plain object from a ProductSearchResults message. Also converts values to other types if specified.
                     * @param message ProductSearchResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ProductSearchResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductSearchResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProductSearchResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProductSearchResults {

                    /** Properties of a Result. */
                    interface IResult {

                        /** Result product */
                        product?: (google.cloud.vision.v1.IProduct|null);

                        /** Result score */
                        score?: (number|null);

                        /** Result image */
                        image?: (string|null);
                    }

                    /** Represents a Result. */
                    class Result implements IResult {

                        /**
                         * Constructs a new Result.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.ProductSearchResults.IResult);

                        /** Result product. */
                        public product?: (google.cloud.vision.v1.IProduct|null);

                        /** Result score. */
                        public score: number;

                        /** Result image. */
                        public image: string;

                        /**
                         * Creates a new Result instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Result instance
                         */
                        public static create(properties?: google.cloud.vision.v1.ProductSearchResults.IResult): google.cloud.vision.v1.ProductSearchResults.Result;

                        /**
                         * Encodes the specified Result message. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.Result.verify|verify} messages.
                         * @param message Result message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.ProductSearchResults.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Result message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.Result.verify|verify} messages.
                         * @param message Result message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.ProductSearchResults.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Result message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Result
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSearchResults.Result;

                        /**
                         * Decodes a Result message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Result
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSearchResults.Result;

                        /**
                         * Verifies a Result message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Result message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Result
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSearchResults.Result;

                        /**
                         * Creates a plain object from a Result message. Also converts values to other types if specified.
                         * @param message Result
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.ProductSearchResults.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Result to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Result
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectAnnotation. */
                    interface IObjectAnnotation {

                        /** ObjectAnnotation mid */
                        mid?: (string|null);

                        /** ObjectAnnotation languageCode */
                        languageCode?: (string|null);

                        /** ObjectAnnotation name */
                        name?: (string|null);

                        /** ObjectAnnotation score */
                        score?: (number|null);
                    }

                    /** Represents an ObjectAnnotation. */
                    class ObjectAnnotation implements IObjectAnnotation {

                        /**
                         * Constructs a new ObjectAnnotation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation);

                        /** ObjectAnnotation mid. */
                        public mid: string;

                        /** ObjectAnnotation languageCode. */
                        public languageCode: string;

                        /** ObjectAnnotation name. */
                        public name: string;

                        /** ObjectAnnotation score. */
                        public score: number;

                        /**
                         * Creates a new ObjectAnnotation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ObjectAnnotation instance
                         */
                        public static create(properties?: google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation): google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation;

                        /**
                         * Encodes the specified ObjectAnnotation message. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation.verify|verify} messages.
                         * @param message ObjectAnnotation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ObjectAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation.verify|verify} messages.
                         * @param message ObjectAnnotation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ObjectAnnotation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ObjectAnnotation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation;

                        /**
                         * Decodes an ObjectAnnotation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ObjectAnnotation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation;

                        /**
                         * Verifies an ObjectAnnotation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ObjectAnnotation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ObjectAnnotation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation;

                        /**
                         * Creates a plain object from an ObjectAnnotation message. Also converts values to other types if specified.
                         * @param message ObjectAnnotation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ObjectAnnotation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ObjectAnnotation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GroupedResult. */
                    interface IGroupedResult {

                        /** GroupedResult boundingPoly */
                        boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                        /** GroupedResult results */
                        results?: (google.cloud.vision.v1.ProductSearchResults.IResult[]|null);

                        /** GroupedResult objectAnnotations */
                        objectAnnotations?: (google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation[]|null);
                    }

                    /** Represents a GroupedResult. */
                    class GroupedResult implements IGroupedResult {

                        /**
                         * Constructs a new GroupedResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.ProductSearchResults.IGroupedResult);

                        /** GroupedResult boundingPoly. */
                        public boundingPoly?: (google.cloud.vision.v1.IBoundingPoly|null);

                        /** GroupedResult results. */
                        public results: google.cloud.vision.v1.ProductSearchResults.IResult[];

                        /** GroupedResult objectAnnotations. */
                        public objectAnnotations: google.cloud.vision.v1.ProductSearchResults.IObjectAnnotation[];

                        /**
                         * Creates a new GroupedResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupedResult instance
                         */
                        public static create(properties?: google.cloud.vision.v1.ProductSearchResults.IGroupedResult): google.cloud.vision.v1.ProductSearchResults.GroupedResult;

                        /**
                         * Encodes the specified GroupedResult message. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.GroupedResult.verify|verify} messages.
                         * @param message GroupedResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.ProductSearchResults.IGroupedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupedResult message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSearchResults.GroupedResult.verify|verify} messages.
                         * @param message GroupedResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.ProductSearchResults.IGroupedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupedResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupedResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSearchResults.GroupedResult;

                        /**
                         * Decodes a GroupedResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupedResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSearchResults.GroupedResult;

                        /**
                         * Verifies a GroupedResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupedResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupedResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSearchResults.GroupedResult;

                        /**
                         * Creates a plain object from a GroupedResult message. Also converts values to other types if specified.
                         * @param message GroupedResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.ProductSearchResults.GroupedResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupedResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GroupedResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Represents a ProductSearch */
                class ProductSearch extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ProductSearch service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ProductSearch service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProductSearch;

                    /**
                     * Calls CreateProductSet.
                     * @param request CreateProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProductSet
                     */
                    public createProductSet(request: google.cloud.vision.v1.ICreateProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.CreateProductSetCallback): void;

                    /**
                     * Calls CreateProductSet.
                     * @param request CreateProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public createProductSet(request: google.cloud.vision.v1.ICreateProductSetRequest): Promise<google.cloud.vision.v1.ProductSet>;

                    /**
                     * Calls ListProductSets.
                     * @param request ListProductSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProductSetsResponse
                     */
                    public listProductSets(request: google.cloud.vision.v1.IListProductSetsRequest, callback: google.cloud.vision.v1.ProductSearch.ListProductSetsCallback): void;

                    /**
                     * Calls ListProductSets.
                     * @param request ListProductSetsRequest message or plain object
                     * @returns Promise
                     */
                    public listProductSets(request: google.cloud.vision.v1.IListProductSetsRequest): Promise<google.cloud.vision.v1.ListProductSetsResponse>;

                    /**
                     * Calls GetProductSet.
                     * @param request GetProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProductSet
                     */
                    public getProductSet(request: google.cloud.vision.v1.IGetProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.GetProductSetCallback): void;

                    /**
                     * Calls GetProductSet.
                     * @param request GetProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public getProductSet(request: google.cloud.vision.v1.IGetProductSetRequest): Promise<google.cloud.vision.v1.ProductSet>;

                    /**
                     * Calls UpdateProductSet.
                     * @param request UpdateProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProductSet
                     */
                    public updateProductSet(request: google.cloud.vision.v1.IUpdateProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.UpdateProductSetCallback): void;

                    /**
                     * Calls UpdateProductSet.
                     * @param request UpdateProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public updateProductSet(request: google.cloud.vision.v1.IUpdateProductSetRequest): Promise<google.cloud.vision.v1.ProductSet>;

                    /**
                     * Calls DeleteProductSet.
                     * @param request DeleteProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteProductSet(request: google.cloud.vision.v1.IDeleteProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.DeleteProductSetCallback): void;

                    /**
                     * Calls DeleteProductSet.
                     * @param request DeleteProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteProductSet(request: google.cloud.vision.v1.IDeleteProductSetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateProduct.
                     * @param request CreateProductRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Product
                     */
                    public createProduct(request: google.cloud.vision.v1.ICreateProductRequest, callback: google.cloud.vision.v1.ProductSearch.CreateProductCallback): void;

                    /**
                     * Calls CreateProduct.
                     * @param request CreateProductRequest message or plain object
                     * @returns Promise
                     */
                    public createProduct(request: google.cloud.vision.v1.ICreateProductRequest): Promise<google.cloud.vision.v1.Product>;

                    /**
                     * Calls ListProducts.
                     * @param request ListProductsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProductsResponse
                     */
                    public listProducts(request: google.cloud.vision.v1.IListProductsRequest, callback: google.cloud.vision.v1.ProductSearch.ListProductsCallback): void;

                    /**
                     * Calls ListProducts.
                     * @param request ListProductsRequest message or plain object
                     * @returns Promise
                     */
                    public listProducts(request: google.cloud.vision.v1.IListProductsRequest): Promise<google.cloud.vision.v1.ListProductsResponse>;

                    /**
                     * Calls GetProduct.
                     * @param request GetProductRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Product
                     */
                    public getProduct(request: google.cloud.vision.v1.IGetProductRequest, callback: google.cloud.vision.v1.ProductSearch.GetProductCallback): void;

                    /**
                     * Calls GetProduct.
                     * @param request GetProductRequest message or plain object
                     * @returns Promise
                     */
                    public getProduct(request: google.cloud.vision.v1.IGetProductRequest): Promise<google.cloud.vision.v1.Product>;

                    /**
                     * Calls UpdateProduct.
                     * @param request UpdateProductRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Product
                     */
                    public updateProduct(request: google.cloud.vision.v1.IUpdateProductRequest, callback: google.cloud.vision.v1.ProductSearch.UpdateProductCallback): void;

                    /**
                     * Calls UpdateProduct.
                     * @param request UpdateProductRequest message or plain object
                     * @returns Promise
                     */
                    public updateProduct(request: google.cloud.vision.v1.IUpdateProductRequest): Promise<google.cloud.vision.v1.Product>;

                    /**
                     * Calls DeleteProduct.
                     * @param request DeleteProductRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteProduct(request: google.cloud.vision.v1.IDeleteProductRequest, callback: google.cloud.vision.v1.ProductSearch.DeleteProductCallback): void;

                    /**
                     * Calls DeleteProduct.
                     * @param request DeleteProductRequest message or plain object
                     * @returns Promise
                     */
                    public deleteProduct(request: google.cloud.vision.v1.IDeleteProductRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateReferenceImage.
                     * @param request CreateReferenceImageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReferenceImage
                     */
                    public createReferenceImage(request: google.cloud.vision.v1.ICreateReferenceImageRequest, callback: google.cloud.vision.v1.ProductSearch.CreateReferenceImageCallback): void;

                    /**
                     * Calls CreateReferenceImage.
                     * @param request CreateReferenceImageRequest message or plain object
                     * @returns Promise
                     */
                    public createReferenceImage(request: google.cloud.vision.v1.ICreateReferenceImageRequest): Promise<google.cloud.vision.v1.ReferenceImage>;

                    /**
                     * Calls DeleteReferenceImage.
                     * @param request DeleteReferenceImageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteReferenceImage(request: google.cloud.vision.v1.IDeleteReferenceImageRequest, callback: google.cloud.vision.v1.ProductSearch.DeleteReferenceImageCallback): void;

                    /**
                     * Calls DeleteReferenceImage.
                     * @param request DeleteReferenceImageRequest message or plain object
                     * @returns Promise
                     */
                    public deleteReferenceImage(request: google.cloud.vision.v1.IDeleteReferenceImageRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListReferenceImages.
                     * @param request ListReferenceImagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListReferenceImagesResponse
                     */
                    public listReferenceImages(request: google.cloud.vision.v1.IListReferenceImagesRequest, callback: google.cloud.vision.v1.ProductSearch.ListReferenceImagesCallback): void;

                    /**
                     * Calls ListReferenceImages.
                     * @param request ListReferenceImagesRequest message or plain object
                     * @returns Promise
                     */
                    public listReferenceImages(request: google.cloud.vision.v1.IListReferenceImagesRequest): Promise<google.cloud.vision.v1.ListReferenceImagesResponse>;

                    /**
                     * Calls GetReferenceImage.
                     * @param request GetReferenceImageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReferenceImage
                     */
                    public getReferenceImage(request: google.cloud.vision.v1.IGetReferenceImageRequest, callback: google.cloud.vision.v1.ProductSearch.GetReferenceImageCallback): void;

                    /**
                     * Calls GetReferenceImage.
                     * @param request GetReferenceImageRequest message or plain object
                     * @returns Promise
                     */
                    public getReferenceImage(request: google.cloud.vision.v1.IGetReferenceImageRequest): Promise<google.cloud.vision.v1.ReferenceImage>;

                    /**
                     * Calls AddProductToProductSet.
                     * @param request AddProductToProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public addProductToProductSet(request: google.cloud.vision.v1.IAddProductToProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.AddProductToProductSetCallback): void;

                    /**
                     * Calls AddProductToProductSet.
                     * @param request AddProductToProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public addProductToProductSet(request: google.cloud.vision.v1.IAddProductToProductSetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RemoveProductFromProductSet.
                     * @param request RemoveProductFromProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public removeProductFromProductSet(request: google.cloud.vision.v1.IRemoveProductFromProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.RemoveProductFromProductSetCallback): void;

                    /**
                     * Calls RemoveProductFromProductSet.
                     * @param request RemoveProductFromProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public removeProductFromProductSet(request: google.cloud.vision.v1.IRemoveProductFromProductSetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListProductsInProductSet.
                     * @param request ListProductsInProductSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProductsInProductSetResponse
                     */
                    public listProductsInProductSet(request: google.cloud.vision.v1.IListProductsInProductSetRequest, callback: google.cloud.vision.v1.ProductSearch.ListProductsInProductSetCallback): void;

                    /**
                     * Calls ListProductsInProductSet.
                     * @param request ListProductsInProductSetRequest message or plain object
                     * @returns Promise
                     */
                    public listProductsInProductSet(request: google.cloud.vision.v1.IListProductsInProductSetRequest): Promise<google.cloud.vision.v1.ListProductsInProductSetResponse>;

                    /**
                     * Calls ImportProductSets.
                     * @param request ImportProductSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importProductSets(request: google.cloud.vision.v1.IImportProductSetsRequest, callback: google.cloud.vision.v1.ProductSearch.ImportProductSetsCallback): void;

                    /**
                     * Calls ImportProductSets.
                     * @param request ImportProductSetsRequest message or plain object
                     * @returns Promise
                     */
                    public importProductSets(request: google.cloud.vision.v1.IImportProductSetsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PurgeProducts.
                     * @param request PurgeProductsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public purgeProducts(request: google.cloud.vision.v1.IPurgeProductsRequest, callback: google.cloud.vision.v1.ProductSearch.PurgeProductsCallback): void;

                    /**
                     * Calls PurgeProducts.
                     * @param request PurgeProductsRequest message or plain object
                     * @returns Promise
                     */
                    public purgeProducts(request: google.cloud.vision.v1.IPurgeProductsRequest): Promise<google.longrunning.Operation>;
                }

                namespace ProductSearch {

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|createProductSet}.
                     * @param error Error, if any
                     * @param [response] ProductSet
                     */
                    type CreateProductSetCallback = (error: (Error|null), response?: google.cloud.vision.v1.ProductSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|listProductSets}.
                     * @param error Error, if any
                     * @param [response] ListProductSetsResponse
                     */
                    type ListProductSetsCallback = (error: (Error|null), response?: google.cloud.vision.v1.ListProductSetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|getProductSet}.
                     * @param error Error, if any
                     * @param [response] ProductSet
                     */
                    type GetProductSetCallback = (error: (Error|null), response?: google.cloud.vision.v1.ProductSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|updateProductSet}.
                     * @param error Error, if any
                     * @param [response] ProductSet
                     */
                    type UpdateProductSetCallback = (error: (Error|null), response?: google.cloud.vision.v1.ProductSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|deleteProductSet}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteProductSetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|createProduct}.
                     * @param error Error, if any
                     * @param [response] Product
                     */
                    type CreateProductCallback = (error: (Error|null), response?: google.cloud.vision.v1.Product) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|listProducts}.
                     * @param error Error, if any
                     * @param [response] ListProductsResponse
                     */
                    type ListProductsCallback = (error: (Error|null), response?: google.cloud.vision.v1.ListProductsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|getProduct}.
                     * @param error Error, if any
                     * @param [response] Product
                     */
                    type GetProductCallback = (error: (Error|null), response?: google.cloud.vision.v1.Product) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|updateProduct}.
                     * @param error Error, if any
                     * @param [response] Product
                     */
                    type UpdateProductCallback = (error: (Error|null), response?: google.cloud.vision.v1.Product) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|deleteProduct}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteProductCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|createReferenceImage}.
                     * @param error Error, if any
                     * @param [response] ReferenceImage
                     */
                    type CreateReferenceImageCallback = (error: (Error|null), response?: google.cloud.vision.v1.ReferenceImage) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|deleteReferenceImage}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteReferenceImageCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|listReferenceImages}.
                     * @param error Error, if any
                     * @param [response] ListReferenceImagesResponse
                     */
                    type ListReferenceImagesCallback = (error: (Error|null), response?: google.cloud.vision.v1.ListReferenceImagesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|getReferenceImage}.
                     * @param error Error, if any
                     * @param [response] ReferenceImage
                     */
                    type GetReferenceImageCallback = (error: (Error|null), response?: google.cloud.vision.v1.ReferenceImage) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|addProductToProductSet}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type AddProductToProductSetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|removeProductFromProductSet}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type RemoveProductFromProductSetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|listProductsInProductSet}.
                     * @param error Error, if any
                     * @param [response] ListProductsInProductSetResponse
                     */
                    type ListProductsInProductSetCallback = (error: (Error|null), response?: google.cloud.vision.v1.ListProductsInProductSetResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|importProductSets}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportProductSetsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vision.v1.ProductSearch|purgeProducts}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PurgeProductsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Product. */
                interface IProduct {

                    /** Product name */
                    name?: (string|null);

                    /** Product displayName */
                    displayName?: (string|null);

                    /** Product description */
                    description?: (string|null);

                    /** Product productCategory */
                    productCategory?: (string|null);

                    /** Product productLabels */
                    productLabels?: (google.cloud.vision.v1.Product.IKeyValue[]|null);
                }

                /** Represents a Product. */
                class Product implements IProduct {

                    /**
                     * Constructs a new Product.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProduct);

                    /** Product name. */
                    public name: string;

                    /** Product displayName. */
                    public displayName: string;

                    /** Product description. */
                    public description: string;

                    /** Product productCategory. */
                    public productCategory: string;

                    /** Product productLabels. */
                    public productLabels: google.cloud.vision.v1.Product.IKeyValue[];

                    /**
                     * Creates a new Product instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Product instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProduct): google.cloud.vision.v1.Product;

                    /**
                     * Encodes the specified Product message. Does not implicitly {@link google.cloud.vision.v1.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Product message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Product message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Product;

                    /**
                     * Decodes a Product message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Product;

                    /**
                     * Verifies a Product message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Product message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Product
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Product;

                    /**
                     * Creates a plain object from a Product message. Also converts values to other types if specified.
                     * @param message Product
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Product to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Product
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Product {

                    /** Properties of a KeyValue. */
                    interface IKeyValue {

                        /** KeyValue key */
                        key?: (string|null);

                        /** KeyValue value */
                        value?: (string|null);
                    }

                    /** Represents a KeyValue. */
                    class KeyValue implements IKeyValue {

                        /**
                         * Constructs a new KeyValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.Product.IKeyValue);

                        /** KeyValue key. */
                        public key: string;

                        /** KeyValue value. */
                        public value: string;

                        /**
                         * Creates a new KeyValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KeyValue instance
                         */
                        public static create(properties?: google.cloud.vision.v1.Product.IKeyValue): google.cloud.vision.v1.Product.KeyValue;

                        /**
                         * Encodes the specified KeyValue message. Does not implicitly {@link google.cloud.vision.v1.Product.KeyValue.verify|verify} messages.
                         * @param message KeyValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.Product.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Product.KeyValue.verify|verify} messages.
                         * @param message KeyValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.Product.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KeyValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KeyValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Product.KeyValue;

                        /**
                         * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KeyValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Product.KeyValue;

                        /**
                         * Verifies a KeyValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KeyValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Product.KeyValue;

                        /**
                         * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                         * @param message KeyValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.Product.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KeyValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KeyValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ProductSet. */
                interface IProductSet {

                    /** ProductSet name */
                    name?: (string|null);

                    /** ProductSet displayName */
                    displayName?: (string|null);

                    /** ProductSet indexTime */
                    indexTime?: (google.protobuf.ITimestamp|null);

                    /** ProductSet indexError */
                    indexError?: (google.rpc.IStatus|null);
                }

                /** Represents a ProductSet. */
                class ProductSet implements IProductSet {

                    /**
                     * Constructs a new ProductSet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProductSet);

                    /** ProductSet name. */
                    public name: string;

                    /** ProductSet displayName. */
                    public displayName: string;

                    /** ProductSet indexTime. */
                    public indexTime?: (google.protobuf.ITimestamp|null);

                    /** ProductSet indexError. */
                    public indexError?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new ProductSet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductSet instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProductSet): google.cloud.vision.v1.ProductSet;

                    /**
                     * Encodes the specified ProductSet message. Does not implicitly {@link google.cloud.vision.v1.ProductSet.verify|verify} messages.
                     * @param message ProductSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProductSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductSet message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSet.verify|verify} messages.
                     * @param message ProductSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProductSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductSet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSet;

                    /**
                     * Decodes a ProductSet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSet;

                    /**
                     * Verifies a ProductSet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductSet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductSet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSet;

                    /**
                     * Creates a plain object from a ProductSet message. Also converts values to other types if specified.
                     * @param message ProductSet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ProductSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductSet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProductSet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReferenceImage. */
                interface IReferenceImage {

                    /** ReferenceImage name */
                    name?: (string|null);

                    /** ReferenceImage uri */
                    uri?: (string|null);

                    /** ReferenceImage boundingPolys */
                    boundingPolys?: (google.cloud.vision.v1.IBoundingPoly[]|null);
                }

                /** Represents a ReferenceImage. */
                class ReferenceImage implements IReferenceImage {

                    /**
                     * Constructs a new ReferenceImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IReferenceImage);

                    /** ReferenceImage name. */
                    public name: string;

                    /** ReferenceImage uri. */
                    public uri: string;

                    /** ReferenceImage boundingPolys. */
                    public boundingPolys: google.cloud.vision.v1.IBoundingPoly[];

                    /**
                     * Creates a new ReferenceImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReferenceImage instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IReferenceImage): google.cloud.vision.v1.ReferenceImage;

                    /**
                     * Encodes the specified ReferenceImage message. Does not implicitly {@link google.cloud.vision.v1.ReferenceImage.verify|verify} messages.
                     * @param message ReferenceImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IReferenceImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReferenceImage message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ReferenceImage.verify|verify} messages.
                     * @param message ReferenceImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IReferenceImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReferenceImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReferenceImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ReferenceImage;

                    /**
                     * Decodes a ReferenceImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReferenceImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ReferenceImage;

                    /**
                     * Verifies a ReferenceImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReferenceImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReferenceImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ReferenceImage;

                    /**
                     * Creates a plain object from a ReferenceImage message. Also converts values to other types if specified.
                     * @param message ReferenceImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ReferenceImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReferenceImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReferenceImage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateProductRequest. */
                interface ICreateProductRequest {

                    /** CreateProductRequest parent */
                    parent?: (string|null);

                    /** CreateProductRequest product */
                    product?: (google.cloud.vision.v1.IProduct|null);

                    /** CreateProductRequest productId */
                    productId?: (string|null);
                }

                /** Represents a CreateProductRequest. */
                class CreateProductRequest implements ICreateProductRequest {

                    /**
                     * Constructs a new CreateProductRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICreateProductRequest);

                    /** CreateProductRequest parent. */
                    public parent: string;

                    /** CreateProductRequest product. */
                    public product?: (google.cloud.vision.v1.IProduct|null);

                    /** CreateProductRequest productId. */
                    public productId: string;

                    /**
                     * Creates a new CreateProductRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateProductRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICreateProductRequest): google.cloud.vision.v1.CreateProductRequest;

                    /**
                     * Encodes the specified CreateProductRequest message. Does not implicitly {@link google.cloud.vision.v1.CreateProductRequest.verify|verify} messages.
                     * @param message CreateProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICreateProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateProductRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CreateProductRequest.verify|verify} messages.
                     * @param message CreateProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICreateProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateProductRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CreateProductRequest;

                    /**
                     * Decodes a CreateProductRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CreateProductRequest;

                    /**
                     * Verifies a CreateProductRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateProductRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateProductRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CreateProductRequest;

                    /**
                     * Creates a plain object from a CreateProductRequest message. Also converts values to other types if specified.
                     * @param message CreateProductRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CreateProductRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateProductRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateProductRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductsRequest. */
                interface IListProductsRequest {

                    /** ListProductsRequest parent */
                    parent?: (string|null);

                    /** ListProductsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProductsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListProductsRequest. */
                class ListProductsRequest implements IListProductsRequest {

                    /**
                     * Constructs a new ListProductsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductsRequest);

                    /** ListProductsRequest parent. */
                    public parent: string;

                    /** ListProductsRequest pageSize. */
                    public pageSize: number;

                    /** ListProductsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListProductsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductsRequest): google.cloud.vision.v1.ListProductsRequest;

                    /**
                     * Encodes the specified ListProductsRequest message. Does not implicitly {@link google.cloud.vision.v1.ListProductsRequest.verify|verify} messages.
                     * @param message ListProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductsRequest.verify|verify} messages.
                     * @param message ListProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductsRequest;

                    /**
                     * Decodes a ListProductsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductsRequest;

                    /**
                     * Verifies a ListProductsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductsRequest;

                    /**
                     * Creates a plain object from a ListProductsRequest message. Also converts values to other types if specified.
                     * @param message ListProductsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductsResponse. */
                interface IListProductsResponse {

                    /** ListProductsResponse products */
                    products?: (google.cloud.vision.v1.IProduct[]|null);

                    /** ListProductsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProductsResponse. */
                class ListProductsResponse implements IListProductsResponse {

                    /**
                     * Constructs a new ListProductsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductsResponse);

                    /** ListProductsResponse products. */
                    public products: google.cloud.vision.v1.IProduct[];

                    /** ListProductsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProductsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductsResponse): google.cloud.vision.v1.ListProductsResponse;

                    /**
                     * Encodes the specified ListProductsResponse message. Does not implicitly {@link google.cloud.vision.v1.ListProductsResponse.verify|verify} messages.
                     * @param message ListProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductsResponse.verify|verify} messages.
                     * @param message ListProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductsResponse;

                    /**
                     * Decodes a ListProductsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductsResponse;

                    /**
                     * Verifies a ListProductsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductsResponse;

                    /**
                     * Creates a plain object from a ListProductsResponse message. Also converts values to other types if specified.
                     * @param message ListProductsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetProductRequest. */
                interface IGetProductRequest {

                    /** GetProductRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProductRequest. */
                class GetProductRequest implements IGetProductRequest {

                    /**
                     * Constructs a new GetProductRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IGetProductRequest);

                    /** GetProductRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProductRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProductRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IGetProductRequest): google.cloud.vision.v1.GetProductRequest;

                    /**
                     * Encodes the specified GetProductRequest message. Does not implicitly {@link google.cloud.vision.v1.GetProductRequest.verify|verify} messages.
                     * @param message GetProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IGetProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProductRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.GetProductRequest.verify|verify} messages.
                     * @param message GetProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IGetProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProductRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.GetProductRequest;

                    /**
                     * Decodes a GetProductRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.GetProductRequest;

                    /**
                     * Verifies a GetProductRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProductRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProductRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.GetProductRequest;

                    /**
                     * Creates a plain object from a GetProductRequest message. Also converts values to other types if specified.
                     * @param message GetProductRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.GetProductRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProductRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetProductRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateProductRequest. */
                interface IUpdateProductRequest {

                    /** UpdateProductRequest product */
                    product?: (google.cloud.vision.v1.IProduct|null);

                    /** UpdateProductRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateProductRequest. */
                class UpdateProductRequest implements IUpdateProductRequest {

                    /**
                     * Constructs a new UpdateProductRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IUpdateProductRequest);

                    /** UpdateProductRequest product. */
                    public product?: (google.cloud.vision.v1.IProduct|null);

                    /** UpdateProductRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateProductRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateProductRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IUpdateProductRequest): google.cloud.vision.v1.UpdateProductRequest;

                    /**
                     * Encodes the specified UpdateProductRequest message. Does not implicitly {@link google.cloud.vision.v1.UpdateProductRequest.verify|verify} messages.
                     * @param message UpdateProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IUpdateProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateProductRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.UpdateProductRequest.verify|verify} messages.
                     * @param message UpdateProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IUpdateProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateProductRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.UpdateProductRequest;

                    /**
                     * Decodes an UpdateProductRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.UpdateProductRequest;

                    /**
                     * Verifies an UpdateProductRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateProductRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateProductRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.UpdateProductRequest;

                    /**
                     * Creates a plain object from an UpdateProductRequest message. Also converts values to other types if specified.
                     * @param message UpdateProductRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.UpdateProductRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateProductRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateProductRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteProductRequest. */
                interface IDeleteProductRequest {

                    /** DeleteProductRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteProductRequest. */
                class DeleteProductRequest implements IDeleteProductRequest {

                    /**
                     * Constructs a new DeleteProductRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IDeleteProductRequest);

                    /** DeleteProductRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteProductRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteProductRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IDeleteProductRequest): google.cloud.vision.v1.DeleteProductRequest;

                    /**
                     * Encodes the specified DeleteProductRequest message. Does not implicitly {@link google.cloud.vision.v1.DeleteProductRequest.verify|verify} messages.
                     * @param message DeleteProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IDeleteProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteProductRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.DeleteProductRequest.verify|verify} messages.
                     * @param message DeleteProductRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IDeleteProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteProductRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.DeleteProductRequest;

                    /**
                     * Decodes a DeleteProductRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteProductRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.DeleteProductRequest;

                    /**
                     * Verifies a DeleteProductRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteProductRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteProductRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.DeleteProductRequest;

                    /**
                     * Creates a plain object from a DeleteProductRequest message. Also converts values to other types if specified.
                     * @param message DeleteProductRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.DeleteProductRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteProductRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteProductRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateProductSetRequest. */
                interface ICreateProductSetRequest {

                    /** CreateProductSetRequest parent */
                    parent?: (string|null);

                    /** CreateProductSetRequest productSet */
                    productSet?: (google.cloud.vision.v1.IProductSet|null);

                    /** CreateProductSetRequest productSetId */
                    productSetId?: (string|null);
                }

                /** Represents a CreateProductSetRequest. */
                class CreateProductSetRequest implements ICreateProductSetRequest {

                    /**
                     * Constructs a new CreateProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICreateProductSetRequest);

                    /** CreateProductSetRequest parent. */
                    public parent: string;

                    /** CreateProductSetRequest productSet. */
                    public productSet?: (google.cloud.vision.v1.IProductSet|null);

                    /** CreateProductSetRequest productSetId. */
                    public productSetId: string;

                    /**
                     * Creates a new CreateProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICreateProductSetRequest): google.cloud.vision.v1.CreateProductSetRequest;

                    /**
                     * Encodes the specified CreateProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.CreateProductSetRequest.verify|verify} messages.
                     * @param message CreateProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICreateProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CreateProductSetRequest.verify|verify} messages.
                     * @param message CreateProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICreateProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CreateProductSetRequest;

                    /**
                     * Decodes a CreateProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CreateProductSetRequest;

                    /**
                     * Verifies a CreateProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CreateProductSetRequest;

                    /**
                     * Creates a plain object from a CreateProductSetRequest message. Also converts values to other types if specified.
                     * @param message CreateProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CreateProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductSetsRequest. */
                interface IListProductSetsRequest {

                    /** ListProductSetsRequest parent */
                    parent?: (string|null);

                    /** ListProductSetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProductSetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListProductSetsRequest. */
                class ListProductSetsRequest implements IListProductSetsRequest {

                    /**
                     * Constructs a new ListProductSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductSetsRequest);

                    /** ListProductSetsRequest parent. */
                    public parent: string;

                    /** ListProductSetsRequest pageSize. */
                    public pageSize: number;

                    /** ListProductSetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListProductSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductSetsRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductSetsRequest): google.cloud.vision.v1.ListProductSetsRequest;

                    /**
                     * Encodes the specified ListProductSetsRequest message. Does not implicitly {@link google.cloud.vision.v1.ListProductSetsRequest.verify|verify} messages.
                     * @param message ListProductSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductSetsRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductSetsRequest.verify|verify} messages.
                     * @param message ListProductSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductSetsRequest;

                    /**
                     * Decodes a ListProductSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductSetsRequest;

                    /**
                     * Verifies a ListProductSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductSetsRequest;

                    /**
                     * Creates a plain object from a ListProductSetsRequest message. Also converts values to other types if specified.
                     * @param message ListProductSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductSetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductSetsResponse. */
                interface IListProductSetsResponse {

                    /** ListProductSetsResponse productSets */
                    productSets?: (google.cloud.vision.v1.IProductSet[]|null);

                    /** ListProductSetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProductSetsResponse. */
                class ListProductSetsResponse implements IListProductSetsResponse {

                    /**
                     * Constructs a new ListProductSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductSetsResponse);

                    /** ListProductSetsResponse productSets. */
                    public productSets: google.cloud.vision.v1.IProductSet[];

                    /** ListProductSetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProductSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductSetsResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductSetsResponse): google.cloud.vision.v1.ListProductSetsResponse;

                    /**
                     * Encodes the specified ListProductSetsResponse message. Does not implicitly {@link google.cloud.vision.v1.ListProductSetsResponse.verify|verify} messages.
                     * @param message ListProductSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductSetsResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductSetsResponse.verify|verify} messages.
                     * @param message ListProductSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductSetsResponse;

                    /**
                     * Decodes a ListProductSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductSetsResponse;

                    /**
                     * Verifies a ListProductSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductSetsResponse;

                    /**
                     * Creates a plain object from a ListProductSetsResponse message. Also converts values to other types if specified.
                     * @param message ListProductSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductSetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetProductSetRequest. */
                interface IGetProductSetRequest {

                    /** GetProductSetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProductSetRequest. */
                class GetProductSetRequest implements IGetProductSetRequest {

                    /**
                     * Constructs a new GetProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IGetProductSetRequest);

                    /** GetProductSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IGetProductSetRequest): google.cloud.vision.v1.GetProductSetRequest;

                    /**
                     * Encodes the specified GetProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.GetProductSetRequest.verify|verify} messages.
                     * @param message GetProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IGetProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.GetProductSetRequest.verify|verify} messages.
                     * @param message GetProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IGetProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.GetProductSetRequest;

                    /**
                     * Decodes a GetProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.GetProductSetRequest;

                    /**
                     * Verifies a GetProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.GetProductSetRequest;

                    /**
                     * Creates a plain object from a GetProductSetRequest message. Also converts values to other types if specified.
                     * @param message GetProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.GetProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateProductSetRequest. */
                interface IUpdateProductSetRequest {

                    /** UpdateProductSetRequest productSet */
                    productSet?: (google.cloud.vision.v1.IProductSet|null);

                    /** UpdateProductSetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateProductSetRequest. */
                class UpdateProductSetRequest implements IUpdateProductSetRequest {

                    /**
                     * Constructs a new UpdateProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IUpdateProductSetRequest);

                    /** UpdateProductSetRequest productSet. */
                    public productSet?: (google.cloud.vision.v1.IProductSet|null);

                    /** UpdateProductSetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IUpdateProductSetRequest): google.cloud.vision.v1.UpdateProductSetRequest;

                    /**
                     * Encodes the specified UpdateProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.UpdateProductSetRequest.verify|verify} messages.
                     * @param message UpdateProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IUpdateProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.UpdateProductSetRequest.verify|verify} messages.
                     * @param message UpdateProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IUpdateProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.UpdateProductSetRequest;

                    /**
                     * Decodes an UpdateProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.UpdateProductSetRequest;

                    /**
                     * Verifies an UpdateProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.UpdateProductSetRequest;

                    /**
                     * Creates a plain object from an UpdateProductSetRequest message. Also converts values to other types if specified.
                     * @param message UpdateProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.UpdateProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteProductSetRequest. */
                interface IDeleteProductSetRequest {

                    /** DeleteProductSetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteProductSetRequest. */
                class DeleteProductSetRequest implements IDeleteProductSetRequest {

                    /**
                     * Constructs a new DeleteProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IDeleteProductSetRequest);

                    /** DeleteProductSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IDeleteProductSetRequest): google.cloud.vision.v1.DeleteProductSetRequest;

                    /**
                     * Encodes the specified DeleteProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.DeleteProductSetRequest.verify|verify} messages.
                     * @param message DeleteProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IDeleteProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.DeleteProductSetRequest.verify|verify} messages.
                     * @param message DeleteProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IDeleteProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.DeleteProductSetRequest;

                    /**
                     * Decodes a DeleteProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.DeleteProductSetRequest;

                    /**
                     * Verifies a DeleteProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.DeleteProductSetRequest;

                    /**
                     * Creates a plain object from a DeleteProductSetRequest message. Also converts values to other types if specified.
                     * @param message DeleteProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.DeleteProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateReferenceImageRequest. */
                interface ICreateReferenceImageRequest {

                    /** CreateReferenceImageRequest parent */
                    parent?: (string|null);

                    /** CreateReferenceImageRequest referenceImage */
                    referenceImage?: (google.cloud.vision.v1.IReferenceImage|null);

                    /** CreateReferenceImageRequest referenceImageId */
                    referenceImageId?: (string|null);
                }

                /** Represents a CreateReferenceImageRequest. */
                class CreateReferenceImageRequest implements ICreateReferenceImageRequest {

                    /**
                     * Constructs a new CreateReferenceImageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ICreateReferenceImageRequest);

                    /** CreateReferenceImageRequest parent. */
                    public parent: string;

                    /** CreateReferenceImageRequest referenceImage. */
                    public referenceImage?: (google.cloud.vision.v1.IReferenceImage|null);

                    /** CreateReferenceImageRequest referenceImageId. */
                    public referenceImageId: string;

                    /**
                     * Creates a new CreateReferenceImageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateReferenceImageRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ICreateReferenceImageRequest): google.cloud.vision.v1.CreateReferenceImageRequest;

                    /**
                     * Encodes the specified CreateReferenceImageRequest message. Does not implicitly {@link google.cloud.vision.v1.CreateReferenceImageRequest.verify|verify} messages.
                     * @param message CreateReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ICreateReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateReferenceImageRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.CreateReferenceImageRequest.verify|verify} messages.
                     * @param message CreateReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ICreateReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateReferenceImageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.CreateReferenceImageRequest;

                    /**
                     * Decodes a CreateReferenceImageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.CreateReferenceImageRequest;

                    /**
                     * Verifies a CreateReferenceImageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateReferenceImageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateReferenceImageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.CreateReferenceImageRequest;

                    /**
                     * Creates a plain object from a CreateReferenceImageRequest message. Also converts values to other types if specified.
                     * @param message CreateReferenceImageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.CreateReferenceImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateReferenceImageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateReferenceImageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReferenceImagesRequest. */
                interface IListReferenceImagesRequest {

                    /** ListReferenceImagesRequest parent */
                    parent?: (string|null);

                    /** ListReferenceImagesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListReferenceImagesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListReferenceImagesRequest. */
                class ListReferenceImagesRequest implements IListReferenceImagesRequest {

                    /**
                     * Constructs a new ListReferenceImagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListReferenceImagesRequest);

                    /** ListReferenceImagesRequest parent. */
                    public parent: string;

                    /** ListReferenceImagesRequest pageSize. */
                    public pageSize: number;

                    /** ListReferenceImagesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListReferenceImagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReferenceImagesRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListReferenceImagesRequest): google.cloud.vision.v1.ListReferenceImagesRequest;

                    /**
                     * Encodes the specified ListReferenceImagesRequest message. Does not implicitly {@link google.cloud.vision.v1.ListReferenceImagesRequest.verify|verify} messages.
                     * @param message ListReferenceImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListReferenceImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReferenceImagesRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListReferenceImagesRequest.verify|verify} messages.
                     * @param message ListReferenceImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListReferenceImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReferenceImagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReferenceImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListReferenceImagesRequest;

                    /**
                     * Decodes a ListReferenceImagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReferenceImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListReferenceImagesRequest;

                    /**
                     * Verifies a ListReferenceImagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReferenceImagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReferenceImagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListReferenceImagesRequest;

                    /**
                     * Creates a plain object from a ListReferenceImagesRequest message. Also converts values to other types if specified.
                     * @param message ListReferenceImagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListReferenceImagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReferenceImagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReferenceImagesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReferenceImagesResponse. */
                interface IListReferenceImagesResponse {

                    /** ListReferenceImagesResponse referenceImages */
                    referenceImages?: (google.cloud.vision.v1.IReferenceImage[]|null);

                    /** ListReferenceImagesResponse pageSize */
                    pageSize?: (number|null);

                    /** ListReferenceImagesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListReferenceImagesResponse. */
                class ListReferenceImagesResponse implements IListReferenceImagesResponse {

                    /**
                     * Constructs a new ListReferenceImagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListReferenceImagesResponse);

                    /** ListReferenceImagesResponse referenceImages. */
                    public referenceImages: google.cloud.vision.v1.IReferenceImage[];

                    /** ListReferenceImagesResponse pageSize. */
                    public pageSize: number;

                    /** ListReferenceImagesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListReferenceImagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReferenceImagesResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListReferenceImagesResponse): google.cloud.vision.v1.ListReferenceImagesResponse;

                    /**
                     * Encodes the specified ListReferenceImagesResponse message. Does not implicitly {@link google.cloud.vision.v1.ListReferenceImagesResponse.verify|verify} messages.
                     * @param message ListReferenceImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListReferenceImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReferenceImagesResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListReferenceImagesResponse.verify|verify} messages.
                     * @param message ListReferenceImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListReferenceImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReferenceImagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReferenceImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListReferenceImagesResponse;

                    /**
                     * Decodes a ListReferenceImagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReferenceImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListReferenceImagesResponse;

                    /**
                     * Verifies a ListReferenceImagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReferenceImagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReferenceImagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListReferenceImagesResponse;

                    /**
                     * Creates a plain object from a ListReferenceImagesResponse message. Also converts values to other types if specified.
                     * @param message ListReferenceImagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListReferenceImagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReferenceImagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReferenceImagesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetReferenceImageRequest. */
                interface IGetReferenceImageRequest {

                    /** GetReferenceImageRequest name */
                    name?: (string|null);
                }

                /** Represents a GetReferenceImageRequest. */
                class GetReferenceImageRequest implements IGetReferenceImageRequest {

                    /**
                     * Constructs a new GetReferenceImageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IGetReferenceImageRequest);

                    /** GetReferenceImageRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetReferenceImageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetReferenceImageRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IGetReferenceImageRequest): google.cloud.vision.v1.GetReferenceImageRequest;

                    /**
                     * Encodes the specified GetReferenceImageRequest message. Does not implicitly {@link google.cloud.vision.v1.GetReferenceImageRequest.verify|verify} messages.
                     * @param message GetReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IGetReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetReferenceImageRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.GetReferenceImageRequest.verify|verify} messages.
                     * @param message GetReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IGetReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetReferenceImageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.GetReferenceImageRequest;

                    /**
                     * Decodes a GetReferenceImageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.GetReferenceImageRequest;

                    /**
                     * Verifies a GetReferenceImageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetReferenceImageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetReferenceImageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.GetReferenceImageRequest;

                    /**
                     * Creates a plain object from a GetReferenceImageRequest message. Also converts values to other types if specified.
                     * @param message GetReferenceImageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.GetReferenceImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetReferenceImageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetReferenceImageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteReferenceImageRequest. */
                interface IDeleteReferenceImageRequest {

                    /** DeleteReferenceImageRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteReferenceImageRequest. */
                class DeleteReferenceImageRequest implements IDeleteReferenceImageRequest {

                    /**
                     * Constructs a new DeleteReferenceImageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IDeleteReferenceImageRequest);

                    /** DeleteReferenceImageRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteReferenceImageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteReferenceImageRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IDeleteReferenceImageRequest): google.cloud.vision.v1.DeleteReferenceImageRequest;

                    /**
                     * Encodes the specified DeleteReferenceImageRequest message. Does not implicitly {@link google.cloud.vision.v1.DeleteReferenceImageRequest.verify|verify} messages.
                     * @param message DeleteReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IDeleteReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteReferenceImageRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.DeleteReferenceImageRequest.verify|verify} messages.
                     * @param message DeleteReferenceImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IDeleteReferenceImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteReferenceImageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.DeleteReferenceImageRequest;

                    /**
                     * Decodes a DeleteReferenceImageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteReferenceImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.DeleteReferenceImageRequest;

                    /**
                     * Verifies a DeleteReferenceImageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteReferenceImageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteReferenceImageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.DeleteReferenceImageRequest;

                    /**
                     * Creates a plain object from a DeleteReferenceImageRequest message. Also converts values to other types if specified.
                     * @param message DeleteReferenceImageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.DeleteReferenceImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteReferenceImageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteReferenceImageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddProductToProductSetRequest. */
                interface IAddProductToProductSetRequest {

                    /** AddProductToProductSetRequest name */
                    name?: (string|null);

                    /** AddProductToProductSetRequest product */
                    product?: (string|null);
                }

                /** Represents an AddProductToProductSetRequest. */
                class AddProductToProductSetRequest implements IAddProductToProductSetRequest {

                    /**
                     * Constructs a new AddProductToProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IAddProductToProductSetRequest);

                    /** AddProductToProductSetRequest name. */
                    public name: string;

                    /** AddProductToProductSetRequest product. */
                    public product: string;

                    /**
                     * Creates a new AddProductToProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddProductToProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IAddProductToProductSetRequest): google.cloud.vision.v1.AddProductToProductSetRequest;

                    /**
                     * Encodes the specified AddProductToProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.AddProductToProductSetRequest.verify|verify} messages.
                     * @param message AddProductToProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IAddProductToProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddProductToProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.AddProductToProductSetRequest.verify|verify} messages.
                     * @param message AddProductToProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IAddProductToProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddProductToProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddProductToProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.AddProductToProductSetRequest;

                    /**
                     * Decodes an AddProductToProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddProductToProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.AddProductToProductSetRequest;

                    /**
                     * Verifies an AddProductToProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddProductToProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddProductToProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.AddProductToProductSetRequest;

                    /**
                     * Creates a plain object from an AddProductToProductSetRequest message. Also converts values to other types if specified.
                     * @param message AddProductToProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.AddProductToProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddProductToProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddProductToProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveProductFromProductSetRequest. */
                interface IRemoveProductFromProductSetRequest {

                    /** RemoveProductFromProductSetRequest name */
                    name?: (string|null);

                    /** RemoveProductFromProductSetRequest product */
                    product?: (string|null);
                }

                /** Represents a RemoveProductFromProductSetRequest. */
                class RemoveProductFromProductSetRequest implements IRemoveProductFromProductSetRequest {

                    /**
                     * Constructs a new RemoveProductFromProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IRemoveProductFromProductSetRequest);

                    /** RemoveProductFromProductSetRequest name. */
                    public name: string;

                    /** RemoveProductFromProductSetRequest product. */
                    public product: string;

                    /**
                     * Creates a new RemoveProductFromProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveProductFromProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IRemoveProductFromProductSetRequest): google.cloud.vision.v1.RemoveProductFromProductSetRequest;

                    /**
                     * Encodes the specified RemoveProductFromProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.RemoveProductFromProductSetRequest.verify|verify} messages.
                     * @param message RemoveProductFromProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IRemoveProductFromProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveProductFromProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.RemoveProductFromProductSetRequest.verify|verify} messages.
                     * @param message RemoveProductFromProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IRemoveProductFromProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveProductFromProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveProductFromProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.RemoveProductFromProductSetRequest;

                    /**
                     * Decodes a RemoveProductFromProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveProductFromProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.RemoveProductFromProductSetRequest;

                    /**
                     * Verifies a RemoveProductFromProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveProductFromProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveProductFromProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.RemoveProductFromProductSetRequest;

                    /**
                     * Creates a plain object from a RemoveProductFromProductSetRequest message. Also converts values to other types if specified.
                     * @param message RemoveProductFromProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.RemoveProductFromProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveProductFromProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveProductFromProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductsInProductSetRequest. */
                interface IListProductsInProductSetRequest {

                    /** ListProductsInProductSetRequest name */
                    name?: (string|null);

                    /** ListProductsInProductSetRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProductsInProductSetRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListProductsInProductSetRequest. */
                class ListProductsInProductSetRequest implements IListProductsInProductSetRequest {

                    /**
                     * Constructs a new ListProductsInProductSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductsInProductSetRequest);

                    /** ListProductsInProductSetRequest name. */
                    public name: string;

                    /** ListProductsInProductSetRequest pageSize. */
                    public pageSize: number;

                    /** ListProductsInProductSetRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListProductsInProductSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsInProductSetRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductsInProductSetRequest): google.cloud.vision.v1.ListProductsInProductSetRequest;

                    /**
                     * Encodes the specified ListProductsInProductSetRequest message. Does not implicitly {@link google.cloud.vision.v1.ListProductsInProductSetRequest.verify|verify} messages.
                     * @param message ListProductsInProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductsInProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsInProductSetRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductsInProductSetRequest.verify|verify} messages.
                     * @param message ListProductsInProductSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductsInProductSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsInProductSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsInProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductsInProductSetRequest;

                    /**
                     * Decodes a ListProductsInProductSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsInProductSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductsInProductSetRequest;

                    /**
                     * Verifies a ListProductsInProductSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsInProductSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsInProductSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductsInProductSetRequest;

                    /**
                     * Creates a plain object from a ListProductsInProductSetRequest message. Also converts values to other types if specified.
                     * @param message ListProductsInProductSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductsInProductSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsInProductSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductsInProductSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProductsInProductSetResponse. */
                interface IListProductsInProductSetResponse {

                    /** ListProductsInProductSetResponse products */
                    products?: (google.cloud.vision.v1.IProduct[]|null);

                    /** ListProductsInProductSetResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProductsInProductSetResponse. */
                class ListProductsInProductSetResponse implements IListProductsInProductSetResponse {

                    /**
                     * Constructs a new ListProductsInProductSetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IListProductsInProductSetResponse);

                    /** ListProductsInProductSetResponse products. */
                    public products: google.cloud.vision.v1.IProduct[];

                    /** ListProductsInProductSetResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProductsInProductSetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsInProductSetResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IListProductsInProductSetResponse): google.cloud.vision.v1.ListProductsInProductSetResponse;

                    /**
                     * Encodes the specified ListProductsInProductSetResponse message. Does not implicitly {@link google.cloud.vision.v1.ListProductsInProductSetResponse.verify|verify} messages.
                     * @param message ListProductsInProductSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IListProductsInProductSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsInProductSetResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ListProductsInProductSetResponse.verify|verify} messages.
                     * @param message ListProductsInProductSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IListProductsInProductSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsInProductSetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsInProductSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ListProductsInProductSetResponse;

                    /**
                     * Decodes a ListProductsInProductSetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsInProductSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ListProductsInProductSetResponse;

                    /**
                     * Verifies a ListProductsInProductSetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsInProductSetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsInProductSetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ListProductsInProductSetResponse;

                    /**
                     * Creates a plain object from a ListProductsInProductSetResponse message. Also converts values to other types if specified.
                     * @param message ListProductsInProductSetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ListProductsInProductSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsInProductSetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProductsInProductSetResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportProductSetsGcsSource. */
                interface IImportProductSetsGcsSource {

                    /** ImportProductSetsGcsSource csvFileUri */
                    csvFileUri?: (string|null);
                }

                /** Represents an ImportProductSetsGcsSource. */
                class ImportProductSetsGcsSource implements IImportProductSetsGcsSource {

                    /**
                     * Constructs a new ImportProductSetsGcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImportProductSetsGcsSource);

                    /** ImportProductSetsGcsSource csvFileUri. */
                    public csvFileUri: string;

                    /**
                     * Creates a new ImportProductSetsGcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportProductSetsGcsSource instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImportProductSetsGcsSource): google.cloud.vision.v1.ImportProductSetsGcsSource;

                    /**
                     * Encodes the specified ImportProductSetsGcsSource message. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsGcsSource.verify|verify} messages.
                     * @param message ImportProductSetsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImportProductSetsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportProductSetsGcsSource message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsGcsSource.verify|verify} messages.
                     * @param message ImportProductSetsGcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImportProductSetsGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportProductSetsGcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportProductSetsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImportProductSetsGcsSource;

                    /**
                     * Decodes an ImportProductSetsGcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportProductSetsGcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImportProductSetsGcsSource;

                    /**
                     * Verifies an ImportProductSetsGcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportProductSetsGcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportProductSetsGcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImportProductSetsGcsSource;

                    /**
                     * Creates a plain object from an ImportProductSetsGcsSource message. Also converts values to other types if specified.
                     * @param message ImportProductSetsGcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImportProductSetsGcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportProductSetsGcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportProductSetsGcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportProductSetsInputConfig. */
                interface IImportProductSetsInputConfig {

                    /** ImportProductSetsInputConfig gcsSource */
                    gcsSource?: (google.cloud.vision.v1.IImportProductSetsGcsSource|null);
                }

                /** Represents an ImportProductSetsInputConfig. */
                class ImportProductSetsInputConfig implements IImportProductSetsInputConfig {

                    /**
                     * Constructs a new ImportProductSetsInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImportProductSetsInputConfig);

                    /** ImportProductSetsInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.vision.v1.IImportProductSetsGcsSource|null);

                    /** ImportProductSetsInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new ImportProductSetsInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportProductSetsInputConfig instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImportProductSetsInputConfig): google.cloud.vision.v1.ImportProductSetsInputConfig;

                    /**
                     * Encodes the specified ImportProductSetsInputConfig message. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsInputConfig.verify|verify} messages.
                     * @param message ImportProductSetsInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImportProductSetsInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportProductSetsInputConfig message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsInputConfig.verify|verify} messages.
                     * @param message ImportProductSetsInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImportProductSetsInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportProductSetsInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportProductSetsInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImportProductSetsInputConfig;

                    /**
                     * Decodes an ImportProductSetsInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportProductSetsInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImportProductSetsInputConfig;

                    /**
                     * Verifies an ImportProductSetsInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportProductSetsInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportProductSetsInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImportProductSetsInputConfig;

                    /**
                     * Creates a plain object from an ImportProductSetsInputConfig message. Also converts values to other types if specified.
                     * @param message ImportProductSetsInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImportProductSetsInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportProductSetsInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportProductSetsInputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportProductSetsRequest. */
                interface IImportProductSetsRequest {

                    /** ImportProductSetsRequest parent */
                    parent?: (string|null);

                    /** ImportProductSetsRequest inputConfig */
                    inputConfig?: (google.cloud.vision.v1.IImportProductSetsInputConfig|null);
                }

                /** Represents an ImportProductSetsRequest. */
                class ImportProductSetsRequest implements IImportProductSetsRequest {

                    /**
                     * Constructs a new ImportProductSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImportProductSetsRequest);

                    /** ImportProductSetsRequest parent. */
                    public parent: string;

                    /** ImportProductSetsRequest inputConfig. */
                    public inputConfig?: (google.cloud.vision.v1.IImportProductSetsInputConfig|null);

                    /**
                     * Creates a new ImportProductSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportProductSetsRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImportProductSetsRequest): google.cloud.vision.v1.ImportProductSetsRequest;

                    /**
                     * Encodes the specified ImportProductSetsRequest message. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsRequest.verify|verify} messages.
                     * @param message ImportProductSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImportProductSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportProductSetsRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsRequest.verify|verify} messages.
                     * @param message ImportProductSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImportProductSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportProductSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportProductSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImportProductSetsRequest;

                    /**
                     * Decodes an ImportProductSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportProductSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImportProductSetsRequest;

                    /**
                     * Verifies an ImportProductSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportProductSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportProductSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImportProductSetsRequest;

                    /**
                     * Creates a plain object from an ImportProductSetsRequest message. Also converts values to other types if specified.
                     * @param message ImportProductSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImportProductSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportProductSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportProductSetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportProductSetsResponse. */
                interface IImportProductSetsResponse {

                    /** ImportProductSetsResponse referenceImages */
                    referenceImages?: (google.cloud.vision.v1.IReferenceImage[]|null);

                    /** ImportProductSetsResponse statuses */
                    statuses?: (google.rpc.IStatus[]|null);
                }

                /** Represents an ImportProductSetsResponse. */
                class ImportProductSetsResponse implements IImportProductSetsResponse {

                    /**
                     * Constructs a new ImportProductSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IImportProductSetsResponse);

                    /** ImportProductSetsResponse referenceImages. */
                    public referenceImages: google.cloud.vision.v1.IReferenceImage[];

                    /** ImportProductSetsResponse statuses. */
                    public statuses: google.rpc.IStatus[];

                    /**
                     * Creates a new ImportProductSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportProductSetsResponse instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IImportProductSetsResponse): google.cloud.vision.v1.ImportProductSetsResponse;

                    /**
                     * Encodes the specified ImportProductSetsResponse message. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsResponse.verify|verify} messages.
                     * @param message ImportProductSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IImportProductSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportProductSetsResponse message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ImportProductSetsResponse.verify|verify} messages.
                     * @param message ImportProductSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IImportProductSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportProductSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportProductSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ImportProductSetsResponse;

                    /**
                     * Decodes an ImportProductSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportProductSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ImportProductSetsResponse;

                    /**
                     * Verifies an ImportProductSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportProductSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportProductSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ImportProductSetsResponse;

                    /**
                     * Creates a plain object from an ImportProductSetsResponse message. Also converts values to other types if specified.
                     * @param message ImportProductSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ImportProductSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportProductSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportProductSetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchOperationMetadata. */
                interface IBatchOperationMetadata {

                    /** BatchOperationMetadata state */
                    state?: (google.cloud.vision.v1.BatchOperationMetadata.State|keyof typeof google.cloud.vision.v1.BatchOperationMetadata.State|null);

                    /** BatchOperationMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchOperationMetadata. */
                class BatchOperationMetadata implements IBatchOperationMetadata {

                    /**
                     * Constructs a new BatchOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBatchOperationMetadata);

                    /** BatchOperationMetadata state. */
                    public state: (google.cloud.vision.v1.BatchOperationMetadata.State|keyof typeof google.cloud.vision.v1.BatchOperationMetadata.State);

                    /** BatchOperationMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBatchOperationMetadata): google.cloud.vision.v1.BatchOperationMetadata;

                    /**
                     * Encodes the specified BatchOperationMetadata message. Does not implicitly {@link google.cloud.vision.v1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.vision.v1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.BatchOperationMetadata;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.BatchOperationMetadata;

                    /**
                     * Verifies a BatchOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.BatchOperationMetadata;

                    /**
                     * Creates a plain object from a BatchOperationMetadata message. Also converts values to other types if specified.
                     * @param message BatchOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.BatchOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BatchOperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROCESSING = 1,
                        SUCCESSFUL = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }
                }

                /** Properties of a ProductSetPurgeConfig. */
                interface IProductSetPurgeConfig {

                    /** ProductSetPurgeConfig productSetId */
                    productSetId?: (string|null);
                }

                /** Represents a ProductSetPurgeConfig. */
                class ProductSetPurgeConfig implements IProductSetPurgeConfig {

                    /**
                     * Constructs a new ProductSetPurgeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IProductSetPurgeConfig);

                    /** ProductSetPurgeConfig productSetId. */
                    public productSetId: string;

                    /**
                     * Creates a new ProductSetPurgeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductSetPurgeConfig instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IProductSetPurgeConfig): google.cloud.vision.v1.ProductSetPurgeConfig;

                    /**
                     * Encodes the specified ProductSetPurgeConfig message. Does not implicitly {@link google.cloud.vision.v1.ProductSetPurgeConfig.verify|verify} messages.
                     * @param message ProductSetPurgeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IProductSetPurgeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductSetPurgeConfig message, length delimited. Does not implicitly {@link google.cloud.vision.v1.ProductSetPurgeConfig.verify|verify} messages.
                     * @param message ProductSetPurgeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IProductSetPurgeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductSetPurgeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductSetPurgeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.ProductSetPurgeConfig;

                    /**
                     * Decodes a ProductSetPurgeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductSetPurgeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.ProductSetPurgeConfig;

                    /**
                     * Verifies a ProductSetPurgeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductSetPurgeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductSetPurgeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.ProductSetPurgeConfig;

                    /**
                     * Creates a plain object from a ProductSetPurgeConfig message. Also converts values to other types if specified.
                     * @param message ProductSetPurgeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.ProductSetPurgeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductSetPurgeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProductSetPurgeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PurgeProductsRequest. */
                interface IPurgeProductsRequest {

                    /** PurgeProductsRequest productSetPurgeConfig */
                    productSetPurgeConfig?: (google.cloud.vision.v1.IProductSetPurgeConfig|null);

                    /** PurgeProductsRequest deleteOrphanProducts */
                    deleteOrphanProducts?: (boolean|null);

                    /** PurgeProductsRequest parent */
                    parent?: (string|null);

                    /** PurgeProductsRequest force */
                    force?: (boolean|null);
                }

                /** Represents a PurgeProductsRequest. */
                class PurgeProductsRequest implements IPurgeProductsRequest {

                    /**
                     * Constructs a new PurgeProductsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IPurgeProductsRequest);

                    /** PurgeProductsRequest productSetPurgeConfig. */
                    public productSetPurgeConfig?: (google.cloud.vision.v1.IProductSetPurgeConfig|null);

                    /** PurgeProductsRequest deleteOrphanProducts. */
                    public deleteOrphanProducts?: (boolean|null);

                    /** PurgeProductsRequest parent. */
                    public parent: string;

                    /** PurgeProductsRequest force. */
                    public force: boolean;

                    /** PurgeProductsRequest target. */
                    public target?: ("productSetPurgeConfig"|"deleteOrphanProducts");

                    /**
                     * Creates a new PurgeProductsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeProductsRequest instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IPurgeProductsRequest): google.cloud.vision.v1.PurgeProductsRequest;

                    /**
                     * Encodes the specified PurgeProductsRequest message. Does not implicitly {@link google.cloud.vision.v1.PurgeProductsRequest.verify|verify} messages.
                     * @param message PurgeProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IPurgeProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeProductsRequest message, length delimited. Does not implicitly {@link google.cloud.vision.v1.PurgeProductsRequest.verify|verify} messages.
                     * @param message PurgeProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IPurgeProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeProductsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.PurgeProductsRequest;

                    /**
                     * Decodes a PurgeProductsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.PurgeProductsRequest;

                    /**
                     * Verifies a PurgeProductsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeProductsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeProductsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.PurgeProductsRequest;

                    /**
                     * Creates a plain object from a PurgeProductsRequest message. Also converts values to other types if specified.
                     * @param message PurgeProductsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.PurgeProductsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeProductsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PurgeProductsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextAnnotation. */
                interface ITextAnnotation {

                    /** TextAnnotation pages */
                    pages?: (google.cloud.vision.v1.IPage[]|null);

                    /** TextAnnotation text */
                    text?: (string|null);
                }

                /** Represents a TextAnnotation. */
                class TextAnnotation implements ITextAnnotation {

                    /**
                     * Constructs a new TextAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ITextAnnotation);

                    /** TextAnnotation pages. */
                    public pages: google.cloud.vision.v1.IPage[];

                    /** TextAnnotation text. */
                    public text: string;

                    /**
                     * Creates a new TextAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextAnnotation instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ITextAnnotation): google.cloud.vision.v1.TextAnnotation;

                    /**
                     * Encodes the specified TextAnnotation message. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.verify|verify} messages.
                     * @param message TextAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ITextAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextAnnotation message, length delimited. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.verify|verify} messages.
                     * @param message TextAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ITextAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.TextAnnotation;

                    /**
                     * Decodes a TextAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.TextAnnotation;

                    /**
                     * Verifies a TextAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.TextAnnotation;

                    /**
                     * Creates a plain object from a TextAnnotation message. Also converts values to other types if specified.
                     * @param message TextAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.TextAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TextAnnotation {

                    /** Properties of a DetectedLanguage. */
                    interface IDetectedLanguage {

                        /** DetectedLanguage languageCode */
                        languageCode?: (string|null);

                        /** DetectedLanguage confidence */
                        confidence?: (number|null);
                    }

                    /** Represents a DetectedLanguage. */
                    class DetectedLanguage implements IDetectedLanguage {

                        /**
                         * Constructs a new DetectedLanguage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.TextAnnotation.IDetectedLanguage);

                        /** DetectedLanguage languageCode. */
                        public languageCode: string;

                        /** DetectedLanguage confidence. */
                        public confidence: number;

                        /**
                         * Creates a new DetectedLanguage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DetectedLanguage instance
                         */
                        public static create(properties?: google.cloud.vision.v1.TextAnnotation.IDetectedLanguage): google.cloud.vision.v1.TextAnnotation.DetectedLanguage;

                        /**
                         * Encodes the specified DetectedLanguage message. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.DetectedLanguage.verify|verify} messages.
                         * @param message DetectedLanguage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.TextAnnotation.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DetectedLanguage message, length delimited. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.DetectedLanguage.verify|verify} messages.
                         * @param message DetectedLanguage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.TextAnnotation.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DetectedLanguage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DetectedLanguage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.TextAnnotation.DetectedLanguage;

                        /**
                         * Decodes a DetectedLanguage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DetectedLanguage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.TextAnnotation.DetectedLanguage;

                        /**
                         * Verifies a DetectedLanguage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DetectedLanguage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DetectedLanguage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.TextAnnotation.DetectedLanguage;

                        /**
                         * Creates a plain object from a DetectedLanguage message. Also converts values to other types if specified.
                         * @param message DetectedLanguage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.TextAnnotation.DetectedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DetectedLanguage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DetectedLanguage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DetectedBreak. */
                    interface IDetectedBreak {

                        /** DetectedBreak type */
                        type?: (google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType|keyof typeof google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType|null);

                        /** DetectedBreak isPrefix */
                        isPrefix?: (boolean|null);
                    }

                    /** Represents a DetectedBreak. */
                    class DetectedBreak implements IDetectedBreak {

                        /**
                         * Constructs a new DetectedBreak.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.TextAnnotation.IDetectedBreak);

                        /** DetectedBreak type. */
                        public type: (google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType|keyof typeof google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType);

                        /** DetectedBreak isPrefix. */
                        public isPrefix: boolean;

                        /**
                         * Creates a new DetectedBreak instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DetectedBreak instance
                         */
                        public static create(properties?: google.cloud.vision.v1.TextAnnotation.IDetectedBreak): google.cloud.vision.v1.TextAnnotation.DetectedBreak;

                        /**
                         * Encodes the specified DetectedBreak message. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.DetectedBreak.verify|verify} messages.
                         * @param message DetectedBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.TextAnnotation.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DetectedBreak message, length delimited. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.DetectedBreak.verify|verify} messages.
                         * @param message DetectedBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.TextAnnotation.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DetectedBreak message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DetectedBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.TextAnnotation.DetectedBreak;

                        /**
                         * Decodes a DetectedBreak message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DetectedBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.TextAnnotation.DetectedBreak;

                        /**
                         * Verifies a DetectedBreak message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DetectedBreak message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DetectedBreak
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.TextAnnotation.DetectedBreak;

                        /**
                         * Creates a plain object from a DetectedBreak message. Also converts values to other types if specified.
                         * @param message DetectedBreak
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.TextAnnotation.DetectedBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DetectedBreak to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DetectedBreak
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace DetectedBreak {

                        /** BreakType enum. */
                        enum BreakType {
                            UNKNOWN = 0,
                            SPACE = 1,
                            SURE_SPACE = 2,
                            EOL_SURE_SPACE = 3,
                            HYPHEN = 4,
                            LINE_BREAK = 5
                        }
                    }

                    /** Properties of a TextProperty. */
                    interface ITextProperty {

                        /** TextProperty detectedLanguages */
                        detectedLanguages?: (google.cloud.vision.v1.TextAnnotation.IDetectedLanguage[]|null);

                        /** TextProperty detectedBreak */
                        detectedBreak?: (google.cloud.vision.v1.TextAnnotation.IDetectedBreak|null);
                    }

                    /** Represents a TextProperty. */
                    class TextProperty implements ITextProperty {

                        /**
                         * Constructs a new TextProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.TextAnnotation.ITextProperty);

                        /** TextProperty detectedLanguages. */
                        public detectedLanguages: google.cloud.vision.v1.TextAnnotation.IDetectedLanguage[];

                        /** TextProperty detectedBreak. */
                        public detectedBreak?: (google.cloud.vision.v1.TextAnnotation.IDetectedBreak|null);

                        /**
                         * Creates a new TextProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextProperty instance
                         */
                        public static create(properties?: google.cloud.vision.v1.TextAnnotation.ITextProperty): google.cloud.vision.v1.TextAnnotation.TextProperty;

                        /**
                         * Encodes the specified TextProperty message. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.TextProperty.verify|verify} messages.
                         * @param message TextProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.TextAnnotation.ITextProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextProperty message, length delimited. Does not implicitly {@link google.cloud.vision.v1.TextAnnotation.TextProperty.verify|verify} messages.
                         * @param message TextProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.TextAnnotation.ITextProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.TextAnnotation.TextProperty;

                        /**
                         * Decodes a TextProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.TextAnnotation.TextProperty;

                        /**
                         * Verifies a TextProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextProperty
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.TextAnnotation.TextProperty;

                        /**
                         * Creates a plain object from a TextProperty message. Also converts values to other types if specified.
                         * @param message TextProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.TextAnnotation.TextProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextProperty
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Page. */
                interface IPage {

                    /** Page property */
                    property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Page width */
                    width?: (number|null);

                    /** Page height */
                    height?: (number|null);

                    /** Page blocks */
                    blocks?: (google.cloud.vision.v1.IBlock[]|null);

                    /** Page confidence */
                    confidence?: (number|null);
                }

                /** Represents a Page. */
                class Page implements IPage {

                    /**
                     * Constructs a new Page.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IPage);

                    /** Page property. */
                    public property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Page width. */
                    public width: number;

                    /** Page height. */
                    public height: number;

                    /** Page blocks. */
                    public blocks: google.cloud.vision.v1.IBlock[];

                    /** Page confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Page instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Page instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IPage): google.cloud.vision.v1.Page;

                    /**
                     * Encodes the specified Page message. Does not implicitly {@link google.cloud.vision.v1.Page.verify|verify} messages.
                     * @param message Page message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Page message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Page.verify|verify} messages.
                     * @param message Page message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Page message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Page
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Page;

                    /**
                     * Decodes a Page message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Page
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Page;

                    /**
                     * Verifies a Page message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Page message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Page
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Page;

                    /**
                     * Creates a plain object from a Page message. Also converts values to other types if specified.
                     * @param message Page
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Page to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Page
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Block. */
                interface IBlock {

                    /** Block property */
                    property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Block boundingBox */
                    boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Block paragraphs */
                    paragraphs?: (google.cloud.vision.v1.IParagraph[]|null);

                    /** Block blockType */
                    blockType?: (google.cloud.vision.v1.Block.BlockType|keyof typeof google.cloud.vision.v1.Block.BlockType|null);

                    /** Block confidence */
                    confidence?: (number|null);
                }

                /** Represents a Block. */
                class Block implements IBlock {

                    /**
                     * Constructs a new Block.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IBlock);

                    /** Block property. */
                    public property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Block boundingBox. */
                    public boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Block paragraphs. */
                    public paragraphs: google.cloud.vision.v1.IParagraph[];

                    /** Block blockType. */
                    public blockType: (google.cloud.vision.v1.Block.BlockType|keyof typeof google.cloud.vision.v1.Block.BlockType);

                    /** Block confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Block instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Block instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IBlock): google.cloud.vision.v1.Block;

                    /**
                     * Encodes the specified Block message. Does not implicitly {@link google.cloud.vision.v1.Block.verify|verify} messages.
                     * @param message Block message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Block message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Block.verify|verify} messages.
                     * @param message Block message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Block message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Block
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Block;

                    /**
                     * Decodes a Block message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Block
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Block;

                    /**
                     * Verifies a Block message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Block message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Block
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Block;

                    /**
                     * Creates a plain object from a Block message. Also converts values to other types if specified.
                     * @param message Block
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Block to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Block
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Block {

                    /** BlockType enum. */
                    enum BlockType {
                        UNKNOWN = 0,
                        TEXT = 1,
                        TABLE = 2,
                        PICTURE = 3,
                        RULER = 4,
                        BARCODE = 5
                    }
                }

                /** Properties of a Paragraph. */
                interface IParagraph {

                    /** Paragraph property */
                    property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Paragraph boundingBox */
                    boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Paragraph words */
                    words?: (google.cloud.vision.v1.IWord[]|null);

                    /** Paragraph confidence */
                    confidence?: (number|null);
                }

                /** Represents a Paragraph. */
                class Paragraph implements IParagraph {

                    /**
                     * Constructs a new Paragraph.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IParagraph);

                    /** Paragraph property. */
                    public property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Paragraph boundingBox. */
                    public boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Paragraph words. */
                    public words: google.cloud.vision.v1.IWord[];

                    /** Paragraph confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Paragraph instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Paragraph instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IParagraph): google.cloud.vision.v1.Paragraph;

                    /**
                     * Encodes the specified Paragraph message. Does not implicitly {@link google.cloud.vision.v1.Paragraph.verify|verify} messages.
                     * @param message Paragraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Paragraph message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Paragraph.verify|verify} messages.
                     * @param message Paragraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Paragraph message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Paragraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Paragraph;

                    /**
                     * Decodes a Paragraph message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Paragraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Paragraph;

                    /**
                     * Verifies a Paragraph message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Paragraph message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Paragraph
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Paragraph;

                    /**
                     * Creates a plain object from a Paragraph message. Also converts values to other types if specified.
                     * @param message Paragraph
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Paragraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Paragraph to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Paragraph
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Word. */
                interface IWord {

                    /** Word property */
                    property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Word boundingBox */
                    boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Word symbols */
                    symbols?: (google.cloud.vision.v1.ISymbol[]|null);

                    /** Word confidence */
                    confidence?: (number|null);
                }

                /** Represents a Word. */
                class Word implements IWord {

                    /**
                     * Constructs a new Word.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IWord);

                    /** Word property. */
                    public property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Word boundingBox. */
                    public boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Word symbols. */
                    public symbols: google.cloud.vision.v1.ISymbol[];

                    /** Word confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Word instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Word instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IWord): google.cloud.vision.v1.Word;

                    /**
                     * Encodes the specified Word message. Does not implicitly {@link google.cloud.vision.v1.Word.verify|verify} messages.
                     * @param message Word message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IWord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Word message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Word.verify|verify} messages.
                     * @param message Word message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IWord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Word message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Word
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Word;

                    /**
                     * Decodes a Word message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Word
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Word;

                    /**
                     * Verifies a Word message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Word message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Word
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Word;

                    /**
                     * Creates a plain object from a Word message. Also converts values to other types if specified.
                     * @param message Word
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Word, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Word to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Word
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Symbol. */
                interface ISymbol {

                    /** Symbol property */
                    property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Symbol boundingBox */
                    boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Symbol text */
                    text?: (string|null);

                    /** Symbol confidence */
                    confidence?: (number|null);
                }

                /** Represents a Symbol. */
                class Symbol implements ISymbol {

                    /**
                     * Constructs a new Symbol.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.ISymbol);

                    /** Symbol property. */
                    public property?: (google.cloud.vision.v1.TextAnnotation.ITextProperty|null);

                    /** Symbol boundingBox. */
                    public boundingBox?: (google.cloud.vision.v1.IBoundingPoly|null);

                    /** Symbol text. */
                    public text: string;

                    /** Symbol confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Symbol instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Symbol instance
                     */
                    public static create(properties?: google.cloud.vision.v1.ISymbol): google.cloud.vision.v1.Symbol;

                    /**
                     * Encodes the specified Symbol message. Does not implicitly {@link google.cloud.vision.v1.Symbol.verify|verify} messages.
                     * @param message Symbol message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Symbol message, length delimited. Does not implicitly {@link google.cloud.vision.v1.Symbol.verify|verify} messages.
                     * @param message Symbol message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Symbol message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Symbol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.Symbol;

                    /**
                     * Decodes a Symbol message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Symbol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.Symbol;

                    /**
                     * Verifies a Symbol message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Symbol
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.Symbol;

                    /**
                     * Creates a plain object from a Symbol message. Also converts values to other types if specified.
                     * @param message Symbol
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.Symbol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Symbol to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Symbol
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WebDetection. */
                interface IWebDetection {

                    /** WebDetection webEntities */
                    webEntities?: (google.cloud.vision.v1.WebDetection.IWebEntity[]|null);

                    /** WebDetection fullMatchingImages */
                    fullMatchingImages?: (google.cloud.vision.v1.WebDetection.IWebImage[]|null);

                    /** WebDetection partialMatchingImages */
                    partialMatchingImages?: (google.cloud.vision.v1.WebDetection.IWebImage[]|null);

                    /** WebDetection pagesWithMatchingImages */
                    pagesWithMatchingImages?: (google.cloud.vision.v1.WebDetection.IWebPage[]|null);

                    /** WebDetection visuallySimilarImages */
                    visuallySimilarImages?: (google.cloud.vision.v1.WebDetection.IWebImage[]|null);

                    /** WebDetection bestGuessLabels */
                    bestGuessLabels?: (google.cloud.vision.v1.WebDetection.IWebLabel[]|null);
                }

                /** Represents a WebDetection. */
                class WebDetection implements IWebDetection {

                    /**
                     * Constructs a new WebDetection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vision.v1.IWebDetection);

                    /** WebDetection webEntities. */
                    public webEntities: google.cloud.vision.v1.WebDetection.IWebEntity[];

                    /** WebDetection fullMatchingImages. */
                    public fullMatchingImages: google.cloud.vision.v1.WebDetection.IWebImage[];

                    /** WebDetection partialMatchingImages. */
                    public partialMatchingImages: google.cloud.vision.v1.WebDetection.IWebImage[];

                    /** WebDetection pagesWithMatchingImages. */
                    public pagesWithMatchingImages: google.cloud.vision.v1.WebDetection.IWebPage[];

                    /** WebDetection visuallySimilarImages. */
                    public visuallySimilarImages: google.cloud.vision.v1.WebDetection.IWebImage[];

                    /** WebDetection bestGuessLabels. */
                    public bestGuessLabels: google.cloud.vision.v1.WebDetection.IWebLabel[];

                    /**
                     * Creates a new WebDetection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebDetection instance
                     */
                    public static create(properties?: google.cloud.vision.v1.IWebDetection): google.cloud.vision.v1.WebDetection;

                    /**
                     * Encodes the specified WebDetection message. Does not implicitly {@link google.cloud.vision.v1.WebDetection.verify|verify} messages.
                     * @param message WebDetection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vision.v1.IWebDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebDetection message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetection.verify|verify} messages.
                     * @param message WebDetection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vision.v1.IWebDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebDetection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebDetection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetection;

                    /**
                     * Decodes a WebDetection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebDetection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetection;

                    /**
                     * Verifies a WebDetection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebDetection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebDetection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetection;

                    /**
                     * Creates a plain object from a WebDetection message. Also converts values to other types if specified.
                     * @param message WebDetection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vision.v1.WebDetection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebDetection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WebDetection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WebDetection {

                    /** Properties of a WebEntity. */
                    interface IWebEntity {

                        /** WebEntity entityId */
                        entityId?: (string|null);

                        /** WebEntity score */
                        score?: (number|null);

                        /** WebEntity description */
                        description?: (string|null);
                    }

                    /** Represents a WebEntity. */
                    class WebEntity implements IWebEntity {

                        /**
                         * Constructs a new WebEntity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.WebDetection.IWebEntity);

                        /** WebEntity entityId. */
                        public entityId: string;

                        /** WebEntity score. */
                        public score: number;

                        /** WebEntity description. */
                        public description: string;

                        /**
                         * Creates a new WebEntity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WebEntity instance
                         */
                        public static create(properties?: google.cloud.vision.v1.WebDetection.IWebEntity): google.cloud.vision.v1.WebDetection.WebEntity;

                        /**
                         * Encodes the specified WebEntity message. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebEntity.verify|verify} messages.
                         * @param message WebEntity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.WebDetection.IWebEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WebEntity message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebEntity.verify|verify} messages.
                         * @param message WebEntity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.WebDetection.IWebEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WebEntity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WebEntity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetection.WebEntity;

                        /**
                         * Decodes a WebEntity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WebEntity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetection.WebEntity;

                        /**
                         * Verifies a WebEntity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WebEntity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WebEntity
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetection.WebEntity;

                        /**
                         * Creates a plain object from a WebEntity message. Also converts values to other types if specified.
                         * @param message WebEntity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.WebDetection.WebEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WebEntity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WebEntity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WebImage. */
                    interface IWebImage {

                        /** WebImage url */
                        url?: (string|null);

                        /** WebImage score */
                        score?: (number|null);
                    }

                    /** Represents a WebImage. */
                    class WebImage implements IWebImage {

                        /**
                         * Constructs a new WebImage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.WebDetection.IWebImage);

                        /** WebImage url. */
                        public url: string;

                        /** WebImage score. */
                        public score: number;

                        /**
                         * Creates a new WebImage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WebImage instance
                         */
                        public static create(properties?: google.cloud.vision.v1.WebDetection.IWebImage): google.cloud.vision.v1.WebDetection.WebImage;

                        /**
                         * Encodes the specified WebImage message. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebImage.verify|verify} messages.
                         * @param message WebImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.WebDetection.IWebImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WebImage message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebImage.verify|verify} messages.
                         * @param message WebImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.WebDetection.IWebImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WebImage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WebImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetection.WebImage;

                        /**
                         * Decodes a WebImage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WebImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetection.WebImage;

                        /**
                         * Verifies a WebImage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WebImage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WebImage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetection.WebImage;

                        /**
                         * Creates a plain object from a WebImage message. Also converts values to other types if specified.
                         * @param message WebImage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.WebDetection.WebImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WebImage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WebImage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WebPage. */
                    interface IWebPage {

                        /** WebPage url */
                        url?: (string|null);

                        /** WebPage score */
                        score?: (number|null);

                        /** WebPage pageTitle */
                        pageTitle?: (string|null);

                        /** WebPage fullMatchingImages */
                        fullMatchingImages?: (google.cloud.vision.v1.WebDetection.IWebImage[]|null);

                        /** WebPage partialMatchingImages */
                        partialMatchingImages?: (google.cloud.vision.v1.WebDetection.IWebImage[]|null);
                    }

                    /** Represents a WebPage. */
                    class WebPage implements IWebPage {

                        /**
                         * Constructs a new WebPage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.WebDetection.IWebPage);

                        /** WebPage url. */
                        public url: string;

                        /** WebPage score. */
                        public score: number;

                        /** WebPage pageTitle. */
                        public pageTitle: string;

                        /** WebPage fullMatchingImages. */
                        public fullMatchingImages: google.cloud.vision.v1.WebDetection.IWebImage[];

                        /** WebPage partialMatchingImages. */
                        public partialMatchingImages: google.cloud.vision.v1.WebDetection.IWebImage[];

                        /**
                         * Creates a new WebPage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WebPage instance
                         */
                        public static create(properties?: google.cloud.vision.v1.WebDetection.IWebPage): google.cloud.vision.v1.WebDetection.WebPage;

                        /**
                         * Encodes the specified WebPage message. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebPage.verify|verify} messages.
                         * @param message WebPage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.WebDetection.IWebPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WebPage message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebPage.verify|verify} messages.
                         * @param message WebPage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.WebDetection.IWebPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WebPage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WebPage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetection.WebPage;

                        /**
                         * Decodes a WebPage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WebPage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetection.WebPage;

                        /**
                         * Verifies a WebPage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WebPage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WebPage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetection.WebPage;

                        /**
                         * Creates a plain object from a WebPage message. Also converts values to other types if specified.
                         * @param message WebPage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.WebDetection.WebPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WebPage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WebPage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WebLabel. */
                    interface IWebLabel {

                        /** WebLabel label */
                        label?: (string|null);

                        /** WebLabel languageCode */
                        languageCode?: (string|null);
                    }

                    /** Represents a WebLabel. */
                    class WebLabel implements IWebLabel {

                        /**
                         * Constructs a new WebLabel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vision.v1.WebDetection.IWebLabel);

                        /** WebLabel label. */
                        public label: string;

                        /** WebLabel languageCode. */
                        public languageCode: string;

                        /**
                         * Creates a new WebLabel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WebLabel instance
                         */
                        public static create(properties?: google.cloud.vision.v1.WebDetection.IWebLabel): google.cloud.vision.v1.WebDetection.WebLabel;

                        /**
                         * Encodes the specified WebLabel message. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebLabel.verify|verify} messages.
                         * @param message WebLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vision.v1.WebDetection.IWebLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WebLabel message, length delimited. Does not implicitly {@link google.cloud.vision.v1.WebDetection.WebLabel.verify|verify} messages.
                         * @param message WebLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vision.v1.WebDetection.IWebLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WebLabel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WebLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vision.v1.WebDetection.WebLabel;

                        /**
                         * Decodes a WebLabel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WebLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vision.v1.WebDetection.WebLabel;

                        /**
                         * Verifies a WebLabel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WebLabel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WebLabel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vision.v1.WebDetection.WebLabel;

                        /**
                         * Creates a plain object from a WebLabel message. Also converts values to other types if specified.
                         * @param message WebLabel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vision.v1.WebDetection.WebLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WebLabel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WebLabel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
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

    /** Namespace type. */
    namespace type {

        /** Properties of a Color. */
        interface IColor {

            /** Color red */
            red?: (number|null);

            /** Color green */
            green?: (number|null);

            /** Color blue */
            blue?: (number|null);

            /** Color alpha */
            alpha?: (google.protobuf.IFloatValue|null);
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IColor);

            /** Color red. */
            public red: number;

            /** Color green. */
            public green: number;

            /** Color blue. */
            public blue: number;

            /** Color alpha. */
            public alpha?: (google.protobuf.IFloatValue|null);

            /**
             * Creates a new Color instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Color instance
             */
            public static create(properties?: google.type.IColor): google.type.Color;

            /**
             * Encodes the specified Color message. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Color;

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Color;

            /**
             * Verifies a Color message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Color
             */
            public static fromObject(object: { [k: string]: any }): google.type.Color;

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @param message Color
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Color to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Color
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LatLng
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
