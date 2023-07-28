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

function main(parent, tagTemplate) {
  // [START datacatalog_v1_generated_DataCatalog_ReconcileTags_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of Entry google.cloud.datacatalog.v1.Entry  to be tagged.
   */
  // const parent = 'abc123'
  /**
   *  Required. The name of the tag template, which is used for reconciliation.
   */
  // const tagTemplate = 'abc123'
  /**
   *  If set to `true`, deletes entry tags related to a tag template
   *  not listed in the tags source from an entry. If set to `false`,
   *  unlisted tags are retained.
   */
  // const forceDeleteMissing = true
  /**
   *  A list of tags to apply to an entry. A tag can specify a
   *  tag template, which must be the template specified in the
   *  `ReconcileTagsRequest`.
   *  The sole entry and each of its columns must be mentioned at most once.
   */
  // const tags = [1,2,3,4]

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callReconcileTags() {
    // Construct request
    const request = {
      parent,
      tagTemplate,
    };

    // Run request
    const [operation] = await datacatalogClient.reconcileTags(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callReconcileTags();
  // [END datacatalog_v1_generated_DataCatalog_ReconcileTags_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
