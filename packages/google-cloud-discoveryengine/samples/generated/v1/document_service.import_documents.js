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
  // [START discoveryengine_v1_generated_DocumentService_ImportDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The Inline source for the input content for documents.
   */
  // const inlineSource = {}
  /**
   *  Cloud Storage location for the input content.
   */
  // const gcsSource = {}
  /**
   *  BigQuery input source.
   */
  // const bigquerySource = {}
  /**
   *  FhirStore input source.
   */
  // const fhirStoreSource = {}
  /**
   *  Spanner input source.
   */
  // const spannerSource = {}
  /**
   *  Cloud SQL input source.
   */
  // const cloudSqlSource = {}
  /**
   *  Firestore input source.
   */
  // const firestoreSource = {}
  /**
   *  AlloyDB input source.
   */
  // const alloyDbSource = {}
  /**
   *  Cloud Bigtable input source.
   */
  // const bigtableSource = {}
  /**
   *  Required. The parent branch resource name, such as
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
   *  Requires create/update permission.
   */
  // const parent = 'abc123'
  /**
   *  The desired location of errors incurred during the Import.
   */
  // const errorConfig = {}
  /**
   *  The mode of reconciliation between existing documents and the documents to
   *  be imported. Defaults to
   *  ReconciliationMode.INCREMENTAL google.cloud.discoveryengine.v1.ImportDocumentsRequest.ReconciliationMode.INCREMENTAL.
   */
  // const reconciliationMode = {}
  /**
   *  Indicates which fields in the provided imported documents to update. If
   *  not set, the default is to update all fields.
   */
  // const updateMask = {}
  /**
   *  Whether to automatically generate IDs for the documents if absent.
   *  If set to `true`,
   *  Document.id google.cloud.discoveryengine.v1.Document.id s are
   *  automatically generated based on the hash of the payload, where IDs may not
   *  be consistent during multiple imports. In which case
   *  ReconciliationMode.FULL google.cloud.discoveryengine.v1.ImportDocumentsRequest.ReconciliationMode.FULL 
   *  is highly recommended to avoid duplicate contents. If unset or set to
   *  `false`, Document.id google.cloud.discoveryengine.v1.Document.id s have
   *  to be specified using
   *  id_field google.cloud.discoveryengine.v1.ImportDocumentsRequest.id_field,
   *  otherwise, documents without IDs fail to be imported.
   *  Supported data sources:
   *  * GcsSource google.cloud.discoveryengine.v1.GcsSource.
   *  GcsSource.data_schema google.cloud.discoveryengine.v1.GcsSource.data_schema 
   *  must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown.
   *  * BigQuerySource google.cloud.discoveryengine.v1.BigQuerySource.
   *  BigQuerySource.data_schema google.cloud.discoveryengine.v1.BigQuerySource.data_schema 
   *  must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown.
   *  * SpannerSource google.cloud.discoveryengine.v1.SpannerSource.
   *  * CloudSqlSource google.cloud.discoveryengine.v1.CloudSqlSource.
   *  * FirestoreSource google.cloud.discoveryengine.v1.FirestoreSource.
   *  * BigtableSource google.cloud.discoveryengine.v1.BigtableSource.
   */
  // const autoGenerateIds = true
  /**
   *  The field indicates the ID field or column to be used as unique IDs of
   *  the documents.
   *  For GcsSource google.cloud.discoveryengine.v1.GcsSource  it is the key of
   *  the JSON field. For instance, `my_id` for JSON `{"my_id": "some_uuid"}`.
   *  For others, it may be the column name of the table where the unique ids are
   *  stored.
   *  The values of the JSON field or the table column are used as the
   *  Document.id google.cloud.discoveryengine.v1.Document.id s. The JSON field
   *  or the table column must be of string type, and the values must be set as
   *  valid strings conform to RFC-1034 (https://tools.ietf.org/html/rfc1034)
   *  with 1-63 characters. Otherwise, documents without valid IDs fail to be
   *  imported.
   *  Only set this field when
   *  auto_generate_ids google.cloud.discoveryengine.v1.ImportDocumentsRequest.auto_generate_ids 
   *  is unset or set as `false`. Otherwise, an INVALID_ARGUMENT error is thrown.
   *  If it is unset, a default value `_id` is used when importing from the
   *  allowed data sources.
   *  Supported data sources:
   *  * GcsSource google.cloud.discoveryengine.v1.GcsSource.
   *  GcsSource.data_schema google.cloud.discoveryengine.v1.GcsSource.data_schema 
   *  must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown.
   *  * BigQuerySource google.cloud.discoveryengine.v1.BigQuerySource.
   *  BigQuerySource.data_schema google.cloud.discoveryengine.v1.BigQuerySource.data_schema 
   *  must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown.
   *  * SpannerSource google.cloud.discoveryengine.v1.SpannerSource.
   *  * CloudSqlSource google.cloud.discoveryengine.v1.CloudSqlSource.
   *  * FirestoreSource google.cloud.discoveryengine.v1.FirestoreSource.
   *  * BigtableSource google.cloud.discoveryengine.v1.BigtableSource.
   */
  // const idField = 'abc123'

  // Imports the Discoveryengine library
  const {DocumentServiceClient} = require('@google-cloud/discoveryengine').v1;

  // Instantiates a client
  const discoveryengineClient = new DocumentServiceClient();

  async function callImportDocuments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await discoveryengineClient.importDocuments(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportDocuments();
  // [END discoveryengine_v1_generated_DocumentService_ImportDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
