// Copyright 2023 Google LLC
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
  // [START merchantapi_v1beta_generated_RegionalInventoryService_ListRegionalInventories_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The `name` of the parent product to list `RegionalInventory`
   *  resources for. Format: `accounts/{account}/products/{product}`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of `RegionalInventory` resources for the given product
   *  to return. The service returns fewer than this value if the number of
   *  inventories for the given product is less that than the `pageSize`. The
   *  default value is 25000. The maximum value is 100000; If a value higher than
   *  the maximum is specified, then the `pageSize` will default to the maximum.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListRegionalInventories` call.
   *  Provide the page token to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListRegionalInventories`
   *  must match the call that provided the page token. The token returned as
   *  nextPageToken google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesResponse.next_page_token 
   *  in the response to the previous request.
   */
  // const pageToken = 'abc123'

  // Imports the Inventories library
  const {RegionalInventoryServiceClient} = require('@google-cloud/inventories').v1beta;

  // Instantiates a client
  const inventoriesClient = new RegionalInventoryServiceClient();

  async function callListRegionalInventories() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await inventoriesClient.listRegionalInventoriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListRegionalInventories();
  // [END merchantapi_v1beta_generated_RegionalInventoryService_ListRegionalInventories_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
