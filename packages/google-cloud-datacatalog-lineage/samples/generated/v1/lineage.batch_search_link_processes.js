// Copyright 2023 Google LLC
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

function main(parent, links) {
  // [START datalineage_v1_generated_Lineage_BatchSearchLinkProcesses_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location you want search in the format `projects/* /locations/*`
   */
  // const parent = 'abc123'
  /**
   *  Required. An array of links to check for their associated LineageProcesses.
   *  The maximum number of items in this array is 100.
   *  If the request contains more than 100 links, it returns the
   *  `INVALID_ARGUMENT` error.
   *  Format: `projects/{project}/locations/{location}/links/{link}`.
   */
  // const links = ['abc','def']
  /**
   *  The maximum number of processes to return in a single page of the response.
   *  A page may contain fewer results than this value.
   */
  // const pageSize = 1234
  /**
   *  The page token received from a previous `BatchSearchLinkProcesses` call.
   *  Use it to get the next page.
   *  When requesting subsequent pages of a response, remember that
   *  all parameters must match the values you provided
   *  in the original request.
   */
  // const pageToken = 'abc123'

  // Imports the Lineage library
  const {LineageClient} = require('@google-cloud/lineage').v1;

  // Instantiates a client
  const lineageClient = new LineageClient();

  async function callBatchSearchLinkProcesses() {
    // Construct request
    const request = {
      parent,
      links,
    };

    // Run request
    const iterable = await lineageClient.batchSearchLinkProcessesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callBatchSearchLinkProcesses();
  // [END datalineage_v1_generated_Lineage_BatchSearchLinkProcesses_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
