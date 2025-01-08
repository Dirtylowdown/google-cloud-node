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

function main(scope, cryptoKey) {
  // [START kmsinventory_v1_generated_KeyTrackingService_SearchProtectedResources_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the organization.
   *  Example: organizations/123
   */
  // const scope = 'abc123'
  /**
   *  Required. The resource name of the
   *  CryptoKey google.cloud.kms.v1.CryptoKey.
   */
  // const cryptoKey = 'abc123'
  /**
   *  The maximum number of resources to return. The service may return fewer
   *  than this value.
   *  If unspecified, at most 500 resources will be returned.
   *  The maximum value is 500; values above 500 will be coerced to 500.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  KeyTrackingService.SearchProtectedResources google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  KeyTrackingService.SearchProtectedResources google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources 
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A list of resource types that this request searches for. If
   *  empty, it will search all the trackable resource
   *  types (https://cloud.google.com/kms/docs/view-key-usage#tracked-resource-types).
   *  Regular expressions are also supported. For example:
   *  * `compute.googleapis.com.*` snapshots resources whose type starts
   *  with `compute.googleapis.com`.
   *  * `.*Image` snapshots resources whose type ends with `Image`.
   *  * `.*Image.*` snapshots resources whose type contains `Image`.
   *  See RE2 (https://github.com/google/re2/wiki/Syntax) for all supported
   *  regular expression syntax. If the regular expression does not match any
   *  supported resource type, an INVALID_ARGUMENT error will be returned.
   */
  // const resourceTypes = ['abc','def']

  // Imports the Inventory library
  const {KeyTrackingServiceClient} = require('@google-cloud/kms-inventory').v1;

  // Instantiates a client
  const inventoryClient = new KeyTrackingServiceClient();

  async function callSearchProtectedResources() {
    // Construct request
    const request = {
      scope,
      cryptoKey,
    };

    // Run request
    const iterable = inventoryClient.searchProtectedResourcesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchProtectedResources();
  // [END kmsinventory_v1_generated_KeyTrackingService_SearchProtectedResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
