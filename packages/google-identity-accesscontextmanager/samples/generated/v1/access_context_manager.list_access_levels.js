// Copyright 2024 Google LLC
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
  // [START accesscontextmanager_v1_generated_AccessContextManager_ListAccessLevels_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for the access policy to list Access Levels 
   *  google.identity.accesscontextmanager.v1.AccessLevel  from.
   *  Format:
   *  `accessPolicies/{policy_id}`
   */
  // const parent = 'abc123'
  /**
   *  Number of Access Levels 
   *  google.identity.accesscontextmanager.v1.AccessLevel  to include in
   *  the list. Default 100.
   */
  // const pageSize = 1234
  /**
   *  Next page token for the next batch of Access Level 
   *  google.identity.accesscontextmanager.v1.AccessLevel  instances.
   *  Defaults to the first page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Whether to return `BasicLevels` in the Cloud Common Expression language, as
   *  `CustomLevels`, rather than as `BasicLevels`. Defaults to returning
   *  `AccessLevels` in the format they were defined.
   */
  // const accessLevelFormat = {}

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} = require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callListAccessLevels() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = accesscontextmanagerClient.listAccessLevelsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListAccessLevels();
  // [END accesscontextmanager_v1_generated_AccessContextManager_ListAccessLevels_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
