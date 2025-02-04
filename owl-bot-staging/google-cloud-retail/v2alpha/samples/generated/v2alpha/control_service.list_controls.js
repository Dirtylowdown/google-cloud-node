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
  // [START retail_v2alpha_generated_ControlService_ListControls_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The catalog resource name. Format:
   *  `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
   *  filter google.cloud.retail.v2alpha.ListControlsRequest.filter  is unset.
   *  * List controls that are used in a single ServingConfig:
   *      'serving_config = "boosted_home_page_cvr"'
   */
  // const filter = 'abc123'

  // Imports the Retail library
  const {ControlServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new ControlServiceClient();

  async function callListControls() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = retailClient.listControlsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListControls();
  // [END retail_v2alpha_generated_ControlService_ListControls_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
