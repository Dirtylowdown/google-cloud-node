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

function main(parent, api, apiId) {
  // [START apigeeregistry_v1_generated_Registry_CreateApi_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of APIs.
   *  Format: `projects/* /locations/*`
   */
  // const parent = 'abc123'
  /**
   *  Required. The API to create.
   */
  // const api = {}
  /**
   *  Required. The ID to use for the API, which will become the final component of
   *  the API's resource name.
   *  This value should be 4-63 characters, and valid characters
   *  are /[a-z][0-9]-/.
   *  Following AIP-162, IDs must not have the form of a UUID.
   */
  // const apiId = 'abc123'

  // Imports the Apigeeregistry library
  const {RegistryClient} = require('@google-cloud/apigee-registry').v1;

  // Instantiates a client
  const apigeeregistryClient = new RegistryClient();

  async function callCreateApi() {
    // Construct request
    const request = {
      parent,
      api,
      apiId,
    };

    // Run request
    const response = await apigeeregistryClient.createApi(request);
    console.log(response);
  }

  callCreateApi();
  // [END apigeeregistry_v1_generated_Registry_CreateApi_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
