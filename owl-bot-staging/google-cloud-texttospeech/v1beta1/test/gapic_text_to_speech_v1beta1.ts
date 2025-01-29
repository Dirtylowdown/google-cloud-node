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
import * as texttospeechModule from '../src';

import {PassThrough} from 'stream';

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

function stubBidiStreamingCall<ResponseType>(response?: ResponseType, error?: Error) {
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    return sinon.stub().returns(mockStream);
}

describe('v1beta1.TextToSpeechClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'texttospeech.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = texttospeechModule.v1beta1.TextToSpeechClient.servicePath;
                assert.strictEqual(servicePath, 'texttospeech.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = texttospeechModule.v1beta1.TextToSpeechClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'texttospeech.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'texttospeech.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'texttospeech.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new texttospeechModule.v1beta1.TextToSpeechClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'texttospeech.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new texttospeechModule.v1beta1.TextToSpeechClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'texttospeech.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new texttospeechModule.v1beta1.TextToSpeechClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = texttospeechModule.v1beta1.TextToSpeechClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.textToSpeechStub, undefined);
            await client.initialize();
            assert(client.textToSpeechStub);
        });

        it('has close method for the initialized client', done => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.textToSpeechStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.textToSpeechStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
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
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
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

    describe('listVoices', () => {
        it('invokes listVoices without error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesResponse()
            );
            client.innerApiCalls.listVoices = stubSimpleCall(expectedResponse);
            const [response] = await client.listVoices(request);
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes listVoices without error using callback', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesResponse()
            );
            client.innerApiCalls.listVoices = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listVoices(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.texttospeech.v1beta1.IListVoicesResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes listVoices with error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.listVoices = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listVoices(request), expectedError);
        });

        it('invokes listVoices with closed client', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.ListVoicesRequest()
            );
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.listVoices(request), expectedError);
        });
    });

    describe('synthesizeSpeech', () => {
        it('invokes synthesizeSpeech without error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse()
            );
            client.innerApiCalls.synthesizeSpeech = stubSimpleCall(expectedResponse);
            const [response] = await client.synthesizeSpeech(request);
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes synthesizeSpeech without error using callback', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse()
            );
            client.innerApiCalls.synthesizeSpeech = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.synthesizeSpeech(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.texttospeech.v1beta1.ISynthesizeSpeechResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes synthesizeSpeech with error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.synthesizeSpeech = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.synthesizeSpeech(request), expectedError);
        });

        it('invokes synthesizeSpeech with closed client', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest()
            );
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.synthesizeSpeech(request), expectedError);
        });
    });

    describe('streamingSynthesize', () => {
        it('invokes streamingSynthesize without error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.StreamingSynthesizeRequest()
            );
            
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.StreamingSynthesizeResponse()
            );
            client.innerApiCalls.streamingSynthesize = stubBidiStreamingCall(expectedResponse);
            const stream = client.streamingSynthesize();
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.cloud.texttospeech.v1beta1.StreamingSynthesizeResponse) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
                stream.write(request);
                stream.end();
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.streamingSynthesize as SinonStub)
                .getCall(0).calledWith(null));
            assert.deepStrictEqual(((stream as unknown as PassThrough)
                ._transform as SinonStub).getCall(0).args[0], request);
        });

        it('invokes streamingSynthesize with error', async () => {
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.texttospeech.v1beta1.StreamingSynthesizeRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.streamingSynthesize = stubBidiStreamingCall(undefined, expectedError);
            const stream = client.streamingSynthesize();
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.cloud.texttospeech.v1beta1.StreamingSynthesizeResponse) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
                stream.write(request);
                stream.end();
            });
            await assert.rejects(promise, expectedError);
            assert((client.innerApiCalls.streamingSynthesize as SinonStub)
                .getCall(0).calledWith(null));
            assert.deepStrictEqual(((stream as unknown as PassThrough)
                ._transform as SinonStub).getCall(0).args[0], request);
        });
    });

    describe('Path templates', () => {

        describe('model', () => {
            const fakePath = "/rendered/path/model";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                model: "modelValue",
            };
            const client = new texttospeechModule.v1beta1.TextToSpeechClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.modelPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.modelPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('modelPath', () => {
                const result = client.modelPath("projectValue", "locationValue", "modelValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.modelPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromModelName', () => {
                const result = client.matchProjectFromModelName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.modelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromModelName', () => {
                const result = client.matchLocationFromModelName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.modelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchModelFromModelName', () => {
                const result = client.matchModelFromModelName(fakePath);
                assert.strictEqual(result, "modelValue");
                assert((client.pathTemplates.modelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
