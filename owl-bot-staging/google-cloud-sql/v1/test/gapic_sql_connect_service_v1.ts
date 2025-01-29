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
import * as sqlconnectserviceModule from '../src';

import {protobuf, LocationProtos} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
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
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1.SqlConnectServiceClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'sqladmin.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = sqlconnectserviceModule.v1.SqlConnectServiceClient.servicePath;
                assert.strictEqual(servicePath, 'sqladmin.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = sqlconnectserviceModule.v1.SqlConnectServiceClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'sqladmin.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'sqladmin.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'sqladmin.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'sqladmin.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'sqladmin.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new sqlconnectserviceModule.v1.SqlConnectServiceClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = sqlconnectserviceModule.v1.SqlConnectServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlConnectServiceStub, undefined);
            await client.initialize();
            assert(client.sqlConnectServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.sqlConnectServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlConnectServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
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
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
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

    describe('getConnectSettings', () => {
        it('invokes getConnectSettings without error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GetConnectSettingsRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1.ConnectSettings()
            );
            client.innerApiCalls.getConnectSettings = stubSimpleCall(expectedResponse);
            const [response] = await client.getConnectSettings(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getConnectSettings without error using callback', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GetConnectSettingsRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1.ConnectSettings()
            );
            client.innerApiCalls.getConnectSettings = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getConnectSettings(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IConnectSettings|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getConnectSettings with error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GetConnectSettingsRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.getConnectSettings = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getConnectSettings(request), expectedError);
            const actualRequest = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getConnectSettings as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getConnectSettings with closed client', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GetConnectSettingsRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GetConnectSettingsRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getConnectSettings(request), expectedError);
        });
    });

    describe('generateEphemeralCert', () => {
        it('invokes generateEphemeralCert without error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertResponse()
            );
            client.innerApiCalls.generateEphemeralCert = stubSimpleCall(expectedResponse);
            const [response] = await client.generateEphemeralCert(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateEphemeralCert without error using callback', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertResponse()
            );
            client.innerApiCalls.generateEphemeralCert = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.generateEphemeralCert(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1.IGenerateEphemeralCertResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateEphemeralCert with error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1 ?? '' }&instance=${defaultValue2 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.generateEphemeralCert = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.generateEphemeralCert(request), expectedError);
            const actualRequest = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateEphemeralCert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateEphemeralCert with closed client', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1.GenerateEphemeralCertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1.GenerateEphemeralCertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.generateEphemeralCert(request), expectedError);
        });
    });
    describe('getLocation', () => {
        it('invokes getLocation without error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
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
              new LocationProtos.google.cloud.location.Location()
            );
            client.locationsClient.getLocation = stubSimpleCall(expectedResponse);
            const response = await client.getLocation(request, expectedOptions);
            assert.deepStrictEqual(response, [expectedResponse]);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
        it('invokes getLocation without error using callback', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
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
              new LocationProtos.google.cloud.location.Location()
            );
            client.locationsClient.getLocation = sinon.stub().callsArgWith(2, null, expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getLocation(
                    request,
                    expectedOptions,
                    (
                        err?: Error | null,
                        result?: LocationProtos.google.cloud.location.ILocation | null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0));
        });
        it('invokes getLocation with error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
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
            client.locationsClient.getLocation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getLocation(request, expectedOptions), expectedError);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });
    describe('listLocationsAsync', () => {
        it('uses async iteration with listLocations without error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
                new LocationProtos.google.cloud.location.ListLocationsRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedResponse = [
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
            ];
            client.locationsClient.descriptors.page.listLocations.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: LocationProtos.google.cloud.location.ILocation[] = [];
            const iterable = client.listLocationsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'].includes(
                        expectedHeaderRequestParams
                    )
            );
        });
        it('uses async iteration with listLocations with error', async () => {
            const client = new sqlconnectserviceModule.v1.SqlConnectServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.ListLocationsRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedError = new Error('expected');
            client.locationsClient.descriptors.page.listLocations.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listLocationsAsync(request);
            await assert.rejects(async () => {
                const responses: LocationProtos.google.cloud.location.ILocation[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'].includes(
                        expectedHeaderRequestParams
                    )
            );
        });
    });
});
