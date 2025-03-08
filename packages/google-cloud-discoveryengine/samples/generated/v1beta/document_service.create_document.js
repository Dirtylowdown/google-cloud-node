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

function main(parent, document, documentId) {
  // [START discoveryengine_v1beta_generated_DocumentService_CreateDocument_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, such as
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Document google.cloud.discoveryengine.v1beta.Document  to
   *  create.
   */
  // const document = {}
  /**
   *  Required. The ID to use for the
   *  Document google.cloud.discoveryengine.v1beta.Document, which becomes the
   *  final component of the
   *  Document.name google.cloud.discoveryengine.v1beta.Document.name.
   *  If the caller does not have permission to create the
   *  Document google.cloud.discoveryengine.v1beta.Document, regardless of
   *  whether or not it exists, a `PERMISSION_DENIED` error is returned.
   *  This field must be unique among all
   *  Document google.cloud.discoveryengine.v1beta.Document s with the same
   *  parent google.cloud.discoveryengine.v1beta.CreateDocumentRequest.parent.
   *  Otherwise, an `ALREADY_EXISTS` error is returned.
   *  This field must conform to RFC-1034 (https://tools.ietf.org/html/rfc1034)
   *  standard with a length limit of 63 characters. Otherwise, an
   *  `INVALID_ARGUMENT` error is returned.
   */
  // const documentId = 'abc123'

  // Imports the Discoveryengine library
  const {DocumentServiceClient} = require('@google-cloud/discoveryengine').v1beta;

  // Instantiates a client
  const discoveryengineClient = new DocumentServiceClient();

  async function callCreateDocument() {
    // Construct request
    const request = {
      parent,
      document,
      documentId,
    };

    // Run request
    const response = await discoveryengineClient.createDocument(request);
    console.log(response);
  }

  callCreateDocument();
  // [END discoveryengine_v1beta_generated_DocumentService_CreateDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
