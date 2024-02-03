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
import * as iamcredentialsModule from '../src';

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

describe('v1.IAMCredentialsClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient();
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'iamcredentials.googleapis.com');
    });

    it('has apiEndpoint', () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'iamcredentials.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process !== 'undefined' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath =
          iamcredentialsModule.v1.IAMCredentialsClient.servicePath;
        assert.strictEqual(servicePath, 'iamcredentials.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          iamcredentialsModule.v1.IAMCredentialsClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'iamcredentials.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets servicePath according to universe domain camelCase', () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'iamcredentials.example.com');
    });

    it('sets servicePath according to universe domain snakeCase', () => {
      const client = new iamcredentialsModule.v1.IAMCredentialsClient({
        universe_domain: 'example.com',
      });
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'iamcredentials.example.com');
    });
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new iamcredentialsModule.v1.IAMCredentialsClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateAccessTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateAccessTokenResponse()
      );
      client.innerApiCalls.generateAccessToken =
        stubSimpleCall(expectedResponse);
      const [response] = await client.generateAccessToken(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateAccessTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
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
      const actualRequest = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateAccessTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.generateAccessToken = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.generateAccessToken(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateAccessToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateAccessTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateIdTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.GenerateIdTokenResponse()
      );
      client.innerApiCalls.generateIdToken = stubSimpleCall(expectedResponse);
      const [response] = await client.generateIdToken(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateIdTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
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
      const actualRequest = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateIdTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.generateIdToken = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.generateIdToken(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateIdToken as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.GenerateIdTokenRequest',
        ['name']
      );
      request.name = defaultValue1;
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignBlobRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignBlobResponse()
      );
      client.innerApiCalls.signBlob = stubSimpleCall(expectedResponse);
      const [response] = await client.signBlob(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignBlobRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
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
      const actualRequest = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignBlobRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.signBlob = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.signBlob(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signBlob as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignBlobRequest',
        ['name']
      );
      request.name = defaultValue1;
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignJwtRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.credentials.v1.SignJwtResponse()
      );
      client.innerApiCalls.signJwt = stubSimpleCall(expectedResponse);
      const [response] = await client.signJwt(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.signJwt as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signJwt as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignJwtRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
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
      const actualRequest = (client.innerApiCalls.signJwt as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signJwt as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignJwtRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.signJwt = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.signJwt(request), expectedError);
      const actualRequest = (client.innerApiCalls.signJwt as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.signJwt as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
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
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.credentials.v1.SignJwtRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.signJwt(request), expectedError);
    });
  });
});
