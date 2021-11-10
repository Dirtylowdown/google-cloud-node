// Copyright 2021 Google LLC
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
import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  LROperation,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1p3beta1/image_annotator_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './image_annotator_client_config.json';
import {operationsProtos} from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Service that performs Google Cloud Vision API detection tasks over client
 *  images, such as face, landmark, logo, label, and text detection. The
 *  ImageAnnotator service returns detected entities from the images.
 * @class
 * @memberof v1p3beta1
 */
export class ImageAnnotatorClient {
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
  imageAnnotatorStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ImageAnnotatorClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
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
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ImageAnnotatorClient;
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

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

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
      productPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/products/{product}'
      ),
      productSetPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/productSets/{product_set}'
      ),
      referenceImagePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/products/{product}/referenceImages/{reference_image}'
      ),
    };

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.

    this.operationsClient = this._gaxModule
      .lro({
        auth: this.auth,
        grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined,
      })
      .operationsClient(opts);
    const asyncBatchAnnotateFilesResponse = protoFilesRoot.lookup(
      '.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesResponse'
    ) as gax.protobuf.Type;
    const asyncBatchAnnotateFilesMetadata = protoFilesRoot.lookup(
      '.google.cloud.vision.v1p3beta1.OperationMetadata'
    ) as gax.protobuf.Type;

    this.descriptors.longrunning = {
      asyncBatchAnnotateFiles: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        asyncBatchAnnotateFilesResponse.decode.bind(
          asyncBatchAnnotateFilesResponse
        ),
        asyncBatchAnnotateFilesMetadata.decode.bind(
          asyncBatchAnnotateFilesMetadata
        )
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.vision.v1p3beta1.ImageAnnotator',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
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
    if (this.imageAnnotatorStub) {
      return this.imageAnnotatorStub;
    }

    // Put together the "service stub" for
    // google.cloud.vision.v1p3beta1.ImageAnnotator.
    this.imageAnnotatorStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.vision.v1p3beta1.ImageAnnotator'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.vision.v1p3beta1.ImageAnnotator,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const imageAnnotatorStubMethods = [
      'batchAnnotateImages',
      'asyncBatchAnnotateFiles',
    ];
    for (const methodName of imageAnnotatorStubMethods) {
      const callPromise = this.imageAnnotatorStub.then(
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

      const descriptor = this.descriptors.longrunning[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.imageAnnotatorStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'vision.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'vision.googleapis.com';
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
      'https://www.googleapis.com/auth/cloud-vision',
    ];
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
   * Run image detection and annotation for a batch of images.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number[]} request.requests
   *   Individual image annotation requests for this batch.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchAnnotateImagesResponse]{@link google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1p3beta1/image_annotator.batch_annotate_images.js</caption>
   * region_tag:vision_v1p3beta1_generated_ImageAnnotator_BatchAnnotateImages_async
   */
  batchAnnotateImages(
    request?: protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
      (
        | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  batchAnnotateImages(
    request: protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
      | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  batchAnnotateImages(
    request: protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest,
    callback: Callback<
      protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
      | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  batchAnnotateImages(
    request?: protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
          | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
      | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesResponse,
      (
        | protos.google.cloud.vision.v1p3beta1.IBatchAnnotateImagesRequest
        | undefined
      ),
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
    this.initialize();
    return this.innerApiCalls.batchAnnotateImages(request, options, callback);
  }

  /**
   * Run asynchronous image detection and annotation for a list of generic
   * files, such as PDF files, which may contain multiple pages and multiple
   * images per page. Progress and results can be retrieved through the
   * `google.longrunning.Operations` interface.
   * `Operation.metadata` contains `OperationMetadata` (metadata).
   * `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number[]} request.requests
   *   Required. Individual async file annotation requests for this batch.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation. Its `promise()` method returns a promise
   *   you can `await` for.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js</caption>
   * region_tag:vision_v1p3beta1_generated_ImageAnnotator_AsyncBatchAnnotateFiles_async
   */
  asyncBatchAnnotateFiles(
    request?: protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<
        protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
        protos.google.cloud.vision.v1p3beta1.IOperationMetadata
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  >;
  asyncBatchAnnotateFiles(
    request: protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesRequest,
    options: CallOptions,
    callback: Callback<
      LROperation<
        protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
        protos.google.cloud.vision.v1p3beta1.IOperationMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  asyncBatchAnnotateFiles(
    request: protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesRequest,
    callback: Callback<
      LROperation<
        protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
        protos.google.cloud.vision.v1p3beta1.IOperationMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  asyncBatchAnnotateFiles(
    request?: protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          LROperation<
            protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
            protos.google.cloud.vision.v1p3beta1.IOperationMetadata
          >,
          protos.google.longrunning.IOperation | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LROperation<
        protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
        protos.google.cloud.vision.v1p3beta1.IOperationMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<
        protos.google.cloud.vision.v1p3beta1.IAsyncBatchAnnotateFilesResponse,
        protos.google.cloud.vision.v1p3beta1.IOperationMetadata
      >,
      protos.google.longrunning.IOperation | undefined,
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
    this.initialize();
    return this.innerApiCalls.asyncBatchAnnotateFiles(
      request,
      options,
      callback
    );
  }
  /**
   * Check the status of the long running operation returned by `asyncBatchAnnotateFiles()`.
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js</caption>
   * region_tag:vision_v1p3beta1_generated_ImageAnnotator_AsyncBatchAnnotateFiles_async
   */
  async checkAsyncBatchAnnotateFilesProgress(
    name: string
  ): Promise<
    LROperation<
      protos.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesResponse,
      protos.google.cloud.vision.v1p3beta1.OperationMetadata
    >
  > {
    const request = new operationsProtos.google.longrunning.GetOperationRequest(
      {name}
    );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(
      operation,
      this.descriptors.longrunning.asyncBatchAnnotateFiles,
      gax.createDefaultBackoffSettings()
    );
    return decodeOperation as LROperation<
      protos.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesResponse,
      protos.google.cloud.vision.v1p3beta1.OperationMetadata
    >;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified product resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} product
   * @returns {string} Resource name string.
   */
  productPath(project: string, location: string, product: string) {
    return this.pathTemplates.productPathTemplate.render({
      project: project,
      location: location,
      product: product,
    });
  }

  /**
   * Parse the project from Product resource.
   *
   * @param {string} productName
   *   A fully-qualified path representing Product resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProductName(productName: string) {
    return this.pathTemplates.productPathTemplate.match(productName).project;
  }

  /**
   * Parse the location from Product resource.
   *
   * @param {string} productName
   *   A fully-qualified path representing Product resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProductName(productName: string) {
    return this.pathTemplates.productPathTemplate.match(productName).location;
  }

  /**
   * Parse the product from Product resource.
   *
   * @param {string} productName
   *   A fully-qualified path representing Product resource.
   * @returns {string} A string representing the product.
   */
  matchProductFromProductName(productName: string) {
    return this.pathTemplates.productPathTemplate.match(productName).product;
  }

  /**
   * Return a fully-qualified productSet resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} product_set
   * @returns {string} Resource name string.
   */
  productSetPath(project: string, location: string, productSet: string) {
    return this.pathTemplates.productSetPathTemplate.render({
      project: project,
      location: location,
      product_set: productSet,
    });
  }

  /**
   * Parse the project from ProductSet resource.
   *
   * @param {string} productSetName
   *   A fully-qualified path representing ProductSet resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProductSetName(productSetName: string) {
    return this.pathTemplates.productSetPathTemplate.match(productSetName)
      .project;
  }

  /**
   * Parse the location from ProductSet resource.
   *
   * @param {string} productSetName
   *   A fully-qualified path representing ProductSet resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProductSetName(productSetName: string) {
    return this.pathTemplates.productSetPathTemplate.match(productSetName)
      .location;
  }

  /**
   * Parse the product_set from ProductSet resource.
   *
   * @param {string} productSetName
   *   A fully-qualified path representing ProductSet resource.
   * @returns {string} A string representing the product_set.
   */
  matchProductSetFromProductSetName(productSetName: string) {
    return this.pathTemplates.productSetPathTemplate.match(productSetName)
      .product_set;
  }

  /**
   * Return a fully-qualified referenceImage resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} product
   * @param {string} reference_image
   * @returns {string} Resource name string.
   */
  referenceImagePath(
    project: string,
    location: string,
    product: string,
    referenceImage: string
  ) {
    return this.pathTemplates.referenceImagePathTemplate.render({
      project: project,
      location: location,
      product: product,
      reference_image: referenceImage,
    });
  }

  /**
   * Parse the project from ReferenceImage resource.
   *
   * @param {string} referenceImageName
   *   A fully-qualified path representing ReferenceImage resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromReferenceImageName(referenceImageName: string) {
    return this.pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).project;
  }

  /**
   * Parse the location from ReferenceImage resource.
   *
   * @param {string} referenceImageName
   *   A fully-qualified path representing ReferenceImage resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromReferenceImageName(referenceImageName: string) {
    return this.pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).location;
  }

  /**
   * Parse the product from ReferenceImage resource.
   *
   * @param {string} referenceImageName
   *   A fully-qualified path representing ReferenceImage resource.
   * @returns {string} A string representing the product.
   */
  matchProductFromReferenceImageName(referenceImageName: string) {
    return this.pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).product;
  }

  /**
   * Parse the reference_image from ReferenceImage resource.
   *
   * @param {string} referenceImageName
   *   A fully-qualified path representing ReferenceImage resource.
   * @returns {string} A string representing the reference_image.
   */
  matchReferenceImageFromReferenceImageName(referenceImageName: string) {
    return this.pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).reference_image;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.imageAnnotatorStub!.then(stub => {
        this._terminated = true;
        stub.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
import {FeaturesMethod} from '../helpers';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageAnnotatorClient extends FeaturesMethod {}
