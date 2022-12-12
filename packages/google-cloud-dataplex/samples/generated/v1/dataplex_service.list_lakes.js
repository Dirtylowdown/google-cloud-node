// Copyright 2022 Google LLC
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

function main(parent) {
  // [START dataplex_v1_generated_DataplexService_ListLakes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the lake location, of the form:
   *  `projects/{project_number}/locations/{location_id}`
   *  where `location_id` refers to a GCP region.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of Lakes to return. The service may return fewer
   *  than this value. If unspecified, at most 10 lakes will be returned. The
   *  maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListLakes` call. Provide
   *  this to retrieve the subsequent page. When paginating, all other parameters
   *  provided to `ListLakes` must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filter request.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Order by fields for the result.
   */
  // const orderBy = 'abc123'

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callListLakes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataplexClient.listLakesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListLakes();
  // [END dataplex_v1_generated_DataplexService_ListLakes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
