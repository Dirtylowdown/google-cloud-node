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

function main(endpoint, deployedModelId) {
  // [START aiplatform_v1beta1_generated_EndpointService_UndeployModel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Endpoint resource from which to undeploy a Model.
   *  Format:
   *  `projects/{project}/locations/{location}/endpoints/{endpoint}`
   */
  // const endpoint = 'abc123'
  /**
   *  Required. The ID of the DeployedModel to be undeployed from the Endpoint.
   */
  // const deployedModelId = 'abc123'
  /**
   *  If this field is provided, then the Endpoint's
   *  [traffic_split][google.cloud.aiplatform.v1beta1.Endpoint.traffic_split] will be overwritten with it. If
   *  last DeployedModel is being undeployed from the Endpoint, the
   *  [Endpoint.traffic_split] will always end up empty when this call returns.
   *  A DeployedModel will be successfully undeployed only if it doesn't have
   *  any traffic assigned to it when this method executes, or if this field
   *  unassigns any traffic to it.
   */
  // const trafficSplit = 1234

  // Imports the Aiplatform library
  const {EndpointServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new EndpointServiceClient();

  async function undeployModel() {
    // Construct request
    const request = {
      endpoint,
      deployedModelId,
    };

    // Run request
    const [operation] = await aiplatformClient.undeployModel(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  undeployModel();
  // [END aiplatform_v1beta1_generated_EndpointService_UndeployModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
