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
  // [START retail_v2alpha_generated_BranchService_GetBranch_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the branch to retrieve.
   *  Format:
   *  `projects/* /locations/global/catalogs/default_catalog/branches/some_branch_id`.
   *  "default_branch" can be used as a special branch_id, it returns the
   *  default branch that has been set for the catalog.
   */
  // const name = 'abc123'
  /**
   *  The view to apply to the returned
   *  Branch google.cloud.retail.v2alpha.Branch. Defaults to
   *  Branch.BranchView.BASIC  if unspecified.
   *  See documentation of fields of Branch google.cloud.retail.v2alpha.Branch 
   *  to find what fields are excluded from BASIC view.
   */
  // const view = {}

  // Imports the Retail library
  const {BranchServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new BranchServiceClient();

  async function callGetBranch() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await retailClient.getBranch(request);
    console.log(response);
  }

  callGetBranch();
  // [END retail_v2alpha_generated_BranchService_GetBranch_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
