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

function main(name) {
  // [START cloudbuild_v1_generated_CloudBuild_DeleteWorkerPool_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `WorkerPool` to delete.
   *  Format:
   *  `projects/{project}/locations/{workerPool}/workerPools/{workerPool}`.
   */
  // const name = 'abc123'
  /**
   *  Optional. If this is provided, it must match the server's etag on the
   *  workerpool for the request to be processed.
   */
  // const etag = 'abc123'
  /**
   *  If set to true, and the `WorkerPool` is not found, the request will succeed
   *  but no action will be taken on the server.
   */
  // const allowMissing = true
  /**
   *  If set, validate the request and preview the response, but do not actually
   *  post it.
   */
  // const validateOnly = true

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function callDeleteWorkerPool() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await cloudbuildClient.deleteWorkerPool(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteWorkerPool();
  // [END cloudbuild_v1_generated_CloudBuild_DeleteWorkerPool_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
