// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(securityMarks) {
  // [START securitycenter_v1beta1_generated_SecurityCenter_UpdateSecurityMarks_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The security marks resource to update.
   */
  // const securityMarks = ''
  /**
   *  The FieldMask to use when updating the security marks resource.
   */
  // const updateMask = ''
  /**
   *  The time at which the updated SecurityMarks take effect.
   */
  // const startTime = ''

  // Imports the Securitycenter library
  const {SecurityCenterClient} =
    require('@google-cloud/security-center').v1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function updateSecurityMarks() {
    // Construct request
    const request = {
      securityMarks,
    };

    // Run request
    const response = await securitycenterClient.updateSecurityMarks(request);
    console.log(response);
  }

  updateSecurityMarks();
  // [END securitycenter_v1beta1_generated_SecurityCenter_UpdateSecurityMarks_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
