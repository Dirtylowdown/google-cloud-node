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



'use strict';

function main(name) {
  // [START discoveryengine_v1alpha_generated_EvaluationService_GetEvaluation_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of
   *  Evaluation google.cloud.discoveryengine.v1alpha.Evaluation, such as
   *  `projects/{project}/locations/{location}/evaluations/{evaluation}`.
   *  If the caller does not have permission to access the
   *  Evaluation google.cloud.discoveryengine.v1alpha.Evaluation, regardless
   *  of whether or not it exists, a PERMISSION_DENIED error is returned.
   *  If the requested
   *  Evaluation google.cloud.discoveryengine.v1alpha.Evaluation  does not
   *  exist, a NOT_FOUND error is returned.
   */
  // const name = 'abc123'

  // Imports the Discoveryengine library
  const {EvaluationServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new EvaluationServiceClient();

  async function callGetEvaluation() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await discoveryengineClient.getEvaluation(request);
    console.log(response);
  }

  callGetEvaluation();
  // [END discoveryengine_v1alpha_generated_EvaluationService_GetEvaluation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
