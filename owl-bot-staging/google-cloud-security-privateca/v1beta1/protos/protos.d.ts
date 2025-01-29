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

        /** Namespace security. */
        namespace security {

            /** Namespace privateca. */
            namespace privateca {

                /** Namespace v1beta1. */
                namespace v1beta1 {

                    /** Properties of a CertificateAuthority. */
                    interface ICertificateAuthority {

                        /** CertificateAuthority name */
                        name?: (string|null);

                        /** CertificateAuthority type */
                        type?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.Type|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.Type|null);

                        /** CertificateAuthority tier */
                        tier?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier|null);

                        /** CertificateAuthority config */
                        config?: (google.cloud.security.privateca.v1beta1.ICertificateConfig|null);

                        /** CertificateAuthority lifetime */
                        lifetime?: (google.protobuf.IDuration|null);

                        /** CertificateAuthority keySpec */
                        keySpec?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec|null);

                        /** CertificateAuthority certificatePolicy */
                        certificatePolicy?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy|null);

                        /** CertificateAuthority issuingOptions */
                        issuingOptions?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions|null);

                        /** CertificateAuthority subordinateConfig */
                        subordinateConfig?: (google.cloud.security.privateca.v1beta1.ISubordinateConfig|null);

                        /** CertificateAuthority state */
                        state?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.State|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.State|null);

                        /** CertificateAuthority pemCaCertificates */
                        pemCaCertificates?: (string[]|null);

                        /** CertificateAuthority caCertificateDescriptions */
                        caCertificateDescriptions?: (google.cloud.security.privateca.v1beta1.ICertificateDescription[]|null);

                        /** CertificateAuthority gcsBucket */
                        gcsBucket?: (string|null);

                        /** CertificateAuthority accessUrls */
                        accessUrls?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls|null);

                        /** CertificateAuthority createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority deleteTime */
                        deleteTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a CertificateAuthority. */
                    class CertificateAuthority implements ICertificateAuthority {

                        /**
                         * Constructs a new CertificateAuthority.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICertificateAuthority);

                        /** CertificateAuthority name. */
                        public name: string;

                        /** CertificateAuthority type. */
                        public type: (google.cloud.security.privateca.v1beta1.CertificateAuthority.Type|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.Type);

                        /** CertificateAuthority tier. */
                        public tier: (google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier);

                        /** CertificateAuthority config. */
                        public config?: (google.cloud.security.privateca.v1beta1.ICertificateConfig|null);

                        /** CertificateAuthority lifetime. */
                        public lifetime?: (google.protobuf.IDuration|null);

                        /** CertificateAuthority keySpec. */
                        public keySpec?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec|null);

                        /** CertificateAuthority certificatePolicy. */
                        public certificatePolicy?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy|null);

                        /** CertificateAuthority issuingOptions. */
                        public issuingOptions?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions|null);

                        /** CertificateAuthority subordinateConfig. */
                        public subordinateConfig?: (google.cloud.security.privateca.v1beta1.ISubordinateConfig|null);

                        /** CertificateAuthority state. */
                        public state: (google.cloud.security.privateca.v1beta1.CertificateAuthority.State|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.State);

                        /** CertificateAuthority pemCaCertificates. */
                        public pemCaCertificates: string[];

                        /** CertificateAuthority caCertificateDescriptions. */
                        public caCertificateDescriptions: google.cloud.security.privateca.v1beta1.ICertificateDescription[];

                        /** CertificateAuthority gcsBucket. */
                        public gcsBucket: string;

                        /** CertificateAuthority accessUrls. */
                        public accessUrls?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls|null);

                        /** CertificateAuthority createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority deleteTime. */
                        public deleteTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateAuthority labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new CertificateAuthority instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateAuthority instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICertificateAuthority): google.cloud.security.privateca.v1beta1.CertificateAuthority;

                        /**
                         * Encodes the specified CertificateAuthority message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.verify|verify} messages.
                         * @param message CertificateAuthority message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICertificateAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateAuthority message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.verify|verify} messages.
                         * @param message CertificateAuthority message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICertificateAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateAuthority message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateAuthority
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority;

                        /**
                         * Decodes a CertificateAuthority message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateAuthority
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority;

                        /**
                         * Verifies a CertificateAuthority message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateAuthority message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateAuthority
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority;

                        /**
                         * Creates a plain object from a CertificateAuthority message. Also converts values to other types if specified.
                         * @param message CertificateAuthority
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateAuthority to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateAuthority
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CertificateAuthority {

                        /** Properties of an IssuingOptions. */
                        interface IIssuingOptions {

                            /** IssuingOptions includeCaCertUrl */
                            includeCaCertUrl?: (boolean|null);

                            /** IssuingOptions includeCrlAccessUrl */
                            includeCrlAccessUrl?: (boolean|null);
                        }

                        /** Represents an IssuingOptions. */
                        class IssuingOptions implements IIssuingOptions {

                            /**
                             * Constructs a new IssuingOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions);

                            /** IssuingOptions includeCaCertUrl. */
                            public includeCaCertUrl: boolean;

                            /** IssuingOptions includeCrlAccessUrl. */
                            public includeCrlAccessUrl: boolean;

                            /**
                             * Creates a new IssuingOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IssuingOptions instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions): google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions;

                            /**
                             * Encodes the specified IssuingOptions message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions.verify|verify} messages.
                             * @param message IssuingOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IssuingOptions message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions.verify|verify} messages.
                             * @param message IssuingOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IIssuingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an IssuingOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IssuingOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions;

                            /**
                             * Decodes an IssuingOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IssuingOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions;

                            /**
                             * Verifies an IssuingOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an IssuingOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IssuingOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions;

                            /**
                             * Creates a plain object from an IssuingOptions message. Also converts values to other types if specified.
                             * @param message IssuingOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IssuingOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for IssuingOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CertificateAuthorityPolicy. */
                        interface ICertificateAuthorityPolicy {

                            /** CertificateAuthorityPolicy allowedConfigList */
                            allowedConfigList?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList|null);

                            /** CertificateAuthorityPolicy overwriteConfigValues */
                            overwriteConfigValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigWrapper|null);

                            /** CertificateAuthorityPolicy allowedLocationsAndOrganizations */
                            allowedLocationsAndOrganizations?: (google.cloud.security.privateca.v1beta1.ISubject[]|null);

                            /** CertificateAuthorityPolicy allowedCommonNames */
                            allowedCommonNames?: (string[]|null);

                            /** CertificateAuthorityPolicy allowedSans */
                            allowedSans?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames|null);

                            /** CertificateAuthorityPolicy maximumLifetime */
                            maximumLifetime?: (google.protobuf.IDuration|null);

                            /** CertificateAuthorityPolicy allowedIssuanceModes */
                            allowedIssuanceModes?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes|null);
                        }

                        /** Represents a CertificateAuthorityPolicy. */
                        class CertificateAuthorityPolicy implements ICertificateAuthorityPolicy {

                            /**
                             * Constructs a new CertificateAuthorityPolicy.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy);

                            /** CertificateAuthorityPolicy allowedConfigList. */
                            public allowedConfigList?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList|null);

                            /** CertificateAuthorityPolicy overwriteConfigValues. */
                            public overwriteConfigValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigWrapper|null);

                            /** CertificateAuthorityPolicy allowedLocationsAndOrganizations. */
                            public allowedLocationsAndOrganizations: google.cloud.security.privateca.v1beta1.ISubject[];

                            /** CertificateAuthorityPolicy allowedCommonNames. */
                            public allowedCommonNames: string[];

                            /** CertificateAuthorityPolicy allowedSans. */
                            public allowedSans?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames|null);

                            /** CertificateAuthorityPolicy maximumLifetime. */
                            public maximumLifetime?: (google.protobuf.IDuration|null);

                            /** CertificateAuthorityPolicy allowedIssuanceModes. */
                            public allowedIssuanceModes?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes|null);

                            /** CertificateAuthorityPolicy configPolicy. */
                            public configPolicy?: ("allowedConfigList"|"overwriteConfigValues");

                            /**
                             * Creates a new CertificateAuthorityPolicy instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CertificateAuthorityPolicy instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy;

                            /**
                             * Encodes the specified CertificateAuthorityPolicy message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.verify|verify} messages.
                             * @param message CertificateAuthorityPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CertificateAuthorityPolicy message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.verify|verify} messages.
                             * @param message CertificateAuthorityPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.ICertificateAuthorityPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CertificateAuthorityPolicy message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CertificateAuthorityPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy;

                            /**
                             * Decodes a CertificateAuthorityPolicy message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CertificateAuthorityPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy;

                            /**
                             * Verifies a CertificateAuthorityPolicy message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CertificateAuthorityPolicy message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CertificateAuthorityPolicy
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy;

                            /**
                             * Creates a plain object from a CertificateAuthorityPolicy message. Also converts values to other types if specified.
                             * @param message CertificateAuthorityPolicy
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CertificateAuthorityPolicy to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CertificateAuthorityPolicy
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace CertificateAuthorityPolicy {

                            /** Properties of an AllowedConfigList. */
                            interface IAllowedConfigList {

                                /** AllowedConfigList allowedConfigValues */
                                allowedConfigValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigWrapper[]|null);
                            }

                            /** Represents an AllowedConfigList. */
                            class AllowedConfigList implements IAllowedConfigList {

                                /**
                                 * Constructs a new AllowedConfigList.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList);

                                /** AllowedConfigList allowedConfigValues. */
                                public allowedConfigValues: google.cloud.security.privateca.v1beta1.IReusableConfigWrapper[];

                                /**
                                 * Creates a new AllowedConfigList instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AllowedConfigList instance
                                 */
                                public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList;

                                /**
                                 * Encodes the specified AllowedConfigList message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList.verify|verify} messages.
                                 * @param message AllowedConfigList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AllowedConfigList message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList.verify|verify} messages.
                                 * @param message AllowedConfigList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedConfigList, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AllowedConfigList message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AllowedConfigList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList;

                                /**
                                 * Decodes an AllowedConfigList message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AllowedConfigList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList;

                                /**
                                 * Verifies an AllowedConfigList message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AllowedConfigList message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AllowedConfigList
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList;

                                /**
                                 * Creates a plain object from an AllowedConfigList message. Also converts values to other types if specified.
                                 * @param message AllowedConfigList
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AllowedConfigList to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AllowedConfigList
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an AllowedSubjectAltNames. */
                            interface IAllowedSubjectAltNames {

                                /** AllowedSubjectAltNames allowedDnsNames */
                                allowedDnsNames?: (string[]|null);

                                /** AllowedSubjectAltNames allowedUris */
                                allowedUris?: (string[]|null);

                                /** AllowedSubjectAltNames allowedEmailAddresses */
                                allowedEmailAddresses?: (string[]|null);

                                /** AllowedSubjectAltNames allowedIps */
                                allowedIps?: (string[]|null);

                                /** AllowedSubjectAltNames allowGlobbingDnsWildcards */
                                allowGlobbingDnsWildcards?: (boolean|null);

                                /** AllowedSubjectAltNames allowCustomSans */
                                allowCustomSans?: (boolean|null);
                            }

                            /** Represents an AllowedSubjectAltNames. */
                            class AllowedSubjectAltNames implements IAllowedSubjectAltNames {

                                /**
                                 * Constructs a new AllowedSubjectAltNames.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames);

                                /** AllowedSubjectAltNames allowedDnsNames. */
                                public allowedDnsNames: string[];

                                /** AllowedSubjectAltNames allowedUris. */
                                public allowedUris: string[];

                                /** AllowedSubjectAltNames allowedEmailAddresses. */
                                public allowedEmailAddresses: string[];

                                /** AllowedSubjectAltNames allowedIps. */
                                public allowedIps: string[];

                                /** AllowedSubjectAltNames allowGlobbingDnsWildcards. */
                                public allowGlobbingDnsWildcards: boolean;

                                /** AllowedSubjectAltNames allowCustomSans. */
                                public allowCustomSans: boolean;

                                /**
                                 * Creates a new AllowedSubjectAltNames instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AllowedSubjectAltNames instance
                                 */
                                public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames;

                                /**
                                 * Encodes the specified AllowedSubjectAltNames message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames.verify|verify} messages.
                                 * @param message AllowedSubjectAltNames message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AllowedSubjectAltNames message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames.verify|verify} messages.
                                 * @param message AllowedSubjectAltNames message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IAllowedSubjectAltNames, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AllowedSubjectAltNames message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AllowedSubjectAltNames
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames;

                                /**
                                 * Decodes an AllowedSubjectAltNames message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AllowedSubjectAltNames
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames;

                                /**
                                 * Verifies an AllowedSubjectAltNames message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AllowedSubjectAltNames message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AllowedSubjectAltNames
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames;

                                /**
                                 * Creates a plain object from an AllowedSubjectAltNames message. Also converts values to other types if specified.
                                 * @param message AllowedSubjectAltNames
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AllowedSubjectAltNames to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AllowedSubjectAltNames
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an IssuanceModes. */
                            interface IIssuanceModes {

                                /** IssuanceModes allowCsrBasedIssuance */
                                allowCsrBasedIssuance?: (boolean|null);

                                /** IssuanceModes allowConfigBasedIssuance */
                                allowConfigBasedIssuance?: (boolean|null);
                            }

                            /** Represents an IssuanceModes. */
                            class IssuanceModes implements IIssuanceModes {

                                /**
                                 * Constructs a new IssuanceModes.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes);

                                /** IssuanceModes allowCsrBasedIssuance. */
                                public allowCsrBasedIssuance: boolean;

                                /** IssuanceModes allowConfigBasedIssuance. */
                                public allowConfigBasedIssuance: boolean;

                                /**
                                 * Creates a new IssuanceModes instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns IssuanceModes instance
                                 */
                                public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes;

                                /**
                                 * Encodes the specified IssuanceModes message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes.verify|verify} messages.
                                 * @param message IssuanceModes message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified IssuanceModes message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes.verify|verify} messages.
                                 * @param message IssuanceModes message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IIssuanceModes, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an IssuanceModes message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns IssuanceModes
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes;

                                /**
                                 * Decodes an IssuanceModes message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns IssuanceModes
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes;

                                /**
                                 * Verifies an IssuanceModes message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an IssuanceModes message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns IssuanceModes
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes;

                                /**
                                 * Creates a plain object from an IssuanceModes message. Also converts values to other types if specified.
                                 * @param message IssuanceModes
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this IssuanceModes to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for IssuanceModes
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of an AccessUrls. */
                        interface IAccessUrls {

                            /** AccessUrls caCertificateAccessUrl */
                            caCertificateAccessUrl?: (string|null);

                            /** AccessUrls crlAccessUrl */
                            crlAccessUrl?: (string|null);
                        }

                        /** Represents an AccessUrls. */
                        class AccessUrls implements IAccessUrls {

                            /**
                             * Constructs a new AccessUrls.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls);

                            /** AccessUrls caCertificateAccessUrl. */
                            public caCertificateAccessUrl: string;

                            /** AccessUrls crlAccessUrl. */
                            public crlAccessUrl: string;

                            /**
                             * Creates a new AccessUrls instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AccessUrls instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls): google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls;

                            /**
                             * Encodes the specified AccessUrls message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls.verify|verify} messages.
                             * @param message AccessUrls message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AccessUrls message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls.verify|verify} messages.
                             * @param message AccessUrls message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IAccessUrls, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AccessUrls message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AccessUrls
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls;

                            /**
                             * Decodes an AccessUrls message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AccessUrls
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls;

                            /**
                             * Verifies an AccessUrls message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AccessUrls message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AccessUrls
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls;

                            /**
                             * Creates a plain object from an AccessUrls message. Also converts values to other types if specified.
                             * @param message AccessUrls
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AccessUrls to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AccessUrls
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a KeyVersionSpec. */
                        interface IKeyVersionSpec {

                            /** KeyVersionSpec cloudKmsKeyVersion */
                            cloudKmsKeyVersion?: (string|null);

                            /** KeyVersionSpec algorithm */
                            algorithm?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm|null);
                        }

                        /** Represents a KeyVersionSpec. */
                        class KeyVersionSpec implements IKeyVersionSpec {

                            /**
                             * Constructs a new KeyVersionSpec.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec);

                            /** KeyVersionSpec cloudKmsKeyVersion. */
                            public cloudKmsKeyVersion?: (string|null);

                            /** KeyVersionSpec algorithm. */
                            public algorithm?: (google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm|keyof typeof google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm|null);

                            /** KeyVersionSpec KeyVersion. */
                            public KeyVersion?: ("cloudKmsKeyVersion"|"algorithm");

                            /**
                             * Creates a new KeyVersionSpec instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns KeyVersionSpec instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec): google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec;

                            /**
                             * Encodes the specified KeyVersionSpec message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.verify|verify} messages.
                             * @param message KeyVersionSpec message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified KeyVersionSpec message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.verify|verify} messages.
                             * @param message KeyVersionSpec message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.IKeyVersionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a KeyVersionSpec message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns KeyVersionSpec
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec;

                            /**
                             * Decodes a KeyVersionSpec message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns KeyVersionSpec
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec;

                            /**
                             * Verifies a KeyVersionSpec message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a KeyVersionSpec message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns KeyVersionSpec
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec;

                            /**
                             * Creates a plain object from a KeyVersionSpec message. Also converts values to other types if specified.
                             * @param message KeyVersionSpec
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this KeyVersionSpec to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for KeyVersionSpec
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            SELF_SIGNED = 1,
                            SUBORDINATE = 2
                        }

                        /** Tier enum. */
                        enum Tier {
                            TIER_UNSPECIFIED = 0,
                            ENTERPRISE = 1,
                            DEVOPS = 2
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            ENABLED = 1,
                            DISABLED = 2,
                            PENDING_ACTIVATION = 3,
                            PENDING_DELETION = 4
                        }

                        /** SignHashAlgorithm enum. */
                        enum SignHashAlgorithm {
                            SIGN_HASH_ALGORITHM_UNSPECIFIED = 0,
                            RSA_PSS_2048_SHA256 = 1,
                            RSA_PSS_3072_SHA256 = 2,
                            RSA_PSS_4096_SHA256 = 3,
                            RSA_PKCS1_2048_SHA256 = 6,
                            RSA_PKCS1_3072_SHA256 = 7,
                            RSA_PKCS1_4096_SHA256 = 8,
                            EC_P256_SHA256 = 4,
                            EC_P384_SHA384 = 5
                        }
                    }

                    /** Properties of a CertificateRevocationList. */
                    interface ICertificateRevocationList {

                        /** CertificateRevocationList name */
                        name?: (string|null);

                        /** CertificateRevocationList sequenceNumber */
                        sequenceNumber?: (number|Long|string|null);

                        /** CertificateRevocationList revokedCertificates */
                        revokedCertificates?: (google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate[]|null);

                        /** CertificateRevocationList pemCrl */
                        pemCrl?: (string|null);

                        /** CertificateRevocationList accessUrl */
                        accessUrl?: (string|null);

                        /** CertificateRevocationList state */
                        state?: (google.cloud.security.privateca.v1beta1.CertificateRevocationList.State|keyof typeof google.cloud.security.privateca.v1beta1.CertificateRevocationList.State|null);

                        /** CertificateRevocationList createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateRevocationList updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateRevocationList labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a CertificateRevocationList. */
                    class CertificateRevocationList implements ICertificateRevocationList {

                        /**
                         * Constructs a new CertificateRevocationList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICertificateRevocationList);

                        /** CertificateRevocationList name. */
                        public name: string;

                        /** CertificateRevocationList sequenceNumber. */
                        public sequenceNumber: (number|Long|string);

                        /** CertificateRevocationList revokedCertificates. */
                        public revokedCertificates: google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate[];

                        /** CertificateRevocationList pemCrl. */
                        public pemCrl: string;

                        /** CertificateRevocationList accessUrl. */
                        public accessUrl: string;

                        /** CertificateRevocationList state. */
                        public state: (google.cloud.security.privateca.v1beta1.CertificateRevocationList.State|keyof typeof google.cloud.security.privateca.v1beta1.CertificateRevocationList.State);

                        /** CertificateRevocationList createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateRevocationList updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** CertificateRevocationList labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new CertificateRevocationList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateRevocationList instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICertificateRevocationList): google.cloud.security.privateca.v1beta1.CertificateRevocationList;

                        /**
                         * Encodes the specified CertificateRevocationList message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateRevocationList.verify|verify} messages.
                         * @param message CertificateRevocationList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICertificateRevocationList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateRevocationList message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateRevocationList.verify|verify} messages.
                         * @param message CertificateRevocationList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICertificateRevocationList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateRevocationList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateRevocationList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateRevocationList;

                        /**
                         * Decodes a CertificateRevocationList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateRevocationList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateRevocationList;

                        /**
                         * Verifies a CertificateRevocationList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateRevocationList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateRevocationList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateRevocationList;

                        /**
                         * Creates a plain object from a CertificateRevocationList message. Also converts values to other types if specified.
                         * @param message CertificateRevocationList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateRevocationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateRevocationList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateRevocationList
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CertificateRevocationList {

                        /** Properties of a RevokedCertificate. */
                        interface IRevokedCertificate {

                            /** RevokedCertificate certificate */
                            certificate?: (string|null);

                            /** RevokedCertificate hexSerialNumber */
                            hexSerialNumber?: (string|null);

                            /** RevokedCertificate revocationReason */
                            revocationReason?: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason|null);
                        }

                        /** Represents a RevokedCertificate. */
                        class RevokedCertificate implements IRevokedCertificate {

                            /**
                             * Constructs a new RevokedCertificate.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate);

                            /** RevokedCertificate certificate. */
                            public certificate: string;

                            /** RevokedCertificate hexSerialNumber. */
                            public hexSerialNumber: string;

                            /** RevokedCertificate revocationReason. */
                            public revocationReason: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason);

                            /**
                             * Creates a new RevokedCertificate instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RevokedCertificate instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate): google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate;

                            /**
                             * Encodes the specified RevokedCertificate message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate.verify|verify} messages.
                             * @param message RevokedCertificate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RevokedCertificate message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate.verify|verify} messages.
                             * @param message RevokedCertificate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateRevocationList.IRevokedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RevokedCertificate message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RevokedCertificate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate;

                            /**
                             * Decodes a RevokedCertificate message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RevokedCertificate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate;

                            /**
                             * Verifies a RevokedCertificate message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RevokedCertificate message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RevokedCertificate
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate;

                            /**
                             * Creates a plain object from a RevokedCertificate message. Also converts values to other types if specified.
                             * @param message RevokedCertificate
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RevokedCertificate to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RevokedCertificate
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            ACTIVE = 1,
                            SUPERSEDED = 2
                        }
                    }

                    /** Properties of a Certificate. */
                    interface ICertificate {

                        /** Certificate name */
                        name?: (string|null);

                        /** Certificate pemCsr */
                        pemCsr?: (string|null);

                        /** Certificate config */
                        config?: (google.cloud.security.privateca.v1beta1.ICertificateConfig|null);

                        /** Certificate lifetime */
                        lifetime?: (google.protobuf.IDuration|null);

                        /** Certificate revocationDetails */
                        revocationDetails?: (google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails|null);

                        /** Certificate pemCertificate */
                        pemCertificate?: (string|null);

                        /** Certificate certificateDescription */
                        certificateDescription?: (google.cloud.security.privateca.v1beta1.ICertificateDescription|null);

                        /** Certificate pemCertificateChain */
                        pemCertificateChain?: (string[]|null);

                        /** Certificate createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Certificate updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Certificate labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a Certificate. */
                    class Certificate implements ICertificate {

                        /**
                         * Constructs a new Certificate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICertificate);

                        /** Certificate name. */
                        public name: string;

                        /** Certificate pemCsr. */
                        public pemCsr?: (string|null);

                        /** Certificate config. */
                        public config?: (google.cloud.security.privateca.v1beta1.ICertificateConfig|null);

                        /** Certificate lifetime. */
                        public lifetime?: (google.protobuf.IDuration|null);

                        /** Certificate revocationDetails. */
                        public revocationDetails?: (google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails|null);

                        /** Certificate pemCertificate. */
                        public pemCertificate: string;

                        /** Certificate certificateDescription. */
                        public certificateDescription?: (google.cloud.security.privateca.v1beta1.ICertificateDescription|null);

                        /** Certificate pemCertificateChain. */
                        public pemCertificateChain: string[];

                        /** Certificate createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Certificate updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Certificate labels. */
                        public labels: { [k: string]: string };

                        /** Certificate certificateConfig. */
                        public certificateConfig?: ("pemCsr"|"config");

                        /**
                         * Creates a new Certificate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Certificate instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICertificate): google.cloud.security.privateca.v1beta1.Certificate;

                        /**
                         * Encodes the specified Certificate message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Certificate.verify|verify} messages.
                         * @param message Certificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Certificate message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Certificate.verify|verify} messages.
                         * @param message Certificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Certificate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Certificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.Certificate;

                        /**
                         * Decodes a Certificate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Certificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.Certificate;

                        /**
                         * Verifies a Certificate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Certificate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.Certificate;

                        /**
                         * Creates a plain object from a Certificate message. Also converts values to other types if specified.
                         * @param message Certificate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.Certificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Certificate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Certificate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Certificate {

                        /** Properties of a RevocationDetails. */
                        interface IRevocationDetails {

                            /** RevocationDetails revocationState */
                            revocationState?: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason|null);

                            /** RevocationDetails revocationTime */
                            revocationTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a RevocationDetails. */
                        class RevocationDetails implements IRevocationDetails {

                            /**
                             * Constructs a new RevocationDetails.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails);

                            /** RevocationDetails revocationState. */
                            public revocationState: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason);

                            /** RevocationDetails revocationTime. */
                            public revocationTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new RevocationDetails instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RevocationDetails instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails): google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails;

                            /**
                             * Encodes the specified RevocationDetails message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails.verify|verify} messages.
                             * @param message RevocationDetails message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RevocationDetails message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails.verify|verify} messages.
                             * @param message RevocationDetails message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.Certificate.IRevocationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RevocationDetails message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RevocationDetails
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails;

                            /**
                             * Decodes a RevocationDetails message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RevocationDetails
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails;

                            /**
                             * Verifies a RevocationDetails message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RevocationDetails message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RevocationDetails
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails;

                            /**
                             * Creates a plain object from a RevocationDetails message. Also converts values to other types if specified.
                             * @param message RevocationDetails
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RevocationDetails to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RevocationDetails
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ReusableConfig. */
                    interface IReusableConfig {

                        /** ReusableConfig name */
                        name?: (string|null);

                        /** ReusableConfig values */
                        values?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);

                        /** ReusableConfig description */
                        description?: (string|null);

                        /** ReusableConfig createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** ReusableConfig updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** ReusableConfig labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a ReusableConfig. */
                    class ReusableConfig implements IReusableConfig {

                        /**
                         * Constructs a new ReusableConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IReusableConfig);

                        /** ReusableConfig name. */
                        public name: string;

                        /** ReusableConfig values. */
                        public values?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);

                        /** ReusableConfig description. */
                        public description: string;

                        /** ReusableConfig createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** ReusableConfig updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** ReusableConfig labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new ReusableConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReusableConfig instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IReusableConfig): google.cloud.security.privateca.v1beta1.ReusableConfig;

                        /**
                         * Encodes the specified ReusableConfig message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfig.verify|verify} messages.
                         * @param message ReusableConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IReusableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReusableConfig message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfig.verify|verify} messages.
                         * @param message ReusableConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IReusableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReusableConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReusableConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ReusableConfig;

                        /**
                         * Decodes a ReusableConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReusableConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ReusableConfig;

                        /**
                         * Verifies a ReusableConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReusableConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReusableConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ReusableConfig;

                        /**
                         * Creates a plain object from a ReusableConfig message. Also converts values to other types if specified.
                         * @param message ReusableConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ReusableConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReusableConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReusableConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReusableConfigValues. */
                    interface IReusableConfigValues {

                        /** ReusableConfigValues keyUsage */
                        keyUsage?: (google.cloud.security.privateca.v1beta1.IKeyUsage|null);

                        /** ReusableConfigValues caOptions */
                        caOptions?: (google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions|null);

                        /** ReusableConfigValues policyIds */
                        policyIds?: (google.cloud.security.privateca.v1beta1.IObjectId[]|null);

                        /** ReusableConfigValues aiaOcspServers */
                        aiaOcspServers?: (string[]|null);

                        /** ReusableConfigValues additionalExtensions */
                        additionalExtensions?: (google.cloud.security.privateca.v1beta1.IX509Extension[]|null);
                    }

                    /** Represents a ReusableConfigValues. */
                    class ReusableConfigValues implements IReusableConfigValues {

                        /**
                         * Constructs a new ReusableConfigValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IReusableConfigValues);

                        /** ReusableConfigValues keyUsage. */
                        public keyUsage?: (google.cloud.security.privateca.v1beta1.IKeyUsage|null);

                        /** ReusableConfigValues caOptions. */
                        public caOptions?: (google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions|null);

                        /** ReusableConfigValues policyIds. */
                        public policyIds: google.cloud.security.privateca.v1beta1.IObjectId[];

                        /** ReusableConfigValues aiaOcspServers. */
                        public aiaOcspServers: string[];

                        /** ReusableConfigValues additionalExtensions. */
                        public additionalExtensions: google.cloud.security.privateca.v1beta1.IX509Extension[];

                        /**
                         * Creates a new ReusableConfigValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReusableConfigValues instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IReusableConfigValues): google.cloud.security.privateca.v1beta1.ReusableConfigValues;

                        /**
                         * Encodes the specified ReusableConfigValues message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigValues.verify|verify} messages.
                         * @param message ReusableConfigValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IReusableConfigValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReusableConfigValues message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigValues.verify|verify} messages.
                         * @param message ReusableConfigValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IReusableConfigValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReusableConfigValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReusableConfigValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ReusableConfigValues;

                        /**
                         * Decodes a ReusableConfigValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReusableConfigValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ReusableConfigValues;

                        /**
                         * Verifies a ReusableConfigValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReusableConfigValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReusableConfigValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ReusableConfigValues;

                        /**
                         * Creates a plain object from a ReusableConfigValues message. Also converts values to other types if specified.
                         * @param message ReusableConfigValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ReusableConfigValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReusableConfigValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReusableConfigValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ReusableConfigValues {

                        /** Properties of a CaOptions. */
                        interface ICaOptions {

                            /** CaOptions isCa */
                            isCa?: (google.protobuf.IBoolValue|null);

                            /** CaOptions maxIssuerPathLength */
                            maxIssuerPathLength?: (google.protobuf.IInt32Value|null);
                        }

                        /** Represents a CaOptions. */
                        class CaOptions implements ICaOptions {

                            /**
                             * Constructs a new CaOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions);

                            /** CaOptions isCa. */
                            public isCa?: (google.protobuf.IBoolValue|null);

                            /** CaOptions maxIssuerPathLength. */
                            public maxIssuerPathLength?: (google.protobuf.IInt32Value|null);

                            /**
                             * Creates a new CaOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CaOptions instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions): google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions;

                            /**
                             * Encodes the specified CaOptions message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions.verify|verify} messages.
                             * @param message CaOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CaOptions message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions.verify|verify} messages.
                             * @param message CaOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ReusableConfigValues.ICaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CaOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CaOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions;

                            /**
                             * Decodes a CaOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CaOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions;

                            /**
                             * Verifies a CaOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CaOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CaOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions;

                            /**
                             * Creates a plain object from a CaOptions message. Also converts values to other types if specified.
                             * @param message CaOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CaOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CaOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ReusableConfigWrapper. */
                    interface IReusableConfigWrapper {

                        /** ReusableConfigWrapper reusableConfig */
                        reusableConfig?: (string|null);

                        /** ReusableConfigWrapper reusableConfigValues */
                        reusableConfigValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);
                    }

                    /** Represents a ReusableConfigWrapper. */
                    class ReusableConfigWrapper implements IReusableConfigWrapper {

                        /**
                         * Constructs a new ReusableConfigWrapper.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IReusableConfigWrapper);

                        /** ReusableConfigWrapper reusableConfig. */
                        public reusableConfig?: (string|null);

                        /** ReusableConfigWrapper reusableConfigValues. */
                        public reusableConfigValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);

                        /** ReusableConfigWrapper configValues. */
                        public configValues?: ("reusableConfig"|"reusableConfigValues");

                        /**
                         * Creates a new ReusableConfigWrapper instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReusableConfigWrapper instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IReusableConfigWrapper): google.cloud.security.privateca.v1beta1.ReusableConfigWrapper;

                        /**
                         * Encodes the specified ReusableConfigWrapper message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.verify|verify} messages.
                         * @param message ReusableConfigWrapper message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IReusableConfigWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReusableConfigWrapper message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.verify|verify} messages.
                         * @param message ReusableConfigWrapper message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IReusableConfigWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReusableConfigWrapper message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReusableConfigWrapper
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ReusableConfigWrapper;

                        /**
                         * Decodes a ReusableConfigWrapper message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReusableConfigWrapper
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ReusableConfigWrapper;

                        /**
                         * Verifies a ReusableConfigWrapper message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReusableConfigWrapper message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReusableConfigWrapper
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ReusableConfigWrapper;

                        /**
                         * Creates a plain object from a ReusableConfigWrapper message. Also converts values to other types if specified.
                         * @param message ReusableConfigWrapper
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ReusableConfigWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReusableConfigWrapper to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReusableConfigWrapper
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubordinateConfig. */
                    interface ISubordinateConfig {

                        /** SubordinateConfig certificateAuthority */
                        certificateAuthority?: (string|null);

                        /** SubordinateConfig pemIssuerChain */
                        pemIssuerChain?: (google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain|null);
                    }

                    /** Represents a SubordinateConfig. */
                    class SubordinateConfig implements ISubordinateConfig {

                        /**
                         * Constructs a new SubordinateConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ISubordinateConfig);

                        /** SubordinateConfig certificateAuthority. */
                        public certificateAuthority?: (string|null);

                        /** SubordinateConfig pemIssuerChain. */
                        public pemIssuerChain?: (google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain|null);

                        /** SubordinateConfig subordinateConfig. */
                        public subordinateConfig?: ("certificateAuthority"|"pemIssuerChain");

                        /**
                         * Creates a new SubordinateConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubordinateConfig instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ISubordinateConfig): google.cloud.security.privateca.v1beta1.SubordinateConfig;

                        /**
                         * Encodes the specified SubordinateConfig message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubordinateConfig.verify|verify} messages.
                         * @param message SubordinateConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ISubordinateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubordinateConfig message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubordinateConfig.verify|verify} messages.
                         * @param message SubordinateConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ISubordinateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubordinateConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubordinateConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.SubordinateConfig;

                        /**
                         * Decodes a SubordinateConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubordinateConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.SubordinateConfig;

                        /**
                         * Verifies a SubordinateConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubordinateConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubordinateConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.SubordinateConfig;

                        /**
                         * Creates a plain object from a SubordinateConfig message. Also converts values to other types if specified.
                         * @param message SubordinateConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.SubordinateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubordinateConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubordinateConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SubordinateConfig {

                        /** Properties of a SubordinateConfigChain. */
                        interface ISubordinateConfigChain {

                            /** SubordinateConfigChain pemCertificates */
                            pemCertificates?: (string[]|null);
                        }

                        /** Represents a SubordinateConfigChain. */
                        class SubordinateConfigChain implements ISubordinateConfigChain {

                            /**
                             * Constructs a new SubordinateConfigChain.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain);

                            /** SubordinateConfigChain pemCertificates. */
                            public pemCertificates: string[];

                            /**
                             * Creates a new SubordinateConfigChain instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SubordinateConfigChain instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain): google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain;

                            /**
                             * Encodes the specified SubordinateConfigChain message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain.verify|verify} messages.
                             * @param message SubordinateConfigChain message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SubordinateConfigChain message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain.verify|verify} messages.
                             * @param message SubordinateConfigChain message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.SubordinateConfig.ISubordinateConfigChain, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SubordinateConfigChain message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SubordinateConfigChain
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain;

                            /**
                             * Decodes a SubordinateConfigChain message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SubordinateConfigChain
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain;

                            /**
                             * Verifies a SubordinateConfigChain message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SubordinateConfigChain message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SubordinateConfigChain
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain;

                            /**
                             * Creates a plain object from a SubordinateConfigChain message. Also converts values to other types if specified.
                             * @param message SubordinateConfigChain
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SubordinateConfigChain to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SubordinateConfigChain
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a PublicKey. */
                    interface IPublicKey {

                        /** PublicKey type */
                        type?: (google.cloud.security.privateca.v1beta1.PublicKey.KeyType|keyof typeof google.cloud.security.privateca.v1beta1.PublicKey.KeyType|null);

                        /** PublicKey key */
                        key?: (Uint8Array|string|null);
                    }

                    /** Represents a PublicKey. */
                    class PublicKey implements IPublicKey {

                        /**
                         * Constructs a new PublicKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IPublicKey);

                        /** PublicKey type. */
                        public type: (google.cloud.security.privateca.v1beta1.PublicKey.KeyType|keyof typeof google.cloud.security.privateca.v1beta1.PublicKey.KeyType);

                        /** PublicKey key. */
                        public key: (Uint8Array|string);

                        /**
                         * Creates a new PublicKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PublicKey instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IPublicKey): google.cloud.security.privateca.v1beta1.PublicKey;

                        /**
                         * Encodes the specified PublicKey message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.PublicKey.verify|verify} messages.
                         * @param message PublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.PublicKey.verify|verify} messages.
                         * @param message PublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PublicKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.PublicKey;

                        /**
                         * Decodes a PublicKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.PublicKey;

                        /**
                         * Verifies a PublicKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PublicKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.PublicKey;

                        /**
                         * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
                         * @param message PublicKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PublicKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PublicKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PublicKey {

                        /** KeyType enum. */
                        enum KeyType {
                            KEY_TYPE_UNSPECIFIED = 0,
                            PEM_RSA_KEY = 1,
                            PEM_EC_KEY = 2
                        }
                    }

                    /** Properties of a CertificateConfig. */
                    interface ICertificateConfig {

                        /** CertificateConfig subjectConfig */
                        subjectConfig?: (google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig|null);

                        /** CertificateConfig reusableConfig */
                        reusableConfig?: (google.cloud.security.privateca.v1beta1.IReusableConfigWrapper|null);

                        /** CertificateConfig publicKey */
                        publicKey?: (google.cloud.security.privateca.v1beta1.IPublicKey|null);
                    }

                    /** Represents a CertificateConfig. */
                    class CertificateConfig implements ICertificateConfig {

                        /**
                         * Constructs a new CertificateConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICertificateConfig);

                        /** CertificateConfig subjectConfig. */
                        public subjectConfig?: (google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig|null);

                        /** CertificateConfig reusableConfig. */
                        public reusableConfig?: (google.cloud.security.privateca.v1beta1.IReusableConfigWrapper|null);

                        /** CertificateConfig publicKey. */
                        public publicKey?: (google.cloud.security.privateca.v1beta1.IPublicKey|null);

                        /**
                         * Creates a new CertificateConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateConfig instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICertificateConfig): google.cloud.security.privateca.v1beta1.CertificateConfig;

                        /**
                         * Encodes the specified CertificateConfig message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateConfig.verify|verify} messages.
                         * @param message CertificateConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICertificateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateConfig message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateConfig.verify|verify} messages.
                         * @param message CertificateConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICertificateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateConfig;

                        /**
                         * Decodes a CertificateConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateConfig;

                        /**
                         * Verifies a CertificateConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateConfig;

                        /**
                         * Creates a plain object from a CertificateConfig message. Also converts values to other types if specified.
                         * @param message CertificateConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CertificateConfig {

                        /** Properties of a SubjectConfig. */
                        interface ISubjectConfig {

                            /** SubjectConfig subject */
                            subject?: (google.cloud.security.privateca.v1beta1.ISubject|null);

                            /** SubjectConfig commonName */
                            commonName?: (string|null);

                            /** SubjectConfig subjectAltName */
                            subjectAltName?: (google.cloud.security.privateca.v1beta1.ISubjectAltNames|null);
                        }

                        /** Represents a SubjectConfig. */
                        class SubjectConfig implements ISubjectConfig {

                            /**
                             * Constructs a new SubjectConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig);

                            /** SubjectConfig subject. */
                            public subject?: (google.cloud.security.privateca.v1beta1.ISubject|null);

                            /** SubjectConfig commonName. */
                            public commonName: string;

                            /** SubjectConfig subjectAltName. */
                            public subjectAltName?: (google.cloud.security.privateca.v1beta1.ISubjectAltNames|null);

                            /**
                             * Creates a new SubjectConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SubjectConfig instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig): google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig;

                            /**
                             * Encodes the specified SubjectConfig message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig.verify|verify} messages.
                             * @param message SubjectConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SubjectConfig message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig.verify|verify} messages.
                             * @param message SubjectConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateConfig.ISubjectConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SubjectConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SubjectConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig;

                            /**
                             * Decodes a SubjectConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SubjectConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig;

                            /**
                             * Verifies a SubjectConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SubjectConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SubjectConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig;

                            /**
                             * Creates a plain object from a SubjectConfig message. Also converts values to other types if specified.
                             * @param message SubjectConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SubjectConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SubjectConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a CertificateDescription. */
                    interface ICertificateDescription {

                        /** CertificateDescription subjectDescription */
                        subjectDescription?: (google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription|null);

                        /** CertificateDescription configValues */
                        configValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);

                        /** CertificateDescription publicKey */
                        publicKey?: (google.cloud.security.privateca.v1beta1.IPublicKey|null);

                        /** CertificateDescription subjectKeyId */
                        subjectKeyId?: (google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId|null);

                        /** CertificateDescription authorityKeyId */
                        authorityKeyId?: (google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId|null);

                        /** CertificateDescription crlDistributionPoints */
                        crlDistributionPoints?: (string[]|null);

                        /** CertificateDescription aiaIssuingCertificateUrls */
                        aiaIssuingCertificateUrls?: (string[]|null);

                        /** CertificateDescription certFingerprint */
                        certFingerprint?: (google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint|null);
                    }

                    /** Represents a CertificateDescription. */
                    class CertificateDescription implements ICertificateDescription {

                        /**
                         * Constructs a new CertificateDescription.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICertificateDescription);

                        /** CertificateDescription subjectDescription. */
                        public subjectDescription?: (google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription|null);

                        /** CertificateDescription configValues. */
                        public configValues?: (google.cloud.security.privateca.v1beta1.IReusableConfigValues|null);

                        /** CertificateDescription publicKey. */
                        public publicKey?: (google.cloud.security.privateca.v1beta1.IPublicKey|null);

                        /** CertificateDescription subjectKeyId. */
                        public subjectKeyId?: (google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId|null);

                        /** CertificateDescription authorityKeyId. */
                        public authorityKeyId?: (google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId|null);

                        /** CertificateDescription crlDistributionPoints. */
                        public crlDistributionPoints: string[];

                        /** CertificateDescription aiaIssuingCertificateUrls. */
                        public aiaIssuingCertificateUrls: string[];

                        /** CertificateDescription certFingerprint. */
                        public certFingerprint?: (google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint|null);

                        /**
                         * Creates a new CertificateDescription instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateDescription instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICertificateDescription): google.cloud.security.privateca.v1beta1.CertificateDescription;

                        /**
                         * Encodes the specified CertificateDescription message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.verify|verify} messages.
                         * @param message CertificateDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICertificateDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateDescription message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.verify|verify} messages.
                         * @param message CertificateDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICertificateDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateDescription message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateDescription;

                        /**
                         * Decodes a CertificateDescription message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateDescription;

                        /**
                         * Verifies a CertificateDescription message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateDescription message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateDescription
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateDescription;

                        /**
                         * Creates a plain object from a CertificateDescription message. Also converts values to other types if specified.
                         * @param message CertificateDescription
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateDescription to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateDescription
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CertificateDescription {

                        /** Properties of a SubjectDescription. */
                        interface ISubjectDescription {

                            /** SubjectDescription subject */
                            subject?: (google.cloud.security.privateca.v1beta1.ISubject|null);

                            /** SubjectDescription commonName */
                            commonName?: (string|null);

                            /** SubjectDescription subjectAltName */
                            subjectAltName?: (google.cloud.security.privateca.v1beta1.ISubjectAltNames|null);

                            /** SubjectDescription hexSerialNumber */
                            hexSerialNumber?: (string|null);

                            /** SubjectDescription lifetime */
                            lifetime?: (google.protobuf.IDuration|null);

                            /** SubjectDescription notBeforeTime */
                            notBeforeTime?: (google.protobuf.ITimestamp|null);

                            /** SubjectDescription notAfterTime */
                            notAfterTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a SubjectDescription. */
                        class SubjectDescription implements ISubjectDescription {

                            /**
                             * Constructs a new SubjectDescription.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription);

                            /** SubjectDescription subject. */
                            public subject?: (google.cloud.security.privateca.v1beta1.ISubject|null);

                            /** SubjectDescription commonName. */
                            public commonName: string;

                            /** SubjectDescription subjectAltName. */
                            public subjectAltName?: (google.cloud.security.privateca.v1beta1.ISubjectAltNames|null);

                            /** SubjectDescription hexSerialNumber. */
                            public hexSerialNumber: string;

                            /** SubjectDescription lifetime. */
                            public lifetime?: (google.protobuf.IDuration|null);

                            /** SubjectDescription notBeforeTime. */
                            public notBeforeTime?: (google.protobuf.ITimestamp|null);

                            /** SubjectDescription notAfterTime. */
                            public notAfterTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new SubjectDescription instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SubjectDescription instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription): google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription;

                            /**
                             * Encodes the specified SubjectDescription message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription.verify|verify} messages.
                             * @param message SubjectDescription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SubjectDescription message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription.verify|verify} messages.
                             * @param message SubjectDescription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateDescription.ISubjectDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SubjectDescription message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SubjectDescription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription;

                            /**
                             * Decodes a SubjectDescription message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SubjectDescription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription;

                            /**
                             * Verifies a SubjectDescription message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SubjectDescription message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SubjectDescription
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription;

                            /**
                             * Creates a plain object from a SubjectDescription message. Also converts values to other types if specified.
                             * @param message SubjectDescription
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SubjectDescription to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SubjectDescription
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a KeyId. */
                        interface IKeyId {

                            /** KeyId keyId */
                            keyId?: (string|null);
                        }

                        /** Represents a KeyId. */
                        class KeyId implements IKeyId {

                            /**
                             * Constructs a new KeyId.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId);

                            /** KeyId keyId. */
                            public keyId: string;

                            /**
                             * Creates a new KeyId instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns KeyId instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId): google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId;

                            /**
                             * Encodes the specified KeyId message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId.verify|verify} messages.
                             * @param message KeyId message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified KeyId message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId.verify|verify} messages.
                             * @param message KeyId message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateDescription.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a KeyId message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns KeyId
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId;

                            /**
                             * Decodes a KeyId message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns KeyId
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId;

                            /**
                             * Verifies a KeyId message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a KeyId message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns KeyId
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId;

                            /**
                             * Creates a plain object from a KeyId message. Also converts values to other types if specified.
                             * @param message KeyId
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this KeyId to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for KeyId
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CertificateFingerprint. */
                        interface ICertificateFingerprint {

                            /** CertificateFingerprint sha256Hash */
                            sha256Hash?: (string|null);
                        }

                        /** Represents a CertificateFingerprint. */
                        class CertificateFingerprint implements ICertificateFingerprint {

                            /**
                             * Constructs a new CertificateFingerprint.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint);

                            /** CertificateFingerprint sha256Hash. */
                            public sha256Hash: string;

                            /**
                             * Creates a new CertificateFingerprint instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CertificateFingerprint instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint): google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint;

                            /**
                             * Encodes the specified CertificateFingerprint message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint.verify|verify} messages.
                             * @param message CertificateFingerprint message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CertificateFingerprint message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint.verify|verify} messages.
                             * @param message CertificateFingerprint message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.CertificateDescription.ICertificateFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CertificateFingerprint message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CertificateFingerprint
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint;

                            /**
                             * Decodes a CertificateFingerprint message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CertificateFingerprint
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint;

                            /**
                             * Verifies a CertificateFingerprint message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CertificateFingerprint message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CertificateFingerprint
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint;

                            /**
                             * Creates a plain object from a CertificateFingerprint message. Also converts values to other types if specified.
                             * @param message CertificateFingerprint
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CertificateFingerprint to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CertificateFingerprint
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an ObjectId. */
                    interface IObjectId {

                        /** ObjectId objectIdPath */
                        objectIdPath?: (number[]|null);
                    }

                    /** Represents an ObjectId. */
                    class ObjectId implements IObjectId {

                        /**
                         * Constructs a new ObjectId.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IObjectId);

                        /** ObjectId objectIdPath. */
                        public objectIdPath: number[];

                        /**
                         * Creates a new ObjectId instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ObjectId instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IObjectId): google.cloud.security.privateca.v1beta1.ObjectId;

                        /**
                         * Encodes the specified ObjectId message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ObjectId.verify|verify} messages.
                         * @param message ObjectId message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IObjectId, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ObjectId message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ObjectId.verify|verify} messages.
                         * @param message ObjectId message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IObjectId, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ObjectId message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ObjectId
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ObjectId;

                        /**
                         * Decodes an ObjectId message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ObjectId
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ObjectId;

                        /**
                         * Verifies an ObjectId message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ObjectId message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ObjectId
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ObjectId;

                        /**
                         * Creates a plain object from an ObjectId message. Also converts values to other types if specified.
                         * @param message ObjectId
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ObjectId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ObjectId to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ObjectId
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a X509Extension. */
                    interface IX509Extension {

                        /** X509Extension objectId */
                        objectId?: (google.cloud.security.privateca.v1beta1.IObjectId|null);

                        /** X509Extension critical */
                        critical?: (boolean|null);

                        /** X509Extension value */
                        value?: (Uint8Array|string|null);
                    }

                    /** Represents a X509Extension. */
                    class X509Extension implements IX509Extension {

                        /**
                         * Constructs a new X509Extension.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IX509Extension);

                        /** X509Extension objectId. */
                        public objectId?: (google.cloud.security.privateca.v1beta1.IObjectId|null);

                        /** X509Extension critical. */
                        public critical: boolean;

                        /** X509Extension value. */
                        public value: (Uint8Array|string);

                        /**
                         * Creates a new X509Extension instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns X509Extension instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IX509Extension): google.cloud.security.privateca.v1beta1.X509Extension;

                        /**
                         * Encodes the specified X509Extension message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.X509Extension.verify|verify} messages.
                         * @param message X509Extension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IX509Extension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified X509Extension message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.X509Extension.verify|verify} messages.
                         * @param message X509Extension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IX509Extension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a X509Extension message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns X509Extension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.X509Extension;

                        /**
                         * Decodes a X509Extension message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns X509Extension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.X509Extension;

                        /**
                         * Verifies a X509Extension message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a X509Extension message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns X509Extension
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.X509Extension;

                        /**
                         * Creates a plain object from a X509Extension message. Also converts values to other types if specified.
                         * @param message X509Extension
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.X509Extension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this X509Extension to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for X509Extension
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a KeyUsage. */
                    interface IKeyUsage {

                        /** KeyUsage baseKeyUsage */
                        baseKeyUsage?: (google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions|null);

                        /** KeyUsage extendedKeyUsage */
                        extendedKeyUsage?: (google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions|null);

                        /** KeyUsage unknownExtendedKeyUsages */
                        unknownExtendedKeyUsages?: (google.cloud.security.privateca.v1beta1.IObjectId[]|null);
                    }

                    /** Represents a KeyUsage. */
                    class KeyUsage implements IKeyUsage {

                        /**
                         * Constructs a new KeyUsage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IKeyUsage);

                        /** KeyUsage baseKeyUsage. */
                        public baseKeyUsage?: (google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions|null);

                        /** KeyUsage extendedKeyUsage. */
                        public extendedKeyUsage?: (google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions|null);

                        /** KeyUsage unknownExtendedKeyUsages. */
                        public unknownExtendedKeyUsages: google.cloud.security.privateca.v1beta1.IObjectId[];

                        /**
                         * Creates a new KeyUsage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KeyUsage instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IKeyUsage): google.cloud.security.privateca.v1beta1.KeyUsage;

                        /**
                         * Encodes the specified KeyUsage message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.verify|verify} messages.
                         * @param message KeyUsage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IKeyUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KeyUsage message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.verify|verify} messages.
                         * @param message KeyUsage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IKeyUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KeyUsage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KeyUsage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.KeyUsage;

                        /**
                         * Decodes a KeyUsage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KeyUsage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.KeyUsage;

                        /**
                         * Verifies a KeyUsage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KeyUsage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KeyUsage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.KeyUsage;

                        /**
                         * Creates a plain object from a KeyUsage message. Also converts values to other types if specified.
                         * @param message KeyUsage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.KeyUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KeyUsage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KeyUsage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace KeyUsage {

                        /** Properties of a KeyUsageOptions. */
                        interface IKeyUsageOptions {

                            /** KeyUsageOptions digitalSignature */
                            digitalSignature?: (boolean|null);

                            /** KeyUsageOptions contentCommitment */
                            contentCommitment?: (boolean|null);

                            /** KeyUsageOptions keyEncipherment */
                            keyEncipherment?: (boolean|null);

                            /** KeyUsageOptions dataEncipherment */
                            dataEncipherment?: (boolean|null);

                            /** KeyUsageOptions keyAgreement */
                            keyAgreement?: (boolean|null);

                            /** KeyUsageOptions certSign */
                            certSign?: (boolean|null);

                            /** KeyUsageOptions crlSign */
                            crlSign?: (boolean|null);

                            /** KeyUsageOptions encipherOnly */
                            encipherOnly?: (boolean|null);

                            /** KeyUsageOptions decipherOnly */
                            decipherOnly?: (boolean|null);
                        }

                        /** Represents a KeyUsageOptions. */
                        class KeyUsageOptions implements IKeyUsageOptions {

                            /**
                             * Constructs a new KeyUsageOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions);

                            /** KeyUsageOptions digitalSignature. */
                            public digitalSignature: boolean;

                            /** KeyUsageOptions contentCommitment. */
                            public contentCommitment: boolean;

                            /** KeyUsageOptions keyEncipherment. */
                            public keyEncipherment: boolean;

                            /** KeyUsageOptions dataEncipherment. */
                            public dataEncipherment: boolean;

                            /** KeyUsageOptions keyAgreement. */
                            public keyAgreement: boolean;

                            /** KeyUsageOptions certSign. */
                            public certSign: boolean;

                            /** KeyUsageOptions crlSign. */
                            public crlSign: boolean;

                            /** KeyUsageOptions encipherOnly. */
                            public encipherOnly: boolean;

                            /** KeyUsageOptions decipherOnly. */
                            public decipherOnly: boolean;

                            /**
                             * Creates a new KeyUsageOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns KeyUsageOptions instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions): google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions;

                            /**
                             * Encodes the specified KeyUsageOptions message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions.verify|verify} messages.
                             * @param message KeyUsageOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified KeyUsageOptions message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions.verify|verify} messages.
                             * @param message KeyUsageOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.KeyUsage.IKeyUsageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a KeyUsageOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns KeyUsageOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions;

                            /**
                             * Decodes a KeyUsageOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns KeyUsageOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions;

                            /**
                             * Verifies a KeyUsageOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a KeyUsageOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns KeyUsageOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions;

                            /**
                             * Creates a plain object from a KeyUsageOptions message. Also converts values to other types if specified.
                             * @param message KeyUsageOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this KeyUsageOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for KeyUsageOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ExtendedKeyUsageOptions. */
                        interface IExtendedKeyUsageOptions {

                            /** ExtendedKeyUsageOptions serverAuth */
                            serverAuth?: (boolean|null);

                            /** ExtendedKeyUsageOptions clientAuth */
                            clientAuth?: (boolean|null);

                            /** ExtendedKeyUsageOptions codeSigning */
                            codeSigning?: (boolean|null);

                            /** ExtendedKeyUsageOptions emailProtection */
                            emailProtection?: (boolean|null);

                            /** ExtendedKeyUsageOptions timeStamping */
                            timeStamping?: (boolean|null);

                            /** ExtendedKeyUsageOptions ocspSigning */
                            ocspSigning?: (boolean|null);
                        }

                        /** Represents an ExtendedKeyUsageOptions. */
                        class ExtendedKeyUsageOptions implements IExtendedKeyUsageOptions {

                            /**
                             * Constructs a new ExtendedKeyUsageOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions);

                            /** ExtendedKeyUsageOptions serverAuth. */
                            public serverAuth: boolean;

                            /** ExtendedKeyUsageOptions clientAuth. */
                            public clientAuth: boolean;

                            /** ExtendedKeyUsageOptions codeSigning. */
                            public codeSigning: boolean;

                            /** ExtendedKeyUsageOptions emailProtection. */
                            public emailProtection: boolean;

                            /** ExtendedKeyUsageOptions timeStamping. */
                            public timeStamping: boolean;

                            /** ExtendedKeyUsageOptions ocspSigning. */
                            public ocspSigning: boolean;

                            /**
                             * Creates a new ExtendedKeyUsageOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ExtendedKeyUsageOptions instance
                             */
                            public static create(properties?: google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions): google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions;

                            /**
                             * Encodes the specified ExtendedKeyUsageOptions message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions.verify|verify} messages.
                             * @param message ExtendedKeyUsageOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ExtendedKeyUsageOptions message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions.verify|verify} messages.
                             * @param message ExtendedKeyUsageOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.KeyUsage.IExtendedKeyUsageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ExtendedKeyUsageOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ExtendedKeyUsageOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions;

                            /**
                             * Decodes an ExtendedKeyUsageOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ExtendedKeyUsageOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions;

                            /**
                             * Verifies an ExtendedKeyUsageOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ExtendedKeyUsageOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ExtendedKeyUsageOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions;

                            /**
                             * Creates a plain object from an ExtendedKeyUsageOptions message. Also converts values to other types if specified.
                             * @param message ExtendedKeyUsageOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ExtendedKeyUsageOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ExtendedKeyUsageOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Subject. */
                    interface ISubject {

                        /** Subject countryCode */
                        countryCode?: (string|null);

                        /** Subject organization */
                        organization?: (string|null);

                        /** Subject organizationalUnit */
                        organizationalUnit?: (string|null);

                        /** Subject locality */
                        locality?: (string|null);

                        /** Subject province */
                        province?: (string|null);

                        /** Subject streetAddress */
                        streetAddress?: (string|null);

                        /** Subject postalCode */
                        postalCode?: (string|null);
                    }

                    /** Represents a Subject. */
                    class Subject implements ISubject {

                        /**
                         * Constructs a new Subject.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ISubject);

                        /** Subject countryCode. */
                        public countryCode: string;

                        /** Subject organization. */
                        public organization: string;

                        /** Subject organizationalUnit. */
                        public organizationalUnit: string;

                        /** Subject locality. */
                        public locality: string;

                        /** Subject province. */
                        public province: string;

                        /** Subject streetAddress. */
                        public streetAddress: string;

                        /** Subject postalCode. */
                        public postalCode: string;

                        /**
                         * Creates a new Subject instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Subject instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ISubject): google.cloud.security.privateca.v1beta1.Subject;

                        /**
                         * Encodes the specified Subject message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Subject.verify|verify} messages.
                         * @param message Subject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ISubject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Subject message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.Subject.verify|verify} messages.
                         * @param message Subject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ISubject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Subject message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Subject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.Subject;

                        /**
                         * Decodes a Subject message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Subject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.Subject;

                        /**
                         * Verifies a Subject message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Subject message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Subject
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.Subject;

                        /**
                         * Creates a plain object from a Subject message. Also converts values to other types if specified.
                         * @param message Subject
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.Subject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Subject to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Subject
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubjectAltNames. */
                    interface ISubjectAltNames {

                        /** SubjectAltNames dnsNames */
                        dnsNames?: (string[]|null);

                        /** SubjectAltNames uris */
                        uris?: (string[]|null);

                        /** SubjectAltNames emailAddresses */
                        emailAddresses?: (string[]|null);

                        /** SubjectAltNames ipAddresses */
                        ipAddresses?: (string[]|null);

                        /** SubjectAltNames customSans */
                        customSans?: (google.cloud.security.privateca.v1beta1.IX509Extension[]|null);
                    }

                    /** Represents a SubjectAltNames. */
                    class SubjectAltNames implements ISubjectAltNames {

                        /**
                         * Constructs a new SubjectAltNames.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ISubjectAltNames);

                        /** SubjectAltNames dnsNames. */
                        public dnsNames: string[];

                        /** SubjectAltNames uris. */
                        public uris: string[];

                        /** SubjectAltNames emailAddresses. */
                        public emailAddresses: string[];

                        /** SubjectAltNames ipAddresses. */
                        public ipAddresses: string[];

                        /** SubjectAltNames customSans. */
                        public customSans: google.cloud.security.privateca.v1beta1.IX509Extension[];

                        /**
                         * Creates a new SubjectAltNames instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubjectAltNames instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ISubjectAltNames): google.cloud.security.privateca.v1beta1.SubjectAltNames;

                        /**
                         * Encodes the specified SubjectAltNames message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubjectAltNames.verify|verify} messages.
                         * @param message SubjectAltNames message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ISubjectAltNames, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubjectAltNames message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.SubjectAltNames.verify|verify} messages.
                         * @param message SubjectAltNames message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ISubjectAltNames, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubjectAltNames message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubjectAltNames
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.SubjectAltNames;

                        /**
                         * Decodes a SubjectAltNames message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubjectAltNames
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.SubjectAltNames;

                        /**
                         * Verifies a SubjectAltNames message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubjectAltNames message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubjectAltNames
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.SubjectAltNames;

                        /**
                         * Creates a plain object from a SubjectAltNames message. Also converts values to other types if specified.
                         * @param message SubjectAltNames
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.SubjectAltNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubjectAltNames to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubjectAltNames
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RevocationReason enum. */
                    enum RevocationReason {
                        REVOCATION_REASON_UNSPECIFIED = 0,
                        KEY_COMPROMISE = 1,
                        CERTIFICATE_AUTHORITY_COMPROMISE = 2,
                        AFFILIATION_CHANGED = 3,
                        SUPERSEDED = 4,
                        CESSATION_OF_OPERATION = 5,
                        CERTIFICATE_HOLD = 6,
                        PRIVILEGE_WITHDRAWN = 7,
                        ATTRIBUTE_AUTHORITY_COMPROMISE = 8
                    }

                    /** Represents a CertificateAuthorityService */
                    class CertificateAuthorityService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new CertificateAuthorityService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new CertificateAuthorityService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CertificateAuthorityService;

                        /**
                         * Calls CreateCertificate.
                         * @param request CreateCertificateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Certificate
                         */
                        public createCertificate(request: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificateCallback): void;

                        /**
                         * Calls CreateCertificate.
                         * @param request CreateCertificateRequest message or plain object
                         * @returns Promise
                         */
                        public createCertificate(request: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest): Promise<google.cloud.security.privateca.v1beta1.Certificate>;

                        /**
                         * Calls GetCertificate.
                         * @param request GetCertificateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Certificate
                         */
                        public getCertificate(request: google.cloud.security.privateca.v1beta1.IGetCertificateRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateCallback): void;

                        /**
                         * Calls GetCertificate.
                         * @param request GetCertificateRequest message or plain object
                         * @returns Promise
                         */
                        public getCertificate(request: google.cloud.security.privateca.v1beta1.IGetCertificateRequest): Promise<google.cloud.security.privateca.v1beta1.Certificate>;

                        /**
                         * Calls ListCertificates.
                         * @param request ListCertificatesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCertificatesResponse
                         */
                        public listCertificates(request: google.cloud.security.privateca.v1beta1.IListCertificatesRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificatesCallback): void;

                        /**
                         * Calls ListCertificates.
                         * @param request ListCertificatesRequest message or plain object
                         * @returns Promise
                         */
                        public listCertificates(request: google.cloud.security.privateca.v1beta1.IListCertificatesRequest): Promise<google.cloud.security.privateca.v1beta1.ListCertificatesResponse>;

                        /**
                         * Calls RevokeCertificate.
                         * @param request RevokeCertificateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Certificate
                         */
                        public revokeCertificate(request: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RevokeCertificateCallback): void;

                        /**
                         * Calls RevokeCertificate.
                         * @param request RevokeCertificateRequest message or plain object
                         * @returns Promise
                         */
                        public revokeCertificate(request: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest): Promise<google.cloud.security.privateca.v1beta1.Certificate>;

                        /**
                         * Calls UpdateCertificate.
                         * @param request UpdateCertificateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Certificate
                         */
                        public updateCertificate(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateCallback): void;

                        /**
                         * Calls UpdateCertificate.
                         * @param request UpdateCertificateRequest message or plain object
                         * @returns Promise
                         */
                        public updateCertificate(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest): Promise<google.cloud.security.privateca.v1beta1.Certificate>;

                        /**
                         * Calls ActivateCertificateAuthority.
                         * @param request ActivateCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public activateCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ActivateCertificateAuthorityCallback): void;

                        /**
                         * Calls ActivateCertificateAuthority.
                         * @param request ActivateCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public activateCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls CreateCertificateAuthority.
                         * @param request CreateCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createCertificateAuthority(request: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificateAuthorityCallback): void;

                        /**
                         * Calls CreateCertificateAuthority.
                         * @param request CreateCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public createCertificateAuthority(request: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls DisableCertificateAuthority.
                         * @param request DisableCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public disableCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.DisableCertificateAuthorityCallback): void;

                        /**
                         * Calls DisableCertificateAuthority.
                         * @param request DisableCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public disableCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls EnableCertificateAuthority.
                         * @param request EnableCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public enableCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.EnableCertificateAuthorityCallback): void;

                        /**
                         * Calls EnableCertificateAuthority.
                         * @param request EnableCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public enableCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls FetchCertificateAuthorityCsr.
                         * @param request FetchCertificateAuthorityCsrRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FetchCertificateAuthorityCsrResponse
                         */
                        public fetchCertificateAuthorityCsr(request: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.FetchCertificateAuthorityCsrCallback): void;

                        /**
                         * Calls FetchCertificateAuthorityCsr.
                         * @param request FetchCertificateAuthorityCsrRequest message or plain object
                         * @returns Promise
                         */
                        public fetchCertificateAuthorityCsr(request: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest): Promise<google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse>;

                        /**
                         * Calls GetCertificateAuthority.
                         * @param request GetCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CertificateAuthority
                         */
                        public getCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateAuthorityCallback): void;

                        /**
                         * Calls GetCertificateAuthority.
                         * @param request GetCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public getCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest): Promise<google.cloud.security.privateca.v1beta1.CertificateAuthority>;

                        /**
                         * Calls ListCertificateAuthorities.
                         * @param request ListCertificateAuthoritiesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCertificateAuthoritiesResponse
                         */
                        public listCertificateAuthorities(request: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateAuthoritiesCallback): void;

                        /**
                         * Calls ListCertificateAuthorities.
                         * @param request ListCertificateAuthoritiesRequest message or plain object
                         * @returns Promise
                         */
                        public listCertificateAuthorities(request: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest): Promise<google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse>;

                        /**
                         * Calls RestoreCertificateAuthority.
                         * @param request RestoreCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public restoreCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RestoreCertificateAuthorityCallback): void;

                        /**
                         * Calls RestoreCertificateAuthority.
                         * @param request RestoreCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public restoreCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls ScheduleDeleteCertificateAuthority.
                         * @param request ScheduleDeleteCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public scheduleDeleteCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ScheduleDeleteCertificateAuthorityCallback): void;

                        /**
                         * Calls ScheduleDeleteCertificateAuthority.
                         * @param request ScheduleDeleteCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public scheduleDeleteCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls UpdateCertificateAuthority.
                         * @param request UpdateCertificateAuthorityRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateAuthorityCallback): void;

                        /**
                         * Calls UpdateCertificateAuthority.
                         * @param request UpdateCertificateAuthorityRequest message or plain object
                         * @returns Promise
                         */
                        public updateCertificateAuthority(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls GetCertificateRevocationList.
                         * @param request GetCertificateRevocationListRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CertificateRevocationList
                         */
                        public getCertificateRevocationList(request: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateRevocationListCallback): void;

                        /**
                         * Calls GetCertificateRevocationList.
                         * @param request GetCertificateRevocationListRequest message or plain object
                         * @returns Promise
                         */
                        public getCertificateRevocationList(request: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest): Promise<google.cloud.security.privateca.v1beta1.CertificateRevocationList>;

                        /**
                         * Calls ListCertificateRevocationLists.
                         * @param request ListCertificateRevocationListsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCertificateRevocationListsResponse
                         */
                        public listCertificateRevocationLists(request: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateRevocationListsCallback): void;

                        /**
                         * Calls ListCertificateRevocationLists.
                         * @param request ListCertificateRevocationListsRequest message or plain object
                         * @returns Promise
                         */
                        public listCertificateRevocationLists(request: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest): Promise<google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse>;

                        /**
                         * Calls UpdateCertificateRevocationList.
                         * @param request UpdateCertificateRevocationListRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateCertificateRevocationList(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateRevocationListCallback): void;

                        /**
                         * Calls UpdateCertificateRevocationList.
                         * @param request UpdateCertificateRevocationListRequest message or plain object
                         * @returns Promise
                         */
                        public updateCertificateRevocationList(request: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls GetReusableConfig.
                         * @param request GetReusableConfigRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReusableConfig
                         */
                        public getReusableConfig(request: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetReusableConfigCallback): void;

                        /**
                         * Calls GetReusableConfig.
                         * @param request GetReusableConfigRequest message or plain object
                         * @returns Promise
                         */
                        public getReusableConfig(request: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest): Promise<google.cloud.security.privateca.v1beta1.ReusableConfig>;

                        /**
                         * Calls ListReusableConfigs.
                         * @param request ListReusableConfigsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListReusableConfigsResponse
                         */
                        public listReusableConfigs(request: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest, callback: google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListReusableConfigsCallback): void;

                        /**
                         * Calls ListReusableConfigs.
                         * @param request ListReusableConfigsRequest message or plain object
                         * @returns Promise
                         */
                        public listReusableConfigs(request: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest): Promise<google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse>;
                    }

                    namespace CertificateAuthorityService {

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|createCertificate}.
                         * @param error Error, if any
                         * @param [response] Certificate
                         */
                        type CreateCertificateCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.Certificate) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|getCertificate}.
                         * @param error Error, if any
                         * @param [response] Certificate
                         */
                        type GetCertificateCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.Certificate) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|listCertificates}.
                         * @param error Error, if any
                         * @param [response] ListCertificatesResponse
                         */
                        type ListCertificatesCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.ListCertificatesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|revokeCertificate}.
                         * @param error Error, if any
                         * @param [response] Certificate
                         */
                        type RevokeCertificateCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.Certificate) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|updateCertificate}.
                         * @param error Error, if any
                         * @param [response] Certificate
                         */
                        type UpdateCertificateCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.Certificate) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|activateCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type ActivateCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|createCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|disableCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DisableCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|enableCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type EnableCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|fetchCertificateAuthorityCsr}.
                         * @param error Error, if any
                         * @param [response] FetchCertificateAuthorityCsrResponse
                         */
                        type FetchCertificateAuthorityCsrCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|getCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] CertificateAuthority
                         */
                        type GetCertificateAuthorityCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.CertificateAuthority) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|listCertificateAuthorities}.
                         * @param error Error, if any
                         * @param [response] ListCertificateAuthoritiesResponse
                         */
                        type ListCertificateAuthoritiesCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|restoreCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type RestoreCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|scheduleDeleteCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type ScheduleDeleteCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|updateCertificateAuthority}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateCertificateAuthorityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|getCertificateRevocationList}.
                         * @param error Error, if any
                         * @param [response] CertificateRevocationList
                         */
                        type GetCertificateRevocationListCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.CertificateRevocationList) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|listCertificateRevocationLists}.
                         * @param error Error, if any
                         * @param [response] ListCertificateRevocationListsResponse
                         */
                        type ListCertificateRevocationListsCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|updateCertificateRevocationList}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateCertificateRevocationListCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|getReusableConfig}.
                         * @param error Error, if any
                         * @param [response] ReusableConfig
                         */
                        type GetReusableConfigCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.ReusableConfig) => void;

                        /**
                         * Callback as used by {@link google.cloud.security.privateca.v1beta1.CertificateAuthorityService|listReusableConfigs}.
                         * @param error Error, if any
                         * @param [response] ListReusableConfigsResponse
                         */
                        type ListReusableConfigsCallback = (error: (Error|null), response?: google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse) => void;
                    }

                    /** Properties of a CreateCertificateRequest. */
                    interface ICreateCertificateRequest {

                        /** CreateCertificateRequest parent */
                        parent?: (string|null);

                        /** CreateCertificateRequest certificateId */
                        certificateId?: (string|null);

                        /** CreateCertificateRequest certificate */
                        certificate?: (google.cloud.security.privateca.v1beta1.ICertificate|null);

                        /** CreateCertificateRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateCertificateRequest. */
                    class CreateCertificateRequest implements ICreateCertificateRequest {

                        /**
                         * Constructs a new CreateCertificateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest);

                        /** CreateCertificateRequest parent. */
                        public parent: string;

                        /** CreateCertificateRequest certificateId. */
                        public certificateId: string;

                        /** CreateCertificateRequest certificate. */
                        public certificate?: (google.cloud.security.privateca.v1beta1.ICertificate|null);

                        /** CreateCertificateRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateCertificateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateCertificateRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest): google.cloud.security.privateca.v1beta1.CreateCertificateRequest;

                        /**
                         * Encodes the specified CreateCertificateRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CreateCertificateRequest.verify|verify} messages.
                         * @param message CreateCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CreateCertificateRequest.verify|verify} messages.
                         * @param message CreateCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICreateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateCertificateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CreateCertificateRequest;

                        /**
                         * Decodes a CreateCertificateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CreateCertificateRequest;

                        /**
                         * Verifies a CreateCertificateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateCertificateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateCertificateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CreateCertificateRequest;

                        /**
                         * Creates a plain object from a CreateCertificateRequest message. Also converts values to other types if specified.
                         * @param message CreateCertificateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CreateCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateCertificateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateCertificateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetCertificateRequest. */
                    interface IGetCertificateRequest {

                        /** GetCertificateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCertificateRequest. */
                    class GetCertificateRequest implements IGetCertificateRequest {

                        /**
                         * Constructs a new GetCertificateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateRequest);

                        /** GetCertificateRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCertificateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCertificateRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateRequest): google.cloud.security.privateca.v1beta1.GetCertificateRequest;

                        /**
                         * Encodes the specified GetCertificateRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateRequest.verify|verify} messages.
                         * @param message GetCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IGetCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateRequest.verify|verify} messages.
                         * @param message GetCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IGetCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCertificateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.GetCertificateRequest;

                        /**
                         * Decodes a GetCertificateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.GetCertificateRequest;

                        /**
                         * Verifies a GetCertificateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCertificateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCertificateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.GetCertificateRequest;

                        /**
                         * Creates a plain object from a GetCertificateRequest message. Also converts values to other types if specified.
                         * @param message GetCertificateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.GetCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCertificateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetCertificateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificatesRequest. */
                    interface IListCertificatesRequest {

                        /** ListCertificatesRequest parent */
                        parent?: (string|null);

                        /** ListCertificatesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCertificatesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListCertificatesRequest filter */
                        filter?: (string|null);

                        /** ListCertificatesRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListCertificatesRequest. */
                    class ListCertificatesRequest implements IListCertificatesRequest {

                        /**
                         * Constructs a new ListCertificatesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificatesRequest);

                        /** ListCertificatesRequest parent. */
                        public parent: string;

                        /** ListCertificatesRequest pageSize. */
                        public pageSize: number;

                        /** ListCertificatesRequest pageToken. */
                        public pageToken: string;

                        /** ListCertificatesRequest filter. */
                        public filter: string;

                        /** ListCertificatesRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListCertificatesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificatesRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificatesRequest): google.cloud.security.privateca.v1beta1.ListCertificatesRequest;

                        /**
                         * Encodes the specified ListCertificatesRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificatesRequest.verify|verify} messages.
                         * @param message ListCertificatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificatesRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificatesRequest.verify|verify} messages.
                         * @param message ListCertificatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificatesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificatesRequest;

                        /**
                         * Decodes a ListCertificatesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificatesRequest;

                        /**
                         * Verifies a ListCertificatesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificatesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificatesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificatesRequest;

                        /**
                         * Creates a plain object from a ListCertificatesRequest message. Also converts values to other types if specified.
                         * @param message ListCertificatesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificatesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificatesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificatesResponse. */
                    interface IListCertificatesResponse {

                        /** ListCertificatesResponse certificates */
                        certificates?: (google.cloud.security.privateca.v1beta1.ICertificate[]|null);

                        /** ListCertificatesResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListCertificatesResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListCertificatesResponse. */
                    class ListCertificatesResponse implements IListCertificatesResponse {

                        /**
                         * Constructs a new ListCertificatesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificatesResponse);

                        /** ListCertificatesResponse certificates. */
                        public certificates: google.cloud.security.privateca.v1beta1.ICertificate[];

                        /** ListCertificatesResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListCertificatesResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListCertificatesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificatesResponse instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificatesResponse): google.cloud.security.privateca.v1beta1.ListCertificatesResponse;

                        /**
                         * Encodes the specified ListCertificatesResponse message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificatesResponse.verify|verify} messages.
                         * @param message ListCertificatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificatesResponse message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificatesResponse.verify|verify} messages.
                         * @param message ListCertificatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificatesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificatesResponse;

                        /**
                         * Decodes a ListCertificatesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificatesResponse;

                        /**
                         * Verifies a ListCertificatesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificatesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificatesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificatesResponse;

                        /**
                         * Creates a plain object from a ListCertificatesResponse message. Also converts values to other types if specified.
                         * @param message ListCertificatesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificatesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificatesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RevokeCertificateRequest. */
                    interface IRevokeCertificateRequest {

                        /** RevokeCertificateRequest name */
                        name?: (string|null);

                        /** RevokeCertificateRequest reason */
                        reason?: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason|null);

                        /** RevokeCertificateRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a RevokeCertificateRequest. */
                    class RevokeCertificateRequest implements IRevokeCertificateRequest {

                        /**
                         * Constructs a new RevokeCertificateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest);

                        /** RevokeCertificateRequest name. */
                        public name: string;

                        /** RevokeCertificateRequest reason. */
                        public reason: (google.cloud.security.privateca.v1beta1.RevocationReason|keyof typeof google.cloud.security.privateca.v1beta1.RevocationReason);

                        /** RevokeCertificateRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new RevokeCertificateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RevokeCertificateRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest): google.cloud.security.privateca.v1beta1.RevokeCertificateRequest;

                        /**
                         * Encodes the specified RevokeCertificateRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.RevokeCertificateRequest.verify|verify} messages.
                         * @param message RevokeCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RevokeCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.RevokeCertificateRequest.verify|verify} messages.
                         * @param message RevokeCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IRevokeCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RevokeCertificateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RevokeCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.RevokeCertificateRequest;

                        /**
                         * Decodes a RevokeCertificateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RevokeCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.RevokeCertificateRequest;

                        /**
                         * Verifies a RevokeCertificateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RevokeCertificateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RevokeCertificateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.RevokeCertificateRequest;

                        /**
                         * Creates a plain object from a RevokeCertificateRequest message. Also converts values to other types if specified.
                         * @param message RevokeCertificateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.RevokeCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RevokeCertificateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RevokeCertificateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateCertificateRequest. */
                    interface IUpdateCertificateRequest {

                        /** UpdateCertificateRequest certificate */
                        certificate?: (google.cloud.security.privateca.v1beta1.ICertificate|null);

                        /** UpdateCertificateRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdateCertificateRequest. */
                    class UpdateCertificateRequest implements IUpdateCertificateRequest {

                        /**
                         * Constructs a new UpdateCertificateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest);

                        /** UpdateCertificateRequest certificate. */
                        public certificate?: (google.cloud.security.privateca.v1beta1.ICertificate|null);

                        /** UpdateCertificateRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdateCertificateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCertificateRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest): google.cloud.security.privateca.v1beta1.UpdateCertificateRequest;

                        /**
                         * Encodes the specified UpdateCertificateRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateRequest.verify|verify} messages.
                         * @param message UpdateCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateRequest.verify|verify} messages.
                         * @param message UpdateCertificateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCertificateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.UpdateCertificateRequest;

                        /**
                         * Decodes an UpdateCertificateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCertificateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.UpdateCertificateRequest;

                        /**
                         * Verifies an UpdateCertificateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCertificateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCertificateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.UpdateCertificateRequest;

                        /**
                         * Creates a plain object from an UpdateCertificateRequest message. Also converts values to other types if specified.
                         * @param message UpdateCertificateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.UpdateCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCertificateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateCertificateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActivateCertificateAuthorityRequest. */
                    interface IActivateCertificateAuthorityRequest {

                        /** ActivateCertificateAuthorityRequest name */
                        name?: (string|null);

                        /** ActivateCertificateAuthorityRequest pemCaCertificate */
                        pemCaCertificate?: (string|null);

                        /** ActivateCertificateAuthorityRequest subordinateConfig */
                        subordinateConfig?: (google.cloud.security.privateca.v1beta1.ISubordinateConfig|null);

                        /** ActivateCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an ActivateCertificateAuthorityRequest. */
                    class ActivateCertificateAuthorityRequest implements IActivateCertificateAuthorityRequest {

                        /**
                         * Constructs a new ActivateCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest);

                        /** ActivateCertificateAuthorityRequest name. */
                        public name: string;

                        /** ActivateCertificateAuthorityRequest pemCaCertificate. */
                        public pemCaCertificate: string;

                        /** ActivateCertificateAuthorityRequest subordinateConfig. */
                        public subordinateConfig?: (google.cloud.security.privateca.v1beta1.ISubordinateConfig|null);

                        /** ActivateCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new ActivateCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActivateCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest;

                        /**
                         * Encodes the specified ActivateCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message ActivateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActivateCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message ActivateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IActivateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActivateCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActivateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest;

                        /**
                         * Decodes an ActivateCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActivateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest;

                        /**
                         * Verifies an ActivateCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActivateCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActivateCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from an ActivateCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message ActivateCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActivateCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActivateCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateCertificateAuthorityRequest. */
                    interface ICreateCertificateAuthorityRequest {

                        /** CreateCertificateAuthorityRequest parent */
                        parent?: (string|null);

                        /** CreateCertificateAuthorityRequest certificateAuthorityId */
                        certificateAuthorityId?: (string|null);

                        /** CreateCertificateAuthorityRequest certificateAuthority */
                        certificateAuthority?: (google.cloud.security.privateca.v1beta1.ICertificateAuthority|null);

                        /** CreateCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateCertificateAuthorityRequest. */
                    class CreateCertificateAuthorityRequest implements ICreateCertificateAuthorityRequest {

                        /**
                         * Constructs a new CreateCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest);

                        /** CreateCertificateAuthorityRequest parent. */
                        public parent: string;

                        /** CreateCertificateAuthorityRequest certificateAuthorityId. */
                        public certificateAuthorityId: string;

                        /** CreateCertificateAuthorityRequest certificateAuthority. */
                        public certificateAuthority?: (google.cloud.security.privateca.v1beta1.ICertificateAuthority|null);

                        /** CreateCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest;

                        /**
                         * Encodes the specified CreateCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message CreateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message CreateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.ICreateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest;

                        /**
                         * Decodes a CreateCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest;

                        /**
                         * Verifies a CreateCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from a CreateCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message CreateCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DisableCertificateAuthorityRequest. */
                    interface IDisableCertificateAuthorityRequest {

                        /** DisableCertificateAuthorityRequest name */
                        name?: (string|null);

                        /** DisableCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DisableCertificateAuthorityRequest. */
                    class DisableCertificateAuthorityRequest implements IDisableCertificateAuthorityRequest {

                        /**
                         * Constructs a new DisableCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest);

                        /** DisableCertificateAuthorityRequest name. */
                        public name: string;

                        /** DisableCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DisableCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DisableCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest;

                        /**
                         * Encodes the specified DisableCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest.verify|verify} messages.
                         * @param message DisableCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DisableCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest.verify|verify} messages.
                         * @param message DisableCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IDisableCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DisableCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DisableCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest;

                        /**
                         * Decodes a DisableCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DisableCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest;

                        /**
                         * Verifies a DisableCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DisableCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DisableCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from a DisableCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message DisableCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DisableCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DisableCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EnableCertificateAuthorityRequest. */
                    interface IEnableCertificateAuthorityRequest {

                        /** EnableCertificateAuthorityRequest name */
                        name?: (string|null);

                        /** EnableCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an EnableCertificateAuthorityRequest. */
                    class EnableCertificateAuthorityRequest implements IEnableCertificateAuthorityRequest {

                        /**
                         * Constructs a new EnableCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest);

                        /** EnableCertificateAuthorityRequest name. */
                        public name: string;

                        /** EnableCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new EnableCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EnableCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest;

                        /**
                         * Encodes the specified EnableCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest.verify|verify} messages.
                         * @param message EnableCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EnableCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest.verify|verify} messages.
                         * @param message EnableCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IEnableCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EnableCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EnableCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest;

                        /**
                         * Decodes an EnableCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EnableCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest;

                        /**
                         * Verifies an EnableCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EnableCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EnableCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from an EnableCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message EnableCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EnableCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EnableCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FetchCertificateAuthorityCsrRequest. */
                    interface IFetchCertificateAuthorityCsrRequest {

                        /** FetchCertificateAuthorityCsrRequest name */
                        name?: (string|null);
                    }

                    /** Represents a FetchCertificateAuthorityCsrRequest. */
                    class FetchCertificateAuthorityCsrRequest implements IFetchCertificateAuthorityCsrRequest {

                        /**
                         * Constructs a new FetchCertificateAuthorityCsrRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest);

                        /** FetchCertificateAuthorityCsrRequest name. */
                        public name: string;

                        /**
                         * Creates a new FetchCertificateAuthorityCsrRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchCertificateAuthorityCsrRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest;

                        /**
                         * Encodes the specified FetchCertificateAuthorityCsrRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest.verify|verify} messages.
                         * @param message FetchCertificateAuthorityCsrRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchCertificateAuthorityCsrRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest.verify|verify} messages.
                         * @param message FetchCertificateAuthorityCsrRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchCertificateAuthorityCsrRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchCertificateAuthorityCsrRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest;

                        /**
                         * Decodes a FetchCertificateAuthorityCsrRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchCertificateAuthorityCsrRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest;

                        /**
                         * Verifies a FetchCertificateAuthorityCsrRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchCertificateAuthorityCsrRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchCertificateAuthorityCsrRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest;

                        /**
                         * Creates a plain object from a FetchCertificateAuthorityCsrRequest message. Also converts values to other types if specified.
                         * @param message FetchCertificateAuthorityCsrRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchCertificateAuthorityCsrRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchCertificateAuthorityCsrRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FetchCertificateAuthorityCsrResponse. */
                    interface IFetchCertificateAuthorityCsrResponse {

                        /** FetchCertificateAuthorityCsrResponse pemCsr */
                        pemCsr?: (string|null);
                    }

                    /** Represents a FetchCertificateAuthorityCsrResponse. */
                    class FetchCertificateAuthorityCsrResponse implements IFetchCertificateAuthorityCsrResponse {

                        /**
                         * Constructs a new FetchCertificateAuthorityCsrResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrResponse);

                        /** FetchCertificateAuthorityCsrResponse pemCsr. */
                        public pemCsr: string;

                        /**
                         * Creates a new FetchCertificateAuthorityCsrResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FetchCertificateAuthorityCsrResponse instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrResponse): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse;

                        /**
                         * Encodes the specified FetchCertificateAuthorityCsrResponse message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse.verify|verify} messages.
                         * @param message FetchCertificateAuthorityCsrResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FetchCertificateAuthorityCsrResponse message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse.verify|verify} messages.
                         * @param message FetchCertificateAuthorityCsrResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IFetchCertificateAuthorityCsrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FetchCertificateAuthorityCsrResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FetchCertificateAuthorityCsrResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse;

                        /**
                         * Decodes a FetchCertificateAuthorityCsrResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FetchCertificateAuthorityCsrResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse;

                        /**
                         * Verifies a FetchCertificateAuthorityCsrResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FetchCertificateAuthorityCsrResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FetchCertificateAuthorityCsrResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse;

                        /**
                         * Creates a plain object from a FetchCertificateAuthorityCsrResponse message. Also converts values to other types if specified.
                         * @param message FetchCertificateAuthorityCsrResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FetchCertificateAuthorityCsrResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FetchCertificateAuthorityCsrResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetCertificateAuthorityRequest. */
                    interface IGetCertificateAuthorityRequest {

                        /** GetCertificateAuthorityRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCertificateAuthorityRequest. */
                    class GetCertificateAuthorityRequest implements IGetCertificateAuthorityRequest {

                        /**
                         * Constructs a new GetCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest);

                        /** GetCertificateAuthorityRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest;

                        /**
                         * Encodes the specified GetCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest.verify|verify} messages.
                         * @param message GetCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest.verify|verify} messages.
                         * @param message GetCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IGetCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest;

                        /**
                         * Decodes a GetCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest;

                        /**
                         * Verifies a GetCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from a GetCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message GetCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificateAuthoritiesRequest. */
                    interface IListCertificateAuthoritiesRequest {

                        /** ListCertificateAuthoritiesRequest parent */
                        parent?: (string|null);

                        /** ListCertificateAuthoritiesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCertificateAuthoritiesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListCertificateAuthoritiesRequest filter */
                        filter?: (string|null);

                        /** ListCertificateAuthoritiesRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListCertificateAuthoritiesRequest. */
                    class ListCertificateAuthoritiesRequest implements IListCertificateAuthoritiesRequest {

                        /**
                         * Constructs a new ListCertificateAuthoritiesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest);

                        /** ListCertificateAuthoritiesRequest parent. */
                        public parent: string;

                        /** ListCertificateAuthoritiesRequest pageSize. */
                        public pageSize: number;

                        /** ListCertificateAuthoritiesRequest pageToken. */
                        public pageToken: string;

                        /** ListCertificateAuthoritiesRequest filter. */
                        public filter: string;

                        /** ListCertificateAuthoritiesRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListCertificateAuthoritiesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificateAuthoritiesRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest;

                        /**
                         * Encodes the specified ListCertificateAuthoritiesRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest.verify|verify} messages.
                         * @param message ListCertificateAuthoritiesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificateAuthoritiesRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest.verify|verify} messages.
                         * @param message ListCertificateAuthoritiesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificateAuthoritiesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificateAuthoritiesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest;

                        /**
                         * Decodes a ListCertificateAuthoritiesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificateAuthoritiesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest;

                        /**
                         * Verifies a ListCertificateAuthoritiesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificateAuthoritiesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificateAuthoritiesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest;

                        /**
                         * Creates a plain object from a ListCertificateAuthoritiesRequest message. Also converts values to other types if specified.
                         * @param message ListCertificateAuthoritiesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificateAuthoritiesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificateAuthoritiesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificateAuthoritiesResponse. */
                    interface IListCertificateAuthoritiesResponse {

                        /** ListCertificateAuthoritiesResponse certificateAuthorities */
                        certificateAuthorities?: (google.cloud.security.privateca.v1beta1.ICertificateAuthority[]|null);

                        /** ListCertificateAuthoritiesResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListCertificateAuthoritiesResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListCertificateAuthoritiesResponse. */
                    class ListCertificateAuthoritiesResponse implements IListCertificateAuthoritiesResponse {

                        /**
                         * Constructs a new ListCertificateAuthoritiesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesResponse);

                        /** ListCertificateAuthoritiesResponse certificateAuthorities. */
                        public certificateAuthorities: google.cloud.security.privateca.v1beta1.ICertificateAuthority[];

                        /** ListCertificateAuthoritiesResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListCertificateAuthoritiesResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListCertificateAuthoritiesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificateAuthoritiesResponse instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesResponse): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse;

                        /**
                         * Encodes the specified ListCertificateAuthoritiesResponse message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse.verify|verify} messages.
                         * @param message ListCertificateAuthoritiesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificateAuthoritiesResponse message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse.verify|verify} messages.
                         * @param message ListCertificateAuthoritiesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificateAuthoritiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificateAuthoritiesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificateAuthoritiesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse;

                        /**
                         * Decodes a ListCertificateAuthoritiesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificateAuthoritiesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse;

                        /**
                         * Verifies a ListCertificateAuthoritiesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificateAuthoritiesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificateAuthoritiesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse;

                        /**
                         * Creates a plain object from a ListCertificateAuthoritiesResponse message. Also converts values to other types if specified.
                         * @param message ListCertificateAuthoritiesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificateAuthoritiesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificateAuthoritiesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RestoreCertificateAuthorityRequest. */
                    interface IRestoreCertificateAuthorityRequest {

                        /** RestoreCertificateAuthorityRequest name */
                        name?: (string|null);

                        /** RestoreCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a RestoreCertificateAuthorityRequest. */
                    class RestoreCertificateAuthorityRequest implements IRestoreCertificateAuthorityRequest {

                        /**
                         * Constructs a new RestoreCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest);

                        /** RestoreCertificateAuthorityRequest name. */
                        public name: string;

                        /** RestoreCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new RestoreCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest;

                        /**
                         * Encodes the specified RestoreCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest.verify|verify} messages.
                         * @param message RestoreCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest.verify|verify} messages.
                         * @param message RestoreCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IRestoreCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest;

                        /**
                         * Decodes a RestoreCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest;

                        /**
                         * Verifies a RestoreCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestoreCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestoreCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from a RestoreCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message RestoreCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestoreCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RestoreCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ScheduleDeleteCertificateAuthorityRequest. */
                    interface IScheduleDeleteCertificateAuthorityRequest {

                        /** ScheduleDeleteCertificateAuthorityRequest name */
                        name?: (string|null);

                        /** ScheduleDeleteCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a ScheduleDeleteCertificateAuthorityRequest. */
                    class ScheduleDeleteCertificateAuthorityRequest implements IScheduleDeleteCertificateAuthorityRequest {

                        /**
                         * Constructs a new ScheduleDeleteCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest);

                        /** ScheduleDeleteCertificateAuthorityRequest name. */
                        public name: string;

                        /** ScheduleDeleteCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new ScheduleDeleteCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScheduleDeleteCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest;

                        /**
                         * Encodes the specified ScheduleDeleteCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest.verify|verify} messages.
                         * @param message ScheduleDeleteCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScheduleDeleteCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest.verify|verify} messages.
                         * @param message ScheduleDeleteCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IScheduleDeleteCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScheduleDeleteCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScheduleDeleteCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest;

                        /**
                         * Decodes a ScheduleDeleteCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScheduleDeleteCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest;

                        /**
                         * Verifies a ScheduleDeleteCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScheduleDeleteCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScheduleDeleteCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from a ScheduleDeleteCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message ScheduleDeleteCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScheduleDeleteCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ScheduleDeleteCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateCertificateAuthorityRequest. */
                    interface IUpdateCertificateAuthorityRequest {

                        /** UpdateCertificateAuthorityRequest certificateAuthority */
                        certificateAuthority?: (google.cloud.security.privateca.v1beta1.ICertificateAuthority|null);

                        /** UpdateCertificateAuthorityRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateAuthorityRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdateCertificateAuthorityRequest. */
                    class UpdateCertificateAuthorityRequest implements IUpdateCertificateAuthorityRequest {

                        /**
                         * Constructs a new UpdateCertificateAuthorityRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest);

                        /** UpdateCertificateAuthorityRequest certificateAuthority. */
                        public certificateAuthority?: (google.cloud.security.privateca.v1beta1.ICertificateAuthority|null);

                        /** UpdateCertificateAuthorityRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateAuthorityRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdateCertificateAuthorityRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCertificateAuthorityRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest): google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest;

                        /**
                         * Encodes the specified UpdateCertificateAuthorityRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message UpdateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCertificateAuthorityRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest.verify|verify} messages.
                         * @param message UpdateCertificateAuthorityRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateAuthorityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCertificateAuthorityRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest;

                        /**
                         * Decodes an UpdateCertificateAuthorityRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCertificateAuthorityRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest;

                        /**
                         * Verifies an UpdateCertificateAuthorityRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCertificateAuthorityRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCertificateAuthorityRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest;

                        /**
                         * Creates a plain object from an UpdateCertificateAuthorityRequest message. Also converts values to other types if specified.
                         * @param message UpdateCertificateAuthorityRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCertificateAuthorityRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateCertificateAuthorityRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetCertificateRevocationListRequest. */
                    interface IGetCertificateRevocationListRequest {

                        /** GetCertificateRevocationListRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCertificateRevocationListRequest. */
                    class GetCertificateRevocationListRequest implements IGetCertificateRevocationListRequest {

                        /**
                         * Constructs a new GetCertificateRevocationListRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest);

                        /** GetCertificateRevocationListRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCertificateRevocationListRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCertificateRevocationListRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest): google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest;

                        /**
                         * Encodes the specified GetCertificateRevocationListRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest.verify|verify} messages.
                         * @param message GetCertificateRevocationListRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCertificateRevocationListRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest.verify|verify} messages.
                         * @param message GetCertificateRevocationListRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IGetCertificateRevocationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCertificateRevocationListRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCertificateRevocationListRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest;

                        /**
                         * Decodes a GetCertificateRevocationListRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCertificateRevocationListRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest;

                        /**
                         * Verifies a GetCertificateRevocationListRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCertificateRevocationListRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCertificateRevocationListRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest;

                        /**
                         * Creates a plain object from a GetCertificateRevocationListRequest message. Also converts values to other types if specified.
                         * @param message GetCertificateRevocationListRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCertificateRevocationListRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetCertificateRevocationListRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificateRevocationListsRequest. */
                    interface IListCertificateRevocationListsRequest {

                        /** ListCertificateRevocationListsRequest parent */
                        parent?: (string|null);

                        /** ListCertificateRevocationListsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCertificateRevocationListsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListCertificateRevocationListsRequest filter */
                        filter?: (string|null);

                        /** ListCertificateRevocationListsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListCertificateRevocationListsRequest. */
                    class ListCertificateRevocationListsRequest implements IListCertificateRevocationListsRequest {

                        /**
                         * Constructs a new ListCertificateRevocationListsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest);

                        /** ListCertificateRevocationListsRequest parent. */
                        public parent: string;

                        /** ListCertificateRevocationListsRequest pageSize. */
                        public pageSize: number;

                        /** ListCertificateRevocationListsRequest pageToken. */
                        public pageToken: string;

                        /** ListCertificateRevocationListsRequest filter. */
                        public filter: string;

                        /** ListCertificateRevocationListsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListCertificateRevocationListsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificateRevocationListsRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest;

                        /**
                         * Encodes the specified ListCertificateRevocationListsRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest.verify|verify} messages.
                         * @param message ListCertificateRevocationListsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificateRevocationListsRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest.verify|verify} messages.
                         * @param message ListCertificateRevocationListsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificateRevocationListsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificateRevocationListsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest;

                        /**
                         * Decodes a ListCertificateRevocationListsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificateRevocationListsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest;

                        /**
                         * Verifies a ListCertificateRevocationListsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificateRevocationListsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificateRevocationListsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest;

                        /**
                         * Creates a plain object from a ListCertificateRevocationListsRequest message. Also converts values to other types if specified.
                         * @param message ListCertificateRevocationListsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificateRevocationListsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificateRevocationListsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListCertificateRevocationListsResponse. */
                    interface IListCertificateRevocationListsResponse {

                        /** ListCertificateRevocationListsResponse certificateRevocationLists */
                        certificateRevocationLists?: (google.cloud.security.privateca.v1beta1.ICertificateRevocationList[]|null);

                        /** ListCertificateRevocationListsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListCertificateRevocationListsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListCertificateRevocationListsResponse. */
                    class ListCertificateRevocationListsResponse implements IListCertificateRevocationListsResponse {

                        /**
                         * Constructs a new ListCertificateRevocationListsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsResponse);

                        /** ListCertificateRevocationListsResponse certificateRevocationLists. */
                        public certificateRevocationLists: google.cloud.security.privateca.v1beta1.ICertificateRevocationList[];

                        /** ListCertificateRevocationListsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListCertificateRevocationListsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListCertificateRevocationListsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCertificateRevocationListsResponse instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsResponse): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse;

                        /**
                         * Encodes the specified ListCertificateRevocationListsResponse message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse.verify|verify} messages.
                         * @param message ListCertificateRevocationListsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCertificateRevocationListsResponse message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse.verify|verify} messages.
                         * @param message ListCertificateRevocationListsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListCertificateRevocationListsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCertificateRevocationListsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCertificateRevocationListsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse;

                        /**
                         * Decodes a ListCertificateRevocationListsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCertificateRevocationListsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse;

                        /**
                         * Verifies a ListCertificateRevocationListsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCertificateRevocationListsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCertificateRevocationListsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse;

                        /**
                         * Creates a plain object from a ListCertificateRevocationListsResponse message. Also converts values to other types if specified.
                         * @param message ListCertificateRevocationListsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCertificateRevocationListsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListCertificateRevocationListsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateCertificateRevocationListRequest. */
                    interface IUpdateCertificateRevocationListRequest {

                        /** UpdateCertificateRevocationListRequest certificateRevocationList */
                        certificateRevocationList?: (google.cloud.security.privateca.v1beta1.ICertificateRevocationList|null);

                        /** UpdateCertificateRevocationListRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateRevocationListRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdateCertificateRevocationListRequest. */
                    class UpdateCertificateRevocationListRequest implements IUpdateCertificateRevocationListRequest {

                        /**
                         * Constructs a new UpdateCertificateRevocationListRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest);

                        /** UpdateCertificateRevocationListRequest certificateRevocationList. */
                        public certificateRevocationList?: (google.cloud.security.privateca.v1beta1.ICertificateRevocationList|null);

                        /** UpdateCertificateRevocationListRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateCertificateRevocationListRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdateCertificateRevocationListRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCertificateRevocationListRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest): google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest;

                        /**
                         * Encodes the specified UpdateCertificateRevocationListRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest.verify|verify} messages.
                         * @param message UpdateCertificateRevocationListRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCertificateRevocationListRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest.verify|verify} messages.
                         * @param message UpdateCertificateRevocationListRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IUpdateCertificateRevocationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCertificateRevocationListRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCertificateRevocationListRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest;

                        /**
                         * Decodes an UpdateCertificateRevocationListRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCertificateRevocationListRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest;

                        /**
                         * Verifies an UpdateCertificateRevocationListRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCertificateRevocationListRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCertificateRevocationListRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest;

                        /**
                         * Creates a plain object from an UpdateCertificateRevocationListRequest message. Also converts values to other types if specified.
                         * @param message UpdateCertificateRevocationListRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCertificateRevocationListRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateCertificateRevocationListRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetReusableConfigRequest. */
                    interface IGetReusableConfigRequest {

                        /** GetReusableConfigRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetReusableConfigRequest. */
                    class GetReusableConfigRequest implements IGetReusableConfigRequest {

                        /**
                         * Constructs a new GetReusableConfigRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest);

                        /** GetReusableConfigRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetReusableConfigRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetReusableConfigRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest): google.cloud.security.privateca.v1beta1.GetReusableConfigRequest;

                        /**
                         * Encodes the specified GetReusableConfigRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetReusableConfigRequest.verify|verify} messages.
                         * @param message GetReusableConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetReusableConfigRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.GetReusableConfigRequest.verify|verify} messages.
                         * @param message GetReusableConfigRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IGetReusableConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetReusableConfigRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetReusableConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.GetReusableConfigRequest;

                        /**
                         * Decodes a GetReusableConfigRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetReusableConfigRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.GetReusableConfigRequest;

                        /**
                         * Verifies a GetReusableConfigRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetReusableConfigRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetReusableConfigRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.GetReusableConfigRequest;

                        /**
                         * Creates a plain object from a GetReusableConfigRequest message. Also converts values to other types if specified.
                         * @param message GetReusableConfigRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.GetReusableConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetReusableConfigRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetReusableConfigRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReusableConfigsRequest. */
                    interface IListReusableConfigsRequest {

                        /** ListReusableConfigsRequest parent */
                        parent?: (string|null);

                        /** ListReusableConfigsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListReusableConfigsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListReusableConfigsRequest filter */
                        filter?: (string|null);

                        /** ListReusableConfigsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListReusableConfigsRequest. */
                    class ListReusableConfigsRequest implements IListReusableConfigsRequest {

                        /**
                         * Constructs a new ListReusableConfigsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest);

                        /** ListReusableConfigsRequest parent. */
                        public parent: string;

                        /** ListReusableConfigsRequest pageSize. */
                        public pageSize: number;

                        /** ListReusableConfigsRequest pageToken. */
                        public pageToken: string;

                        /** ListReusableConfigsRequest filter. */
                        public filter: string;

                        /** ListReusableConfigsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListReusableConfigsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReusableConfigsRequest instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest): google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest;

                        /**
                         * Encodes the specified ListReusableConfigsRequest message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest.verify|verify} messages.
                         * @param message ListReusableConfigsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReusableConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest.verify|verify} messages.
                         * @param message ListReusableConfigsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListReusableConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReusableConfigsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReusableConfigsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest;

                        /**
                         * Decodes a ListReusableConfigsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReusableConfigsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest;

                        /**
                         * Verifies a ListReusableConfigsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReusableConfigsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReusableConfigsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest;

                        /**
                         * Creates a plain object from a ListReusableConfigsRequest message. Also converts values to other types if specified.
                         * @param message ListReusableConfigsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReusableConfigsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReusableConfigsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReusableConfigsResponse. */
                    interface IListReusableConfigsResponse {

                        /** ListReusableConfigsResponse reusableConfigs */
                        reusableConfigs?: (google.cloud.security.privateca.v1beta1.IReusableConfig[]|null);

                        /** ListReusableConfigsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListReusableConfigsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListReusableConfigsResponse. */
                    class ListReusableConfigsResponse implements IListReusableConfigsResponse {

                        /**
                         * Constructs a new ListReusableConfigsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IListReusableConfigsResponse);

                        /** ListReusableConfigsResponse reusableConfigs. */
                        public reusableConfigs: google.cloud.security.privateca.v1beta1.IReusableConfig[];

                        /** ListReusableConfigsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListReusableConfigsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListReusableConfigsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReusableConfigsResponse instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IListReusableConfigsResponse): google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse;

                        /**
                         * Encodes the specified ListReusableConfigsResponse message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse.verify|verify} messages.
                         * @param message ListReusableConfigsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IListReusableConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReusableConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse.verify|verify} messages.
                         * @param message ListReusableConfigsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IListReusableConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReusableConfigsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReusableConfigsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse;

                        /**
                         * Decodes a ListReusableConfigsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReusableConfigsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse;

                        /**
                         * Verifies a ListReusableConfigsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReusableConfigsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReusableConfigsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse;

                        /**
                         * Creates a plain object from a ListReusableConfigsResponse message. Also converts values to other types if specified.
                         * @param message ListReusableConfigsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReusableConfigsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReusableConfigsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OperationMetadata. */
                    interface IOperationMetadata {

                        /** OperationMetadata createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata target */
                        target?: (string|null);

                        /** OperationMetadata verb */
                        verb?: (string|null);

                        /** OperationMetadata statusMessage */
                        statusMessage?: (string|null);

                        /** OperationMetadata requestedCancellation */
                        requestedCancellation?: (boolean|null);

                        /** OperationMetadata apiVersion */
                        apiVersion?: (string|null);
                    }

                    /** Represents an OperationMetadata. */
                    class OperationMetadata implements IOperationMetadata {

                        /**
                         * Constructs a new OperationMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.security.privateca.v1beta1.IOperationMetadata);

                        /** OperationMetadata createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata target. */
                        public target: string;

                        /** OperationMetadata verb. */
                        public verb: string;

                        /** OperationMetadata statusMessage. */
                        public statusMessage: string;

                        /** OperationMetadata requestedCancellation. */
                        public requestedCancellation: boolean;

                        /** OperationMetadata apiVersion. */
                        public apiVersion: string;

                        /**
                         * Creates a new OperationMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OperationMetadata instance
                         */
                        public static create(properties?: google.cloud.security.privateca.v1beta1.IOperationMetadata): google.cloud.security.privateca.v1beta1.OperationMetadata;

                        /**
                         * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.security.privateca.v1beta1.OperationMetadata.verify|verify} messages.
                         * @param message OperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.security.privateca.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.security.privateca.v1beta1.OperationMetadata.verify|verify} messages.
                         * @param message OperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.security.privateca.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.security.privateca.v1beta1.OperationMetadata;

                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.security.privateca.v1beta1.OperationMetadata;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.security.privateca.v1beta1.OperationMetadata;

                        /**
                         * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                         * @param message OperationMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.security.privateca.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
