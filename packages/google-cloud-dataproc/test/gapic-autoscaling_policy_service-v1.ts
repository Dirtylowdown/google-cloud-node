// Copyright 2019 Google LLC
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

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
const autoscalingpolicyserviceModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
describe('v1.AutoscalingPolicyServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
            fallback: true,
        });
        assert(client);
    });
    describe('createAutoscalingPolicy', () => {
        it('invokes createAutoscalingPolicy without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.createAutoscalingPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes createAutoscalingPolicy with error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICreateAutoscalingPolicyRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.createAutoscalingPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('updateAutoscalingPolicy', () => {
        it('invokes updateAutoscalingPolicy without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest = {};
            request.policy = {};
            request.policy.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.updateAutoscalingPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes updateAutoscalingPolicy with error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateAutoscalingPolicyRequest = {};
            request.policy = {};
            request.policy.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.updateAutoscalingPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getAutoscalingPolicy', () => {
        it('invokes getAutoscalingPolicy without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getAutoscalingPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getAutoscalingPolicy with error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetAutoscalingPolicyRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getAutoscalingPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteAutoscalingPolicy', () => {
        it('invokes deleteAutoscalingPolicy without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteAutoscalingPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteAutoscalingPolicy with error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteAutoscalingPolicyRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteAutoscalingPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteAutoscalingPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('listAutoscalingPolicies', () => {
        it('invokes listAutoscalingPolicies without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listAutoscalingPolicies = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listAutoscalingPolicies(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listAutoscalingPoliciesStream', () => {
        it('invokes listAutoscalingPoliciesStream without error', done => {
            const client = new autoscalingpolicyserviceModule.v1.AutoscalingPolicyServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListAutoscalingPoliciesRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listAutoscalingPolicies = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listAutoscalingPoliciesStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
});
