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
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');

/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/business_info_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './business_info_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service to support business info API.
 * @class
 * @memberof v1beta
 */
export class BusinessInfoServiceClient {
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
  pathTemplates: {[name: string]: gax.PathTemplate};
  businessInfoServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of BusinessInfoServiceClient.
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
   *     const client = new BusinessInfoServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof BusinessInfoServiceClient;
    if (
      opts?.universe_domain &&
      opts?.universeDomain &&
      opts?.universe_domain !== opts?.universeDomain
    ) {
      throw new Error(
        'Please set either universe_domain or universeDomain, but not both.'
      );
    }
    const universeDomainEnvVar =
      typeof process === 'object' && typeof process.env === 'object'
        ? process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN']
        : undefined;
    this._universeDomain =
      opts?.universeDomain ??
      opts?.universe_domain ??
      universeDomainEnvVar ??
      'googleapis.com';
    this._servicePath = 'merchantapi.' + this._universeDomain;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || this._servicePath;
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = this._servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === this._servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process === 'object' && 'versions' in process) {
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

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      accountPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}'
      ),
      accountIssuePathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/issues/{issue}'
      ),
      accountTaxPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/accounttax/{tax}'
      ),
      autofeedSettingsPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/autofeedSettings'
      ),
      businessIdentityPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/businessIdentity'
      ),
      businessInfoPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/businessInfo'
      ),
      emailPreferencesPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/users/{email}/emailPreferences'
      ),
      homepagePathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/homepage'
      ),
      onlineReturnPolicyPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/onlineReturnPolicies/{return_policy}'
      ),
      programPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/programs/{program}'
      ),
      regionPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/regions/{region}'
      ),
      shippingSettingsPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/shippingSettings'
      ),
      termsOfServicePathTemplate: new this._gaxModule.PathTemplate(
        'termsOfService/{version}'
      ),
      termsOfServiceAgreementStatePathTemplate:
        new this._gaxModule.PathTemplate(
          'accounts/{account}/termsOfServiceAgreementStates/{identifier}'
        ),
      userPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/users/{email}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.shopping.merchant.accounts.v1beta.BusinessInfoService',
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
    if (this.businessInfoServiceStub) {
      return this.businessInfoServiceStub;
    }

    // Put together the "service stub" for
    // google.shopping.merchant.accounts.v1beta.BusinessInfoService.
    this.businessInfoServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.shopping.merchant.accounts.v1beta.BusinessInfoService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.shopping.merchant.accounts.v1beta
            .BusinessInfoService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const businessInfoServiceStubMethods = [
      'getBusinessInfo',
      'updateBusinessInfo',
    ];
    for (const methodName of businessInfoServiceStubMethods) {
      const callPromise = this.businessInfoServiceStub.then(
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

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.businessInfoServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      process.emitWarning(
        'Static servicePath is deprecated, please use the instance method instead.',
        'DeprecationWarning'
      );
    }
    return 'merchantapi.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      process.emitWarning(
        'Static apiEndpoint is deprecated, please use the instance method instead.',
        'DeprecationWarning'
      );
    }
    return 'merchantapi.googleapis.com';
  }

  /**
   * The DNS address for this API service.
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
    return ['https://www.googleapis.com/auth/content'];
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
   * Retrieves the business info of an account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the business info.
   *   Format: `accounts/{account}/businessInfo`
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.shopping.merchant.accounts.v1beta.BusinessInfo|BusinessInfo}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/business_info_service.get_business_info.js</caption>
   * region_tag:merchantapi_v1beta_generated_BusinessInfoService_GetBusinessInfo_async
   */
  getBusinessInfo(
    request?: protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      (
        | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
        | undefined
      ),
      {} | undefined,
    ]
  >;
  getBusinessInfo(
    request: protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getBusinessInfo(
    request: protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest,
    callback: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getBusinessInfo(
    request?: protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
          | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      (
        | protos.google.shopping.merchant.accounts.v1beta.IGetBusinessInfoRequest
        | undefined
      ),
      {} | undefined,
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
    return this.innerApiCalls.getBusinessInfo(request, options, callback);
  }
  /**
   * Updates the business info of an account. Executing this method requires
   * admin access.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.shopping.merchant.accounts.v1beta.BusinessInfo} request.businessInfo
   *   Required. The new version of the business info.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Required. List of fields being updated.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.shopping.merchant.accounts.v1beta.BusinessInfo|BusinessInfo}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/business_info_service.update_business_info.js</caption>
   * region_tag:merchantapi_v1beta_generated_BusinessInfoService_UpdateBusinessInfo_async
   */
  updateBusinessInfo(
    request?: protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      (
        | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
        | undefined
      ),
      {} | undefined,
    ]
  >;
  updateBusinessInfo(
    request: protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  updateBusinessInfo(
    request: protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest,
    callback: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  updateBusinessInfo(
    request?: protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
          | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.shopping.merchant.accounts.v1beta.IBusinessInfo,
      (
        | protos.google.shopping.merchant.accounts.v1beta.IUpdateBusinessInfoRequest
        | undefined
      ),
      {} | undefined,
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
        'business_info.name': request.businessInfo!.name ?? '',
      });
    this.initialize();
    return this.innerApiCalls.updateBusinessInfo(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified account resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  accountPath(account: string) {
    return this.pathTemplates.accountPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from Account resource.
   *
   * @param {string} accountName
   *   A fully-qualified path representing Account resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAccountName(accountName: string) {
    return this.pathTemplates.accountPathTemplate.match(accountName).account;
  }

  /**
   * Return a fully-qualified accountIssue resource name string.
   *
   * @param {string} account
   * @param {string} issue
   * @returns {string} Resource name string.
   */
  accountIssuePath(account: string, issue: string) {
    return this.pathTemplates.accountIssuePathTemplate.render({
      account: account,
      issue: issue,
    });
  }

  /**
   * Parse the account from AccountIssue resource.
   *
   * @param {string} accountIssueName
   *   A fully-qualified path representing AccountIssue resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAccountIssueName(accountIssueName: string) {
    return this.pathTemplates.accountIssuePathTemplate.match(accountIssueName)
      .account;
  }

  /**
   * Parse the issue from AccountIssue resource.
   *
   * @param {string} accountIssueName
   *   A fully-qualified path representing AccountIssue resource.
   * @returns {string} A string representing the issue.
   */
  matchIssueFromAccountIssueName(accountIssueName: string) {
    return this.pathTemplates.accountIssuePathTemplate.match(accountIssueName)
      .issue;
  }

  /**
   * Return a fully-qualified accountTax resource name string.
   *
   * @param {string} account
   * @param {string} tax
   * @returns {string} Resource name string.
   */
  accountTaxPath(account: string, tax: string) {
    return this.pathTemplates.accountTaxPathTemplate.render({
      account: account,
      tax: tax,
    });
  }

  /**
   * Parse the account from AccountTax resource.
   *
   * @param {string} accountTaxName
   *   A fully-qualified path representing AccountTax resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAccountTaxName(accountTaxName: string) {
    return this.pathTemplates.accountTaxPathTemplate.match(accountTaxName)
      .account;
  }

  /**
   * Parse the tax from AccountTax resource.
   *
   * @param {string} accountTaxName
   *   A fully-qualified path representing AccountTax resource.
   * @returns {string} A string representing the tax.
   */
  matchTaxFromAccountTaxName(accountTaxName: string) {
    return this.pathTemplates.accountTaxPathTemplate.match(accountTaxName).tax;
  }

  /**
   * Return a fully-qualified autofeedSettings resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  autofeedSettingsPath(account: string) {
    return this.pathTemplates.autofeedSettingsPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from AutofeedSettings resource.
   *
   * @param {string} autofeedSettingsName
   *   A fully-qualified path representing AutofeedSettings resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAutofeedSettingsName(autofeedSettingsName: string) {
    return this.pathTemplates.autofeedSettingsPathTemplate.match(
      autofeedSettingsName
    ).account;
  }

  /**
   * Return a fully-qualified businessIdentity resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  businessIdentityPath(account: string) {
    return this.pathTemplates.businessIdentityPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from BusinessIdentity resource.
   *
   * @param {string} businessIdentityName
   *   A fully-qualified path representing BusinessIdentity resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromBusinessIdentityName(businessIdentityName: string) {
    return this.pathTemplates.businessIdentityPathTemplate.match(
      businessIdentityName
    ).account;
  }

  /**
   * Return a fully-qualified businessInfo resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  businessInfoPath(account: string) {
    return this.pathTemplates.businessInfoPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from BusinessInfo resource.
   *
   * @param {string} businessInfoName
   *   A fully-qualified path representing BusinessInfo resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromBusinessInfoName(businessInfoName: string) {
    return this.pathTemplates.businessInfoPathTemplate.match(businessInfoName)
      .account;
  }

  /**
   * Return a fully-qualified emailPreferences resource name string.
   *
   * @param {string} account
   * @param {string} email
   * @returns {string} Resource name string.
   */
  emailPreferencesPath(account: string, email: string) {
    return this.pathTemplates.emailPreferencesPathTemplate.render({
      account: account,
      email: email,
    });
  }

  /**
   * Parse the account from EmailPreferences resource.
   *
   * @param {string} emailPreferencesName
   *   A fully-qualified path representing EmailPreferences resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromEmailPreferencesName(emailPreferencesName: string) {
    return this.pathTemplates.emailPreferencesPathTemplate.match(
      emailPreferencesName
    ).account;
  }

  /**
   * Parse the email from EmailPreferences resource.
   *
   * @param {string} emailPreferencesName
   *   A fully-qualified path representing EmailPreferences resource.
   * @returns {string} A string representing the email.
   */
  matchEmailFromEmailPreferencesName(emailPreferencesName: string) {
    return this.pathTemplates.emailPreferencesPathTemplate.match(
      emailPreferencesName
    ).email;
  }

  /**
   * Return a fully-qualified homepage resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  homepagePath(account: string) {
    return this.pathTemplates.homepagePathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from Homepage resource.
   *
   * @param {string} homepageName
   *   A fully-qualified path representing Homepage resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromHomepageName(homepageName: string) {
    return this.pathTemplates.homepagePathTemplate.match(homepageName).account;
  }

  /**
   * Return a fully-qualified onlineReturnPolicy resource name string.
   *
   * @param {string} account
   * @param {string} return_policy
   * @returns {string} Resource name string.
   */
  onlineReturnPolicyPath(account: string, returnPolicy: string) {
    return this.pathTemplates.onlineReturnPolicyPathTemplate.render({
      account: account,
      return_policy: returnPolicy,
    });
  }

  /**
   * Parse the account from OnlineReturnPolicy resource.
   *
   * @param {string} onlineReturnPolicyName
   *   A fully-qualified path representing OnlineReturnPolicy resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromOnlineReturnPolicyName(onlineReturnPolicyName: string) {
    return this.pathTemplates.onlineReturnPolicyPathTemplate.match(
      onlineReturnPolicyName
    ).account;
  }

  /**
   * Parse the return_policy from OnlineReturnPolicy resource.
   *
   * @param {string} onlineReturnPolicyName
   *   A fully-qualified path representing OnlineReturnPolicy resource.
   * @returns {string} A string representing the return_policy.
   */
  matchReturnPolicyFromOnlineReturnPolicyName(onlineReturnPolicyName: string) {
    return this.pathTemplates.onlineReturnPolicyPathTemplate.match(
      onlineReturnPolicyName
    ).return_policy;
  }

  /**
   * Return a fully-qualified program resource name string.
   *
   * @param {string} account
   * @param {string} program
   * @returns {string} Resource name string.
   */
  programPath(account: string, program: string) {
    return this.pathTemplates.programPathTemplate.render({
      account: account,
      program: program,
    });
  }

  /**
   * Parse the account from Program resource.
   *
   * @param {string} programName
   *   A fully-qualified path representing Program resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromProgramName(programName: string) {
    return this.pathTemplates.programPathTemplate.match(programName).account;
  }

  /**
   * Parse the program from Program resource.
   *
   * @param {string} programName
   *   A fully-qualified path representing Program resource.
   * @returns {string} A string representing the program.
   */
  matchProgramFromProgramName(programName: string) {
    return this.pathTemplates.programPathTemplate.match(programName).program;
  }

  /**
   * Return a fully-qualified region resource name string.
   *
   * @param {string} account
   * @param {string} region
   * @returns {string} Resource name string.
   */
  regionPath(account: string, region: string) {
    return this.pathTemplates.regionPathTemplate.render({
      account: account,
      region: region,
    });
  }

  /**
   * Parse the account from Region resource.
   *
   * @param {string} regionName
   *   A fully-qualified path representing Region resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromRegionName(regionName: string) {
    return this.pathTemplates.regionPathTemplate.match(regionName).account;
  }

  /**
   * Parse the region from Region resource.
   *
   * @param {string} regionName
   *   A fully-qualified path representing Region resource.
   * @returns {string} A string representing the region.
   */
  matchRegionFromRegionName(regionName: string) {
    return this.pathTemplates.regionPathTemplate.match(regionName).region;
  }

  /**
   * Return a fully-qualified shippingSettings resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  shippingSettingsPath(account: string) {
    return this.pathTemplates.shippingSettingsPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from ShippingSettings resource.
   *
   * @param {string} shippingSettingsName
   *   A fully-qualified path representing ShippingSettings resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromShippingSettingsName(shippingSettingsName: string) {
    return this.pathTemplates.shippingSettingsPathTemplate.match(
      shippingSettingsName
    ).account;
  }

  /**
   * Return a fully-qualified termsOfService resource name string.
   *
   * @param {string} version
   * @returns {string} Resource name string.
   */
  termsOfServicePath(version: string) {
    return this.pathTemplates.termsOfServicePathTemplate.render({
      version: version,
    });
  }

  /**
   * Parse the version from TermsOfService resource.
   *
   * @param {string} termsOfServiceName
   *   A fully-qualified path representing TermsOfService resource.
   * @returns {string} A string representing the version.
   */
  matchVersionFromTermsOfServiceName(termsOfServiceName: string) {
    return this.pathTemplates.termsOfServicePathTemplate.match(
      termsOfServiceName
    ).version;
  }

  /**
   * Return a fully-qualified termsOfServiceAgreementState resource name string.
   *
   * @param {string} account
   * @param {string} identifier
   * @returns {string} Resource name string.
   */
  termsOfServiceAgreementStatePath(account: string, identifier: string) {
    return this.pathTemplates.termsOfServiceAgreementStatePathTemplate.render({
      account: account,
      identifier: identifier,
    });
  }

  /**
   * Parse the account from TermsOfServiceAgreementState resource.
   *
   * @param {string} termsOfServiceAgreementStateName
   *   A fully-qualified path representing TermsOfServiceAgreementState resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromTermsOfServiceAgreementStateName(
    termsOfServiceAgreementStateName: string
  ) {
    return this.pathTemplates.termsOfServiceAgreementStatePathTemplate.match(
      termsOfServiceAgreementStateName
    ).account;
  }

  /**
   * Parse the identifier from TermsOfServiceAgreementState resource.
   *
   * @param {string} termsOfServiceAgreementStateName
   *   A fully-qualified path representing TermsOfServiceAgreementState resource.
   * @returns {string} A string representing the identifier.
   */
  matchIdentifierFromTermsOfServiceAgreementStateName(
    termsOfServiceAgreementStateName: string
  ) {
    return this.pathTemplates.termsOfServiceAgreementStatePathTemplate.match(
      termsOfServiceAgreementStateName
    ).identifier;
  }

  /**
   * Return a fully-qualified user resource name string.
   *
   * @param {string} account
   * @param {string} email
   * @returns {string} Resource name string.
   */
  userPath(account: string, email: string) {
    return this.pathTemplates.userPathTemplate.render({
      account: account,
      email: email,
    });
  }

  /**
   * Parse the account from User resource.
   *
   * @param {string} userName
   *   A fully-qualified path representing User resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromUserName(userName: string) {
    return this.pathTemplates.userPathTemplate.match(userName).account;
  }

  /**
   * Parse the email from User resource.
   *
   * @param {string} userName
   *   A fully-qualified path representing User resource.
   * @returns {string} A string representing the email.
   */
  matchEmailFromUserName(userName: string) {
    return this.pathTemplates.userPathTemplate.match(userName).email;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.businessInfoServiceStub && !this._terminated) {
      return this.businessInfoServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
