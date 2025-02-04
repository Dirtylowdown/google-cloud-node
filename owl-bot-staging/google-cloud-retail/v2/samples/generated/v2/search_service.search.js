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

function main(placement, visitorId) {
  // [START retail_v2_generated_SearchService_Search_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Retail Search serving config, such as
   *  `projects/* /locations/global/catalogs/default_catalog/servingConfigs/default_serving_config`
   *  or the name of the legacy placement resource, such as
   *  `projects/* /locations/global/catalogs/default_catalog/placements/default_search`.
   *  This field is used to identify the serving config name and the set
   *  of models that are used to make the search.
   */
  // const placement = 'abc123'
  /**
   *  The branch resource name, such as
   *  `projects/* /locations/global/catalogs/default_catalog/branches/0`.
   *  Use "default_branch" as the branch ID or leave this field empty, to search
   *  products under the default branch.
   */
  // const branch = 'abc123'
  /**
   *  Raw search query.
   *  If this field is empty, the request is considered a category browsing
   *  request and returned results are based on
   *  filter google.cloud.retail.v2.SearchRequest.filter  and
   *  page_categories google.cloud.retail.v2.SearchRequest.page_categories.
   */
  // const query = 'abc123'
  /**
   *  Required. A unique identifier for tracking visitors. For example, this
   *  could be implemented with an HTTP cookie, which should be able to uniquely
   *  identify a visitor on a single device. This unique identifier should not
   *  change if the visitor logs in or out of the website.
   *  This should be the same identifier as
   *  UserEvent.visitor_id google.cloud.retail.v2.UserEvent.visitor_id.
   *  The field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  // const visitorId = 'abc123'
  /**
   *  User information.
   */
  // const userInfo = {}
  /**
   *  Maximum number of Product google.cloud.retail.v2.Product s to return. If
   *  unspecified, defaults to a reasonable value. The maximum allowed value is
   *  120. Values above 120 will be coerced to 120.
   *  If this field is negative, an INVALID_ARGUMENT is returned.
   */
  // const pageSize = 1234
  /**
   *  A page token
   *  SearchResponse.next_page_token google.cloud.retail.v2.SearchResponse.next_page_token,
   *  received from a previous
   *  SearchService.Search google.cloud.retail.v2.SearchService.Search  call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  SearchService.Search google.cloud.retail.v2.SearchService.Search  must
   *  match the call that provided the page token. Otherwise, an INVALID_ARGUMENT
   *  error is returned.
   */
  // const pageToken = 'abc123'
  /**
   *  A 0-indexed integer that specifies the current offset (that is, starting
   *  result location, amongst the Product google.cloud.retail.v2.Product s
   *  deemed by the API as relevant) in search results. This field is only
   *  considered if page_token google.cloud.retail.v2.SearchRequest.page_token 
   *  is unset.
   *  If this field is negative, an INVALID_ARGUMENT is returned.
   */
  // const offset = 1234
  /**
   *  The filter syntax consists of an expression language for constructing a
   *  predicate from one or more fields of the products being filtered. Filter
   *  expression is case-sensitive. For more information, see
   *  Filter (https://cloud.google.com/retail/docs/filter-and-order#filter).
   *  If this field is unrecognizable, an INVALID_ARGUMENT is returned.
   */
  // const filter = 'abc123'
  /**
   *  The default filter that is applied when a user performs a search without
   *  checking any filters on the search page.
   *  The filter applied to every search request when quality improvement such as
   *  query expansion is needed. In the case a query does not have a sufficient
   *  amount of results this filter will be used to determine whether or not to
   *  enable the query expansion flow. The original filter will still be used for
   *  the query expanded search.
   *  This field is strongly recommended to achieve high search quality.
   *  For more information about filter syntax, see
   *  SearchRequest.filter google.cloud.retail.v2.SearchRequest.filter.
   */
  // const canonicalFilter = 'abc123'
  /**
   *  The order in which products are returned. Products can be ordered by
   *  a field in an Product google.cloud.retail.v2.Product  object. Leave it
   *  unset if ordered by relevance. OrderBy expression is case-sensitive. For
   *  more information, see
   *  Order (https://cloud.google.com/retail/docs/filter-and-order#order).
   *  If this field is unrecognizable, an INVALID_ARGUMENT is returned.
   */
  // const orderBy = 'abc123'
  /**
   *  Facet specifications for faceted search. If empty, no facets are returned.
   *  A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error
   *  is returned.
   */
  // const facetSpecs = [1,2,3,4]
  /**
   *  Boost specification to boost certain products. For more information, see
   *  Boost results (https://cloud.google.com/retail/docs/boosting).
   *  Notice that if both
   *  ServingConfig.boost_control_ids google.cloud.retail.v2.ServingConfig.boost_control_ids 
   *  and
   *  SearchRequest.boost_spec google.cloud.retail.v2.SearchRequest.boost_spec 
   *  are set, the boost conditions from both places are evaluated. If a search
   *  request matches multiple boost conditions, the final boost score is equal
   *  to the sum of the boost scores from all matched boost conditions.
   */
  // const boostSpec = {}
  /**
   *  The query expansion specification that specifies the conditions under which
   *  query expansion occurs. For more information, see Query
   *  expansion (https://cloud.google.com/retail/docs/result-size#query_expansion).
   */
  // const queryExpansionSpec = {}
  /**
   *  The keys to fetch and rollup the matching
   *  variant google.cloud.retail.v2.Product.Type.VARIANT 
   *  Product google.cloud.retail.v2.Product s attributes,
   *  FulfillmentInfo google.cloud.retail.v2.FulfillmentInfo  or
   *  LocalInventory google.cloud.retail.v2.LocalInventory s attributes. The
   *  attributes from all the matching
   *  variant google.cloud.retail.v2.Product.Type.VARIANT 
   *  Product google.cloud.retail.v2.Product s or
   *  LocalInventory google.cloud.retail.v2.LocalInventory s are merged and
   *  de-duplicated. Notice that rollup attributes will lead to extra query
   *  latency. Maximum number of keys is 30.
   *  For FulfillmentInfo google.cloud.retail.v2.FulfillmentInfo, a
   *  fulfillment type and a fulfillment ID must be provided in the format of
   *  "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123",
   *  "pickupInStore" is fulfillment type and "store123" is the store ID.
   *  Supported keys are:
   *  * colorFamilies
   *  * price
   *  * originalPrice
   *  * discount
   *  * variantId
   *  * inventory(place_id,price)
   *  * inventory(place_id,original_price)
   *  * inventory(place_id,attributes.key), where key is any key in the
   *    Product.local_inventories.attributes google.cloud.retail.v2.LocalInventory.attributes 
   *    map.
   *  * attributes.key, where key is any key in the
   *    Product.attributes google.cloud.retail.v2.Product.attributes  map.
   *  * pickupInStore.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "pickup-in-store".
   *  * shipToStore.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "ship-to-store".
   *  * sameDayDelivery.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "same-day-delivery".
   *  * nextDayDelivery.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "next-day-delivery".
   *  * customFulfillment1.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "custom-type-1".
   *  * customFulfillment2.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "custom-type-2".
   *  * customFulfillment3.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "custom-type-3".
   *  * customFulfillment4.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "custom-type-4".
   *  * customFulfillment5.id, where id is any
   *  FulfillmentInfo.place_ids google.cloud.retail.v2.FulfillmentInfo.place_ids 
   *  for FulfillmentInfo.type google.cloud.retail.v2.FulfillmentInfo.type 
   *    "custom-type-5".
   *  If this field is set to an invalid value other than these, an
   *  INVALID_ARGUMENT error is returned.
   */
  // const variantRollupKeys = ['abc','def']
  /**
   *  The categories associated with a category page. Must be set for category
   *  navigation queries to achieve good search quality. The format should be
   *  the same as
   *  UserEvent.page_categories google.cloud.retail.v2.UserEvent.page_categories;
   *  To represent full path of category, use '>' sign to separate different
   *  hierarchies. If '>' is part of the category name, replace it with
   *  other character(s).
   *  Category pages include special pages such as sales or promotions. For
   *  instance, a special sale page may have the category hierarchy:
   *  "pageCategories" : "Sales > 2017 Black Friday Deals".
   */
  // const pageCategories = ['abc','def']
  /**
   *  The search mode of the search request. If not specified, a single search
   *  request triggers both product search and faceted search.
   */
  // const searchMode = {}
  /**
   *  The specification for personalization.
   *  Notice that if both
   *  ServingConfig.personalization_spec google.cloud.retail.v2.ServingConfig.personalization_spec 
   *  and
   *  SearchRequest.personalization_spec google.cloud.retail.v2.SearchRequest.personalization_spec 
   *  are set.
   *  SearchRequest.personalization_spec google.cloud.retail.v2.SearchRequest.personalization_spec 
   *  will override
   *  ServingConfig.personalization_spec google.cloud.retail.v2.ServingConfig.personalization_spec.
   */
  // const personalizationSpec = {}
  /**
   *  The labels applied to a resource must meet the following requirements:
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
   *  For more information, see Requirements for
   *  labels (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  in the Resource Manager documentation.
   */
  // const labels = [1,2,3,4]
  /**
   *  The spell correction specification that specifies the mode under
   *  which spell correction will take effect.
   */
  // const spellCorrectionSpec = {}
  /**
   *  The entity for customers that may run multiple different entities, domains,
   *  sites or regions, for example, `Google US`, `Google Ads`, `Waymo`,
   *  `google.com`, `youtube.com`, etc.
   *  If this is set, it should be exactly matched with
   *  UserEvent.entity google.cloud.retail.v2.UserEvent.entity  to get search
   *  results boosted by entity.
   */
  // const entity = 'abc123'
  /**
   *  Optional. This field specifies all conversational related parameters
   *  addition to traditional retail search.
   */
  // const conversationalSearchSpec = {}
  /**
   *  Optional. This field specifies tile navigation related parameters.
   */
  // const tileNavigationSpec = {}

  // Imports the Retail library
  const {SearchServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new SearchServiceClient();

  async function callSearch() {
    // Construct request
    const request = {
      placement,
      visitorId,
    };

    // Run request
    const iterable = retailClient.searchAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearch();
  // [END retail_v2_generated_SearchService_Search_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
