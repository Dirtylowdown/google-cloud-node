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
  // [START servicehealth_v1_generated_ServiceHealth_GetOrganizationEvent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Unique name of the event in this scope including organization and
   *  event ID using the form
   *  `organizations/{organization_id}/locations/locations/global/organizationEvents/{event_id}`.
   *  `organization_id` - ID (number) of the project that contains the event. To
   *  get your `organization_id`, see
   *  Getting your organization resource
   *  ID (https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).<br>
   *  `event_id` - Organization event ID to retrieve.
   */
  // const name = 'abc123'

  // Imports the Servicehealth library
  const {ServiceHealthClient} = require('@google-cloud/servicehealth').v1;

  // Instantiates a client
  const servicehealthClient = new ServiceHealthClient();

  async function callGetOrganizationEvent() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await servicehealthClient.getOrganizationEvent(request);
    console.log(response);
  }

  callGetOrganizationEvent();
  // [END servicehealth_v1_generated_ServiceHealth_GetOrganizationEvent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
