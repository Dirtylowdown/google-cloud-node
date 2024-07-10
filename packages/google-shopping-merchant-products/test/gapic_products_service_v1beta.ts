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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as productsserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1beta.ProductsServiceClient', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath =
          productsserviceModule.v1beta.ProductsServiceClient.servicePath;
        assert.strictEqual(servicePath, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          productsserviceModule.v1beta.ProductsServiceClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'merchantapi.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        universe_domain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'merchantapi.example.com');
    });

    if (typeof process === 'object' && 'env' in process) {
      describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
        it('sets apiEndpoint from environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client =
            new productsserviceModule.v1beta.ProductsServiceClient();
          const servicePath = client.apiEndpoint;
          assert.strictEqual(servicePath, 'merchantapi.example.com');
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });

        it('value configured in code has priority over environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client = new productsserviceModule.v1beta.ProductsServiceClient(
            {universeDomain: 'configured.example.com'}
          );
          const servicePath = client.apiEndpoint;
          assert.strictEqual(servicePath, 'merchantapi.configured.example.com');
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });
      });
    }
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new productsserviceModule.v1beta.ProductsServiceClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port = productsserviceModule.v1beta.ProductsServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.productsServiceStub, undefined);
      await client.initialize();
      assert(client.productsServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.productsServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.productsServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('getProduct', () => {
    it('invokes getProduct without error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.GetProductRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.GetProductRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.Product()
      );
      client.innerApiCalls.getProduct = stubSimpleCall(expectedResponse);
      const [response] = await client.getProduct(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getProduct without error using callback', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.GetProductRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.GetProductRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.Product()
      );
      client.innerApiCalls.getProduct =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getProduct(
          request,
          (
            err?: Error | null,
            result?: protos.google.shopping.merchant.products.v1beta.IProduct | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getProduct with error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.GetProductRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.GetProductRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getProduct = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getProduct(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getProduct as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getProduct with closed client', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.GetProductRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.GetProductRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getProduct(request), expectedError);
    });
  });

  describe('listProducts', () => {
    it('invokes listProducts without error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
      ];
      client.innerApiCalls.listProducts = stubSimpleCall(expectedResponse);
      const [response] = await client.listProducts(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listProducts without error using callback', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
      ];
      client.innerApiCalls.listProducts =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listProducts(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.shopping.merchant.products.v1beta.IProduct[]
              | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listProducts with error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listProducts = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listProducts(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listProducts as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listProductsStream without error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
      ];
      client.descriptors.page.listProducts.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listProductsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.shopping.merchant.products.v1beta.Product[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.shopping.merchant.products.v1beta.Product
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listProducts.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listProducts, request)
      );
      assert(
        (client.descriptors.page.listProducts.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('invokes listProductsStream with error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listProducts.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listProductsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.shopping.merchant.products.v1beta.Product[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.shopping.merchant.products.v1beta.Product
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listProducts.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listProducts, request)
      );
      assert(
        (client.descriptors.page.listProducts.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('uses async iteration with listProducts without error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.products.v1beta.Product()
        ),
      ];
      client.descriptors.page.listProducts.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.shopping.merchant.products.v1beta.IProduct[] =
        [];
      const iterable = client.listProductsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listProducts.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listProducts.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('uses async iteration with listProducts with error', async () => {
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.products.v1beta.ListProductsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.products.v1beta.ListProductsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listProducts.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listProductsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.shopping.merchant.products.v1beta.IProduct[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listProducts.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listProducts.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });
  });

  describe('Path templates', () => {
    describe('account', () => {
      const fakePath = '/rendered/path/account';
      const expectedParameters = {
        account: 'accountValue',
      };
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.accountPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.accountPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('accountPath', () => {
        const result = client.accountPath('accountValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.accountPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromAccountName', () => {
        const result = client.matchAccountFromAccountName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.accountPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('product', () => {
      const fakePath = '/rendered/path/product';
      const expectedParameters = {
        account: 'accountValue',
        product: 'productValue',
      };
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.productPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.productPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('productPath', () => {
        const result = client.productPath('accountValue', 'productValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.productPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromProductName', () => {
        const result = client.matchAccountFromProductName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchProductFromProductName', () => {
        const result = client.matchProductFromProductName(fakePath);
        assert.strictEqual(result, 'productValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('productInput', () => {
      const fakePath = '/rendered/path/productInput';
      const expectedParameters = {
        account: 'accountValue',
        productinput: 'productinputValue',
      };
      const client = new productsserviceModule.v1beta.ProductsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.productInputPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.productInputPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('productInputPath', () => {
        const result = client.productInputPath(
          'accountValue',
          'productinputValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.productInputPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromProductInputName', () => {
        const result = client.matchAccountFromProductInputName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.productInputPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchProductinputFromProductInputName', () => {
        const result = client.matchProductinputFromProductInputName(fakePath);
        assert.strictEqual(result, 'productinputValue');
        assert(
          (client.pathTemplates.productInputPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
