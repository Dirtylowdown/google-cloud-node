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
  // [START discoveryengine_v1beta_generated_DocumentService_ListDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent branch resource name, such as
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
   *  Use `default_branch` as the branch ID, to list documents under the default
   *  branch.
   *  If the caller does not have permission to list
   *  Document google.cloud.discoveryengine.v1beta.Document s under this
   *  branch, regardless of whether or not this branch exists, a
   *  `PERMISSION_DENIED` error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of Document google.cloud.discoveryengine.v1beta.Document s
   *  to return. If unspecified, defaults to 100. The maximum allowed value is
   *  1000. Values above 1000 are set to 1000.
   *  If this field is negative, an `INVALID_ARGUMENT` error is returned.
   */
  // const pageSize = 1234
  /**
   *  A page token
   *  ListDocumentsResponse.next_page_token google.cloud.discoveryengine.v1beta.ListDocumentsResponse.next_page_token,
   *  received from a previous
   *  DocumentService.ListDocuments google.cloud.discoveryengine.v1beta.DocumentService.ListDocuments 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  DocumentService.ListDocuments google.cloud.discoveryengine.v1beta.DocumentService.ListDocuments 
   *  must match the call that provided the page token. Otherwise, an
   *  `INVALID_ARGUMENT` error is returned.
   */
  // const pageToken = 'abc123'

  // Imports the Discoveryengine library
  const {DocumentServiceClient} = require('@google-cloud/discoveryengine').v1beta;

  // Instantiates a client
  const discoveryengineClient = new DocumentServiceClient();

  async function callListDocuments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = discoveryengineClient.listDocumentsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDocuments();
  // [END discoveryengine_v1beta_generated_DocumentService_ListDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
