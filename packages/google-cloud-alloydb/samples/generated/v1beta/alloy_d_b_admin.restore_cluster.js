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

function main(parent, clusterId, cluster) {
  // [START alloydb_v1beta_generated_AlloyDBAdmin_RestoreCluster_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Backup source.
   */
  // const backupSource = {}
  /**
   *  ContinuousBackup source. Continuous backup needs to be enabled in the
   *  source cluster for this operation to succeed.
   */
  // const continuousBackupSource = {}
  /**
   *  Required. The name of the parent resource. For the required format, see the
   *  comment on the Cluster.name field.
   */
  // const parent = 'abc123'
  /**
   *  Required. ID of the requesting object.
   */
  // const clusterId = 'abc123'
  /**
   *  Required. The resource being created
   */
  // const cluster = {}
  /**
   *  Optional. An optional request ID to identify requests. Specify a unique
   *  request ID so that if you must retry your request, the server ignores the
   *  request if it has already been completed. The server guarantees that for at
   *  least 60 minutes since the first request.
   *  For example, consider a situation where you make an initial request and
   *  the request times out. If you make the request again with the same request
   *  ID, the server can check if the original operation with the same request ID
   *  was received, and if so, ignores the second request. This prevents
   *  clients from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'
  /**
   *  Optional. If set, performs request validation, for example, permission
   *  checks and any other type of validation, but does not actually execute the
   *  create request.
   */
  // const validateOnly = true

  // Imports the Alloydb library
  const {AlloyDBAdminClient} = require('@google-cloud/alloydb').v1beta;

  // Instantiates a client
  const alloydbClient = new AlloyDBAdminClient();

  async function callRestoreCluster() {
    // Construct request
    const request = {
      parent,
      clusterId,
      cluster,
    };

    // Run request
    const [operation] = await alloydbClient.restoreCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRestoreCluster();
  // [END alloydb_v1beta_generated_AlloyDBAdmin_RestoreCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
