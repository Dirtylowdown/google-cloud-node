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

        /** Namespace videointelligence. */
        namespace videointelligence {

            /** Namespace v1p3beta1. */
            namespace v1p3beta1 {

                /** Represents a VideoIntelligenceService */
                class VideoIntelligenceService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new VideoIntelligenceService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new VideoIntelligenceService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): VideoIntelligenceService;

                    /**
                     * Calls AnnotateVideo.
                     * @param request AnnotateVideoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public annotateVideo(request: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest, callback: google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService.AnnotateVideoCallback): void;

                    /**
                     * Calls AnnotateVideo.
                     * @param request AnnotateVideoRequest message or plain object
                     * @returns Promise
                     */
                    public annotateVideo(request: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest): Promise<google.longrunning.Operation>;
                }

                namespace VideoIntelligenceService {

                    /**
                     * Callback as used by {@link google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService|annotateVideo}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AnnotateVideoCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Represents a StreamingVideoIntelligenceService */
                class StreamingVideoIntelligenceService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new StreamingVideoIntelligenceService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new StreamingVideoIntelligenceService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StreamingVideoIntelligenceService;

                    /**
                     * Calls StreamingAnnotateVideo.
                     * @param request StreamingAnnotateVideoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StreamingAnnotateVideoResponse
                     */
                    public streamingAnnotateVideo(request: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest, callback: google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService.StreamingAnnotateVideoCallback): void;

                    /**
                     * Calls StreamingAnnotateVideo.
                     * @param request StreamingAnnotateVideoRequest message or plain object
                     * @returns Promise
                     */
                    public streamingAnnotateVideo(request: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest): Promise<google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse>;
                }

                namespace StreamingVideoIntelligenceService {

                    /**
                     * Callback as used by {@link google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService|streamingAnnotateVideo}.
                     * @param error Error, if any
                     * @param [response] StreamingAnnotateVideoResponse
                     */
                    type StreamingAnnotateVideoCallback = (error: (Error|null), response?: google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse) => void;
                }

                /** Properties of an AnnotateVideoRequest. */
                interface IAnnotateVideoRequest {

                    /** AnnotateVideoRequest inputUri */
                    inputUri?: (string|null);

                    /** AnnotateVideoRequest inputContent */
                    inputContent?: (Uint8Array|string|null);

                    /** AnnotateVideoRequest features */
                    features?: (google.cloud.videointelligence.v1p3beta1.Feature[]|null);

                    /** AnnotateVideoRequest videoContext */
                    videoContext?: (google.cloud.videointelligence.v1p3beta1.IVideoContext|null);

                    /** AnnotateVideoRequest outputUri */
                    outputUri?: (string|null);

                    /** AnnotateVideoRequest locationId */
                    locationId?: (string|null);
                }

                /** Represents an AnnotateVideoRequest. */
                class AnnotateVideoRequest implements IAnnotateVideoRequest {

                    /**
                     * Constructs a new AnnotateVideoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest);

                    /** AnnotateVideoRequest inputUri. */
                    public inputUri: string;

                    /** AnnotateVideoRequest inputContent. */
                    public inputContent: (Uint8Array|string);

                    /** AnnotateVideoRequest features. */
                    public features: google.cloud.videointelligence.v1p3beta1.Feature[];

                    /** AnnotateVideoRequest videoContext. */
                    public videoContext?: (google.cloud.videointelligence.v1p3beta1.IVideoContext|null);

                    /** AnnotateVideoRequest outputUri. */
                    public outputUri: string;

                    /** AnnotateVideoRequest locationId. */
                    public locationId: string;

                    /**
                     * Creates a new AnnotateVideoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateVideoRequest instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest): google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest;

                    /**
                     * Encodes the specified AnnotateVideoRequest message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.verify|verify} messages.
                     * @param message AnnotateVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateVideoRequest message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest.verify|verify} messages.
                     * @param message AnnotateVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateVideoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest;

                    /**
                     * Decodes an AnnotateVideoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest;

                    /**
                     * Verifies an AnnotateVideoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateVideoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateVideoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest;

                    /**
                     * Creates a plain object from an AnnotateVideoRequest message. Also converts values to other types if specified.
                     * @param message AnnotateVideoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateVideoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateVideoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VideoContext. */
                interface IVideoContext {

                    /** VideoContext segments */
                    segments?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment[]|null);

                    /** VideoContext labelDetectionConfig */
                    labelDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig|null);

                    /** VideoContext shotChangeDetectionConfig */
                    shotChangeDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig|null);

                    /** VideoContext explicitContentDetectionConfig */
                    explicitContentDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig|null);

                    /** VideoContext faceDetectionConfig */
                    faceDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig|null);

                    /** VideoContext speechTranscriptionConfig */
                    speechTranscriptionConfig?: (google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig|null);

                    /** VideoContext textDetectionConfig */
                    textDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig|null);

                    /** VideoContext personDetectionConfig */
                    personDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig|null);

                    /** VideoContext objectTrackingConfig */
                    objectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig|null);
                }

                /** Represents a VideoContext. */
                class VideoContext implements IVideoContext {

                    /**
                     * Constructs a new VideoContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IVideoContext);

                    /** VideoContext segments. */
                    public segments: google.cloud.videointelligence.v1p3beta1.IVideoSegment[];

                    /** VideoContext labelDetectionConfig. */
                    public labelDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig|null);

                    /** VideoContext shotChangeDetectionConfig. */
                    public shotChangeDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig|null);

                    /** VideoContext explicitContentDetectionConfig. */
                    public explicitContentDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig|null);

                    /** VideoContext faceDetectionConfig. */
                    public faceDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig|null);

                    /** VideoContext speechTranscriptionConfig. */
                    public speechTranscriptionConfig?: (google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig|null);

                    /** VideoContext textDetectionConfig. */
                    public textDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig|null);

                    /** VideoContext personDetectionConfig. */
                    public personDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig|null);

                    /** VideoContext objectTrackingConfig. */
                    public objectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig|null);

                    /**
                     * Creates a new VideoContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoContext instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IVideoContext): google.cloud.videointelligence.v1p3beta1.VideoContext;

                    /**
                     * Encodes the specified VideoContext message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoContext.verify|verify} messages.
                     * @param message VideoContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IVideoContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoContext message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoContext.verify|verify} messages.
                     * @param message VideoContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IVideoContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.VideoContext;

                    /**
                     * Decodes a VideoContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.VideoContext;

                    /**
                     * Verifies a VideoContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.VideoContext;

                    /**
                     * Creates a plain object from a VideoContext message. Also converts values to other types if specified.
                     * @param message VideoContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.VideoContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VideoContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** LabelDetectionMode enum. */
                enum LabelDetectionMode {
                    LABEL_DETECTION_MODE_UNSPECIFIED = 0,
                    SHOT_MODE = 1,
                    FRAME_MODE = 2,
                    SHOT_AND_FRAME_MODE = 3
                }

                /** Likelihood enum. */
                enum Likelihood {
                    LIKELIHOOD_UNSPECIFIED = 0,
                    VERY_UNLIKELY = 1,
                    UNLIKELY = 2,
                    POSSIBLE = 3,
                    LIKELY = 4,
                    VERY_LIKELY = 5
                }

                /** Properties of a LabelDetectionConfig. */
                interface ILabelDetectionConfig {

                    /** LabelDetectionConfig labelDetectionMode */
                    labelDetectionMode?: (google.cloud.videointelligence.v1p3beta1.LabelDetectionMode|keyof typeof google.cloud.videointelligence.v1p3beta1.LabelDetectionMode|null);

                    /** LabelDetectionConfig stationaryCamera */
                    stationaryCamera?: (boolean|null);

                    /** LabelDetectionConfig model */
                    model?: (string|null);

                    /** LabelDetectionConfig frameConfidenceThreshold */
                    frameConfidenceThreshold?: (number|null);

                    /** LabelDetectionConfig videoConfidenceThreshold */
                    videoConfidenceThreshold?: (number|null);
                }

                /** Represents a LabelDetectionConfig. */
                class LabelDetectionConfig implements ILabelDetectionConfig {

                    /**
                     * Constructs a new LabelDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig);

                    /** LabelDetectionConfig labelDetectionMode. */
                    public labelDetectionMode: (google.cloud.videointelligence.v1p3beta1.LabelDetectionMode|keyof typeof google.cloud.videointelligence.v1p3beta1.LabelDetectionMode);

                    /** LabelDetectionConfig stationaryCamera. */
                    public stationaryCamera: boolean;

                    /** LabelDetectionConfig model. */
                    public model: string;

                    /** LabelDetectionConfig frameConfidenceThreshold. */
                    public frameConfidenceThreshold: number;

                    /** LabelDetectionConfig videoConfidenceThreshold. */
                    public videoConfidenceThreshold: number;

                    /**
                     * Creates a new LabelDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig): google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;

                    /**
                     * Encodes the specified LabelDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.verify|verify} messages.
                     * @param message LabelDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig.verify|verify} messages.
                     * @param message LabelDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ILabelDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;

                    /**
                     * Decodes a LabelDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;

                    /**
                     * Verifies a LabelDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig;

                    /**
                     * Creates a plain object from a LabelDetectionConfig message. Also converts values to other types if specified.
                     * @param message LabelDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LabelDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** StreamingFeature enum. */
                enum StreamingFeature {
                    STREAMING_FEATURE_UNSPECIFIED = 0,
                    STREAMING_LABEL_DETECTION = 1,
                    STREAMING_SHOT_CHANGE_DETECTION = 2,
                    STREAMING_EXPLICIT_CONTENT_DETECTION = 3,
                    STREAMING_OBJECT_TRACKING = 4,
                    STREAMING_AUTOML_ACTION_RECOGNITION = 23,
                    STREAMING_AUTOML_CLASSIFICATION = 21,
                    STREAMING_AUTOML_OBJECT_TRACKING = 22
                }

                /** Feature enum. */
                enum Feature {
                    FEATURE_UNSPECIFIED = 0,
                    LABEL_DETECTION = 1,
                    SHOT_CHANGE_DETECTION = 2,
                    EXPLICIT_CONTENT_DETECTION = 3,
                    FACE_DETECTION = 4,
                    SPEECH_TRANSCRIPTION = 6,
                    TEXT_DETECTION = 7,
                    OBJECT_TRACKING = 9,
                    LOGO_RECOGNITION = 12,
                    CELEBRITY_RECOGNITION = 13,
                    PERSON_DETECTION = 14
                }

                /** Properties of a ShotChangeDetectionConfig. */
                interface IShotChangeDetectionConfig {

                    /** ShotChangeDetectionConfig model */
                    model?: (string|null);
                }

                /** Represents a ShotChangeDetectionConfig. */
                class ShotChangeDetectionConfig implements IShotChangeDetectionConfig {

                    /**
                     * Constructs a new ShotChangeDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig);

                    /** ShotChangeDetectionConfig model. */
                    public model: string;

                    /**
                     * Creates a new ShotChangeDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShotChangeDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig): google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;

                    /**
                     * Encodes the specified ShotChangeDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.verify|verify} messages.
                     * @param message ShotChangeDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShotChangeDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig.verify|verify} messages.
                     * @param message ShotChangeDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IShotChangeDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShotChangeDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShotChangeDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;

                    /**
                     * Decodes a ShotChangeDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShotChangeDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;

                    /**
                     * Verifies a ShotChangeDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShotChangeDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShotChangeDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig;

                    /**
                     * Creates a plain object from a ShotChangeDetectionConfig message. Also converts values to other types if specified.
                     * @param message ShotChangeDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShotChangeDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShotChangeDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ObjectTrackingConfig. */
                interface IObjectTrackingConfig {

                    /** ObjectTrackingConfig model */
                    model?: (string|null);
                }

                /** Represents an ObjectTrackingConfig. */
                class ObjectTrackingConfig implements IObjectTrackingConfig {

                    /**
                     * Constructs a new ObjectTrackingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig);

                    /** ObjectTrackingConfig model. */
                    public model: string;

                    /**
                     * Creates a new ObjectTrackingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectTrackingConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig): google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;

                    /**
                     * Encodes the specified ObjectTrackingConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.verify|verify} messages.
                     * @param message ObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectTrackingConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig.verify|verify} messages.
                     * @param message ObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectTrackingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;

                    /**
                     * Decodes an ObjectTrackingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;

                    /**
                     * Verifies an ObjectTrackingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectTrackingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectTrackingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig;

                    /**
                     * Creates a plain object from an ObjectTrackingConfig message. Also converts values to other types if specified.
                     * @param message ObjectTrackingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectTrackingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ObjectTrackingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExplicitContentDetectionConfig. */
                interface IExplicitContentDetectionConfig {

                    /** ExplicitContentDetectionConfig model */
                    model?: (string|null);
                }

                /** Represents an ExplicitContentDetectionConfig. */
                class ExplicitContentDetectionConfig implements IExplicitContentDetectionConfig {

                    /**
                     * Constructs a new ExplicitContentDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig);

                    /** ExplicitContentDetectionConfig model. */
                    public model: string;

                    /**
                     * Creates a new ExplicitContentDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplicitContentDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig): google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;

                    /**
                     * Encodes the specified ExplicitContentDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.verify|verify} messages.
                     * @param message ExplicitContentDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplicitContentDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig.verify|verify} messages.
                     * @param message ExplicitContentDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplicitContentDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplicitContentDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;

                    /**
                     * Decodes an ExplicitContentDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplicitContentDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;

                    /**
                     * Verifies an ExplicitContentDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplicitContentDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplicitContentDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig;

                    /**
                     * Creates a plain object from an ExplicitContentDetectionConfig message. Also converts values to other types if specified.
                     * @param message ExplicitContentDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplicitContentDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplicitContentDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FaceDetectionConfig. */
                interface IFaceDetectionConfig {

                    /** FaceDetectionConfig model */
                    model?: (string|null);

                    /** FaceDetectionConfig includeBoundingBoxes */
                    includeBoundingBoxes?: (boolean|null);

                    /** FaceDetectionConfig includeAttributes */
                    includeAttributes?: (boolean|null);
                }

                /** Represents a FaceDetectionConfig. */
                class FaceDetectionConfig implements IFaceDetectionConfig {

                    /**
                     * Constructs a new FaceDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig);

                    /** FaceDetectionConfig model. */
                    public model: string;

                    /** FaceDetectionConfig includeBoundingBoxes. */
                    public includeBoundingBoxes: boolean;

                    /** FaceDetectionConfig includeAttributes. */
                    public includeAttributes: boolean;

                    /**
                     * Creates a new FaceDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FaceDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig): google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig;

                    /**
                     * Encodes the specified FaceDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig.verify|verify} messages.
                     * @param message FaceDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FaceDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig.verify|verify} messages.
                     * @param message FaceDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IFaceDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FaceDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FaceDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig;

                    /**
                     * Decodes a FaceDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FaceDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig;

                    /**
                     * Verifies a FaceDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FaceDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FaceDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig;

                    /**
                     * Creates a plain object from a FaceDetectionConfig message. Also converts values to other types if specified.
                     * @param message FaceDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.FaceDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FaceDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FaceDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PersonDetectionConfig. */
                interface IPersonDetectionConfig {

                    /** PersonDetectionConfig includeBoundingBoxes */
                    includeBoundingBoxes?: (boolean|null);

                    /** PersonDetectionConfig includePoseLandmarks */
                    includePoseLandmarks?: (boolean|null);

                    /** PersonDetectionConfig includeAttributes */
                    includeAttributes?: (boolean|null);
                }

                /** Represents a PersonDetectionConfig. */
                class PersonDetectionConfig implements IPersonDetectionConfig {

                    /**
                     * Constructs a new PersonDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig);

                    /** PersonDetectionConfig includeBoundingBoxes. */
                    public includeBoundingBoxes: boolean;

                    /** PersonDetectionConfig includePoseLandmarks. */
                    public includePoseLandmarks: boolean;

                    /** PersonDetectionConfig includeAttributes. */
                    public includeAttributes: boolean;

                    /**
                     * Creates a new PersonDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PersonDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig): google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig;

                    /**
                     * Encodes the specified PersonDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig.verify|verify} messages.
                     * @param message PersonDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PersonDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig.verify|verify} messages.
                     * @param message PersonDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IPersonDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig;

                    /**
                     * Decodes a PersonDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PersonDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig;

                    /**
                     * Verifies a PersonDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PersonDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PersonDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig;

                    /**
                     * Creates a plain object from a PersonDetectionConfig message. Also converts values to other types if specified.
                     * @param message PersonDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.PersonDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PersonDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PersonDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextDetectionConfig. */
                interface ITextDetectionConfig {

                    /** TextDetectionConfig languageHints */
                    languageHints?: (string[]|null);

                    /** TextDetectionConfig model */
                    model?: (string|null);
                }

                /** Represents a TextDetectionConfig. */
                class TextDetectionConfig implements ITextDetectionConfig {

                    /**
                     * Constructs a new TextDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig);

                    /** TextDetectionConfig languageHints. */
                    public languageHints: string[];

                    /** TextDetectionConfig model. */
                    public model: string;

                    /**
                     * Creates a new TextDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig): google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;

                    /**
                     * Encodes the specified TextDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.verify|verify} messages.
                     * @param message TextDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextDetectionConfig.verify|verify} messages.
                     * @param message TextDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITextDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;

                    /**
                     * Decodes a TextDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;

                    /**
                     * Verifies a TextDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.TextDetectionConfig;

                    /**
                     * Creates a plain object from a TextDetectionConfig message. Also converts values to other types if specified.
                     * @param message TextDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.TextDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VideoSegment. */
                interface IVideoSegment {

                    /** VideoSegment startTimeOffset */
                    startTimeOffset?: (google.protobuf.IDuration|null);

                    /** VideoSegment endTimeOffset */
                    endTimeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents a VideoSegment. */
                class VideoSegment implements IVideoSegment {

                    /**
                     * Constructs a new VideoSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IVideoSegment);

                    /** VideoSegment startTimeOffset. */
                    public startTimeOffset?: (google.protobuf.IDuration|null);

                    /** VideoSegment endTimeOffset. */
                    public endTimeOffset?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new VideoSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoSegment instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IVideoSegment): google.cloud.videointelligence.v1p3beta1.VideoSegment;

                    /**
                     * Encodes the specified VideoSegment message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoSegment.verify|verify} messages.
                     * @param message VideoSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IVideoSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoSegment message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoSegment.verify|verify} messages.
                     * @param message VideoSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IVideoSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.VideoSegment;

                    /**
                     * Decodes a VideoSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.VideoSegment;

                    /**
                     * Verifies a VideoSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.VideoSegment;

                    /**
                     * Creates a plain object from a VideoSegment message. Also converts values to other types if specified.
                     * @param message VideoSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.VideoSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VideoSegment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LabelSegment. */
                interface ILabelSegment {

                    /** LabelSegment segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** LabelSegment confidence */
                    confidence?: (number|null);
                }

                /** Represents a LabelSegment. */
                class LabelSegment implements ILabelSegment {

                    /**
                     * Constructs a new LabelSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ILabelSegment);

                    /** LabelSegment segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** LabelSegment confidence. */
                    public confidence: number;

                    /**
                     * Creates a new LabelSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelSegment instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ILabelSegment): google.cloud.videointelligence.v1p3beta1.LabelSegment;

                    /**
                     * Encodes the specified LabelSegment message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelSegment.verify|verify} messages.
                     * @param message LabelSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ILabelSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelSegment message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelSegment.verify|verify} messages.
                     * @param message LabelSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ILabelSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.LabelSegment;

                    /**
                     * Decodes a LabelSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.LabelSegment;

                    /**
                     * Verifies a LabelSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.LabelSegment;

                    /**
                     * Creates a plain object from a LabelSegment message. Also converts values to other types if specified.
                     * @param message LabelSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.LabelSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LabelSegment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LabelFrame. */
                interface ILabelFrame {

                    /** LabelFrame timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);

                    /** LabelFrame confidence */
                    confidence?: (number|null);
                }

                /** Represents a LabelFrame. */
                class LabelFrame implements ILabelFrame {

                    /**
                     * Constructs a new LabelFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ILabelFrame);

                    /** LabelFrame timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /** LabelFrame confidence. */
                    public confidence: number;

                    /**
                     * Creates a new LabelFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelFrame instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ILabelFrame): google.cloud.videointelligence.v1p3beta1.LabelFrame;

                    /**
                     * Encodes the specified LabelFrame message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelFrame.verify|verify} messages.
                     * @param message LabelFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ILabelFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelFrame message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelFrame.verify|verify} messages.
                     * @param message LabelFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ILabelFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.LabelFrame;

                    /**
                     * Decodes a LabelFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.LabelFrame;

                    /**
                     * Verifies a LabelFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelFrame
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.LabelFrame;

                    /**
                     * Creates a plain object from a LabelFrame message. Also converts values to other types if specified.
                     * @param message LabelFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.LabelFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LabelFrame
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity entityId */
                    entityId?: (string|null);

                    /** Entity description */
                    description?: (string|null);

                    /** Entity languageCode */
                    languageCode?: (string|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IEntity);

                    /** Entity entityId. */
                    public entityId: string;

                    /** Entity description. */
                    public description: string;

                    /** Entity languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IEntity): google.cloud.videointelligence.v1p3beta1.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Entity
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LabelAnnotation. */
                interface ILabelAnnotation {

                    /** LabelAnnotation entity */
                    entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** LabelAnnotation categoryEntities */
                    categoryEntities?: (google.cloud.videointelligence.v1p3beta1.IEntity[]|null);

                    /** LabelAnnotation segments */
                    segments?: (google.cloud.videointelligence.v1p3beta1.ILabelSegment[]|null);

                    /** LabelAnnotation frames */
                    frames?: (google.cloud.videointelligence.v1p3beta1.ILabelFrame[]|null);
                }

                /** Represents a LabelAnnotation. */
                class LabelAnnotation implements ILabelAnnotation {

                    /**
                     * Constructs a new LabelAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation);

                    /** LabelAnnotation entity. */
                    public entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** LabelAnnotation categoryEntities. */
                    public categoryEntities: google.cloud.videointelligence.v1p3beta1.IEntity[];

                    /** LabelAnnotation segments. */
                    public segments: google.cloud.videointelligence.v1p3beta1.ILabelSegment[];

                    /** LabelAnnotation frames. */
                    public frames: google.cloud.videointelligence.v1p3beta1.ILabelFrame[];

                    /**
                     * Creates a new LabelAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation): google.cloud.videointelligence.v1p3beta1.LabelAnnotation;

                    /**
                     * Encodes the specified LabelAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation.verify|verify} messages.
                     * @param message LabelAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation.verify|verify} messages.
                     * @param message LabelAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.LabelAnnotation;

                    /**
                     * Decodes a LabelAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.LabelAnnotation;

                    /**
                     * Verifies a LabelAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.LabelAnnotation;

                    /**
                     * Creates a plain object from a LabelAnnotation message. Also converts values to other types if specified.
                     * @param message LabelAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.LabelAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LabelAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExplicitContentFrame. */
                interface IExplicitContentFrame {

                    /** ExplicitContentFrame timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);

                    /** ExplicitContentFrame pornographyLikelihood */
                    pornographyLikelihood?: (google.cloud.videointelligence.v1p3beta1.Likelihood|keyof typeof google.cloud.videointelligence.v1p3beta1.Likelihood|null);
                }

                /** Represents an ExplicitContentFrame. */
                class ExplicitContentFrame implements IExplicitContentFrame {

                    /**
                     * Constructs a new ExplicitContentFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame);

                    /** ExplicitContentFrame timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /** ExplicitContentFrame pornographyLikelihood. */
                    public pornographyLikelihood: (google.cloud.videointelligence.v1p3beta1.Likelihood|keyof typeof google.cloud.videointelligence.v1p3beta1.Likelihood);

                    /**
                     * Creates a new ExplicitContentFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplicitContentFrame instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame): google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;

                    /**
                     * Encodes the specified ExplicitContentFrame message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.verify|verify} messages.
                     * @param message ExplicitContentFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplicitContentFrame message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame.verify|verify} messages.
                     * @param message ExplicitContentFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplicitContentFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplicitContentFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;

                    /**
                     * Decodes an ExplicitContentFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplicitContentFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;

                    /**
                     * Verifies an ExplicitContentFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplicitContentFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplicitContentFrame
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame;

                    /**
                     * Creates a plain object from an ExplicitContentFrame message. Also converts values to other types if specified.
                     * @param message ExplicitContentFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplicitContentFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplicitContentFrame
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExplicitContentAnnotation. */
                interface IExplicitContentAnnotation {

                    /** ExplicitContentAnnotation frames */
                    frames?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame[]|null);
                }

                /** Represents an ExplicitContentAnnotation. */
                class ExplicitContentAnnotation implements IExplicitContentAnnotation {

                    /**
                     * Constructs a new ExplicitContentAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation);

                    /** ExplicitContentAnnotation frames. */
                    public frames: google.cloud.videointelligence.v1p3beta1.IExplicitContentFrame[];

                    /**
                     * Creates a new ExplicitContentAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplicitContentAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation): google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;

                    /**
                     * Encodes the specified ExplicitContentAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.verify|verify} messages.
                     * @param message ExplicitContentAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplicitContentAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation.verify|verify} messages.
                     * @param message ExplicitContentAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplicitContentAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplicitContentAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;

                    /**
                     * Decodes an ExplicitContentAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplicitContentAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;

                    /**
                     * Verifies an ExplicitContentAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplicitContentAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplicitContentAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation;

                    /**
                     * Creates a plain object from an ExplicitContentAnnotation message. Also converts values to other types if specified.
                     * @param message ExplicitContentAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplicitContentAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplicitContentAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NormalizedBoundingBox. */
                interface INormalizedBoundingBox {

                    /** NormalizedBoundingBox left */
                    left?: (number|null);

                    /** NormalizedBoundingBox top */
                    top?: (number|null);

                    /** NormalizedBoundingBox right */
                    right?: (number|null);

                    /** NormalizedBoundingBox bottom */
                    bottom?: (number|null);
                }

                /** Represents a NormalizedBoundingBox. */
                class NormalizedBoundingBox implements INormalizedBoundingBox {

                    /**
                     * Constructs a new NormalizedBoundingBox.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox);

                    /** NormalizedBoundingBox left. */
                    public left: number;

                    /** NormalizedBoundingBox top. */
                    public top: number;

                    /** NormalizedBoundingBox right. */
                    public right: number;

                    /** NormalizedBoundingBox bottom. */
                    public bottom: number;

                    /**
                     * Creates a new NormalizedBoundingBox instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedBoundingBox instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;

                    /**
                     * Encodes the specified NormalizedBoundingBox message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.verify|verify} messages.
                     * @param message NormalizedBoundingBox message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedBoundingBox message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox.verify|verify} messages.
                     * @param message NormalizedBoundingBox message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedBoundingBox message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedBoundingBox
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;

                    /**
                     * Decodes a NormalizedBoundingBox message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedBoundingBox
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;

                    /**
                     * Verifies a NormalizedBoundingBox message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedBoundingBox message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedBoundingBox
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox;

                    /**
                     * Creates a plain object from a NormalizedBoundingBox message. Also converts values to other types if specified.
                     * @param message NormalizedBoundingBox
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedBoundingBox to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NormalizedBoundingBox
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TimestampedObject. */
                interface ITimestampedObject {

                    /** TimestampedObject normalizedBoundingBox */
                    normalizedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox|null);

                    /** TimestampedObject timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);

                    /** TimestampedObject attributes */
                    attributes?: (google.cloud.videointelligence.v1p3beta1.IDetectedAttribute[]|null);

                    /** TimestampedObject landmarks */
                    landmarks?: (google.cloud.videointelligence.v1p3beta1.IDetectedLandmark[]|null);
                }

                /** Represents a TimestampedObject. */
                class TimestampedObject implements ITimestampedObject {

                    /**
                     * Constructs a new TimestampedObject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITimestampedObject);

                    /** TimestampedObject normalizedBoundingBox. */
                    public normalizedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox|null);

                    /** TimestampedObject timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /** TimestampedObject attributes. */
                    public attributes: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute[];

                    /** TimestampedObject landmarks. */
                    public landmarks: google.cloud.videointelligence.v1p3beta1.IDetectedLandmark[];

                    /**
                     * Creates a new TimestampedObject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimestampedObject instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITimestampedObject): google.cloud.videointelligence.v1p3beta1.TimestampedObject;

                    /**
                     * Encodes the specified TimestampedObject message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TimestampedObject.verify|verify} messages.
                     * @param message TimestampedObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITimestampedObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimestampedObject message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TimestampedObject.verify|verify} messages.
                     * @param message TimestampedObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITimestampedObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimestampedObject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimestampedObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.TimestampedObject;

                    /**
                     * Decodes a TimestampedObject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimestampedObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.TimestampedObject;

                    /**
                     * Verifies a TimestampedObject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimestampedObject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimestampedObject
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.TimestampedObject;

                    /**
                     * Creates a plain object from a TimestampedObject message. Also converts values to other types if specified.
                     * @param message TimestampedObject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.TimestampedObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimestampedObject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimestampedObject
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Track. */
                interface ITrack {

                    /** Track segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** Track timestampedObjects */
                    timestampedObjects?: (google.cloud.videointelligence.v1p3beta1.ITimestampedObject[]|null);

                    /** Track attributes */
                    attributes?: (google.cloud.videointelligence.v1p3beta1.IDetectedAttribute[]|null);

                    /** Track confidence */
                    confidence?: (number|null);
                }

                /** Represents a Track. */
                class Track implements ITrack {

                    /**
                     * Constructs a new Track.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITrack);

                    /** Track segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** Track timestampedObjects. */
                    public timestampedObjects: google.cloud.videointelligence.v1p3beta1.ITimestampedObject[];

                    /** Track attributes. */
                    public attributes: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute[];

                    /** Track confidence. */
                    public confidence: number;

                    /**
                     * Creates a new Track instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Track instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITrack): google.cloud.videointelligence.v1p3beta1.Track;

                    /**
                     * Encodes the specified Track message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Track.verify|verify} messages.
                     * @param message Track message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Track message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Track.verify|verify} messages.
                     * @param message Track message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Track message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Track
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.Track;

                    /**
                     * Decodes a Track message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Track
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.Track;

                    /**
                     * Verifies a Track message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Track message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Track
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.Track;

                    /**
                     * Creates a plain object from a Track message. Also converts values to other types if specified.
                     * @param message Track
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.Track, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Track to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Track
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DetectedAttribute. */
                interface IDetectedAttribute {

                    /** DetectedAttribute name */
                    name?: (string|null);

                    /** DetectedAttribute confidence */
                    confidence?: (number|null);

                    /** DetectedAttribute value */
                    value?: (string|null);
                }

                /** Represents a DetectedAttribute. */
                class DetectedAttribute implements IDetectedAttribute {

                    /**
                     * Constructs a new DetectedAttribute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute);

                    /** DetectedAttribute name. */
                    public name: string;

                    /** DetectedAttribute confidence. */
                    public confidence: number;

                    /** DetectedAttribute value. */
                    public value: string;

                    /**
                     * Creates a new DetectedAttribute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectedAttribute instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute): google.cloud.videointelligence.v1p3beta1.DetectedAttribute;

                    /**
                     * Encodes the specified DetectedAttribute message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.DetectedAttribute.verify|verify} messages.
                     * @param message DetectedAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectedAttribute message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.DetectedAttribute.verify|verify} messages.
                     * @param message DetectedAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IDetectedAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectedAttribute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectedAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.DetectedAttribute;

                    /**
                     * Decodes a DetectedAttribute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectedAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.DetectedAttribute;

                    /**
                     * Verifies a DetectedAttribute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectedAttribute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectedAttribute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.DetectedAttribute;

                    /**
                     * Creates a plain object from a DetectedAttribute message. Also converts values to other types if specified.
                     * @param message DetectedAttribute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.DetectedAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectedAttribute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DetectedAttribute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Celebrity. */
                interface ICelebrity {

                    /** Celebrity name */
                    name?: (string|null);

                    /** Celebrity displayName */
                    displayName?: (string|null);

                    /** Celebrity description */
                    description?: (string|null);
                }

                /** Represents a Celebrity. */
                class Celebrity implements ICelebrity {

                    /**
                     * Constructs a new Celebrity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrity);

                    /** Celebrity name. */
                    public name: string;

                    /** Celebrity displayName. */
                    public displayName: string;

                    /** Celebrity description. */
                    public description: string;

                    /**
                     * Creates a new Celebrity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Celebrity instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrity): google.cloud.videointelligence.v1p3beta1.Celebrity;

                    /**
                     * Encodes the specified Celebrity message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Celebrity.verify|verify} messages.
                     * @param message Celebrity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ICelebrity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Celebrity message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.Celebrity.verify|verify} messages.
                     * @param message Celebrity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ICelebrity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Celebrity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Celebrity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.Celebrity;

                    /**
                     * Decodes a Celebrity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Celebrity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.Celebrity;

                    /**
                     * Verifies a Celebrity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Celebrity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Celebrity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.Celebrity;

                    /**
                     * Creates a plain object from a Celebrity message. Also converts values to other types if specified.
                     * @param message Celebrity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.Celebrity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Celebrity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Celebrity
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CelebrityTrack. */
                interface ICelebrityTrack {

                    /** CelebrityTrack celebrities */
                    celebrities?: (google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity[]|null);

                    /** CelebrityTrack faceTrack */
                    faceTrack?: (google.cloud.videointelligence.v1p3beta1.ITrack|null);
                }

                /** Represents a CelebrityTrack. */
                class CelebrityTrack implements ICelebrityTrack {

                    /**
                     * Constructs a new CelebrityTrack.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrityTrack);

                    /** CelebrityTrack celebrities. */
                    public celebrities: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity[];

                    /** CelebrityTrack faceTrack. */
                    public faceTrack?: (google.cloud.videointelligence.v1p3beta1.ITrack|null);

                    /**
                     * Creates a new CelebrityTrack instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CelebrityTrack instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrityTrack): google.cloud.videointelligence.v1p3beta1.CelebrityTrack;

                    /**
                     * Encodes the specified CelebrityTrack message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityTrack.verify|verify} messages.
                     * @param message CelebrityTrack message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ICelebrityTrack, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CelebrityTrack message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityTrack.verify|verify} messages.
                     * @param message CelebrityTrack message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ICelebrityTrack, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CelebrityTrack message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CelebrityTrack
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.CelebrityTrack;

                    /**
                     * Decodes a CelebrityTrack message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CelebrityTrack
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.CelebrityTrack;

                    /**
                     * Verifies a CelebrityTrack message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CelebrityTrack message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CelebrityTrack
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.CelebrityTrack;

                    /**
                     * Creates a plain object from a CelebrityTrack message. Also converts values to other types if specified.
                     * @param message CelebrityTrack
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.CelebrityTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CelebrityTrack to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CelebrityTrack
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CelebrityTrack {

                    /** Properties of a RecognizedCelebrity. */
                    interface IRecognizedCelebrity {

                        /** RecognizedCelebrity celebrity */
                        celebrity?: (google.cloud.videointelligence.v1p3beta1.ICelebrity|null);

                        /** RecognizedCelebrity confidence */
                        confidence?: (number|null);
                    }

                    /** Represents a RecognizedCelebrity. */
                    class RecognizedCelebrity implements IRecognizedCelebrity {

                        /**
                         * Constructs a new RecognizedCelebrity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity);

                        /** RecognizedCelebrity celebrity. */
                        public celebrity?: (google.cloud.videointelligence.v1p3beta1.ICelebrity|null);

                        /** RecognizedCelebrity confidence. */
                        public confidence: number;

                        /**
                         * Creates a new RecognizedCelebrity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RecognizedCelebrity instance
                         */
                        public static create(properties?: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity): google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;

                        /**
                         * Encodes the specified RecognizedCelebrity message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.verify|verify} messages.
                         * @param message RecognizedCelebrity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RecognizedCelebrity message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity.verify|verify} messages.
                         * @param message RecognizedCelebrity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.IRecognizedCelebrity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RecognizedCelebrity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RecognizedCelebrity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;

                        /**
                         * Decodes a RecognizedCelebrity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RecognizedCelebrity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;

                        /**
                         * Verifies a RecognizedCelebrity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RecognizedCelebrity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RecognizedCelebrity
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity;

                        /**
                         * Creates a plain object from a RecognizedCelebrity message. Also converts values to other types if specified.
                         * @param message RecognizedCelebrity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.videointelligence.v1p3beta1.CelebrityTrack.RecognizedCelebrity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RecognizedCelebrity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RecognizedCelebrity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CelebrityRecognitionAnnotation. */
                interface ICelebrityRecognitionAnnotation {

                    /** CelebrityRecognitionAnnotation celebrityTracks */
                    celebrityTracks?: (google.cloud.videointelligence.v1p3beta1.ICelebrityTrack[]|null);
                }

                /** Represents a CelebrityRecognitionAnnotation. */
                class CelebrityRecognitionAnnotation implements ICelebrityRecognitionAnnotation {

                    /**
                     * Constructs a new CelebrityRecognitionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation);

                    /** CelebrityRecognitionAnnotation celebrityTracks. */
                    public celebrityTracks: google.cloud.videointelligence.v1p3beta1.ICelebrityTrack[];

                    /**
                     * Creates a new CelebrityRecognitionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CelebrityRecognitionAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation): google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;

                    /**
                     * Encodes the specified CelebrityRecognitionAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.verify|verify} messages.
                     * @param message CelebrityRecognitionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CelebrityRecognitionAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation.verify|verify} messages.
                     * @param message CelebrityRecognitionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CelebrityRecognitionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CelebrityRecognitionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;

                    /**
                     * Decodes a CelebrityRecognitionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CelebrityRecognitionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;

                    /**
                     * Verifies a CelebrityRecognitionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CelebrityRecognitionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CelebrityRecognitionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation;

                    /**
                     * Creates a plain object from a CelebrityRecognitionAnnotation message. Also converts values to other types if specified.
                     * @param message CelebrityRecognitionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.CelebrityRecognitionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CelebrityRecognitionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CelebrityRecognitionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DetectedLandmark. */
                interface IDetectedLandmark {

                    /** DetectedLandmark name */
                    name?: (string|null);

                    /** DetectedLandmark point */
                    point?: (google.cloud.videointelligence.v1p3beta1.INormalizedVertex|null);

                    /** DetectedLandmark confidence */
                    confidence?: (number|null);
                }

                /** Represents a DetectedLandmark. */
                class DetectedLandmark implements IDetectedLandmark {

                    /**
                     * Constructs a new DetectedLandmark.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IDetectedLandmark);

                    /** DetectedLandmark name. */
                    public name: string;

                    /** DetectedLandmark point. */
                    public point?: (google.cloud.videointelligence.v1p3beta1.INormalizedVertex|null);

                    /** DetectedLandmark confidence. */
                    public confidence: number;

                    /**
                     * Creates a new DetectedLandmark instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectedLandmark instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IDetectedLandmark): google.cloud.videointelligence.v1p3beta1.DetectedLandmark;

                    /**
                     * Encodes the specified DetectedLandmark message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.DetectedLandmark.verify|verify} messages.
                     * @param message DetectedLandmark message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IDetectedLandmark, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectedLandmark message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.DetectedLandmark.verify|verify} messages.
                     * @param message DetectedLandmark message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IDetectedLandmark, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectedLandmark message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectedLandmark
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.DetectedLandmark;

                    /**
                     * Decodes a DetectedLandmark message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectedLandmark
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.DetectedLandmark;

                    /**
                     * Verifies a DetectedLandmark message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectedLandmark message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectedLandmark
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.DetectedLandmark;

                    /**
                     * Creates a plain object from a DetectedLandmark message. Also converts values to other types if specified.
                     * @param message DetectedLandmark
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.DetectedLandmark, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectedLandmark to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DetectedLandmark
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FaceDetectionAnnotation. */
                interface IFaceDetectionAnnotation {

                    /** FaceDetectionAnnotation tracks */
                    tracks?: (google.cloud.videointelligence.v1p3beta1.ITrack[]|null);

                    /** FaceDetectionAnnotation thumbnail */
                    thumbnail?: (Uint8Array|string|null);
                }

                /** Represents a FaceDetectionAnnotation. */
                class FaceDetectionAnnotation implements IFaceDetectionAnnotation {

                    /**
                     * Constructs a new FaceDetectionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation);

                    /** FaceDetectionAnnotation tracks. */
                    public tracks: google.cloud.videointelligence.v1p3beta1.ITrack[];

                    /** FaceDetectionAnnotation thumbnail. */
                    public thumbnail: (Uint8Array|string);

                    /**
                     * Creates a new FaceDetectionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FaceDetectionAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation): google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation;

                    /**
                     * Encodes the specified FaceDetectionAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation.verify|verify} messages.
                     * @param message FaceDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FaceDetectionAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation.verify|verify} messages.
                     * @param message FaceDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FaceDetectionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FaceDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation;

                    /**
                     * Decodes a FaceDetectionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FaceDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation;

                    /**
                     * Verifies a FaceDetectionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FaceDetectionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FaceDetectionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation;

                    /**
                     * Creates a plain object from a FaceDetectionAnnotation message. Also converts values to other types if specified.
                     * @param message FaceDetectionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.FaceDetectionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FaceDetectionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FaceDetectionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PersonDetectionAnnotation. */
                interface IPersonDetectionAnnotation {

                    /** PersonDetectionAnnotation tracks */
                    tracks?: (google.cloud.videointelligence.v1p3beta1.ITrack[]|null);
                }

                /** Represents a PersonDetectionAnnotation. */
                class PersonDetectionAnnotation implements IPersonDetectionAnnotation {

                    /**
                     * Constructs a new PersonDetectionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation);

                    /** PersonDetectionAnnotation tracks. */
                    public tracks: google.cloud.videointelligence.v1p3beta1.ITrack[];

                    /**
                     * Creates a new PersonDetectionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PersonDetectionAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation): google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation;

                    /**
                     * Encodes the specified PersonDetectionAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation.verify|verify} messages.
                     * @param message PersonDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PersonDetectionAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation.verify|verify} messages.
                     * @param message PersonDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonDetectionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation;

                    /**
                     * Decodes a PersonDetectionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PersonDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation;

                    /**
                     * Verifies a PersonDetectionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PersonDetectionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PersonDetectionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation;

                    /**
                     * Creates a plain object from a PersonDetectionAnnotation message. Also converts values to other types if specified.
                     * @param message PersonDetectionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.PersonDetectionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PersonDetectionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PersonDetectionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VideoAnnotationResults. */
                interface IVideoAnnotationResults {

                    /** VideoAnnotationResults inputUri */
                    inputUri?: (string|null);

                    /** VideoAnnotationResults segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** VideoAnnotationResults segmentLabelAnnotations */
                    segmentLabelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** VideoAnnotationResults segmentPresenceLabelAnnotations */
                    segmentPresenceLabelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** VideoAnnotationResults shotLabelAnnotations */
                    shotLabelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** VideoAnnotationResults shotPresenceLabelAnnotations */
                    shotPresenceLabelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** VideoAnnotationResults frameLabelAnnotations */
                    frameLabelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** VideoAnnotationResults faceDetectionAnnotations */
                    faceDetectionAnnotations?: (google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation[]|null);

                    /** VideoAnnotationResults shotAnnotations */
                    shotAnnotations?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment[]|null);

                    /** VideoAnnotationResults explicitAnnotation */
                    explicitAnnotation?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation|null);

                    /** VideoAnnotationResults speechTranscriptions */
                    speechTranscriptions?: (google.cloud.videointelligence.v1p3beta1.ISpeechTranscription[]|null);

                    /** VideoAnnotationResults textAnnotations */
                    textAnnotations?: (google.cloud.videointelligence.v1p3beta1.ITextAnnotation[]|null);

                    /** VideoAnnotationResults objectAnnotations */
                    objectAnnotations?: (google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation[]|null);

                    /** VideoAnnotationResults logoRecognitionAnnotations */
                    logoRecognitionAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation[]|null);

                    /** VideoAnnotationResults personDetectionAnnotations */
                    personDetectionAnnotations?: (google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation[]|null);

                    /** VideoAnnotationResults celebrityRecognitionAnnotations */
                    celebrityRecognitionAnnotations?: (google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation|null);

                    /** VideoAnnotationResults error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a VideoAnnotationResults. */
                class VideoAnnotationResults implements IVideoAnnotationResults {

                    /**
                     * Constructs a new VideoAnnotationResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults);

                    /** VideoAnnotationResults inputUri. */
                    public inputUri: string;

                    /** VideoAnnotationResults segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** VideoAnnotationResults segmentLabelAnnotations. */
                    public segmentLabelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** VideoAnnotationResults segmentPresenceLabelAnnotations. */
                    public segmentPresenceLabelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** VideoAnnotationResults shotLabelAnnotations. */
                    public shotLabelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** VideoAnnotationResults shotPresenceLabelAnnotations. */
                    public shotPresenceLabelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** VideoAnnotationResults frameLabelAnnotations. */
                    public frameLabelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** VideoAnnotationResults faceDetectionAnnotations. */
                    public faceDetectionAnnotations: google.cloud.videointelligence.v1p3beta1.IFaceDetectionAnnotation[];

                    /** VideoAnnotationResults shotAnnotations. */
                    public shotAnnotations: google.cloud.videointelligence.v1p3beta1.IVideoSegment[];

                    /** VideoAnnotationResults explicitAnnotation. */
                    public explicitAnnotation?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation|null);

                    /** VideoAnnotationResults speechTranscriptions. */
                    public speechTranscriptions: google.cloud.videointelligence.v1p3beta1.ISpeechTranscription[];

                    /** VideoAnnotationResults textAnnotations. */
                    public textAnnotations: google.cloud.videointelligence.v1p3beta1.ITextAnnotation[];

                    /** VideoAnnotationResults objectAnnotations. */
                    public objectAnnotations: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation[];

                    /** VideoAnnotationResults logoRecognitionAnnotations. */
                    public logoRecognitionAnnotations: google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation[];

                    /** VideoAnnotationResults personDetectionAnnotations. */
                    public personDetectionAnnotations: google.cloud.videointelligence.v1p3beta1.IPersonDetectionAnnotation[];

                    /** VideoAnnotationResults celebrityRecognitionAnnotations. */
                    public celebrityRecognitionAnnotations?: (google.cloud.videointelligence.v1p3beta1.ICelebrityRecognitionAnnotation|null);

                    /** VideoAnnotationResults error. */
                    public error?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new VideoAnnotationResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoAnnotationResults instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults): google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;

                    /**
                     * Encodes the specified VideoAnnotationResults message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.verify|verify} messages.
                     * @param message VideoAnnotationResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoAnnotationResults message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults.verify|verify} messages.
                     * @param message VideoAnnotationResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoAnnotationResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoAnnotationResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;

                    /**
                     * Decodes a VideoAnnotationResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoAnnotationResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;

                    /**
                     * Verifies a VideoAnnotationResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoAnnotationResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoAnnotationResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults;

                    /**
                     * Creates a plain object from a VideoAnnotationResults message. Also converts values to other types if specified.
                     * @param message VideoAnnotationResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoAnnotationResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VideoAnnotationResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateVideoResponse. */
                interface IAnnotateVideoResponse {

                    /** AnnotateVideoResponse annotationResults */
                    annotationResults?: (google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults[]|null);
                }

                /** Represents an AnnotateVideoResponse. */
                class AnnotateVideoResponse implements IAnnotateVideoResponse {

                    /**
                     * Constructs a new AnnotateVideoResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoResponse);

                    /** AnnotateVideoResponse annotationResults. */
                    public annotationResults: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationResults[];

                    /**
                     * Creates a new AnnotateVideoResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateVideoResponse instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoResponse): google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse;

                    /**
                     * Encodes the specified AnnotateVideoResponse message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.verify|verify} messages.
                     * @param message AnnotateVideoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateVideoResponse message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse.verify|verify} messages.
                     * @param message AnnotateVideoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateVideoResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateVideoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse;

                    /**
                     * Decodes an AnnotateVideoResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateVideoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse;

                    /**
                     * Verifies an AnnotateVideoResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateVideoResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateVideoResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse;

                    /**
                     * Creates a plain object from an AnnotateVideoResponse message. Also converts values to other types if specified.
                     * @param message AnnotateVideoResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateVideoResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateVideoResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VideoAnnotationProgress. */
                interface IVideoAnnotationProgress {

                    /** VideoAnnotationProgress inputUri */
                    inputUri?: (string|null);

                    /** VideoAnnotationProgress progressPercent */
                    progressPercent?: (number|null);

                    /** VideoAnnotationProgress startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** VideoAnnotationProgress updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** VideoAnnotationProgress feature */
                    feature?: (google.cloud.videointelligence.v1p3beta1.Feature|keyof typeof google.cloud.videointelligence.v1p3beta1.Feature|null);

                    /** VideoAnnotationProgress segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);
                }

                /** Represents a VideoAnnotationProgress. */
                class VideoAnnotationProgress implements IVideoAnnotationProgress {

                    /**
                     * Constructs a new VideoAnnotationProgress.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress);

                    /** VideoAnnotationProgress inputUri. */
                    public inputUri: string;

                    /** VideoAnnotationProgress progressPercent. */
                    public progressPercent: number;

                    /** VideoAnnotationProgress startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** VideoAnnotationProgress updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** VideoAnnotationProgress feature. */
                    public feature: (google.cloud.videointelligence.v1p3beta1.Feature|keyof typeof google.cloud.videointelligence.v1p3beta1.Feature);

                    /** VideoAnnotationProgress segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /**
                     * Creates a new VideoAnnotationProgress instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoAnnotationProgress instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress): google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;

                    /**
                     * Encodes the specified VideoAnnotationProgress message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.verify|verify} messages.
                     * @param message VideoAnnotationProgress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoAnnotationProgress message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress.verify|verify} messages.
                     * @param message VideoAnnotationProgress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoAnnotationProgress message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoAnnotationProgress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;

                    /**
                     * Decodes a VideoAnnotationProgress message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoAnnotationProgress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;

                    /**
                     * Verifies a VideoAnnotationProgress message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoAnnotationProgress message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoAnnotationProgress
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress;

                    /**
                     * Creates a plain object from a VideoAnnotationProgress message. Also converts values to other types if specified.
                     * @param message VideoAnnotationProgress
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoAnnotationProgress to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VideoAnnotationProgress
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotateVideoProgress. */
                interface IAnnotateVideoProgress {

                    /** AnnotateVideoProgress annotationProgress */
                    annotationProgress?: (google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress[]|null);
                }

                /** Represents an AnnotateVideoProgress. */
                class AnnotateVideoProgress implements IAnnotateVideoProgress {

                    /**
                     * Constructs a new AnnotateVideoProgress.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoProgress);

                    /** AnnotateVideoProgress annotationProgress. */
                    public annotationProgress: google.cloud.videointelligence.v1p3beta1.IVideoAnnotationProgress[];

                    /**
                     * Creates a new AnnotateVideoProgress instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateVideoProgress instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoProgress): google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress;

                    /**
                     * Encodes the specified AnnotateVideoProgress message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.verify|verify} messages.
                     * @param message AnnotateVideoProgress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateVideoProgress message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress.verify|verify} messages.
                     * @param message AnnotateVideoProgress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IAnnotateVideoProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateVideoProgress message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateVideoProgress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress;

                    /**
                     * Decodes an AnnotateVideoProgress message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateVideoProgress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress;

                    /**
                     * Verifies an AnnotateVideoProgress message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateVideoProgress message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateVideoProgress
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress;

                    /**
                     * Creates a plain object from an AnnotateVideoProgress message. Also converts values to other types if specified.
                     * @param message AnnotateVideoProgress
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateVideoProgress to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateVideoProgress
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechTranscriptionConfig. */
                interface ISpeechTranscriptionConfig {

                    /** SpeechTranscriptionConfig languageCode */
                    languageCode?: (string|null);

                    /** SpeechTranscriptionConfig maxAlternatives */
                    maxAlternatives?: (number|null);

                    /** SpeechTranscriptionConfig filterProfanity */
                    filterProfanity?: (boolean|null);

                    /** SpeechTranscriptionConfig speechContexts */
                    speechContexts?: (google.cloud.videointelligence.v1p3beta1.ISpeechContext[]|null);

                    /** SpeechTranscriptionConfig enableAutomaticPunctuation */
                    enableAutomaticPunctuation?: (boolean|null);

                    /** SpeechTranscriptionConfig audioTracks */
                    audioTracks?: (number[]|null);

                    /** SpeechTranscriptionConfig enableSpeakerDiarization */
                    enableSpeakerDiarization?: (boolean|null);

                    /** SpeechTranscriptionConfig diarizationSpeakerCount */
                    diarizationSpeakerCount?: (number|null);

                    /** SpeechTranscriptionConfig enableWordConfidence */
                    enableWordConfidence?: (boolean|null);
                }

                /** Represents a SpeechTranscriptionConfig. */
                class SpeechTranscriptionConfig implements ISpeechTranscriptionConfig {

                    /**
                     * Constructs a new SpeechTranscriptionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig);

                    /** SpeechTranscriptionConfig languageCode. */
                    public languageCode: string;

                    /** SpeechTranscriptionConfig maxAlternatives. */
                    public maxAlternatives: number;

                    /** SpeechTranscriptionConfig filterProfanity. */
                    public filterProfanity: boolean;

                    /** SpeechTranscriptionConfig speechContexts. */
                    public speechContexts: google.cloud.videointelligence.v1p3beta1.ISpeechContext[];

                    /** SpeechTranscriptionConfig enableAutomaticPunctuation. */
                    public enableAutomaticPunctuation: boolean;

                    /** SpeechTranscriptionConfig audioTracks. */
                    public audioTracks: number[];

                    /** SpeechTranscriptionConfig enableSpeakerDiarization. */
                    public enableSpeakerDiarization: boolean;

                    /** SpeechTranscriptionConfig diarizationSpeakerCount. */
                    public diarizationSpeakerCount: number;

                    /** SpeechTranscriptionConfig enableWordConfidence. */
                    public enableWordConfidence: boolean;

                    /**
                     * Creates a new SpeechTranscriptionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechTranscriptionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig): google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;

                    /**
                     * Encodes the specified SpeechTranscriptionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.verify|verify} messages.
                     * @param message SpeechTranscriptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechTranscriptionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig.verify|verify} messages.
                     * @param message SpeechTranscriptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ISpeechTranscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechTranscriptionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechTranscriptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;

                    /**
                     * Decodes a SpeechTranscriptionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechTranscriptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;

                    /**
                     * Verifies a SpeechTranscriptionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechTranscriptionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechTranscriptionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig;

                    /**
                     * Creates a plain object from a SpeechTranscriptionConfig message. Also converts values to other types if specified.
                     * @param message SpeechTranscriptionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechTranscriptionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechTranscriptionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechContext. */
                interface ISpeechContext {

                    /** SpeechContext phrases */
                    phrases?: (string[]|null);
                }

                /** Represents a SpeechContext. */
                class SpeechContext implements ISpeechContext {

                    /**
                     * Constructs a new SpeechContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechContext);

                    /** SpeechContext phrases. */
                    public phrases: string[];

                    /**
                     * Creates a new SpeechContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechContext instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechContext): google.cloud.videointelligence.v1p3beta1.SpeechContext;

                    /**
                     * Encodes the specified SpeechContext message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechContext.verify|verify} messages.
                     * @param message SpeechContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ISpeechContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechContext message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechContext.verify|verify} messages.
                     * @param message SpeechContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ISpeechContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.SpeechContext;

                    /**
                     * Decodes a SpeechContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.SpeechContext;

                    /**
                     * Verifies a SpeechContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.SpeechContext;

                    /**
                     * Creates a plain object from a SpeechContext message. Also converts values to other types if specified.
                     * @param message SpeechContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.SpeechContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechTranscription. */
                interface ISpeechTranscription {

                    /** SpeechTranscription alternatives */
                    alternatives?: (google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative[]|null);

                    /** SpeechTranscription languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a SpeechTranscription. */
                class SpeechTranscription implements ISpeechTranscription {

                    /**
                     * Constructs a new SpeechTranscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechTranscription);

                    /** SpeechTranscription alternatives. */
                    public alternatives: google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative[];

                    /** SpeechTranscription languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new SpeechTranscription instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechTranscription instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechTranscription): google.cloud.videointelligence.v1p3beta1.SpeechTranscription;

                    /**
                     * Encodes the specified SpeechTranscription message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechTranscription.verify|verify} messages.
                     * @param message SpeechTranscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ISpeechTranscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechTranscription message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechTranscription.verify|verify} messages.
                     * @param message SpeechTranscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ISpeechTranscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechTranscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechTranscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.SpeechTranscription;

                    /**
                     * Decodes a SpeechTranscription message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechTranscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.SpeechTranscription;

                    /**
                     * Verifies a SpeechTranscription message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechTranscription message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechTranscription
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.SpeechTranscription;

                    /**
                     * Creates a plain object from a SpeechTranscription message. Also converts values to other types if specified.
                     * @param message SpeechTranscription
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.SpeechTranscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechTranscription to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechTranscription
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechRecognitionAlternative. */
                interface ISpeechRecognitionAlternative {

                    /** SpeechRecognitionAlternative transcript */
                    transcript?: (string|null);

                    /** SpeechRecognitionAlternative confidence */
                    confidence?: (number|null);

                    /** SpeechRecognitionAlternative words */
                    words?: (google.cloud.videointelligence.v1p3beta1.IWordInfo[]|null);
                }

                /** Represents a SpeechRecognitionAlternative. */
                class SpeechRecognitionAlternative implements ISpeechRecognitionAlternative {

                    /**
                     * Constructs a new SpeechRecognitionAlternative.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative);

                    /** SpeechRecognitionAlternative transcript. */
                    public transcript: string;

                    /** SpeechRecognitionAlternative confidence. */
                    public confidence: number;

                    /** SpeechRecognitionAlternative words. */
                    public words: google.cloud.videointelligence.v1p3beta1.IWordInfo[];

                    /**
                     * Creates a new SpeechRecognitionAlternative instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechRecognitionAlternative instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative): google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;

                    /**
                     * Verifies a SpeechRecognitionAlternative message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechRecognitionAlternative message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechRecognitionAlternative
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative;

                    /**
                     * Creates a plain object from a SpeechRecognitionAlternative message. Also converts values to other types if specified.
                     * @param message SpeechRecognitionAlternative
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechRecognitionAlternative to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechRecognitionAlternative
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WordInfo. */
                interface IWordInfo {

                    /** WordInfo startTime */
                    startTime?: (google.protobuf.IDuration|null);

                    /** WordInfo endTime */
                    endTime?: (google.protobuf.IDuration|null);

                    /** WordInfo word */
                    word?: (string|null);

                    /** WordInfo confidence */
                    confidence?: (number|null);

                    /** WordInfo speakerTag */
                    speakerTag?: (number|null);
                }

                /** Represents a WordInfo. */
                class WordInfo implements IWordInfo {

                    /**
                     * Constructs a new WordInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IWordInfo);

                    /** WordInfo startTime. */
                    public startTime?: (google.protobuf.IDuration|null);

                    /** WordInfo endTime. */
                    public endTime?: (google.protobuf.IDuration|null);

                    /** WordInfo word. */
                    public word: string;

                    /** WordInfo confidence. */
                    public confidence: number;

                    /** WordInfo speakerTag. */
                    public speakerTag: number;

                    /**
                     * Creates a new WordInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WordInfo instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IWordInfo): google.cloud.videointelligence.v1p3beta1.WordInfo;

                    /**
                     * Encodes the specified WordInfo message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WordInfo message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.WordInfo;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.WordInfo;

                    /**
                     * Verifies a WordInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WordInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WordInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.WordInfo;

                    /**
                     * Creates a plain object from a WordInfo message. Also converts values to other types if specified.
                     * @param message WordInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.WordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WordInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WordInfo
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
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedVertex): google.cloud.videointelligence.v1p3beta1.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.NormalizedVertex;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a NormalizedBoundingPoly. */
                interface INormalizedBoundingPoly {

                    /** NormalizedBoundingPoly vertices */
                    vertices?: (google.cloud.videointelligence.v1p3beta1.INormalizedVertex[]|null);
                }

                /** Represents a NormalizedBoundingPoly. */
                class NormalizedBoundingPoly implements INormalizedBoundingPoly {

                    /**
                     * Constructs a new NormalizedBoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly);

                    /** NormalizedBoundingPoly vertices. */
                    public vertices: google.cloud.videointelligence.v1p3beta1.INormalizedVertex[];

                    /**
                     * Creates a new NormalizedBoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedBoundingPoly instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;

                    /**
                     * Encodes the specified NormalizedBoundingPoly message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.verify|verify} messages.
                     * @param message NormalizedBoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedBoundingPoly message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly.verify|verify} messages.
                     * @param message NormalizedBoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedBoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedBoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;

                    /**
                     * Decodes a NormalizedBoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedBoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;

                    /**
                     * Verifies a NormalizedBoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedBoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedBoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly;

                    /**
                     * Creates a plain object from a NormalizedBoundingPoly message. Also converts values to other types if specified.
                     * @param message NormalizedBoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedBoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NormalizedBoundingPoly
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSegment. */
                interface ITextSegment {

                    /** TextSegment segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** TextSegment confidence */
                    confidence?: (number|null);

                    /** TextSegment frames */
                    frames?: (google.cloud.videointelligence.v1p3beta1.ITextFrame[]|null);
                }

                /** Represents a TextSegment. */
                class TextSegment implements ITextSegment {

                    /**
                     * Constructs a new TextSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITextSegment);

                    /** TextSegment segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** TextSegment confidence. */
                    public confidence: number;

                    /** TextSegment frames. */
                    public frames: google.cloud.videointelligence.v1p3beta1.ITextFrame[];

                    /**
                     * Creates a new TextSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSegment instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITextSegment): google.cloud.videointelligence.v1p3beta1.TextSegment;

                    /**
                     * Encodes the specified TextSegment message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextSegment.verify|verify} messages.
                     * @param message TextSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSegment message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextSegment.verify|verify} messages.
                     * @param message TextSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.TextSegment;

                    /**
                     * Decodes a TextSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.TextSegment;

                    /**
                     * Verifies a TextSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.TextSegment;

                    /**
                     * Creates a plain object from a TextSegment message. Also converts values to other types if specified.
                     * @param message TextSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.TextSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSegment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextFrame. */
                interface ITextFrame {

                    /** TextFrame rotatedBoundingBox */
                    rotatedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly|null);

                    /** TextFrame timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents a TextFrame. */
                class TextFrame implements ITextFrame {

                    /**
                     * Constructs a new TextFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITextFrame);

                    /** TextFrame rotatedBoundingBox. */
                    public rotatedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingPoly|null);

                    /** TextFrame timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new TextFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextFrame instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITextFrame): google.cloud.videointelligence.v1p3beta1.TextFrame;

                    /**
                     * Encodes the specified TextFrame message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextFrame.verify|verify} messages.
                     * @param message TextFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITextFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextFrame message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextFrame.verify|verify} messages.
                     * @param message TextFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITextFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.TextFrame;

                    /**
                     * Decodes a TextFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.TextFrame;

                    /**
                     * Verifies a TextFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextFrame
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.TextFrame;

                    /**
                     * Creates a plain object from a TextFrame message. Also converts values to other types if specified.
                     * @param message TextFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.TextFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextFrame
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextAnnotation. */
                interface ITextAnnotation {

                    /** TextAnnotation text */
                    text?: (string|null);

                    /** TextAnnotation segments */
                    segments?: (google.cloud.videointelligence.v1p3beta1.ITextSegment[]|null);
                }

                /** Represents a TextAnnotation. */
                class TextAnnotation implements ITextAnnotation {

                    /**
                     * Constructs a new TextAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ITextAnnotation);

                    /** TextAnnotation text. */
                    public text: string;

                    /** TextAnnotation segments. */
                    public segments: google.cloud.videointelligence.v1p3beta1.ITextSegment[];

                    /**
                     * Creates a new TextAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ITextAnnotation): google.cloud.videointelligence.v1p3beta1.TextAnnotation;

                    /**
                     * Encodes the specified TextAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextAnnotation.verify|verify} messages.
                     * @param message TextAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ITextAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.TextAnnotation.verify|verify} messages.
                     * @param message TextAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ITextAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.TextAnnotation;

                    /**
                     * Decodes a TextAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.TextAnnotation;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.TextAnnotation;

                    /**
                     * Creates a plain object from a TextAnnotation message. Also converts values to other types if specified.
                     * @param message TextAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.TextAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an ObjectTrackingFrame. */
                interface IObjectTrackingFrame {

                    /** ObjectTrackingFrame normalizedBoundingBox */
                    normalizedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox|null);

                    /** ObjectTrackingFrame timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents an ObjectTrackingFrame. */
                class ObjectTrackingFrame implements IObjectTrackingFrame {

                    /**
                     * Constructs a new ObjectTrackingFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame);

                    /** ObjectTrackingFrame normalizedBoundingBox. */
                    public normalizedBoundingBox?: (google.cloud.videointelligence.v1p3beta1.INormalizedBoundingBox|null);

                    /** ObjectTrackingFrame timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new ObjectTrackingFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectTrackingFrame instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame): google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;

                    /**
                     * Encodes the specified ObjectTrackingFrame message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.verify|verify} messages.
                     * @param message ObjectTrackingFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectTrackingFrame message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame.verify|verify} messages.
                     * @param message ObjectTrackingFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectTrackingFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectTrackingFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;

                    /**
                     * Decodes an ObjectTrackingFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectTrackingFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;

                    /**
                     * Verifies an ObjectTrackingFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectTrackingFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectTrackingFrame
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame;

                    /**
                     * Creates a plain object from an ObjectTrackingFrame message. Also converts values to other types if specified.
                     * @param message ObjectTrackingFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectTrackingFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ObjectTrackingFrame
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ObjectTrackingAnnotation. */
                interface IObjectTrackingAnnotation {

                    /** ObjectTrackingAnnotation segment */
                    segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** ObjectTrackingAnnotation trackId */
                    trackId?: (number|Long|string|null);

                    /** ObjectTrackingAnnotation entity */
                    entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** ObjectTrackingAnnotation confidence */
                    confidence?: (number|null);

                    /** ObjectTrackingAnnotation frames */
                    frames?: (google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame[]|null);
                }

                /** Represents an ObjectTrackingAnnotation. */
                class ObjectTrackingAnnotation implements IObjectTrackingAnnotation {

                    /**
                     * Constructs a new ObjectTrackingAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation);

                    /** ObjectTrackingAnnotation segment. */
                    public segment?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment|null);

                    /** ObjectTrackingAnnotation trackId. */
                    public trackId?: (number|Long|string|null);

                    /** ObjectTrackingAnnotation entity. */
                    public entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** ObjectTrackingAnnotation confidence. */
                    public confidence: number;

                    /** ObjectTrackingAnnotation frames. */
                    public frames: google.cloud.videointelligence.v1p3beta1.IObjectTrackingFrame[];

                    /** ObjectTrackingAnnotation trackInfo. */
                    public trackInfo?: ("segment"|"trackId");

                    /**
                     * Creates a new ObjectTrackingAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectTrackingAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation): google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;

                    /**
                     * Encodes the specified ObjectTrackingAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.verify|verify} messages.
                     * @param message ObjectTrackingAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectTrackingAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation.verify|verify} messages.
                     * @param message ObjectTrackingAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectTrackingAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectTrackingAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;

                    /**
                     * Decodes an ObjectTrackingAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectTrackingAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;

                    /**
                     * Verifies an ObjectTrackingAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectTrackingAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectTrackingAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation;

                    /**
                     * Creates a plain object from an ObjectTrackingAnnotation message. Also converts values to other types if specified.
                     * @param message ObjectTrackingAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectTrackingAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ObjectTrackingAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LogoRecognitionAnnotation. */
                interface ILogoRecognitionAnnotation {

                    /** LogoRecognitionAnnotation entity */
                    entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** LogoRecognitionAnnotation tracks */
                    tracks?: (google.cloud.videointelligence.v1p3beta1.ITrack[]|null);

                    /** LogoRecognitionAnnotation segments */
                    segments?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment[]|null);
                }

                /** Represents a LogoRecognitionAnnotation. */
                class LogoRecognitionAnnotation implements ILogoRecognitionAnnotation {

                    /**
                     * Constructs a new LogoRecognitionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation);

                    /** LogoRecognitionAnnotation entity. */
                    public entity?: (google.cloud.videointelligence.v1p3beta1.IEntity|null);

                    /** LogoRecognitionAnnotation tracks. */
                    public tracks: google.cloud.videointelligence.v1p3beta1.ITrack[];

                    /** LogoRecognitionAnnotation segments. */
                    public segments: google.cloud.videointelligence.v1p3beta1.IVideoSegment[];

                    /**
                     * Creates a new LogoRecognitionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogoRecognitionAnnotation instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation): google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;

                    /**
                     * Encodes the specified LogoRecognitionAnnotation message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.verify|verify} messages.
                     * @param message LogoRecognitionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogoRecognitionAnnotation message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation.verify|verify} messages.
                     * @param message LogoRecognitionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.ILogoRecognitionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogoRecognitionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogoRecognitionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;

                    /**
                     * Decodes a LogoRecognitionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogoRecognitionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;

                    /**
                     * Verifies a LogoRecognitionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogoRecognitionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogoRecognitionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation;

                    /**
                     * Creates a plain object from a LogoRecognitionAnnotation message. Also converts values to other types if specified.
                     * @param message LogoRecognitionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogoRecognitionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogoRecognitionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingAnnotateVideoRequest. */
                interface IStreamingAnnotateVideoRequest {

                    /** StreamingAnnotateVideoRequest videoConfig */
                    videoConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig|null);

                    /** StreamingAnnotateVideoRequest inputContent */
                    inputContent?: (Uint8Array|string|null);
                }

                /** Represents a StreamingAnnotateVideoRequest. */
                class StreamingAnnotateVideoRequest implements IStreamingAnnotateVideoRequest {

                    /**
                     * Constructs a new StreamingAnnotateVideoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest);

                    /** StreamingAnnotateVideoRequest videoConfig. */
                    public videoConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig|null);

                    /** StreamingAnnotateVideoRequest inputContent. */
                    public inputContent?: (Uint8Array|string|null);

                    /** StreamingAnnotateVideoRequest streamingRequest. */
                    public streamingRequest?: ("videoConfig"|"inputContent");

                    /**
                     * Creates a new StreamingAnnotateVideoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingAnnotateVideoRequest instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest;

                    /**
                     * Encodes the specified StreamingAnnotateVideoRequest message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.verify|verify} messages.
                     * @param message StreamingAnnotateVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingAnnotateVideoRequest message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest.verify|verify} messages.
                     * @param message StreamingAnnotateVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingAnnotateVideoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingAnnotateVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest;

                    /**
                     * Decodes a StreamingAnnotateVideoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingAnnotateVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest;

                    /**
                     * Verifies a StreamingAnnotateVideoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingAnnotateVideoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingAnnotateVideoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest;

                    /**
                     * Creates a plain object from a StreamingAnnotateVideoRequest message. Also converts values to other types if specified.
                     * @param message StreamingAnnotateVideoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingAnnotateVideoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingAnnotateVideoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingVideoConfig. */
                interface IStreamingVideoConfig {

                    /** StreamingVideoConfig shotChangeDetectionConfig */
                    shotChangeDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig|null);

                    /** StreamingVideoConfig labelDetectionConfig */
                    labelDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig|null);

                    /** StreamingVideoConfig explicitContentDetectionConfig */
                    explicitContentDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig|null);

                    /** StreamingVideoConfig objectTrackingConfig */
                    objectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig|null);

                    /** StreamingVideoConfig automlActionRecognitionConfig */
                    automlActionRecognitionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig|null);

                    /** StreamingVideoConfig automlClassificationConfig */
                    automlClassificationConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig|null);

                    /** StreamingVideoConfig automlObjectTrackingConfig */
                    automlObjectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig|null);

                    /** StreamingVideoConfig feature */
                    feature?: (google.cloud.videointelligence.v1p3beta1.StreamingFeature|keyof typeof google.cloud.videointelligence.v1p3beta1.StreamingFeature|null);

                    /** StreamingVideoConfig storageConfig */
                    storageConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig|null);
                }

                /** Represents a StreamingVideoConfig. */
                class StreamingVideoConfig implements IStreamingVideoConfig {

                    /**
                     * Constructs a new StreamingVideoConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig);

                    /** StreamingVideoConfig shotChangeDetectionConfig. */
                    public shotChangeDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig|null);

                    /** StreamingVideoConfig labelDetectionConfig. */
                    public labelDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig|null);

                    /** StreamingVideoConfig explicitContentDetectionConfig. */
                    public explicitContentDetectionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig|null);

                    /** StreamingVideoConfig objectTrackingConfig. */
                    public objectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig|null);

                    /** StreamingVideoConfig automlActionRecognitionConfig. */
                    public automlActionRecognitionConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig|null);

                    /** StreamingVideoConfig automlClassificationConfig. */
                    public automlClassificationConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig|null);

                    /** StreamingVideoConfig automlObjectTrackingConfig. */
                    public automlObjectTrackingConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig|null);

                    /** StreamingVideoConfig feature. */
                    public feature: (google.cloud.videointelligence.v1p3beta1.StreamingFeature|keyof typeof google.cloud.videointelligence.v1p3beta1.StreamingFeature);

                    /** StreamingVideoConfig storageConfig. */
                    public storageConfig?: (google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig|null);

                    /** StreamingVideoConfig streamingConfig. */
                    public streamingConfig?: ("shotChangeDetectionConfig"|"labelDetectionConfig"|"explicitContentDetectionConfig"|"objectTrackingConfig"|"automlActionRecognitionConfig"|"automlClassificationConfig"|"automlObjectTrackingConfig");

                    /**
                     * Creates a new StreamingVideoConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingVideoConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig): google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;

                    /**
                     * Encodes the specified StreamingVideoConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.verify|verify} messages.
                     * @param message StreamingVideoConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingVideoConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.verify|verify} messages.
                     * @param message StreamingVideoConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingVideoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingVideoConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingVideoConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;

                    /**
                     * Decodes a StreamingVideoConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingVideoConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;

                    /**
                     * Verifies a StreamingVideoConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingVideoConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingVideoConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig;

                    /**
                     * Creates a plain object from a StreamingVideoConfig message. Also converts values to other types if specified.
                     * @param message StreamingVideoConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingVideoConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingVideoConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingAnnotateVideoResponse. */
                interface IStreamingAnnotateVideoResponse {

                    /** StreamingAnnotateVideoResponse error */
                    error?: (google.rpc.IStatus|null);

                    /** StreamingAnnotateVideoResponse annotationResults */
                    annotationResults?: (google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults|null);

                    /** StreamingAnnotateVideoResponse annotationResultsUri */
                    annotationResultsUri?: (string|null);
                }

                /** Represents a StreamingAnnotateVideoResponse. */
                class StreamingAnnotateVideoResponse implements IStreamingAnnotateVideoResponse {

                    /**
                     * Constructs a new StreamingAnnotateVideoResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoResponse);

                    /** StreamingAnnotateVideoResponse error. */
                    public error?: (google.rpc.IStatus|null);

                    /** StreamingAnnotateVideoResponse annotationResults. */
                    public annotationResults?: (google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults|null);

                    /** StreamingAnnotateVideoResponse annotationResultsUri. */
                    public annotationResultsUri: string;

                    /**
                     * Creates a new StreamingAnnotateVideoResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingAnnotateVideoResponse instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoResponse): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse;

                    /**
                     * Encodes the specified StreamingAnnotateVideoResponse message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.verify|verify} messages.
                     * @param message StreamingAnnotateVideoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingAnnotateVideoResponse message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse.verify|verify} messages.
                     * @param message StreamingAnnotateVideoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingAnnotateVideoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingAnnotateVideoResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingAnnotateVideoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse;

                    /**
                     * Decodes a StreamingAnnotateVideoResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingAnnotateVideoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse;

                    /**
                     * Verifies a StreamingAnnotateVideoResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingAnnotateVideoResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingAnnotateVideoResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse;

                    /**
                     * Creates a plain object from a StreamingAnnotateVideoResponse message. Also converts values to other types if specified.
                     * @param message StreamingAnnotateVideoResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingAnnotateVideoResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingAnnotateVideoResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingVideoAnnotationResults. */
                interface IStreamingVideoAnnotationResults {

                    /** StreamingVideoAnnotationResults shotAnnotations */
                    shotAnnotations?: (google.cloud.videointelligence.v1p3beta1.IVideoSegment[]|null);

                    /** StreamingVideoAnnotationResults labelAnnotations */
                    labelAnnotations?: (google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[]|null);

                    /** StreamingVideoAnnotationResults explicitAnnotation */
                    explicitAnnotation?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation|null);

                    /** StreamingVideoAnnotationResults objectAnnotations */
                    objectAnnotations?: (google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation[]|null);
                }

                /** Represents a StreamingVideoAnnotationResults. */
                class StreamingVideoAnnotationResults implements IStreamingVideoAnnotationResults {

                    /**
                     * Constructs a new StreamingVideoAnnotationResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults);

                    /** StreamingVideoAnnotationResults shotAnnotations. */
                    public shotAnnotations: google.cloud.videointelligence.v1p3beta1.IVideoSegment[];

                    /** StreamingVideoAnnotationResults labelAnnotations. */
                    public labelAnnotations: google.cloud.videointelligence.v1p3beta1.ILabelAnnotation[];

                    /** StreamingVideoAnnotationResults explicitAnnotation. */
                    public explicitAnnotation?: (google.cloud.videointelligence.v1p3beta1.IExplicitContentAnnotation|null);

                    /** StreamingVideoAnnotationResults objectAnnotations. */
                    public objectAnnotations: google.cloud.videointelligence.v1p3beta1.IObjectTrackingAnnotation[];

                    /**
                     * Creates a new StreamingVideoAnnotationResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingVideoAnnotationResults instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults): google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;

                    /**
                     * Encodes the specified StreamingVideoAnnotationResults message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.verify|verify} messages.
                     * @param message StreamingVideoAnnotationResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingVideoAnnotationResults message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults.verify|verify} messages.
                     * @param message StreamingVideoAnnotationResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingVideoAnnotationResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingVideoAnnotationResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingVideoAnnotationResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;

                    /**
                     * Decodes a StreamingVideoAnnotationResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingVideoAnnotationResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;

                    /**
                     * Verifies a StreamingVideoAnnotationResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingVideoAnnotationResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingVideoAnnotationResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults;

                    /**
                     * Creates a plain object from a StreamingVideoAnnotationResults message. Also converts values to other types if specified.
                     * @param message StreamingVideoAnnotationResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingVideoAnnotationResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingVideoAnnotationResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingShotChangeDetectionConfig. */
                interface IStreamingShotChangeDetectionConfig {
                }

                /** Represents a StreamingShotChangeDetectionConfig. */
                class StreamingShotChangeDetectionConfig implements IStreamingShotChangeDetectionConfig {

                    /**
                     * Constructs a new StreamingShotChangeDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig);

                    /**
                     * Creates a new StreamingShotChangeDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingShotChangeDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig): google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;

                    /**
                     * Encodes the specified StreamingShotChangeDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.verify|verify} messages.
                     * @param message StreamingShotChangeDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingShotChangeDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig.verify|verify} messages.
                     * @param message StreamingShotChangeDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingShotChangeDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingShotChangeDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingShotChangeDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;

                    /**
                     * Decodes a StreamingShotChangeDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingShotChangeDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;

                    /**
                     * Verifies a StreamingShotChangeDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingShotChangeDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingShotChangeDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig;

                    /**
                     * Creates a plain object from a StreamingShotChangeDetectionConfig message. Also converts values to other types if specified.
                     * @param message StreamingShotChangeDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingShotChangeDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingShotChangeDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingLabelDetectionConfig. */
                interface IStreamingLabelDetectionConfig {

                    /** StreamingLabelDetectionConfig stationaryCamera */
                    stationaryCamera?: (boolean|null);
                }

                /** Represents a StreamingLabelDetectionConfig. */
                class StreamingLabelDetectionConfig implements IStreamingLabelDetectionConfig {

                    /**
                     * Constructs a new StreamingLabelDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig);

                    /** StreamingLabelDetectionConfig stationaryCamera. */
                    public stationaryCamera: boolean;

                    /**
                     * Creates a new StreamingLabelDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingLabelDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig): google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;

                    /**
                     * Encodes the specified StreamingLabelDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.verify|verify} messages.
                     * @param message StreamingLabelDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingLabelDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig.verify|verify} messages.
                     * @param message StreamingLabelDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingLabelDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingLabelDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingLabelDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;

                    /**
                     * Decodes a StreamingLabelDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingLabelDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;

                    /**
                     * Verifies a StreamingLabelDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingLabelDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingLabelDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig;

                    /**
                     * Creates a plain object from a StreamingLabelDetectionConfig message. Also converts values to other types if specified.
                     * @param message StreamingLabelDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingLabelDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingLabelDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingExplicitContentDetectionConfig. */
                interface IStreamingExplicitContentDetectionConfig {
                }

                /** Represents a StreamingExplicitContentDetectionConfig. */
                class StreamingExplicitContentDetectionConfig implements IStreamingExplicitContentDetectionConfig {

                    /**
                     * Constructs a new StreamingExplicitContentDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig);

                    /**
                     * Creates a new StreamingExplicitContentDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingExplicitContentDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig): google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;

                    /**
                     * Encodes the specified StreamingExplicitContentDetectionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.verify|verify} messages.
                     * @param message StreamingExplicitContentDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingExplicitContentDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig.verify|verify} messages.
                     * @param message StreamingExplicitContentDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingExplicitContentDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingExplicitContentDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingExplicitContentDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;

                    /**
                     * Decodes a StreamingExplicitContentDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingExplicitContentDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;

                    /**
                     * Verifies a StreamingExplicitContentDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingExplicitContentDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingExplicitContentDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig;

                    /**
                     * Creates a plain object from a StreamingExplicitContentDetectionConfig message. Also converts values to other types if specified.
                     * @param message StreamingExplicitContentDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingExplicitContentDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingExplicitContentDetectionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingObjectTrackingConfig. */
                interface IStreamingObjectTrackingConfig {
                }

                /** Represents a StreamingObjectTrackingConfig. */
                class StreamingObjectTrackingConfig implements IStreamingObjectTrackingConfig {

                    /**
                     * Constructs a new StreamingObjectTrackingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig);

                    /**
                     * Creates a new StreamingObjectTrackingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingObjectTrackingConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig): google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;

                    /**
                     * Encodes the specified StreamingObjectTrackingConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.verify|verify} messages.
                     * @param message StreamingObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingObjectTrackingConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig.verify|verify} messages.
                     * @param message StreamingObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingObjectTrackingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;

                    /**
                     * Decodes a StreamingObjectTrackingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;

                    /**
                     * Verifies a StreamingObjectTrackingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingObjectTrackingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingObjectTrackingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig;

                    /**
                     * Creates a plain object from a StreamingObjectTrackingConfig message. Also converts values to other types if specified.
                     * @param message StreamingObjectTrackingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingObjectTrackingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingObjectTrackingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingAutomlActionRecognitionConfig. */
                interface IStreamingAutomlActionRecognitionConfig {

                    /** StreamingAutomlActionRecognitionConfig modelName */
                    modelName?: (string|null);
                }

                /** Represents a StreamingAutomlActionRecognitionConfig. */
                class StreamingAutomlActionRecognitionConfig implements IStreamingAutomlActionRecognitionConfig {

                    /**
                     * Constructs a new StreamingAutomlActionRecognitionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig);

                    /** StreamingAutomlActionRecognitionConfig modelName. */
                    public modelName: string;

                    /**
                     * Creates a new StreamingAutomlActionRecognitionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingAutomlActionRecognitionConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig): google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig;

                    /**
                     * Encodes the specified StreamingAutomlActionRecognitionConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig.verify|verify} messages.
                     * @param message StreamingAutomlActionRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingAutomlActionRecognitionConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig.verify|verify} messages.
                     * @param message StreamingAutomlActionRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlActionRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingAutomlActionRecognitionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingAutomlActionRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig;

                    /**
                     * Decodes a StreamingAutomlActionRecognitionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingAutomlActionRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig;

                    /**
                     * Verifies a StreamingAutomlActionRecognitionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingAutomlActionRecognitionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingAutomlActionRecognitionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig;

                    /**
                     * Creates a plain object from a StreamingAutomlActionRecognitionConfig message. Also converts values to other types if specified.
                     * @param message StreamingAutomlActionRecognitionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingAutomlActionRecognitionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingAutomlActionRecognitionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingAutomlClassificationConfig. */
                interface IStreamingAutomlClassificationConfig {

                    /** StreamingAutomlClassificationConfig modelName */
                    modelName?: (string|null);
                }

                /** Represents a StreamingAutomlClassificationConfig. */
                class StreamingAutomlClassificationConfig implements IStreamingAutomlClassificationConfig {

                    /**
                     * Constructs a new StreamingAutomlClassificationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig);

                    /** StreamingAutomlClassificationConfig modelName. */
                    public modelName: string;

                    /**
                     * Creates a new StreamingAutomlClassificationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingAutomlClassificationConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig): google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;

                    /**
                     * Encodes the specified StreamingAutomlClassificationConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.verify|verify} messages.
                     * @param message StreamingAutomlClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingAutomlClassificationConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig.verify|verify} messages.
                     * @param message StreamingAutomlClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingAutomlClassificationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingAutomlClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;

                    /**
                     * Decodes a StreamingAutomlClassificationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingAutomlClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;

                    /**
                     * Verifies a StreamingAutomlClassificationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingAutomlClassificationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingAutomlClassificationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig;

                    /**
                     * Creates a plain object from a StreamingAutomlClassificationConfig message. Also converts values to other types if specified.
                     * @param message StreamingAutomlClassificationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingAutomlClassificationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingAutomlClassificationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingAutomlObjectTrackingConfig. */
                interface IStreamingAutomlObjectTrackingConfig {

                    /** StreamingAutomlObjectTrackingConfig modelName */
                    modelName?: (string|null);
                }

                /** Represents a StreamingAutomlObjectTrackingConfig. */
                class StreamingAutomlObjectTrackingConfig implements IStreamingAutomlObjectTrackingConfig {

                    /**
                     * Constructs a new StreamingAutomlObjectTrackingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig);

                    /** StreamingAutomlObjectTrackingConfig modelName. */
                    public modelName: string;

                    /**
                     * Creates a new StreamingAutomlObjectTrackingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingAutomlObjectTrackingConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig): google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;

                    /**
                     * Encodes the specified StreamingAutomlObjectTrackingConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.verify|verify} messages.
                     * @param message StreamingAutomlObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingAutomlObjectTrackingConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig.verify|verify} messages.
                     * @param message StreamingAutomlObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingAutomlObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingAutomlObjectTrackingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingAutomlObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;

                    /**
                     * Decodes a StreamingAutomlObjectTrackingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingAutomlObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;

                    /**
                     * Verifies a StreamingAutomlObjectTrackingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingAutomlObjectTrackingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingAutomlObjectTrackingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig;

                    /**
                     * Creates a plain object from a StreamingAutomlObjectTrackingConfig message. Also converts values to other types if specified.
                     * @param message StreamingAutomlObjectTrackingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingAutomlObjectTrackingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingAutomlObjectTrackingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingStorageConfig. */
                interface IStreamingStorageConfig {

                    /** StreamingStorageConfig enableStorageAnnotationResult */
                    enableStorageAnnotationResult?: (boolean|null);

                    /** StreamingStorageConfig annotationResultStorageDirectory */
                    annotationResultStorageDirectory?: (string|null);
                }

                /** Represents a StreamingStorageConfig. */
                class StreamingStorageConfig implements IStreamingStorageConfig {

                    /**
                     * Constructs a new StreamingStorageConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig);

                    /** StreamingStorageConfig enableStorageAnnotationResult. */
                    public enableStorageAnnotationResult: boolean;

                    /** StreamingStorageConfig annotationResultStorageDirectory. */
                    public annotationResultStorageDirectory: string;

                    /**
                     * Creates a new StreamingStorageConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingStorageConfig instance
                     */
                    public static create(properties?: google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig): google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;

                    /**
                     * Encodes the specified StreamingStorageConfig message. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.verify|verify} messages.
                     * @param message StreamingStorageConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingStorageConfig message, length delimited. Does not implicitly {@link google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig.verify|verify} messages.
                     * @param message StreamingStorageConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.videointelligence.v1p3beta1.IStreamingStorageConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingStorageConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingStorageConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;

                    /**
                     * Decodes a StreamingStorageConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingStorageConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;

                    /**
                     * Verifies a StreamingStorageConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingStorageConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingStorageConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig;

                    /**
                     * Creates a plain object from a StreamingStorageConfig message. Also converts values to other types if specified.
                     * @param message StreamingStorageConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingStorageConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingStorageConfig
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
}
