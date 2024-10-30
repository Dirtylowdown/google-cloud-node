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
  // [START discoveryengine_v1alpha_generated_ControlService_ListControls_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The data store resource name. Format:
   *  `projects/{project_number}/locations/{location_id}/collections/{collection_id}/dataStores/{data_store_id}`
   *  or
   *  `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of results to return. If unspecified, defaults
   *  to 50. Max allowed value is 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListControls` call.
   *  Provide this to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter to apply on the list results. Supported features:
   *  * List all the products under the parent branch if
   *  filter google.cloud.discoveryengine.v1alpha.ListControlsRequest.filter 
   *  is unset. Currently this field is unsupported.
   */
  // const filter = 'abc123'

  // Imports the Discoveryengine library
  const {ControlServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new ControlServiceClient();

  async function callListControls() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = discoveryengineClient.listControlsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListControls();
  // [END discoveryengine_v1alpha_generated_ControlService_ListControls_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
