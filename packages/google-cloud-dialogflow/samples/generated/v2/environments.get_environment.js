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
  // [START dialogflow_v2_generated_Environments_GetEnvironment_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the environment.
   *  Supported formats:
   *  - `projects/<Project ID>/agent/environments/<Environment ID>`
   *  - `projects/<Project ID>/locations/<Location
   *    ID>/agent/environments/<Environment ID>`
   *  The environment ID for the default environment is `-`.
   */
  // const name = 'abc123'

  // Imports the Dialogflow library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EnvironmentsClient();

  async function callGetEnvironment() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dialogflowClient.getEnvironment(request);
    console.log(response);
  }

  callGetEnvironment();
  // [END dialogflow_v2_generated_Environments_GetEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
