// Copyright 2020 Google LLC
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

import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import * as gapicConfig from './company_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A service that handles company management, including CRUD and enumeration.
 * @class
 * @memberof v4
 */
export class CompanyServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
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
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  companyServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CompanyServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
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
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof CompanyServiceClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;

    // users can override the config from client side, like retry codes name.
    // The detailed structure of the clientConfig can be found here: https://github.com/googleapis/gax-nodejs/blob/master/src/gax.ts#L546
    // The way to override client config for Showcase API:
    //
    // const customConfig = {"interfaces": {"google.showcase.v1beta1.Echo": {"methods": {"Echo": {"retry_codes_name": "idempotent", "retry_params_name": "default"}}}}}
    // const showcaseClient = new showcaseClient({ projectId, customConfig });
    opts.clientConfig = opts.clientConfig || {};

    // If we're running in browser, it's OK to omit `fallback` since
    // google-gax has `browser` field in its `package.json`.
    // For Electron (which does not respect `browser` field),
    // pass `{fallback: true}` to the CompanyServiceClient constructor.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof CompanyServiceClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      companyPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/companies/{company}'
      ),
      jobPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/jobs/{job}'
      ),
      tenantPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listCompanies: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'companies'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.talent.v4.CompanyService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
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
    if (this.companyServiceStub) {
      return this.companyServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.talent.v4.CompanyService.
    this.companyServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.talent.v4.CompanyService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.talent.v4.CompanyService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const companyServiceStubMethods = [
      'createCompany',
      'getCompany',
      'updateCompany',
      'deleteCompany',
      'listCompanies',
    ];
    for (const methodName of companyServiceStubMethods) {
      const callPromise = this.companyServiceStub.then(
        stub => (...args: Array<{}>) => {
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
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.companyServiceStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'jobs.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'jobs.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/jobs',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
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
  createCompany(
    request: protos.google.cloud.talent.v4.ICreateCompanyRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.ICreateCompanyRequest | undefined,
      {} | undefined
    ]
  >;
  createCompany(
    request: protos.google.cloud.talent.v4.ICreateCompanyRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.ICreateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createCompany(
    request: protos.google.cloud.talent.v4.ICreateCompanyRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.ICreateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a new company entity.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the tenant under which the company is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {google.cloud.talent.v4.Company} request.company
   *   Required. The company to be created.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Company]{@link google.cloud.talent.v4.Company}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  createCompany(
    request: protos.google.cloud.talent.v4.ICreateCompanyRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ICompany,
          | protos.google.cloud.talent.v4.ICreateCompanyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.ICreateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.ICreateCompanyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createCompany(request, options, callback);
  }
  getCompany(
    request: protos.google.cloud.talent.v4.IGetCompanyRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IGetCompanyRequest | undefined,
      {} | undefined
    ]
  >;
  getCompany(
    request: protos.google.cloud.talent.v4.IGetCompanyRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IGetCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getCompany(
    request: protos.google.cloud.talent.v4.IGetCompanyRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IGetCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves specified company.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the company to be retrieved.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *   example, "projects/api-test-project/tenants/foo/companies/bar".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Company]{@link google.cloud.talent.v4.Company}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  getCompany(
    request: protos.google.cloud.talent.v4.IGetCompanyRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ICompany,
          protos.google.cloud.talent.v4.IGetCompanyRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IGetCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IGetCompanyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getCompany(request, options, callback);
  }
  updateCompany(
    request: protos.google.cloud.talent.v4.IUpdateCompanyRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IUpdateCompanyRequest | undefined,
      {} | undefined
    ]
  >;
  updateCompany(
    request: protos.google.cloud.talent.v4.IUpdateCompanyRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IUpdateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  updateCompany(
    request: protos.google.cloud.talent.v4.IUpdateCompanyRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IUpdateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Updates specified company.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.cloud.talent.v4.Company} request.company
   *   Required. The company resource to replace the current resource in the system.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Strongly recommended for the best service experience.
   *
   *   If {@link google.cloud.talent.v4.UpdateCompanyRequest.update_mask|update_mask} is provided, only the specified fields in
   *   {@link google.cloud.talent.v4.UpdateCompanyRequest.company|company} are updated. Otherwise all the fields are updated.
   *
   *   A field mask to specify the company fields to be updated. Only
   *   top level fields of {@link google.cloud.talent.v4.Company|Company} are supported.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Company]{@link google.cloud.talent.v4.Company}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  updateCompany(
    request: protos.google.cloud.talent.v4.IUpdateCompanyRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ICompany,
          | protos.google.cloud.talent.v4.IUpdateCompanyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IUpdateCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany,
      protos.google.cloud.talent.v4.IUpdateCompanyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'company.name': request.company!.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateCompany(request, options, callback);
  }
  deleteCompany(
    request: protos.google.cloud.talent.v4.IDeleteCompanyRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteCompanyRequest | undefined,
      {} | undefined
    ]
  >;
  deleteCompany(
    request: protos.google.cloud.talent.v4.IDeleteCompanyRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  deleteCompany(
    request: protos.google.cloud.talent.v4.IDeleteCompanyRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes specified company.
   * Prerequisite: The company has no jobs associated with it.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the company to be deleted.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *   example, "projects/foo/tenants/bar/companies/baz".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  deleteCompany(
    request: protos.google.cloud.talent.v4.IDeleteCompanyRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          | protos.google.cloud.talent.v4.IDeleteCompanyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteCompanyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteCompanyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteCompany(request, options, callback);
  }

  listCompanies(
    request: protos.google.cloud.talent.v4.IListCompaniesRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany[],
      protos.google.cloud.talent.v4.IListCompaniesRequest | null,
      protos.google.cloud.talent.v4.IListCompaniesResponse
    ]
  >;
  listCompanies(
    request: protos.google.cloud.talent.v4.IListCompaniesRequest,
    options: gax.CallOptions,
    callback: PaginationCallback<
      protos.google.cloud.talent.v4.IListCompaniesRequest,
      protos.google.cloud.talent.v4.IListCompaniesResponse | null | undefined,
      protos.google.cloud.talent.v4.ICompany
    >
  ): void;
  listCompanies(
    request: protos.google.cloud.talent.v4.IListCompaniesRequest,
    callback: PaginationCallback<
      protos.google.cloud.talent.v4.IListCompaniesRequest,
      protos.google.cloud.talent.v4.IListCompaniesResponse | null | undefined,
      protos.google.cloud.talent.v4.ICompany
    >
  ): void;
  /**
   * Lists all companies associated with the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the tenant under which the company is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of companies to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {boolean} request.requireOpenJobs
   *   Set to true if the companies requested must have open jobs.
   *
   *   Defaults to false.
   *
   *   If true, at most {@link google.cloud.talent.v4.ListCompaniesRequest.page_size|page_size} of companies are fetched, among which
   *   only those with open jobs are returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Company]{@link google.cloud.talent.v4.Company}.
   *   The client library support auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Company]{@link google.cloud.talent.v4.Company} that corresponds to
   *   the one page received from the API server.
   *   If the second element is not null it contains the request object of type [ListCompaniesRequest]{@link google.cloud.talent.v4.ListCompaniesRequest}
   *   that can be used to obtain the next page of the results.
   *   If it is null, the next page does not exist.
   *   The third element contains the raw response received from the API server. Its type is
   *   [ListCompaniesResponse]{@link google.cloud.talent.v4.ListCompaniesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  listCompanies(
    request: protos.google.cloud.talent.v4.IListCompaniesRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | PaginationCallback<
          protos.google.cloud.talent.v4.IListCompaniesRequest,
          | protos.google.cloud.talent.v4.IListCompaniesResponse
          | null
          | undefined,
          protos.google.cloud.talent.v4.ICompany
        >,
    callback?: PaginationCallback<
      protos.google.cloud.talent.v4.IListCompaniesRequest,
      protos.google.cloud.talent.v4.IListCompaniesResponse | null | undefined,
      protos.google.cloud.talent.v4.ICompany
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ICompany[],
      protos.google.cloud.talent.v4.IListCompaniesRequest | null,
      protos.google.cloud.talent.v4.IListCompaniesResponse
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listCompanies(request, options, callback);
  }

  /**
   * Equivalent to {@link listCompanies}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listCompanies} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the tenant under which the company is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of companies to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {boolean} request.requireOpenJobs
   *   Set to true if the companies requested must have open jobs.
   *
   *   Defaults to false.
   *
   *   If true, at most {@link google.cloud.talent.v4.ListCompaniesRequest.page_size|page_size} of companies are fetched, among which
   *   only those with open jobs are returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Company]{@link google.cloud.talent.v4.Company} on 'data' event.
   */
  listCompaniesStream(
    request?: protos.google.cloud.talent.v4.IListCompaniesRequest,
    options?: gax.CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listCompanies.createStream(
      this.innerApiCalls.listCompanies as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to {@link listCompanies}, but returns an iterable object.
   *
   * for-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the tenant under which the company is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of companies to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {boolean} request.requireOpenJobs
   *   Set to true if the companies requested must have open jobs.
   *
   *   Defaults to false.
   *
   *   If true, at most {@link google.cloud.talent.v4.ListCompaniesRequest.page_size|page_size} of companies are fetched, among which
   *   only those with open jobs are returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   */
  listCompaniesAsync(
    request?: protos.google.cloud.talent.v4.IListCompaniesRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.google.cloud.talent.v4.ICompany> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listCompanies.asyncIterate(
      this.innerApiCalls['listCompanies'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.talent.v4.ICompany>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified company resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} company
   * @returns {string} Resource name string.
   */
  companyPath(project: string, tenant: string, company: string) {
    return this.pathTemplates.companyPathTemplate.render({
      project: project,
      tenant: tenant,
      company: company,
    });
  }

  /**
   * Parse the project from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).project;
  }

  /**
   * Parse the tenant from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).tenant;
  }

  /**
   * Parse the company from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).company;
  }

  /**
   * Return a fully-qualified job resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} job
   * @returns {string} Resource name string.
   */
  jobPath(project: string, tenant: string, job: string) {
    return this.pathTemplates.jobPathTemplate.render({
      project: project,
      tenant: tenant,
      job: job,
    });
  }

  /**
   * Parse the project from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).project;
  }

  /**
   * Parse the tenant from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).tenant;
  }

  /**
   * Parse the job from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the job.
   */
  matchJobFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).job;
  }

  /**
   * Return a fully-qualified tenant resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @returns {string} Resource name string.
   */
  tenantPath(project: string, tenant: string) {
    return this.pathTemplates.tenantPathTemplate.render({
      project: project,
      tenant: tenant,
    });
  }

  /**
   * Parse the project from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).project;
  }

  /**
   * Parse the tenant from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).tenant;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.companyServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
