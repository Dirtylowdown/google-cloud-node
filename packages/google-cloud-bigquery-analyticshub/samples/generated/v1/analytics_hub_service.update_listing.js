// Copyright 2022 Google LLC
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

function main(updateMask, listing) {
  // [START analyticshub_v1_generated_AnalyticsHubService_UpdateListing_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Field mask specifies the fields to update in the listing resource. The
   *  fields specified in the `updateMask` are relative to the resource and are
   *  not a full request.
   */
  // const updateMask = {}
  /**
   *  Required. The listing to update.
   */
  // const listing = {}

  // Imports the Analyticshub library
  const {AnalyticsHubServiceClient} = require('@google-cloud/analyticshub').v1;

  // Instantiates a client
  const analyticshubClient = new AnalyticsHubServiceClient();

  async function callUpdateListing() {
    // Construct request
    const request = {
      updateMask,
      listing,
    };

    // Run request
    const response = await analyticshubClient.updateListing(request);
    console.log(response);
  }

  callUpdateListing();
  // [END analyticshub_v1_generated_AnalyticsHubService_UpdateListing_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
