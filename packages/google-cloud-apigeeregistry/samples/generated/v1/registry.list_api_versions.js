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
  // [START apigeeregistry_v1_generated_Registry_ListApiVersions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of versions.
   *  Format: `projects/* /locations/* /apis/*`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of versions to return.
   *  The service may return fewer than this value.
   *  If unspecified, at most 50 values will be returned.
   *  The maximum is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListApiVersions` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListApiVersions` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  An expression that can be used to filter the list. Filters use the Common
   *  Expression Language and can refer to all message fields.
   */
  // const filter = 'abc123'

  // Imports the Apigeeregistry library
  const {RegistryClient} = require('@google-cloud/apigee-registry').v1;

  // Instantiates a client
  const apigeeregistryClient = new RegistryClient();

  async function callListApiVersions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = apigeeregistryClient.listApiVersionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListApiVersions();
  // [END apigeeregistry_v1_generated_Registry_ListApiVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
