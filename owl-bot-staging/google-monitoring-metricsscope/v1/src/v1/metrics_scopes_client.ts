// Copyright 2022 Google LLC
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
import type {Callback, CallOptions, Descriptors, ClientOptions, GrpcClientOptions, LROperation} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/metrics_scopes_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './metrics_scopes_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Manages Cloud Monitoring Metrics Scopes, and the monitoring of Google Cloud
 *  projects and AWS accounts.
 * @class
 * @memberof v1
 */
export class MetricsScopesClient {
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
  operationsClient: gax.OperationsClient;
  metricsScopesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of MetricsScopesClient.
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
   *     const client = new MetricsScopesClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof MetricsScopesClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

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
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
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
    } else if (opts.fallback === 'rest' ) {
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
      metricsScopePathTemplate: new this._gaxModule.PathTemplate(
        'locations/global/metricsScope/{metrics_scope}'
      ),
      monitoredProjectPathTemplate: new this._gaxModule.PathTemplate(
        'locations/global/metricsScopes/{metrics_scope}/projects/{project}'
      ),
    };

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);
    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const lroOptions: GrpcClientOptions = {
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    };
    if (opts.fallback === 'rest') {
      lroOptions.protoJson = protoFilesRoot;
      lroOptions.httpRules = [];
    }
    this.operationsClient = this._gaxModule.lro(lroOptions).operationsClient(opts);
    const createMonitoredProjectResponse = protoFilesRoot.lookup(
      '.google.monitoring.metricsscope.v1.MonitoredProject') as gax.protobuf.Type;
    const createMonitoredProjectMetadata = protoFilesRoot.lookup(
      '.google.monitoring.metricsscope.v1.OperationMetadata') as gax.protobuf.Type;
    const deleteMonitoredProjectResponse = protoFilesRoot.lookup(
      '.google.protobuf.Empty') as gax.protobuf.Type;
    const deleteMonitoredProjectMetadata = protoFilesRoot.lookup(
      '.google.monitoring.metricsscope.v1.OperationMetadata') as gax.protobuf.Type;

    this.descriptors.longrunning = {
      createMonitoredProject: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createMonitoredProjectResponse.decode.bind(createMonitoredProjectResponse),
        createMonitoredProjectMetadata.decode.bind(createMonitoredProjectMetadata)),
      deleteMonitoredProject: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteMonitoredProjectResponse.decode.bind(deleteMonitoredProjectResponse),
        deleteMonitoredProjectMetadata.decode.bind(deleteMonitoredProjectMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.monitoring.metricsscope.v1.MetricsScopes', gapicConfig as gax.ClientConfig,
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
    if (this.metricsScopesStub) {
      return this.metricsScopesStub;
    }

    // Put together the "service stub" for
    // google.monitoring.metricsscope.v1.MetricsScopes.
    this.metricsScopesStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.monitoring.metricsscope.v1.MetricsScopes') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.monitoring.metricsscope.v1.MetricsScopes,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const metricsScopesStubMethods =
        ['getMetricsScope', 'listMetricsScopesByMonitoredProject', 'createMonitoredProject', 'deleteMonitoredProject'];
    for (const methodName of metricsScopesStubMethods) {
      const callPromise = this.metricsScopesStub.then(
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
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.metricsScopesStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'monitoring.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'monitoring.googleapis.com';
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
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/monitoring',
      'https://www.googleapis.com/auth/monitoring.read',
      'https://www.googleapis.com/auth/monitoring.write'
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
 * Returns a specific `Metrics Scope`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The resource name of the `Metrics Scope`.
 *   Example:
 *   `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [MetricsScope]{@link google.monitoring.metricsscope.v1.MetricsScope}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.get_metrics_scope.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_GetMetricsScope_async
 */
  getMetricsScope(
      request?: protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest,
      options?: CallOptions):
      Promise<[
        protos.google.monitoring.metricsscope.v1.IMetricsScope,
        protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|undefined, {}|undefined
      ]>;
  getMetricsScope(
      request: protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.monitoring.metricsscope.v1.IMetricsScope,
          protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|null|undefined,
          {}|null|undefined>): void;
  getMetricsScope(
      request: protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest,
      callback: Callback<
          protos.google.monitoring.metricsscope.v1.IMetricsScope,
          protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|null|undefined,
          {}|null|undefined>): void;
  getMetricsScope(
      request?: protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.monitoring.metricsscope.v1.IMetricsScope,
          protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.monitoring.metricsscope.v1.IMetricsScope,
          protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.monitoring.metricsscope.v1.IMetricsScope,
        protos.google.monitoring.metricsscope.v1.IGetMetricsScopeRequest|undefined, {}|undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getMetricsScope(request, options, callback);
  }
/**
 * Returns a list of every `Metrics Scope` that a specific `MonitoredProject`
 * has been added to. The metrics scope representing the specified monitored
 * project will always be the first entry in the response.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.monitoredResourceContainer
 *   Required. The resource name of the `Monitored Project` being requested.
 *   Example:
 *   `projects/{MONITORED_PROJECT_ID_OR_NUMBER}`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ListMetricsScopesByMonitoredProjectResponse]{@link google.monitoring.metricsscope.v1.ListMetricsScopesByMonitoredProjectResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.list_metrics_scopes_by_monitored_project.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_ListMetricsScopesByMonitoredProject_async
 */
  listMetricsScopesByMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest,
      options?: CallOptions):
      Promise<[
        protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
        protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|undefined, {}|undefined
      ]>;
  listMetricsScopesByMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|null|undefined,
          {}|null|undefined>): void;
  listMetricsScopesByMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest,
      callback: Callback<
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|null|undefined,
          {}|null|undefined>): void;
  listMetricsScopesByMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
          protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectResponse,
        protos.google.monitoring.metricsscope.v1.IListMetricsScopesByMonitoredProjectRequest|undefined, {}|undefined
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
    return this.innerApiCalls.listMetricsScopesByMonitoredProject(request, options, callback);
  }

/**
 * Adds a `MonitoredProject` with the given project ID
 * to the specified `Metrics Scope`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name of the existing `Metrics Scope` that will monitor this
 *   project.
 *   Example:
 *   `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}`
 * @param {google.monitoring.metricsscope.v1.MonitoredProject} request.monitoredProject
 *   Required. The initial `MonitoredProject` configuration.
 *   Specify only the `monitored_project.name` field. All other fields are
 *   ignored. The `monitored_project.name` must be in the format:
 *   `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.create_monitored_project.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_CreateMonitoredProject_async
 */
  createMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.ICreateMonitoredProjectRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  createMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.ICreateMonitoredProjectRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  createMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.ICreateMonitoredProjectRequest,
      callback: Callback<
          LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  createMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.ICreateMonitoredProjectRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.monitoring.metricsscope.v1.IMonitoredProject, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createMonitoredProject(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `createMonitoredProject()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.create_monitored_project.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_CreateMonitoredProject_async
 */
  async checkCreateMonitoredProjectProgress(name: string): Promise<LROperation<protos.google.monitoring.metricsscope.v1.MonitoredProject, protos.google.monitoring.metricsscope.v1.OperationMetadata>>{
    const request = new this._gaxModule.operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new this._gaxModule.Operation(operation, this.descriptors.longrunning.createMonitoredProject, this._gaxModule.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.monitoring.metricsscope.v1.MonitoredProject, protos.google.monitoring.metricsscope.v1.OperationMetadata>;
  }
/**
 * Deletes a `MonitoredProject` from the specified `Metrics Scope`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The resource name of the `MonitoredProject`.
 *   Example:
 *   `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`
 *
 *   Authorization requires the following [Google
 *   IAM](https://cloud.google.com/iam) permissions on both the `Metrics Scope`
 *   and on the `MonitoredProject`: `monitoring.metricsScopes.link`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.delete_monitored_project.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_DeleteMonitoredProject_async
 */
  deleteMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.IDeleteMonitoredProjectRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  deleteMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.IDeleteMonitoredProjectRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  deleteMonitoredProject(
      request: protos.google.monitoring.metricsscope.v1.IDeleteMonitoredProjectRequest,
      callback: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  deleteMonitoredProject(
      request?: protos.google.monitoring.metricsscope.v1.IDeleteMonitoredProjectRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.protobuf.IEmpty, protos.google.monitoring.metricsscope.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteMonitoredProject(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `deleteMonitoredProject()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/metrics_scopes.delete_monitored_project.js</caption>
 * region_tag:monitoring_v1_generated_MetricsScopes_DeleteMonitoredProject_async
 */
  async checkDeleteMonitoredProjectProgress(name: string): Promise<LROperation<protos.google.protobuf.Empty, protos.google.monitoring.metricsscope.v1.OperationMetadata>>{
    const request = new this._gaxModule.operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new this._gaxModule.Operation(operation, this.descriptors.longrunning.deleteMonitoredProject, this._gaxModule.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.protobuf.Empty, protos.google.monitoring.metricsscope.v1.OperationMetadata>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified metricsScope resource name string.
   *
   * @param {string} metrics_scope
   * @returns {string} Resource name string.
   */
  metricsScopePath(metricsScope:string) {
    return this.pathTemplates.metricsScopePathTemplate.render({
      metrics_scope: metricsScope,
    });
  }

  /**
   * Parse the metrics_scope from MetricsScope resource.
   *
   * @param {string} metricsScopeName
   *   A fully-qualified path representing MetricsScope resource.
   * @returns {string} A string representing the metrics_scope.
   */
  matchMetricsScopeFromMetricsScopeName(metricsScopeName: string) {
    return this.pathTemplates.metricsScopePathTemplate.match(metricsScopeName).metrics_scope;
  }

  /**
   * Return a fully-qualified monitoredProject resource name string.
   *
   * @param {string} metrics_scope
   * @param {string} project
   * @returns {string} Resource name string.
   */
  monitoredProjectPath(metricsScope:string,project:string) {
    return this.pathTemplates.monitoredProjectPathTemplate.render({
      metrics_scope: metricsScope,
      project: project,
    });
  }

  /**
   * Parse the metrics_scope from MonitoredProject resource.
   *
   * @param {string} monitoredProjectName
   *   A fully-qualified path representing MonitoredProject resource.
   * @returns {string} A string representing the metrics_scope.
   */
  matchMetricsScopeFromMonitoredProjectName(monitoredProjectName: string) {
    return this.pathTemplates.monitoredProjectPathTemplate.match(monitoredProjectName).metrics_scope;
  }

  /**
   * Parse the project from MonitoredProject resource.
   *
   * @param {string} monitoredProjectName
   *   A fully-qualified path representing MonitoredProject resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromMonitoredProjectName(monitoredProjectName: string) {
    return this.pathTemplates.monitoredProjectPathTemplate.match(monitoredProjectName).project;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.metricsScopesStub && !this._terminated) {
      return this.metricsScopesStub.then(stub => {
        this._terminated = true;
        stub.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
