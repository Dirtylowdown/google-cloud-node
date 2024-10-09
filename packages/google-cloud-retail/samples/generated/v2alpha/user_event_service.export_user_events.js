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

function main(parent, outputConfig) {
  // [START retail_v2alpha_generated_UserEventService_ExportUserEvents_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of a
   *  Catalog google.cloud.retail.v2alpha.Catalog. For example
   *  `projects/1234/locations/global/catalogs/default_catalog`
   */
  // const parent = 'abc123'
  /**
   *  Required. The output location of the data.
   */
  // const outputConfig = {}
  /**
   *  A filtering expression to specify restrictions on returned events.
   *  The expression is a sequence of terms. Each term applies a restriction to
   *  the returned user events. Use this expression to restrict results to a
   *  specific time range or to filter events by eventType.
   *  For example, `eventTime > "2012-04-23T18:25:43.511Z"
   *  eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z"
   *  eventType=search`
   *    We expect only three types of fields:
   *     * `eventTime`: This can be specified twice, once with a
   *       less than operator and once with a greater than operator. The
   *       `eventTime` restriction should result in one, contiguous, valid,
   *       `eventTime` range.
   *     * `eventType`: Boolean operators `OR` and `NOT` are supported if the
   *       expression is enclosed in parentheses and the operators are separated
   *       from the tag values by a space.
   *     * `eventsMissingCatalogItems`: This restricts results
   *       to events for which catalog items were not found in the catalog. The
   *       default behavior is to return only those events for which catalog
   *       items were found.
   *    Some examples of valid filters expressions:
   *    * Example 1: `eventTime > "2012-04-23T18:25:43.511Z"
   *              eventTime < "2012-04-23T18:30:43.511Z"`
   *    * Example 2: `eventTime > "2012-04-23T18:25:43.511Z"
   *              eventType = detail-page-view`
   *    * Example 3: `eventsMissingCatalogItems
   *              eventType = (NOT search) eventTime <
   *              "2018-04-23T18:30:43.511Z"`
   *    * Example 4: `eventTime > "2012-04-23T18:25:43.511Z"`
   *    * Example 5: `eventType = (detail-page-view OR search)`
   *    * Example 6: `eventsMissingCatalogItems`
   */
  // const filter = 'abc123'

  // Imports the Retail library
  const {UserEventServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new UserEventServiceClient();

  async function callExportUserEvents() {
    // Construct request
    const request = {
      parent,
      outputConfig,
    };

    // Run request
    const [operation] = await retailClient.exportUserEvents(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callExportUserEvents();
  // [END retail_v2alpha_generated_UserEventService_ExportUserEvents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
