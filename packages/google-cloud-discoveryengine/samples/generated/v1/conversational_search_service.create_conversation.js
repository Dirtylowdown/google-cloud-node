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

function main(parent, conversation) {
  // [START discoveryengine_v1_generated_ConversationalSearchService_CreateConversation_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of parent data store. Format:
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The conversation to create.
   */
  // const conversation = {}

  // Imports the Discoveryengine library
  const {ConversationalSearchServiceClient} = require('@google-cloud/discoveryengine').v1;

  // Instantiates a client
  const discoveryengineClient = new ConversationalSearchServiceClient();

  async function callCreateConversation() {
    // Construct request
    const request = {
      parent,
      conversation,
    };

    // Run request
    const response = await discoveryengineClient.createConversation(request);
    console.log(response);
  }

  callCreateConversation();
  // [END discoveryengine_v1_generated_ConversationalSearchService_CreateConversation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
