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
  // [START backupdr_v1_generated_BackupDR_FetchUsableBackupVaults_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location for which to retrieve backupvault stores
   *  information, in the format 'projects/{project_id}/locations/{location}'. In
   *  Cloud Backup and DR, locations map to Google Cloud regions, for example
   *  **us-central1**.
   *  To retrieve backupvault stores for all locations, use "-" for the
   *  '{location}' value.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Requested page size. Server may return fewer items than
   *  requested. If unspecified, server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token identifying a page of results the server should return.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filtering results.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Hint for how to order the results.
   */
  // const orderBy = 'abc123'

  // Imports the Backupdr library
  const {BackupDRClient} = require('@google-cloud/backupdr').v1;

  // Instantiates a client
  const backupdrClient = new BackupDRClient();

  async function callFetchUsableBackupVaults() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = backupdrClient.fetchUsableBackupVaultsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callFetchUsableBackupVaults();
  // [END backupdr_v1_generated_BackupDR_FetchUsableBackupVaults_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
