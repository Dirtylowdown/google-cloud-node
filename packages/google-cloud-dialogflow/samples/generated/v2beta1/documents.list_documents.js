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
  // [START dialogflow_v2beta1_generated_Documents_ListDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The knowledge base to list all documents for.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/knowledgeBases/<Knowledge Base ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return in a single page. By
   *  default 10 and at most 100.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'
  /**
   *  The filter expression used to filter documents returned by the list method.
   *  The expression has the following syntax:
   *    <field> <operator> <value> AND <field> <operator> <value>  ...
   *  The following fields and operators are supported:
   *  * knowledge_types with has(:) operator
   *  * display_name with has(:) operator
   *  * state with equals(=) operator
   *  Examples:
   *  * "knowledge_types:FAQ" matches documents with FAQ knowledge type.
   *  * "display_name:customer" matches documents whose display name contains
   *    "customer".
   *  * "state=ACTIVE" matches documents with ACTIVE state.
   *  * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents.
   *  For more information about filtering, see
   *  API Filtering (https://aip.dev/160).
   */
  // const filter = 'abc123'

  // Imports the Dialogflow library
  const {DocumentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new DocumentsClient();

  async function callListDocuments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = dialogflowClient.listDocumentsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDocuments();
  // [END dialogflow_v2beta1_generated_Documents_ListDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
