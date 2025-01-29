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
  // [START telcoautomation_v1alpha1_generated_TelcoAutomation_ListDeploymentRevisions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the deployment to list revisions for.
   */
  // const name = 'abc123'
  /**
   *  Optional. The maximum number of revisions to return per page.
   */
  // const pageSize = 1234
  /**
   *  Optional. The page token, received from a previous ListDeploymentRevisions
   *  call Provide this to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'

  // Imports the Telcoautomation library
  const {TelcoAutomationClient} = require('@google-cloud/telcoautomation').v1alpha1;

  // Instantiates a client
  const telcoautomationClient = new TelcoAutomationClient();

  async function callListDeploymentRevisions() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const iterable = telcoautomationClient.listDeploymentRevisionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDeploymentRevisions();
  // [END telcoautomation_v1alpha1_generated_TelcoAutomation_ListDeploymentRevisions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
