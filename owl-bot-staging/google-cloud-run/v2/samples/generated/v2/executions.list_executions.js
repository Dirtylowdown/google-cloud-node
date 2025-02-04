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

function main(parent) {
  // [START run_v2_generated_Executions_ListExecutions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Execution from which the Executions should be listed.
   *  To list all Executions across Jobs, use "-" instead of Job name.
   *  Format: `projects/{project}/locations/{location}/jobs/{job}`, where
   *  `{project}` can be project id or number.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of Executions to return in this call.
   */
  // const pageSize = 1234
  /**
   *  A page token received from a previous call to ListExecutions.
   *  All other parameters must match.
   */
  // const pageToken = 'abc123'
  /**
   *  If true, returns deleted (but unexpired) resources along with active ones.
   */
  // const showDeleted = true

  // Imports the Run library
  const {ExecutionsClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new ExecutionsClient();

  async function callListExecutions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = runClient.listExecutionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListExecutions();
  // [END run_v2_generated_Executions_ListExecutions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
