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

function main(parent) {
  // [START meet_v2_generated_ConferenceRecordsService_ListRecordings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format: `conferenceRecords/{conference_record}`
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of recordings to return. The service might return fewer
   *  than this value.
   *  If unspecified, at most 10 recordings are returned.
   *  The maximum value is 100; values above 100 are coerced to 100.
   *  Maximum might change in the future.
   */
  // const pageSize = 1234
  /**
   *  Page token returned from previous List Call.
   */
  // const pageToken = 'abc123'

  // Imports the Meet library
  const {ConferenceRecordsServiceClient} = require('@google-apps/meet').v2;

  // Instantiates a client
  const meetClient = new ConferenceRecordsServiceClient();

  async function callListRecordings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = meetClient.listRecordingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListRecordings();
  // [END meet_v2_generated_ConferenceRecordsService_ListRecordings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
