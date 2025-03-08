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

function main(parent, schema, schemaId) {
  // [START discoveryengine_v1_generated_SchemaService_CreateSchema_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent data store resource name, in the format of
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Schema google.cloud.discoveryengine.v1.Schema  to create.
   */
  // const schema = {}
  /**
   *  Required. The ID to use for the
   *  Schema google.cloud.discoveryengine.v1.Schema, which becomes the final
   *  component of the
   *  Schema.name google.cloud.discoveryengine.v1.Schema.name.
   *  This field should conform to
   *  RFC-1034 (https://tools.ietf.org/html/rfc1034) standard with a length
   *  limit of 63 characters.
   */
  // const schemaId = 'abc123'

  // Imports the Discoveryengine library
  const {SchemaServiceClient} = require('@google-cloud/discoveryengine').v1;

  // Instantiates a client
  const discoveryengineClient = new SchemaServiceClient();

  async function callCreateSchema() {
    // Construct request
    const request = {
      parent,
      schema,
      schemaId,
    };

    // Run request
    const [operation] = await discoveryengineClient.createSchema(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateSchema();
  // [END discoveryengine_v1_generated_SchemaService_CreateSchema_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
