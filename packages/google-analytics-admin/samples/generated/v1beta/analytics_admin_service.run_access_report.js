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

function main() {
  // [START analyticsadmin_v1beta_generated_AnalyticsAdminService_RunAccessReport_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The Data Access Report supports requesting at the property level or account
   *  level. If requested at the account level, Data Access Reports include all
   *  access for all properties under that account.
   *  To request at the property level, entity should be for example
   *  'properties/123' if "123" is your GA4 property ID. To request at the
   *  account level, entity should be for example 'accounts/1234' if "1234" is
   *  your GA4 Account ID.
   */
  // const entity = 'abc123'
  /**
   *  The dimensions requested and displayed in the response. Requests are
   *  allowed up to 9 dimensions.
   */
  // const dimensions = [1,2,3,4]
  /**
   *  The metrics requested and displayed in the response. Requests are allowed
   *  up to 10 metrics.
   */
  // const metrics = [1,2,3,4]
  /**
   *  Date ranges of access records to read. If multiple date ranges are
   *  requested, each response row will contain a zero based date range index. If
   *  two date ranges overlap, the access records for the overlapping days is
   *  included in the response rows for both date ranges. Requests are allowed up
   *  to 2 date ranges.
   */
  // const dateRanges = [1,2,3,4]
  /**
   *  Dimension filters let you restrict report response to specific
   *  dimension values which match the filter. For example, filtering on access
   *  records of a single user. To learn more, see Fundamentals of Dimension
   *  Filters (https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters)
   *  for examples. Metrics cannot be used in this filter.
   */
  // const dimensionFilter = {}
  /**
   *  Metric filters allow you to restrict report response to specific metric
   *  values which match the filter. Metric filters are applied after aggregating
   *  the report's rows, similar to SQL having-clause. Dimensions cannot be used
   *  in this filter.
   */
  // const metricFilter = {}
  /**
   *  The row count of the start row. The first row is counted as row 0. If
   *  offset is unspecified, it is treated as 0. If offset is zero, then this
   *  method will return the first page of results with `limit` entries.
   *  To learn more about this pagination parameter, see
   *  Pagination (https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  // const offset = 1234
  /**
   *  The number of rows to return. If unspecified, 10,000 rows are returned. The
   *  API returns a maximum of 100,000 rows per request, no matter how many you
   *  ask for. `limit` must be positive.
   *  The API may return fewer rows than the requested `limit`, if there aren't
   *  as many remaining rows as the `limit`. For instance, there are fewer than
   *  300 possible values for the dimension `country`, so when reporting on only
   *  `country`, you can't get more than 300 rows, even if you set `limit` to a
   *  higher value.
   *  To learn more about this pagination parameter, see
   *  Pagination (https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  // const limit = 1234
  /**
   *  This request's time zone if specified. If unspecified, the property's time
   *  zone is used. The request's time zone is used to interpret the start & end
   *  dates of the report.
   *  Formatted as strings from the IANA Time Zone database
   *  (https://www.iana.org/time-zones); for example "America/New_York" or
   *  "Asia/Tokyo".
   */
  // const timeZone = 'abc123'
  /**
   *  Specifies how rows are ordered in the response.
   */
  // const orderBys = [1,2,3,4]
  /**
   *  Toggles whether to return the current state of this Analytics Property's
   *  quota. Quota is returned in AccessQuota (#AccessQuota). For account-level
   *  requests, this field must be false.
   */
  // const returnEntityQuota = true
  /**
   *  Optional. Determines whether to include users who have never made an API
   *  call in the response. If true, all users with access to the specified
   *  property or account are included in the response, regardless of whether
   *  they have made an API call or not. If false, only the users who have made
   *  an API call will be included.
   */
  // const includeAllUsers = true
  /**
   *  Optional. Decides whether to return the users within user groups. This
   *  field works only when include_all_users is set to true. If true, it will
   *  return all users with access to the specified property or account.
   *  If false, only the users with direct access will be returned.
   */
  // const expandGroups = true

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-cloud/admin').v1beta;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callRunAccessReport() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await adminClient.runAccessReport(request);
    console.log(response);
  }

  callRunAccessReport();
  // [END analyticsadmin_v1beta_generated_AnalyticsAdminService_RunAccessReport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
