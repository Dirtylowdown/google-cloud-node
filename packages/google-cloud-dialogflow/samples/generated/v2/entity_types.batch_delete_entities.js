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

function main(parent, entityValues) {
  // [START dialogflow_v2_generated_EntityTypes_BatchDeleteEntities_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entity type to delete entries for. Format:
   *  `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The reference `values` of the entities to delete. Note that
   *  these are not fully-qualified names, i.e. they don't start with
   *  `projects/<Project ID>`.
   */
  // const entityValues = ['abc','def']
  /**
   *  Optional. The language used to access language-specific data.
   *  If not specified, the agent's default language is used.
   *  For more information, see
   *  Multilingual intent and entity
   *  data (https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
   */
  // const languageCode = 'abc123'

  // Imports the Dialogflow library
  const {EntityTypesClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EntityTypesClient();

  async function callBatchDeleteEntities() {
    // Construct request
    const request = {
      parent,
      entityValues,
    };

    // Run request
    const [operation] = await dialogflowClient.batchDeleteEntities(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchDeleteEntities();
  // [END dialogflow_v2_generated_EntityTypes_BatchDeleteEntities_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
