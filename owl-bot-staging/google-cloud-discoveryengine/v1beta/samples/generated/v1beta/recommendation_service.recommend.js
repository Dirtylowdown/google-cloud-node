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

function main(servingConfig, userEvent) {
  // [START discoveryengine_v1beta_generated_RecommendationService_Recommend_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of a
   *  ServingConfig google.cloud.discoveryengine.v1beta.ServingConfig:
   *  `projects/* /locations/global/collections/* /engines/* /servingConfigs/*`, or
   *  `projects/* /locations/global/collections/* /dataStores/* /servingConfigs/*`
   *  One default serving config is created along with your recommendation engine
   *  creation. The engine ID is used as the ID of the default serving
   *  config. For example, for Engine
   *  `projects/* /locations/global/collections/* /engines/my-engine`, you can use
   *  `projects/* /locations/global/collections/* /engines/my-engine/servingConfigs/my-engine`
   *  for your
   *  RecommendationService.Recommend google.cloud.discoveryengine.v1beta.RecommendationService.Recommend 
   *  requests.
   */
  // const servingConfig = 'abc123'
  /**
   *  Required. Context about the user, what they are looking at and what action
   *  they took to trigger the Recommend request. Note that this user event
   *  detail won't be ingested to userEvent logs. Thus, a separate userEvent
   *  write request is required for event logging.
   *  Don't set
   *  UserEvent.user_pseudo_id google.cloud.discoveryengine.v1beta.UserEvent.user_pseudo_id 
   *  or
   *  UserEvent.user_info.user_id google.cloud.discoveryengine.v1beta.UserInfo.user_id 
   *  to the same fixed ID for different users. If you are trying to receive
   *  non-personalized recommendations (not recommended; this can negatively
   *  impact model performance), instead set
   *  UserEvent.user_pseudo_id google.cloud.discoveryengine.v1beta.UserEvent.user_pseudo_id 
   *  to a random unique ID and leave
   *  UserEvent.user_info.user_id google.cloud.discoveryengine.v1beta.UserInfo.user_id 
   *  unset.
   */
  // const userEvent = {}
  /**
   *  Maximum number of results to return. Set this property
   *  to the number of recommendation results needed. If zero, the service
   *  chooses a reasonable default. The maximum allowed value is 100. Values
   *  above 100 are set to 100.
   */
  // const pageSize = 1234
  /**
   *  Filter for restricting recommendation results with a length limit of 5,000
   *  characters. Currently, only filter expressions on the `filter_tags`
   *  attribute is supported.
   *  Examples:
   *   * `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))`
   *   * `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))`
   *  If `attributeFilteringSyntax` is set to true under the `params` field, then
   *  attribute-based expressions are expected instead of the above described
   *  tag-based syntax. Examples:
   *   * (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie"))
   *   * (available: true) AND
   *     (launguage: ANY("en", "es")) OR (categories: ANY("Movie"))
   *  If your filter blocks all results, the API returns generic
   *  (unfiltered) popular Documents. If you only want results strictly matching
   *  the filters, set `strictFiltering` to `true` in
   *  RecommendRequest.params google.cloud.discoveryengine.v1beta.RecommendRequest.params 
   *  to receive empty results instead.
   *  Note that the API never returns
   *  Document google.cloud.discoveryengine.v1beta.Document s with
   *  `storageStatus` as `EXPIRED` or `DELETED` regardless of filter choices.
   */
  // const filter = 'abc123'
  /**
   *  Use validate only mode for this recommendation query. If set to `true`, a
   *  fake model is used that returns arbitrary Document IDs.
   *  Note that the validate only mode should only be used for testing the API,
   *  or if the model is not ready.
   */
  // const validateOnly = true
  /**
   *  Additional domain specific parameters for the recommendations.
   *  Allowed values:
   *  * `returnDocument`: Boolean. If set to `true`, the associated Document
   *     object is returned in
   *     RecommendResponse.RecommendationResult.document google.cloud.discoveryengine.v1beta.RecommendResponse.RecommendationResult.document.
   *  * `returnScore`: Boolean. If set to true, the recommendation score
   *     corresponding to each returned Document is set in
   *     RecommendResponse.RecommendationResult.metadata google.cloud.discoveryengine.v1beta.RecommendResponse.RecommendationResult.metadata.
   *     The given score indicates the probability of a Document conversion given
   *     the user's context and history.
   *  * `strictFiltering`: Boolean. True by default. If set to `false`, the
   *  service
   *     returns generic (unfiltered) popular Documents instead of empty if
   *     your filter blocks all recommendation results.
   *  * `diversityLevel`: String. Default empty. If set to be non-empty, then
   *     it needs to be one of:
   *      *  `no-diversity`
   *      *  `low-diversity`
   *      *  `medium-diversity`
   *      *  `high-diversity`
   *      *  `auto-diversity`
   *     This gives request-level control and adjusts recommendation results
   *     based on Document category.
   *  * `attributeFilteringSyntax`: Boolean. False by default. If set to true,
   *     the `filter` field is interpreted according to the new,
   *     attribute-based syntax.
   */
  // const params = [1,2,3,4]
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
   *  See Requirements for
   *  labels (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  for more details.
   */
  // const userLabels = [1,2,3,4]

  // Imports the Discoveryengine library
  const {RecommendationServiceClient} = require('@google-cloud/discoveryengine').v1beta;

  // Instantiates a client
  const discoveryengineClient = new RecommendationServiceClient();

  async function callRecommend() {
    // Construct request
    const request = {
      servingConfig,
      userEvent,
    };

    // Run request
    const response = await discoveryengineClient.recommend(request);
    console.log(response);
  }

  callRecommend();
  // [END discoveryengine_v1beta_generated_RecommendationService_Recommend_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
