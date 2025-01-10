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

function main() {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_DeleteConnectedSiteTag_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The Universal Analytics property to delete connected site tags for.
   *  This API does not support GA4 properties.
   *  Format: properties/{universalAnalyticsPropertyId}
   *  Example: properties/1234
   */
  // const property = 'abc123'
  /**
   *  Tag ID to forward events to. Also known as the Measurement ID, or the
   *  "G-ID"  (For example: G-12345).
   */
  // const tagId = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callDeleteConnectedSiteTag() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await adminClient.deleteConnectedSiteTag(request);
    console.log(response);
  }

  callDeleteConnectedSiteTag();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_DeleteConnectedSiteTag_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
