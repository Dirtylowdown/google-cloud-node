// Copyright 2024 Google LLC
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
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_ImportIssueModel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Google Cloud Storage source message.
   */
  // const gcsSource = {}
  /**
   *  Required. The parent resource of the issue model.
   */
  // const parent = 'abc123'
  /**
   *  Optional. If set to true, will create an issue model from the imported file
   *  with randomly generated IDs for the issue model and corresponding issues.
   *  Otherwise, replaces an existing model with the same ID as the file.
   */
  // const createNewModel = true

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} = require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function callImportIssueModel() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await contactcenterinsightsClient.importIssueModel(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportIssueModel();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_ImportIssueModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
