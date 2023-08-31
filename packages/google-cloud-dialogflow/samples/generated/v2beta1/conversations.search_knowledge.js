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

function main(query, conversationProfile) {
  // [START dialogflow_v2beta1_generated_Conversations_SearchKnowledge_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent resource contains the conversation profile
   *  Format: 'projects/<Project ID>' or `projects/<Project
   *  ID>/locations/<Location ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The natural language text query for knowledge search.
   */
  // const query = {}
  /**
   *  Required. The conversation profile used to configure the search.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversationProfiles/<Conversation Profile ID>`.
   */
  // const conversationProfile = 'abc123'
  /**
   *  The ID of the search session.
   *  The session_id can be combined with Dialogflow V3 Agent ID retrieved from
   *  conversation profile or on its own to identify a search session. The search
   *  history of the same session will impact the search result. It's up to the
   *  API caller to choose an appropriate `Session ID`. It can be a random number
   *  or some type of session identifiers (preferably hashed). The length must
   *  not exceed 36 characters.
   */
  // const sessionId = 'abc123'
  /**
   *  The conversation (between human agent and end user) where the search
   *  request is triggered. Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>`.
   */
  // const conversation = 'abc123'
  /**
   *  The name of the latest conversation message when the request is
   *  triggered.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>/messages/<Message ID>`.
   */
  // const latestMessage = 'abc123'

  // Imports the Dialogflow library
  const {ConversationsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new ConversationsClient();

  async function callSearchKnowledge() {
    // Construct request
    const request = {
      query,
      conversationProfile,
    };

    // Run request
    const response = await dialogflowClient.searchKnowledge(request);
    console.log(response);
  }

  callSearchKnowledge();
  // [END dialogflow_v2beta1_generated_Conversations_SearchKnowledge_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
