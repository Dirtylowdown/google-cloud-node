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

function main(parent, requests) {
  // [START discoveryengine_v1alpha_generated_SiteSearchEngineService_BatchCreateTargetSites_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource shared by all TargetSites being created.
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`.
   *  The parent field in the CreateBookRequest messages must either be empty or
   *  match this field.
   */
  // const parent = 'abc123'
  /**
   *  Required. The request message specifying the resources to create.
   *  A maximum of 20 TargetSites can be created in a batch.
   */
  // const requests = [1,2,3,4]

  // Imports the Discoveryengine library
  const {SiteSearchEngineServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new SiteSearchEngineServiceClient();

  async function callBatchCreateTargetSites() {
    // Construct request
    const request = {
      parent,
      requests,
    };

    // Run request
    const [operation] = await discoveryengineClient.batchCreateTargetSites(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchCreateTargetSites();
  // [END discoveryengine_v1alpha_generated_SiteSearchEngineService_BatchCreateTargetSites_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
