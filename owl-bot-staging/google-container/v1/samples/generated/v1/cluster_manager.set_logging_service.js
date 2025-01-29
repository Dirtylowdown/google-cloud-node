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

function main(loggingService) {
  // [START container_v1_generated_ClusterManager_SetLoggingService_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The logging service the cluster should use to write logs.
   *  Currently available options:
   *  * `logging.googleapis.com/kubernetes` - The Cloud Logging
   *  service with a Kubernetes-native resource model
   *  * `logging.googleapis.com` - The legacy Cloud Logging service (no longer
   *    available as of GKE 1.15).
   *  * `none` - no logs will be exported from the cluster.
   *  If left as an empty string,`logging.googleapis.com/kubernetes` will be
   *  used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
   */
  // const loggingService = 'abc123'
  /**
   *  The name (project, location, cluster) of the cluster to set logging.
   *  Specified in the format `projects/* /locations/* /clusters/*`.
   */
  // const name = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callSetLoggingService() {
    // Construct request
    const request = {
      loggingService,
    };

    // Run request
    const response = await containerClient.setLoggingService(request);
    console.log(response);
  }

  callSetLoggingService();
  // [END container_v1_generated_ClusterManager_SetLoggingService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
