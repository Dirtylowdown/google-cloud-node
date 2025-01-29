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
  // [START artifactregistry_v1_generated_ArtifactRegistry_ListRules_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the parent repository whose rules will be listed.
   *  For example:
   *  `projects/p1/locations/us-central1/repositories/repo1`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of rules to return. Maximum page size is 1,000.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request, if any.
   */
  // const pageToken = 'abc123'

  // Imports the Artifactregistry library
  const {ArtifactRegistryClient} = require('@google-cloud/artifact-registry').v1;

  // Instantiates a client
  const artifactregistryClient = new ArtifactRegistryClient();

  async function callListRules() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = artifactregistryClient.listRulesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListRules();
  // [END artifactregistry_v1_generated_ArtifactRegistry_ListRules_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
