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
  // [START analyticsadmin_v1beta_generated_AnalyticsAdminService_ListKeyEvents_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent property.
   *  Example: 'properties/123'
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of resources to return.
   *  If unspecified, at most 50 resources will be returned.
   *  The maximum value is 200; (higher values will be coerced to the maximum)
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListKeyEvents` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListKeyEvents`
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-cloud/admin').v1beta;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callListKeyEvents() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = adminClient.listKeyEventsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListKeyEvents();
  // [END analyticsadmin_v1beta_generated_AnalyticsAdminService_ListKeyEvents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
