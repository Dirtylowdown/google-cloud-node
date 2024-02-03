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
import * as placesModule from '../src';

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

describe('v1.PlacesClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const client = new placesModule.v1.PlacesClient();
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'places.googleapis.com');
    });

    it('has apiEndpoint', () => {
      const client = new placesModule.v1.PlacesClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'places.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new placesModule.v1.PlacesClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process !== 'undefined' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath = placesModule.v1.PlacesClient.servicePath;
        assert.strictEqual(servicePath, 'places.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint = placesModule.v1.PlacesClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'places.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets servicePath according to universe domain camelCase', () => {
      const client = new placesModule.v1.PlacesClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'places.example.com');
    });

    it('sets servicePath according to universe domain snakeCase', () => {
      const client = new placesModule.v1.PlacesClient({
        universe_domain: 'example.com',
      });
      const servicePath = client.servicePath;
      assert.strictEqual(servicePath, 'places.example.com');
    });
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new placesModule.v1.PlacesClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port = placesModule.v1.PlacesClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new placesModule.v1.PlacesClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new placesModule.v1.PlacesClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.placesStub, undefined);
      await client.initialize();
      assert(client.placesStub);
    });

    it('has close method for the initialized client', done => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.placesStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.placesStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new placesModule.v1.PlacesClient({
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
      const client = new placesModule.v1.PlacesClient({
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

  describe('searchNearby', () => {
    it('invokes searchNearby without error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyResponse()
      );
      client.innerApiCalls.searchNearby = stubSimpleCall(expectedResponse);
      const [response] = await client.searchNearby(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes searchNearby without error using callback', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyResponse()
      );
      client.innerApiCalls.searchNearby =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchNearby(
          request,
          (
            err?: Error | null,
            result?: protos.google.maps.places.v1.ISearchNearbyResponse | null
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
    });

    it('invokes searchNearby with error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.searchNearby = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchNearby(request), expectedError);
    });

    it('invokes searchNearby with closed client', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchNearbyRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.searchNearby(request), expectedError);
    });
  });

  describe('searchText', () => {
    it('invokes searchText without error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextResponse()
      );
      client.innerApiCalls.searchText = stubSimpleCall(expectedResponse);
      const [response] = await client.searchText(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes searchText without error using callback', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextResponse()
      );
      client.innerApiCalls.searchText =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchText(
          request,
          (
            err?: Error | null,
            result?: protos.google.maps.places.v1.ISearchTextResponse | null
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
    });

    it('invokes searchText with error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.searchText = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchText(request), expectedError);
    });

    it('invokes searchText with closed client', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.SearchTextRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.searchText(request), expectedError);
    });
  });

  describe('getPhotoMedia', () => {
    it('invokes getPhotoMedia without error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPhotoMediaRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPhotoMediaRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.PhotoMedia()
      );
      client.innerApiCalls.getPhotoMedia = stubSimpleCall(expectedResponse);
      const [response] = await client.getPhotoMedia(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPhotoMedia without error using callback', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPhotoMediaRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPhotoMediaRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.PhotoMedia()
      );
      client.innerApiCalls.getPhotoMedia =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getPhotoMedia(
          request,
          (
            err?: Error | null,
            result?: protos.google.maps.places.v1.IPhotoMedia | null
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
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPhotoMedia with error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPhotoMediaRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPhotoMediaRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getPhotoMedia = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getPhotoMedia(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPhotoMedia as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPhotoMedia with closed client', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPhotoMediaRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPhotoMediaRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getPhotoMedia(request), expectedError);
    });
  });

  describe('getPlace', () => {
    it('invokes getPlace without error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPlaceRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPlaceRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.Place()
      );
      client.innerApiCalls.getPlace = stubSimpleCall(expectedResponse);
      const [response] = await client.getPlace(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPlace without error using callback', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPlaceRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPlaceRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.maps.places.v1.Place()
      );
      client.innerApiCalls.getPlace =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getPlace(
          request,
          (
            err?: Error | null,
            result?: protos.google.maps.places.v1.IPlace | null
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
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPlace with error', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPlaceRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPlaceRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getPlace = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.getPlace(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getPlace as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getPlace with closed client', async () => {
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.maps.places.v1.GetPlaceRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.maps.places.v1.GetPlaceRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getPlace(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('photo', () => {
      const fakePath = '/rendered/path/photo';
      const expectedParameters = {
        place: 'placeValue',
        photo: 'photoValue',
      };
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.photoPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.photoPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('photoPath', () => {
        const result = client.photoPath('placeValue', 'photoValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.photoPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPlaceFromPhotoName', () => {
        const result = client.matchPlaceFromPhotoName(fakePath);
        assert.strictEqual(result, 'placeValue');
        assert(
          (client.pathTemplates.photoPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchPhotoFromPhotoName', () => {
        const result = client.matchPhotoFromPhotoName(fakePath);
        assert.strictEqual(result, 'photoValue');
        assert(
          (client.pathTemplates.photoPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('photoMedia', () => {
      const fakePath = '/rendered/path/photoMedia';
      const expectedParameters = {
        place_id: 'placeIdValue',
        photo_reference: 'photoReferenceValue',
      };
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.photoMediaPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.photoMediaPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('photoMediaPath', () => {
        const result = client.photoMediaPath(
          'placeIdValue',
          'photoReferenceValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.photoMediaPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPlaceIdFromPhotoMediaName', () => {
        const result = client.matchPlaceIdFromPhotoMediaName(fakePath);
        assert.strictEqual(result, 'placeIdValue');
        assert(
          (client.pathTemplates.photoMediaPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchPhotoReferenceFromPhotoMediaName', () => {
        const result = client.matchPhotoReferenceFromPhotoMediaName(fakePath);
        assert.strictEqual(result, 'photoReferenceValue');
        assert(
          (client.pathTemplates.photoMediaPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('place', () => {
      const fakePath = '/rendered/path/place';
      const expectedParameters = {
        place_id: 'placeIdValue',
      };
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.placePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.placePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('placePath', () => {
        const result = client.placePath('placeIdValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.placePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPlaceIdFromPlaceName', () => {
        const result = client.matchPlaceIdFromPlaceName(fakePath);
        assert.strictEqual(result, 'placeIdValue');
        assert(
          (client.pathTemplates.placePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('review', () => {
      const fakePath = '/rendered/path/review';
      const expectedParameters = {
        place: 'placeValue',
        review: 'reviewValue',
      };
      const client = new placesModule.v1.PlacesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.reviewPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.reviewPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('reviewPath', () => {
        const result = client.reviewPath('placeValue', 'reviewValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.reviewPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPlaceFromReviewName', () => {
        const result = client.matchPlaceFromReviewName(fakePath);
        assert.strictEqual(result, 'placeValue');
        assert(
          (client.pathTemplates.reviewPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchReviewFromReviewName', () => {
        const result = client.matchReviewFromReviewName(fakePath);
        assert.strictEqual(result, 'reviewValue');
        assert(
          (client.pathTemplates.reviewPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
