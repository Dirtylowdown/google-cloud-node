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

function main(parent, tunnelDestGroup, tunnelDestGroupId) {
  // [START iap_v1_generated_IdentityAwareProxyAdminService_CreateTunnelDestGroup_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Google Cloud Project ID and location.
   *  In the following format:
   *  `projects/{project_number/id}/iap_tunnel/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The TunnelDestGroup to create.
   */
  // const tunnelDestGroup = {}
  /**
   *  Required. The ID to use for the TunnelDestGroup, which becomes the final
   *  component of the resource name.
   *  This value must be 4-63 characters, and valid characters
   *  are `[a-z]-`.
   */
  // const tunnelDestGroupId = 'abc123'

  // Imports the Iap library
  const {IdentityAwareProxyAdminServiceClient} = require('@google-cloud/iap').v1;

  // Instantiates a client
  const iapClient = new IdentityAwareProxyAdminServiceClient();

  async function callCreateTunnelDestGroup() {
    // Construct request
    const request = {
      parent,
      tunnelDestGroup,
      tunnelDestGroupId,
    };

    // Run request
    const response = await iapClient.createTunnelDestGroup(request);
    console.log(response);
  }

  callCreateTunnelDestGroup();
  // [END iap_v1_generated_IdentityAwareProxyAdminService_CreateTunnelDestGroup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
