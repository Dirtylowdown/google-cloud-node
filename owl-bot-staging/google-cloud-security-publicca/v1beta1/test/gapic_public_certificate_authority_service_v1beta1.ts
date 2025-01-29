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
import * as publiccertificateauthorityserviceModule from '../src';

import {protobuf} from 'google-gax';

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

describe('v1beta1.PublicCertificateAuthorityServiceClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'publicca.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient.servicePath;
                assert.strictEqual(servicePath, 'publicca.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'publicca.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'publicca.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'publicca.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'publicca.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'publicca.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.publicCertificateAuthorityServiceStub, undefined);
            await client.initialize();
            assert(client.publicCertificateAuthorityServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.publicCertificateAuthorityServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.publicCertificateAuthorityServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
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
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
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

    describe('createExternalAccountKey', () => {
        it('invokes createExternalAccountKey without error', async () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.ExternalAccountKey()
            );
            client.innerApiCalls.createExternalAccountKey = stubSimpleCall(expectedResponse);
            const [response] = await client.createExternalAccountKey(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createExternalAccountKey without error using callback', async () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.ExternalAccountKey()
            );
            client.innerApiCalls.createExternalAccountKey = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createExternalAccountKey(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.security.publicca.v1beta1.IExternalAccountKey|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createExternalAccountKey with error', async () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.createExternalAccountKey = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createExternalAccountKey(request), expectedError);
            const actualRequest = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createExternalAccountKey as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createExternalAccountKey with closed client', async () => {
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.createExternalAccountKey(request), expectedError);
        });
    });

    describe('Path templates', () => {

        describe('externalAccountKey', () => {
            const fakePath = "/rendered/path/externalAccountKey";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                external_account_key: "externalAccountKeyValue",
            };
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.externalAccountKeyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.externalAccountKeyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('externalAccountKeyPath', () => {
                const result = client.externalAccountKeyPath("projectValue", "locationValue", "externalAccountKeyValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.externalAccountKeyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromExternalAccountKeyName', () => {
                const result = client.matchProjectFromExternalAccountKeyName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.externalAccountKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromExternalAccountKeyName', () => {
                const result = client.matchLocationFromExternalAccountKeyName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.externalAccountKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchExternalAccountKeyFromExternalAccountKeyName', () => {
                const result = client.matchExternalAccountKeyFromExternalAccountKeyName(fakePath);
                assert.strictEqual(result, "externalAccountKeyValue");
                assert((client.pathTemplates.externalAccountKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('location', () => {
            const fakePath = "/rendered/path/location";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
            };
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.locationPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.locationPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('locationPath', () => {
                const result = client.locationPath("projectValue", "locationValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.locationPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromLocationName', () => {
                const result = client.matchProjectFromLocationName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.locationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromLocationName', () => {
                const result = client.matchLocationFromLocationName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.locationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('project', () => {
            const fakePath = "/rendered/path/project";
            const expectedParameters = {
                project: "projectValue",
            };
            const client = new publiccertificateauthorityserviceModule.v1beta1.PublicCertificateAuthorityServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectPath', () => {
                const result = client.projectPath("projectValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectName', () => {
                const result = client.matchProjectFromProjectName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
