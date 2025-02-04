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
  // [START cloudresourcemanager_v3_generated_TagKeys_GetNamespacedTagKey_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A namespaced tag key name in the format
   *  `{parentId}/{tagKeyShort}`, such as `42/foo` for a key with short name
   *  "foo" under the organization with ID 42 or `r2-d2/bar` for a key with short
   *  name "bar" under the project `r2-d2`.
   */
  // const name = 'abc123'

  // Imports the Resourcemanager library
  const {TagKeysClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagKeysClient();

  async function callGetNamespacedTagKey() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await resourcemanagerClient.getNamespacedTagKey(request);
    console.log(response);
  }

  callGetNamespacedTagKey();
  // [END cloudresourcemanager_v3_generated_TagKeys_GetNamespacedTagKey_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
