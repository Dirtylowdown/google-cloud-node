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
  // [START accesscontextmanager_v1_generated_AccessContextManager_ListGcpUserAccessBindings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Example: "organizations/256"
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of items to return. The server may return fewer items.
   *  If left blank, the server may return any number of items.
   */
  // const pageSize = 1234
  /**
   *  Optional. If left blank, returns the first page. To enumerate all items, use the
   *  next_page_token 
   *  google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse.next_page_token 
   *  from your previous list operation.
   */
  // const pageToken = 'abc123'

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} = require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callListGcpUserAccessBindings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = accesscontextmanagerClient.listGcpUserAccessBindingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListGcpUserAccessBindings();
  // [END accesscontextmanager_v1_generated_AccessContextManager_ListGcpUserAccessBindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
