// Copyright 2020 Google LLC
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
import * as autosuggestionserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
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

describe('v1alpha.AutoSuggestionServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.autoSuggestionServiceStub, undefined);
    await client.initialize();
    assert(client.autoSuggestionServiceStub);
  });

  it('has close method', () => {
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
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

  describe('suggestQueries', () => {
    it('invokes suggestQueries without error', async () => {
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.SuggestQueriesRequest()
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
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.SuggestQueriesResponse()
      );
      client.innerApiCalls.suggestQueries = stubSimpleCall(expectedResponse);
      const [response] = await client.suggestQueries(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.suggestQueries as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes suggestQueries without error using callback', async () => {
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.SuggestQueriesRequest()
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
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.SuggestQueriesResponse()
      );
      client.innerApiCalls.suggestQueries = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.suggestQueries(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse | null
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
        (client.innerApiCalls.suggestQueries as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes suggestQueries with error', async () => {
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.SuggestQueriesRequest()
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
      client.innerApiCalls.suggestQueries = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.suggestQueries(request), expectedError);
      assert(
        (client.innerApiCalls.suggestQueries as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('question', () => {
      const fakePath = '/rendered/path/question';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        question: 'questionValue',
      };
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.questionPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.questionPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('questionPath', () => {
        const result = client.questionPath(
          'projectValue',
          'locationValue',
          'questionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.questionPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromQuestionName', () => {
        const result = client.matchProjectFromQuestionName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromQuestionName', () => {
        const result = client.matchLocationFromQuestionName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchQuestionFromQuestionName', () => {
        const result = client.matchQuestionFromQuestionName(fakePath);
        assert.strictEqual(result, 'questionValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('userFeedback', () => {
      const fakePath = '/rendered/path/userFeedback';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        question: 'questionValue',
      };
      const client = new autosuggestionserviceModule.v1alpha.AutoSuggestionServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.userFeedbackPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.userFeedbackPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('userFeedbackPath', () => {
        const result = client.userFeedbackPath(
          'projectValue',
          'locationValue',
          'questionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromUserFeedbackName', () => {
        const result = client.matchProjectFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromUserFeedbackName', () => {
        const result = client.matchLocationFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchQuestionFromUserFeedbackName', () => {
        const result = client.matchQuestionFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'questionValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
