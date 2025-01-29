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
  // [START cloudbuild_v2_generated_RepositoryManager_DeleteConnection_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Connection to delete.
   *  Format: `projects/* /locations/* /connections/*`.
   */
  // const name = 'abc123'
  /**
   *  The current etag of the connection.
   *  If an etag is provided and does not match the current etag of the
   *  connection, deletion will be blocked and an ABORTED error will be returned.
   */
  // const etag = 'abc123'
  /**
   *  If set, validate the request, but do not actually post it.
   */
  // const validateOnly = true

  // Imports the Cloudbuild library
  const {RepositoryManagerClient} = require('@google-cloud/cloudbuild').v2;

  // Instantiates a client
  const cloudbuildClient = new RepositoryManagerClient();

  async function callDeleteConnection() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await cloudbuildClient.deleteConnection(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteConnection();
  // [END cloudbuild_v2_generated_RepositoryManager_DeleteConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
