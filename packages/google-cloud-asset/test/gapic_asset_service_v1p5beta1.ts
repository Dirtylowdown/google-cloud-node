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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as assetserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

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

describe('v1p5beta1.AssetServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      assetserviceModule.v1p5beta1.AssetServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      assetserviceModule.v1p5beta1.AssetServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = assetserviceModule.v1p5beta1.AssetServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.assetServiceStub, undefined);
    await client.initialize();
    assert(client.assetServiceStub);
  });

  it('has close method', () => {
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
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
    const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
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

  describe('listAssets', () => {
    it('invokes listAssets without error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
      ];
      client.innerApiCalls.listAssets = stubSimpleCall(expectedResponse);
      const [response] = await client.listAssets(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listAssets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listAssets without error using callback', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
      ];
      client.innerApiCalls.listAssets =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listAssets(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.asset.v1p5beta1.IAsset[] | null
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
      assert(
        (client.innerApiCalls.listAssets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listAssets with error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listAssets = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listAssets(request), expectedError);
      assert(
        (client.innerApiCalls.listAssets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listAssetsStream without error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
      ];
      client.descriptors.page.listAssets.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listAssetsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p5beta1.Asset[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.asset.v1p5beta1.Asset) => {
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
        (client.descriptors.page.listAssets.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listAssets, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listAssets.createStream as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listAssetsStream with error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listAssets.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listAssetsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p5beta1.Asset[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.asset.v1p5beta1.Asset) => {
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
        (client.descriptors.page.listAssets.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listAssets, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listAssets.createStream as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listAssets without error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
        generateSampleMessage(new protos.google.cloud.asset.v1p5beta1.Asset()),
      ];
      client.descriptors.page.listAssets.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.asset.v1p5beta1.IAsset[] = [];
      const iterable = client.listAssetsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listAssets.asyncIterate as SinonStub).getCall(
          0
        ).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listAssets.asyncIterate as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listAssets with error', async () => {
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p5beta1.ListAssetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listAssets.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listAssetsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.asset.v1p5beta1.IAsset[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listAssets.asyncIterate as SinonStub).getCall(
          0
        ).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listAssets.asyncIterate as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('accessLevel', () => {
      const fakePath = '/rendered/path/accessLevel';
      const expectedParameters = {
        access_policy: 'accessPolicyValue',
        access_level: 'accessLevelValue',
      };
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.accessLevelPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.accessLevelPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('accessLevelPath', () => {
        const result = client.accessLevelPath(
          'accessPolicyValue',
          'accessLevelValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.accessLevelPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccessPolicyFromAccessLevelName', () => {
        const result = client.matchAccessPolicyFromAccessLevelName(fakePath);
        assert.strictEqual(result, 'accessPolicyValue');
        assert(
          (client.pathTemplates.accessLevelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAccessLevelFromAccessLevelName', () => {
        const result = client.matchAccessLevelFromAccessLevelName(fakePath);
        assert.strictEqual(result, 'accessLevelValue');
        assert(
          (client.pathTemplates.accessLevelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('accessPolicy', () => {
      const fakePath = '/rendered/path/accessPolicy';
      const expectedParameters = {
        access_policy: 'accessPolicyValue',
      };
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.accessPolicyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.accessPolicyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('accessPolicyPath', () => {
        const result = client.accessPolicyPath('accessPolicyValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.accessPolicyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccessPolicyFromAccessPolicyName', () => {
        const result = client.matchAccessPolicyFromAccessPolicyName(fakePath);
        assert.strictEqual(result, 'accessPolicyValue');
        assert(
          (client.pathTemplates.accessPolicyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('servicePerimeter', () => {
      const fakePath = '/rendered/path/servicePerimeter';
      const expectedParameters = {
        access_policy: 'accessPolicyValue',
        service_perimeter: 'servicePerimeterValue',
      };
      const client = new assetserviceModule.v1p5beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.servicePerimeterPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.servicePerimeterPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('servicePerimeterPath', () => {
        const result = client.servicePerimeterPath(
          'accessPolicyValue',
          'servicePerimeterValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.servicePerimeterPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccessPolicyFromServicePerimeterName', () => {
        const result =
          client.matchAccessPolicyFromServicePerimeterName(fakePath);
        assert.strictEqual(result, 'accessPolicyValue');
        assert(
          (client.pathTemplates.servicePerimeterPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchServicePerimeterFromServicePerimeterName', () => {
        const result =
          client.matchServicePerimeterFromServicePerimeterName(fakePath);
        assert.strictEqual(result, 'servicePerimeterValue');
        assert(
          (client.pathTemplates.servicePerimeterPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
