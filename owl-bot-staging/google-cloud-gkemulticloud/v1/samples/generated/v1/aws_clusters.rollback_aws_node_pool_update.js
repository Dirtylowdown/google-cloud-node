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

function main(name) {
  // [START gkemulticloud_v1_generated_AwsClusters_RollbackAwsNodePoolUpdate_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the
   *  AwsNodePool google.cloud.gkemulticloud.v1.AwsNodePool  resource to
   *  rollback.
   *  `AwsNodePool` names are formatted as
   *  `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id>`.
   *  See Resource Names (https://cloud.google.com/apis/design/resource_names)
   *  for more details on Google Cloud resource names.
   */
  // const name = 'abc123'
  /**
   *  Optional. Option for rollback to ignore the PodDisruptionBudget when
   *  draining the node pool nodes. Default value is false.
   */
  // const respectPdb = true

  // Imports the Gkemulticloud library
  const {AwsClustersClient} = require('@google-cloud/gkemulticloud').v1;

  // Instantiates a client
  const gkemulticloudClient = new AwsClustersClient();

  async function callRollbackAwsNodePoolUpdate() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await gkemulticloudClient.rollbackAwsNodePoolUpdate(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRollbackAwsNodePoolUpdate();
  // [END gkemulticloud_v1_generated_AwsClusters_RollbackAwsNodePoolUpdate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
