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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as iamcredentialsModule from '../src';

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

describe('v1.IAMCredentialsClient', () => {
  it('has servicePath', () => {
    const servicePath =
      iamcredentialsModule.v1.IAMCredentialsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      iamcredentialsModule.v1.IAMCredentialsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = iamcredentialsModule.v1.IAMCredentialsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new iamcredentialsModule.v1.IAMCredentialsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.iAMCredentialsStub, undefined);
    await client.initialize();
    assert(client.iAMCredentialsStub);
  });

  it('has close method for the initialized client', done => {
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.iAMCredentialsStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.iAMCredentialsStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
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
    const client = new iamcredentialsModule.v1.IAMCredentialsClient({
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

  describe('generateAccessToken', () => {
    it('invokes generateAccessToken without error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenResponse()
      );
      client.innerApiCalls.generateAccessToken =
        stubSimpleCall(expectedResponse);
      const [response] = await client.generateAccessToken(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.generateAccessToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes generateAccessToken without error using callback', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenResponse()
      );
      client.innerApiCalls.generateAccessToken =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.generateAccessToken(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.credentials.v1.IGenerateAccessTokenResponse | null
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
        (client.innerApiCalls.generateAccessToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes generateAccessToken with error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.generateAccessToken = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.generateAccessToken(request), expectedError);
      assert(
        (client.innerApiCalls.generateAccessToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes generateAccessToken with closed client', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.generateAccessToken(request), expectedError);
    });
  });

  describe('generateIdToken', () => {
    it('invokes generateIdToken without error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenResponse()
      );
      client.innerApiCalls.generateIdToken = stubSimpleCall(expectedResponse);
      const [response] = await client.generateIdToken(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.generateIdToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes generateIdToken without error using callback', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenResponse()
      );
      client.innerApiCalls.generateIdToken =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.generateIdToken(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.credentials.v1.IGenerateIdTokenResponse | null
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
        (client.innerApiCalls.generateIdToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes generateIdToken with error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.generateIdToken = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.generateIdToken(request), expectedError);
      assert(
        (client.innerApiCalls.generateIdToken as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes generateIdToken with closed client', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.generateIdToken(request), expectedError);
    });
  });

  describe('signBlob', () => {
    it('invokes signBlob without error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobResponse()
      );
      client.innerApiCalls.signBlob = stubSimpleCall(expectedResponse);
      const [response] = await client.signBlob(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.signBlob as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes signBlob without error using callback', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobResponse()
      );
      client.innerApiCalls.signBlob =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.signBlob(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.credentials.v1.ISignBlobResponse | null
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
        (client.innerApiCalls.signBlob as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes signBlob with error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.signBlob = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.signBlob(request), expectedError);
      assert(
        (client.innerApiCalls.signBlob as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes signBlob with closed client', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.signBlob(request), expectedError);
    });
  });

  describe('signJwt', () => {
    it('invokes signJwt without error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtResponse()
      );
      client.innerApiCalls.signJwt = stubSimpleCall(expectedResponse);
      const [response] = await client.signJwt(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.signJwt as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes signJwt without error using callback', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtResponse()
      );
      client.innerApiCalls.signJwt =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.signJwt(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.credentials.v1.ISignJwtResponse | null
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
        (client.innerApiCalls.signJwt as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes signJwt with error', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.signJwt = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.signJwt(request), expectedError);
      assert(
        (client.innerApiCalls.signJwt as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes signJwt with closed client', async () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.signJwt(request), expectedError);
    });
  });
});
