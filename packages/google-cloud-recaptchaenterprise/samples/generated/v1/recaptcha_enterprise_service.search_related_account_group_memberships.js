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

function main(project) {
  // [START recaptchaenterprise_v1_generated_RecaptchaEnterpriseService_SearchRelatedAccountGroupMemberships_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project to search related account group
   *  memberships from. Specify the project name in the following format:
   *  "projects/{project}".
   */
  // const project = 'my-project'
  /**
   *  Optional. The unique stable hashed user identifier we should search
   *  connections to. The identifier should correspond to a `hashed_account_id`
   *  provided in a previous `CreateAssessment` or `AnnotateAssessment` call.
   */
  // const hashedAccountId = 'Buffer.from('string')'
  /**
   *  Optional. The maximum number of groups to return. The service might return
   *  fewer than this value. If unspecified, at most 50 groups are returned. The
   *  maximum value is 1000; values above 1000 are coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous
   *  `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the
   *  subsequent page.
   *  When paginating, all other parameters provided to
   *  `SearchRelatedAccountGroupMemberships` must match the call that provided
   *  the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Recaptchaenterprise library
  const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise').v1;

  // Instantiates a client
  const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

  async function callSearchRelatedAccountGroupMemberships() {
    // Construct request
    const request = {
      project,
    };

    // Run request
    const iterable = await recaptchaenterpriseClient.searchRelatedAccountGroupMembershipsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchRelatedAccountGroupMemberships();
  // [END recaptchaenterprise_v1_generated_RecaptchaEnterpriseService_SearchRelatedAccountGroupMemberships_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
