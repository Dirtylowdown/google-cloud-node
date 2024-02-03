// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');

/**
 * Client JSON configuration object, loaded from
 * `src/v1/language_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './language_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Provides text analysis operations such as sentiment analysis and entity
 *  recognition.
 * @class
 * @memberof v1
 */
export class LanguageServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  private _universeDomain: string;
  private _servicePath: string;
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  languageServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of LanguageServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new LanguageServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof LanguageServiceClient;
    if (opts?.universe_domain && opts?.universeDomain && opts?.universe_domain !== opts?.universeDomain) {
      throw new Error('Please set either universe_domain or universeDomain, but not both.');
    }
    this._universeDomain = opts?.universeDomain ?? opts?.universe_domain ?? 'googleapis.com';
    this._servicePath = 'language.' + this._universeDomain;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || this._servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== this._servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = this._servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === this._servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.language.v1.LanguageService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.languageServiceStub) {
      return this.languageServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.language.v1.LanguageService.
    this.languageServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.language.v1.LanguageService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.language.v1.LanguageService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const languageServiceStubMethods =
        ['analyzeSentiment', 'analyzeEntities', 'analyzeEntitySentiment', 'analyzeSyntax', 'classifyText', 'moderateText', 'annotateText'];
    for (const methodName of languageServiceStubMethods) {
      const callPromise = this.languageServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.languageServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @deprecated
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    if (typeof process !== undefined && typeof process.emitWarning === 'function') {
      process.emitWarning('Static servicePath is deprecated, please use the instance method instead.', 'DeprecationWarning');
    }
    return 'language.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath,
   * exists for compatibility reasons.
   * @deprecated
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    if (typeof process !== undefined && typeof process.emitWarning === 'function') {
      process.emitWarning('Static apiEndpoint is deprecated, please use the instance method instead.', 'DeprecationWarning');
    }
    return 'language.googleapis.com';
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  get servicePath() {
    return this._servicePath;
  }

  /**
   * The DNS address for this API service - same as servicePath().
   * @returns {string} The DNS address for this service.
   */
  get apiEndpoint() {
    return this._servicePath;
  }

  get universeDomain() {
    return this._universeDomain;
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-language',
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Analyzes the sentiment of the provided text.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.EncodingType} request.encodingType
 *   The encoding type used by the API to calculate sentence offsets.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.AnalyzeSentimentResponse|AnalyzeSentimentResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.analyze_sentiment.js</caption>
 * region_tag:language_v1_generated_LanguageService_AnalyzeSentiment_async
 */
  analyzeSentiment(
      request?: protos.google.cloud.language.v1.IAnalyzeSentimentRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
        protos.google.cloud.language.v1.IAnalyzeSentimentRequest|undefined, {}|undefined
      ]>;
  analyzeSentiment(
      request: protos.google.cloud.language.v1.IAnalyzeSentimentRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeSentimentRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeSentiment(
      request: protos.google.cloud.language.v1.IAnalyzeSentimentRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeSentimentRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeSentiment(
      request?: protos.google.cloud.language.v1.IAnalyzeSentimentRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeSentimentRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeSentimentRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeSentimentResponse,
        protos.google.cloud.language.v1.IAnalyzeSentimentRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.analyzeSentiment(request, options, callback);
  }
/**
 * Finds named entities (currently proper names and common nouns) in the text
 * along with entity types, salience, mentions for each entity, and
 * other properties.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.EncodingType} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.AnalyzeEntitiesResponse|AnalyzeEntitiesResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.analyze_entities.js</caption>
 * region_tag:language_v1_generated_LanguageService_AnalyzeEntities_async
 */
  analyzeEntities(
      request?: protos.google.cloud.language.v1.IAnalyzeEntitiesRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
        protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|undefined, {}|undefined
      ]>;
  analyzeEntities(
      request: protos.google.cloud.language.v1.IAnalyzeEntitiesRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeEntities(
      request: protos.google.cloud.language.v1.IAnalyzeEntitiesRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeEntities(
      request?: protos.google.cloud.language.v1.IAnalyzeEntitiesRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeEntitiesResponse,
        protos.google.cloud.language.v1.IAnalyzeEntitiesRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.analyzeEntities(request, options, callback);
  }
/**
 * Finds entities, similar to
 * {@link protos.google.cloud.language.v1.LanguageService.AnalyzeEntities|AnalyzeEntities}
 * in the text and analyzes sentiment associated with each entity and its
 * mentions.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.EncodingType} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.AnalyzeEntitySentimentResponse|AnalyzeEntitySentimentResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.analyze_entity_sentiment.js</caption>
 * region_tag:language_v1_generated_LanguageService_AnalyzeEntitySentiment_async
 */
  analyzeEntitySentiment(
      request?: protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
        protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|undefined, {}|undefined
      ]>;
  analyzeEntitySentiment(
      request: protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeEntitySentiment(
      request: protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeEntitySentiment(
      request?: protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
          protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeEntitySentimentResponse,
        protos.google.cloud.language.v1.IAnalyzeEntitySentimentRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.analyzeEntitySentiment(request, options, callback);
  }
/**
 * Analyzes the syntax of the text and provides sentence boundaries and
 * tokenization along with part of speech tags, dependency trees, and other
 * properties.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.EncodingType} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.AnalyzeSyntaxResponse|AnalyzeSyntaxResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.analyze_syntax.js</caption>
 * region_tag:language_v1_generated_LanguageService_AnalyzeSyntax_async
 */
  analyzeSyntax(
      request?: protos.google.cloud.language.v1.IAnalyzeSyntaxRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
        protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|undefined, {}|undefined
      ]>;
  analyzeSyntax(
      request: protos.google.cloud.language.v1.IAnalyzeSyntaxRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
          protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeSyntax(
      request: protos.google.cloud.language.v1.IAnalyzeSyntaxRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
          protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeSyntax(
      request?: protos.google.cloud.language.v1.IAnalyzeSyntaxRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
          protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
          protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IAnalyzeSyntaxResponse,
        protos.google.cloud.language.v1.IAnalyzeSyntaxRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.analyzeSyntax(request, options, callback);
  }
/**
 * Classifies a document into categories.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.ClassificationModelOptions} request.classificationModelOptions
 *   Model options to use for classification. Defaults to v1 options if not
 *   specified.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.ClassifyTextResponse|ClassifyTextResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.classify_text.js</caption>
 * region_tag:language_v1_generated_LanguageService_ClassifyText_async
 */
  classifyText(
      request?: protos.google.cloud.language.v1.IClassifyTextRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IClassifyTextResponse,
        protos.google.cloud.language.v1.IClassifyTextRequest|undefined, {}|undefined
      ]>;
  classifyText(
      request: protos.google.cloud.language.v1.IClassifyTextRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IClassifyTextResponse,
          protos.google.cloud.language.v1.IClassifyTextRequest|null|undefined,
          {}|null|undefined>): void;
  classifyText(
      request: protos.google.cloud.language.v1.IClassifyTextRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IClassifyTextResponse,
          protos.google.cloud.language.v1.IClassifyTextRequest|null|undefined,
          {}|null|undefined>): void;
  classifyText(
      request?: protos.google.cloud.language.v1.IClassifyTextRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IClassifyTextResponse,
          protos.google.cloud.language.v1.IClassifyTextRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IClassifyTextResponse,
          protos.google.cloud.language.v1.IClassifyTextRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IClassifyTextResponse,
        protos.google.cloud.language.v1.IClassifyTextRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.classifyText(request, options, callback);
  }
/**
 * Moderates a document for harmful and sensitive categories.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.ModerateTextResponse|ModerateTextResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.moderate_text.js</caption>
 * region_tag:language_v1_generated_LanguageService_ModerateText_async
 */
  moderateText(
      request?: protos.google.cloud.language.v1.IModerateTextRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IModerateTextResponse,
        protos.google.cloud.language.v1.IModerateTextRequest|undefined, {}|undefined
      ]>;
  moderateText(
      request: protos.google.cloud.language.v1.IModerateTextRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IModerateTextResponse,
          protos.google.cloud.language.v1.IModerateTextRequest|null|undefined,
          {}|null|undefined>): void;
  moderateText(
      request: protos.google.cloud.language.v1.IModerateTextRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IModerateTextResponse,
          protos.google.cloud.language.v1.IModerateTextRequest|null|undefined,
          {}|null|undefined>): void;
  moderateText(
      request?: protos.google.cloud.language.v1.IModerateTextRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IModerateTextResponse,
          protos.google.cloud.language.v1.IModerateTextRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IModerateTextResponse,
          protos.google.cloud.language.v1.IModerateTextRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IModerateTextResponse,
        protos.google.cloud.language.v1.IModerateTextRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.moderateText(request, options, callback);
  }
/**
 * A convenience method that provides all the features that analyzeSentiment,
 * analyzeEntities, and analyzeSyntax provide in one call.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.language.v1.Document} request.document
 *   Required. Input document.
 * @param {google.cloud.language.v1.AnnotateTextRequest.Features} request.features
 *   Required. The enabled features.
 * @param {google.cloud.language.v1.EncodingType} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.language.v1.AnnotateTextResponse|AnnotateTextResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/language_service.annotate_text.js</caption>
 * region_tag:language_v1_generated_LanguageService_AnnotateText_async
 */
  annotateText(
      request?: protos.google.cloud.language.v1.IAnnotateTextRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.language.v1.IAnnotateTextResponse,
        protos.google.cloud.language.v1.IAnnotateTextRequest|undefined, {}|undefined
      ]>;
  annotateText(
      request: protos.google.cloud.language.v1.IAnnotateTextRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.language.v1.IAnnotateTextResponse,
          protos.google.cloud.language.v1.IAnnotateTextRequest|null|undefined,
          {}|null|undefined>): void;
  annotateText(
      request: protos.google.cloud.language.v1.IAnnotateTextRequest,
      callback: Callback<
          protos.google.cloud.language.v1.IAnnotateTextResponse,
          protos.google.cloud.language.v1.IAnnotateTextRequest|null|undefined,
          {}|null|undefined>): void;
  annotateText(
      request?: protos.google.cloud.language.v1.IAnnotateTextRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.language.v1.IAnnotateTextResponse,
          protos.google.cloud.language.v1.IAnnotateTextRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.language.v1.IAnnotateTextResponse,
          protos.google.cloud.language.v1.IAnnotateTextRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.language.v1.IAnnotateTextResponse,
        protos.google.cloud.language.v1.IAnnotateTextRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.annotateText(request, options, callback);
  }


  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.languageServiceStub && !this._terminated) {
      return this.languageServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
