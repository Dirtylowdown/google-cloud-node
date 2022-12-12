// Copyright 2022 Google LLC
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

function main(name, etag) {
  // [START dataplex_v1_generated_MetadataService_DeleteEntity_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the entity:
   *  `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.
   */
  // const name = 'abc123'
  /**
   *  Required. The etag associated with the entity, which can be retrieved with
   *  a GetEntity   request.
   */
  // const etag = 'abc123'

  // Imports the Dataplex library
  const {MetadataServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new MetadataServiceClient();

  async function callDeleteEntity() {
    // Construct request
    const request = {
      name,
      etag,
    };

    // Run request
    const response = await dataplexClient.deleteEntity(request);
    console.log(response);
  }

  callDeleteEntity();
  // [END dataplex_v1_generated_MetadataService_DeleteEntity_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
