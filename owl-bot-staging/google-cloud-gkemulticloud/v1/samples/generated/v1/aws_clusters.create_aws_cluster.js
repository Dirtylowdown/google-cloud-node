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

function main(parent, awsCluster, awsClusterId) {
  // [START gkemulticloud_v1_generated_AwsClusters_CreateAwsCluster_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent location where this
   *  AwsCluster google.cloud.gkemulticloud.v1.AwsCluster  resource will be
   *  created.
   *  Location names are formatted as `projects/<project-id>/locations/<region>`.
   *  See Resource Names (https://cloud.google.com/apis/design/resource_names)
   *  for more details on Google Cloud resource names.
   */
  // const parent = 'abc123'
  /**
   *  Required. The specification of the
   *  AwsCluster google.cloud.gkemulticloud.v1.AwsCluster  to create.
   */
  // const awsCluster = {}
  /**
   *  Required. A client provided ID the resource. Must be unique within the
   *  parent resource.
   *  The provided ID will be part of the
   *  AwsCluster google.cloud.gkemulticloud.v1.AwsCluster  resource name
   *  formatted as
   *  `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>`.
   *  Valid characters are `/[a-z][0-9]-/`. Cannot be longer than 63 characters.
   */
  // const awsClusterId = 'abc123'
  /**
   *  If set, only validate the request, but do not actually create the cluster.
   */
  // const validateOnly = true

  // Imports the Gkemulticloud library
  const {AwsClustersClient} = require('@google-cloud/gkemulticloud').v1;

  // Instantiates a client
  const gkemulticloudClient = new AwsClustersClient();

  async function callCreateAwsCluster() {
    // Construct request
    const request = {
      parent,
      awsCluster,
      awsClusterId,
    };

    // Run request
    const [operation] = await gkemulticloudClient.createAwsCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateAwsCluster();
  // [END gkemulticloud_v1_generated_AwsClusters_CreateAwsCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
