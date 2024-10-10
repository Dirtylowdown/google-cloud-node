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

function main(servingConfig, query) {
  // [START discoveryengine_v1_generated_ConversationalSearchService_AnswerQuery_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Search serving config, such as
   *  `projects/* /locations/global/collections/default_collection/engines/* /servingConfigs/default_serving_config`,
   *  or
   *  `projects/* /locations/global/collections/default_collection/dataStores/* /servingConfigs/default_serving_config`.
   *  This field is used to identify the serving configuration name, set
   *  of models used to make the search.
   */
  // const servingConfig = 'abc123'
  /**
   *  Required. Current user query.
   */
  // const query = {}
  /**
   *  The session resource name. Not required.
   *  When session field is not set, the API is in sessionless mode.
   *  We support auto session mode: users can use the wildcard symbol `-` as
   *  session ID.  A new ID will be automatically generated and assigned.
   */
  // const session = 'abc123'
  /**
   *  Model specification.
   */
  // const safetySpec = {}
  /**
   *  Related questions specification.
   */
  // const relatedQuestionsSpec = {}
  /**
   *  Answer generation specification.
   */
  // const answerGenerationSpec = {}
  /**
   *  Search specification.
   */
  // const searchSpec = {}
  /**
   *  Query understanding specification.
   */
  // const queryUnderstandingSpec = {}
  /**
   *  A unique identifier for tracking visitors. For example, this could be
   *  implemented with an HTTP cookie, which should be able to uniquely identify
   *  a visitor on a single device. This unique identifier should not change if
   *  the visitor logs in or out of the website.
   *  This field should NOT have a fixed value such as `unknown_visitor`.
   *  The field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an  `INVALID_ARGUMENT`  error is returned.
   */
  // const userPseudoId = 'abc123'
  /**
   *  The user labels applied to a resource must meet the following requirements:
   *  * Each resource can have multiple labels, up to a maximum of 64.
   *  * Each label must be a key-value pair.
   *  * Keys have a minimum length of 1 character and a maximum length of 63
   *    characters and cannot be empty. Values can be empty and have a maximum
   *    length of 63 characters.
   *  * Keys and values can contain only lowercase letters, numeric characters,
   *    underscores, and dashes. All characters must use UTF-8 encoding, and
   *    international characters are allowed.
   *  * The key portion of a label must be unique. However, you can use the same
   *    key with multiple resources.
   *  * Keys must start with a lowercase letter or international character.
   *  See Google Cloud
   *  Document (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  for more details.
   */
  // const userLabels = [1,2,3,4]

  // Imports the Discoveryengine library
  const {ConversationalSearchServiceClient} = require('@google-cloud/discoveryengine').v1;

  // Instantiates a client
  const discoveryengineClient = new ConversationalSearchServiceClient();

  async function callAnswerQuery() {
    // Construct request
    const request = {
      servingConfig,
      query,
    };

    // Run request
    const response = await discoveryengineClient.answerQuery(request);
    console.log(response);
  }

  callAnswerQuery();
  // [END discoveryengine_v1_generated_ConversationalSearchService_AnswerQuery_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
