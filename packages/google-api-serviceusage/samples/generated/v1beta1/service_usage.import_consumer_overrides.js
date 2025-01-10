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
  // [START serviceusage_v1beta1_generated_ServiceUsage_ImportConsumerOverrides_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the consumer.
   *  An example name would be:
   *  `projects/123/services/compute.googleapis.com`
   */
  // const parent = 'abc123'
  /**
   *  The import data is specified in the request message itself
   */
  // const inlineSource = {}
  /**
   *  Whether to force the creation of the quota overrides.
   *  Setting the force parameter to 'true' ignores all quota safety checks that
   *  would fail the request. QuotaSafetyCheck lists all such validations.
   */
  // const force = true
  /**
   *  The list of quota safety checks to ignore before the override mutation.
   *  Unlike 'force' field that ignores all the quota safety checks, the
   *  'force_only' field ignores only the specified checks; other checks are
   *  still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  // const forceOnly = [1,2,3,4]

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function callImportConsumerOverrides() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await serviceusageClient.importConsumerOverrides(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportConsumerOverrides();
  // [END serviceusage_v1beta1_generated_ServiceUsage_ImportConsumerOverrides_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
