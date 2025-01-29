// Copyright 2025 Google LLC
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
import * as quotaserviceModule from '../src';

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

describe('v1beta.QuotaServiceClient', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient();
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
          quotaserviceModule.v1beta.QuotaServiceClient.servicePath;
        assert.strictEqual(servicePath, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          quotaserviceModule.v1beta.QuotaServiceClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'merchantapi.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
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
          const client = new quotaserviceModule.v1beta.QuotaServiceClient();
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
          const client = new quotaserviceModule.v1beta.QuotaServiceClient({
            universeDomain: 'configured.example.com',
          });
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
        new quotaserviceModule.v1beta.QuotaServiceClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port = quotaserviceModule.v1beta.QuotaServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.quotaServiceStub, undefined);
      await client.initialize();
      assert(client.quotaServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.quotaServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.quotaServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
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
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
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

  describe('listQuotaGroups', () => {
    it('invokes listQuotaGroups without error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
      ];
      client.innerApiCalls.listQuotaGroups = stubSimpleCall(expectedResponse);
      const [response] = await client.listQuotaGroups(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listQuotaGroups without error using callback', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
      ];
      client.innerApiCalls.listQuotaGroups =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listQuotaGroups(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.shopping.merchant.quota.v1beta.IQuotaGroup[]
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
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listQuotaGroups with error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listQuotaGroups = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listQuotaGroups(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listQuotaGroups as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listQuotaGroupsStream without error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
      ];
      client.descriptors.page.listQuotaGroups.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listQuotaGroupsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.shopping.merchant.quota.v1beta.QuotaGroup[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.shopping.merchant.quota.v1beta.QuotaGroup
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
        (client.descriptors.page.listQuotaGroups.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listQuotaGroups, request)
      );
      assert(
        (client.descriptors.page.listQuotaGroups.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('invokes listQuotaGroupsStream with error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listQuotaGroups.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listQuotaGroupsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.shopping.merchant.quota.v1beta.QuotaGroup[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.shopping.merchant.quota.v1beta.QuotaGroup
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
        (client.descriptors.page.listQuotaGroups.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listQuotaGroups, request)
      );
      assert(
        (client.descriptors.page.listQuotaGroups.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('uses async iteration with listQuotaGroups without error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
        generateSampleMessage(
          new protos.google.shopping.merchant.quota.v1beta.QuotaGroup()
        ),
      ];
      client.descriptors.page.listQuotaGroups.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.shopping.merchant.quota.v1beta.IQuotaGroup[] =
        [];
      const iterable = client.listQuotaGroupsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listQuotaGroups.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listQuotaGroups.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers[
            'x-goog-request-params'
          ].includes(expectedHeaderRequestParams)
      );
    });

    it('uses async iteration with listQuotaGroups with error', async () => {
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1 ?? ''}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listQuotaGroups.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listQuotaGroupsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.shopping.merchant.quota.v1beta.IQuotaGroup[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listQuotaGroups.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listQuotaGroups.asyncIterate as SinonStub)
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
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
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

    describe('quotaGroup', () => {
      const fakePath = '/rendered/path/quotaGroup';
      const expectedParameters = {
        account: 'accountValue',
        group: 'groupValue',
      };
      const client = new quotaserviceModule.v1beta.QuotaServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.quotaGroupPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.quotaGroupPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('quotaGroupPath', () => {
        const result = client.quotaGroupPath('accountValue', 'groupValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.quotaGroupPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromQuotaGroupName', () => {
        const result = client.matchAccountFromQuotaGroupName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.quotaGroupPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchGroupFromQuotaGroupName', () => {
        const result = client.matchGroupFromQuotaGroupName(fakePath);
        assert.strictEqual(result, 'groupValue');
        assert(
          (client.pathTemplates.quotaGroupPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
