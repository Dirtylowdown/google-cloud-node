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

function main(awsCluster) {
  // [START gkemulticloud_v1_generated_AwsClusters_GenerateAwsAccessToken_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the
   *  AwsCluster google.cloud.gkemulticloud.v1.AwsCluster  resource to
   *  authenticate to.
   *  `AwsCluster` names are formatted as
   *  `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>`.
   *  See Resource Names (https://cloud.google.com/apis/design/resource_names)
   *  for more details on Google Cloud resource names.
   */
  // const awsCluster = 'abc123'

  // Imports the Gkemulticloud library
  const {AwsClustersClient} = require('@google-cloud/gkemulticloud').v1;

  // Instantiates a client
  const gkemulticloudClient = new AwsClustersClient();

  async function callGenerateAwsAccessToken() {
    // Construct request
    const request = {
      awsCluster,
    };

    // Run request
    const response = await gkemulticloudClient.generateAwsAccessToken(request);
    console.log(response);
  }

  callGenerateAwsAccessToken();
  // [END gkemulticloud_v1_generated_AwsClusters_GenerateAwsAccessToken_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
