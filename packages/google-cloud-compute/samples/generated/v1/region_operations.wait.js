// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(operation, project, region) {
  // [START compute_v1_generated_RegionOperations_Wait_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the Operations resource to return.
   */
  // const operation = 'abc123'
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  Name of the region for this request.
   */
  // const region = 'us-central1'

  // Imports the Compute library
  const {RegionOperationsClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new RegionOperationsClient();

  async function callWait() {
    // Construct request
    const request = {
      operation,
      project,
      region,
    };

    // Run request
    const response = await computeClient.wait(request);
    console.log(response);
  }

  callWait();
  // [END compute_v1_generated_RegionOperations_Wait_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
