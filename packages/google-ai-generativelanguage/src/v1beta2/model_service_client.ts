// Copyright 2023 Google LLC
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
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta2/model_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './model_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Provides methods for getting metadata information about Generative Models.
 * @class
 * @memberof v1beta2
 */
export class ModelServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  modelServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ModelServiceClient.
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
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new ModelServiceClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ModelServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      modelPathTemplate: new this._gaxModule.PathTemplate('models/{model}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listModels: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'models'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.ai.generativelanguage.v1beta2.ModelService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    if (this.modelServiceStub) {
      return this.modelServiceStub;
    }

    // Put together the "service stub" for
    // google.ai.generativelanguage.v1beta2.ModelService.
    this.modelServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.ai.generativelanguage.v1beta2.ModelService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.ai.generativelanguage.v1beta2
            .ModelService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const modelServiceStubMethods = ['getModel', 'listModels'];
    for (const methodName of modelServiceStubMethods) {
      const callPromise = this.modelServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.modelServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'generativelanguage.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'generativelanguage.googleapis.com';
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
    return [];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
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
   * Gets information about a specific Model.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the model.
   *
   *   This name should match a model name returned by the `ListModels` method.
   *
   *   Format: `models/{model}`
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.ai.generativelanguage.v1beta2.Model|Model}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta2/model_service.get_model.js</caption>
   * region_tag:generativelanguage_v1beta2_generated_ModelService_GetModel_async
   */
  getModel(
    request?: protos.google.ai.generativelanguage.v1beta2.IGetModelRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.ai.generativelanguage.v1beta2.IModel,
      protos.google.ai.generativelanguage.v1beta2.IGetModelRequest | undefined,
      {} | undefined
    ]
  >;
  getModel(
    request: protos.google.ai.generativelanguage.v1beta2.IGetModelRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.ai.generativelanguage.v1beta2.IModel,
      | protos.google.ai.generativelanguage.v1beta2.IGetModelRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getModel(
    request: protos.google.ai.generativelanguage.v1beta2.IGetModelRequest,
    callback: Callback<
      protos.google.ai.generativelanguage.v1beta2.IModel,
      | protos.google.ai.generativelanguage.v1beta2.IGetModelRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getModel(
    request?: protos.google.ai.generativelanguage.v1beta2.IGetModelRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.ai.generativelanguage.v1beta2.IModel,
          | protos.google.ai.generativelanguage.v1beta2.IGetModelRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.ai.generativelanguage.v1beta2.IModel,
      | protos.google.ai.generativelanguage.v1beta2.IGetModelRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.ai.generativelanguage.v1beta2.IModel,
      protos.google.ai.generativelanguage.v1beta2.IGetModelRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        name: request.name ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getModel(request, options, callback);
  }

  /**
   * Lists models available through the API.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.pageSize
   *   The maximum number of `Models` to return (per page).
   *
   *   The service may return fewer models.
   *   If unspecified, at most 50 models will be returned per page.
   *   This method returns at most 1000 models per page, even if you pass a larger
   *   page_size.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListModels` call.
   *
   *   Provide the `page_token` returned by one request as an argument to the next
   *   request to retrieve the next page.
   *
   *   When paginating, all other parameters provided to `ListModels` must match
   *   the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of {@link protos.google.ai.generativelanguage.v1beta2.Model|Model}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listModelsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listModels(
    request?: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.ai.generativelanguage.v1beta2.IModel[],
      protos.google.ai.generativelanguage.v1beta2.IListModelsRequest | null,
      protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
    ]
  >;
  listModels(
    request: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
      | protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
      | null
      | undefined,
      protos.google.ai.generativelanguage.v1beta2.IModel
    >
  ): void;
  listModels(
    request: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    callback: PaginationCallback<
      protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
      | protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
      | null
      | undefined,
      protos.google.ai.generativelanguage.v1beta2.IModel
    >
  ): void;
  listModels(
    request?: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
          | protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
          | null
          | undefined,
          protos.google.ai.generativelanguage.v1beta2.IModel
        >,
    callback?: PaginationCallback<
      protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
      | protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
      | null
      | undefined,
      protos.google.ai.generativelanguage.v1beta2.IModel
    >
  ): Promise<
    [
      protos.google.ai.generativelanguage.v1beta2.IModel[],
      protos.google.ai.generativelanguage.v1beta2.IListModelsRequest | null,
      protos.google.ai.generativelanguage.v1beta2.IListModelsResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.listModels(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.pageSize
   *   The maximum number of `Models` to return (per page).
   *
   *   The service may return fewer models.
   *   If unspecified, at most 50 models will be returned per page.
   *   This method returns at most 1000 models per page, even if you pass a larger
   *   page_size.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListModels` call.
   *
   *   Provide the `page_token` returned by one request as an argument to the next
   *   request to retrieve the next page.
   *
   *   When paginating, all other parameters provided to `ListModels` must match
   *   the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing {@link protos.google.ai.generativelanguage.v1beta2.Model|Model} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listModelsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listModelsStream(
    request?: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listModels'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listModels.createStream(
      this.innerApiCalls.listModels as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listModels`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.pageSize
   *   The maximum number of `Models` to return (per page).
   *
   *   The service may return fewer models.
   *   If unspecified, at most 50 models will be returned per page.
   *   This method returns at most 1000 models per page, even if you pass a larger
   *   page_size.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListModels` call.
   *
   *   Provide the `page_token` returned by one request as an argument to the next
   *   request to retrieve the next page.
   *
   *   When paginating, all other parameters provided to `ListModels` must match
   *   the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
   *   When you iterate the returned iterable, each element will be an object representing
   *   {@link protos.google.ai.generativelanguage.v1beta2.Model|Model}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta2/model_service.list_models.js</caption>
   * region_tag:generativelanguage_v1beta2_generated_ModelService_ListModels_async
   */
  listModelsAsync(
    request?: protos.google.ai.generativelanguage.v1beta2.IListModelsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.ai.generativelanguage.v1beta2.IModel> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listModels'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listModels.asyncIterate(
      this.innerApiCalls['listModels'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.ai.generativelanguage.v1beta2.IModel>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified model resource name string.
   *
   * @param {string} model
   * @returns {string} Resource name string.
   */
  modelPath(model: string) {
    return this.pathTemplates.modelPathTemplate.render({
      model: model,
    });
  }

  /**
   * Parse the model from Model resource.
   *
   * @param {string} modelName
   *   A fully-qualified path representing Model resource.
   * @returns {string} A string representing the model.
   */
  matchModelFromModelName(modelName: string) {
    return this.pathTemplates.modelPathTemplate.match(modelName).model;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.modelServiceStub && !this._terminated) {
      return this.modelServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
