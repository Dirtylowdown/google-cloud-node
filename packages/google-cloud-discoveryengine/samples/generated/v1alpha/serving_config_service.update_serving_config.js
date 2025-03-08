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

function main(servingConfig) {
  // [START discoveryengine_v1alpha_generated_ServingConfigService_UpdateServingConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ServingConfig to update.
   */
  // const servingConfig = {}
  /**
   *  Indicates which fields in the provided
   *  ServingConfig google.cloud.discoveryengine.v1alpha.ServingConfig  to
   *  update. The following are NOT supported:
   *  * ServingConfig.name google.cloud.discoveryengine.v1alpha.ServingConfig.name 
   *  If not set, all supported fields are updated.
   */
  // const updateMask = {}

  // Imports the Discoveryengine library
  const {ServingConfigServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new ServingConfigServiceClient();

  async function callUpdateServingConfig() {
    // Construct request
    const request = {
      servingConfig,
    };

    // Run request
    const response = await discoveryengineClient.updateServingConfig(request);
    console.log(response);
  }

  callUpdateServingConfig();
  // [END discoveryengine_v1alpha_generated_ServingConfigService_UpdateServingConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
