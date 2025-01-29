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

function main(parent, hcxActivationKey, hcxActivationKeyId) {
  // [START vmwareengine_v1_generated_VmwareEngine_CreateHcxActivationKey_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the private cloud to create the key for.
   *  Resource names are schemeless URIs that follow the conventions in
   *  https://cloud.google.com/apis/design/resource_names.
   *  For example:
   *  `projects/my-project/locations/us-central1/privateClouds/my-cloud`
   */
  // const parent = 'abc123'
  /**
   *  Required. The initial description of a new HCX activation key. When
   *  creating a new key, this field must be an empty object.
   */
  // const hcxActivationKey = {}
  /**
   *  Required. The user-provided identifier of the `HcxActivationKey` to be
   *  created. This identifier must be unique among `HcxActivationKey` resources
   *  within the parent and becomes the final token in the name URI.
   *  The identifier must meet the following requirements:
   *  * Only contains 1-63 alphanumeric characters and hyphens
   *  * Begins with an alphabetical character
   *  * Ends with a non-hyphen character
   *  * Not formatted as a UUID
   *  * Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034)
   *  (section 3.5)
   */
  // const hcxActivationKeyId = 'abc123'
  /**
   *  A request ID to identify requests. Specify a unique request ID
   *  so that if you must retry your request, the server will know to ignore
   *  the request if it has already been completed. The server guarantees that a
   *  request doesn't result in creation of duplicate commitments for at least 60
   *  minutes.
   *  For example, consider a situation where you make an initial request and the
   *  request times out. If you make the request again with the same request ID,
   *  the server can check if original operation with the same request ID was
   *  received, and if so, will ignore the second request. This prevents clients
   *  from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'

  // Imports the Vmwareengine library
  const {VmwareEngineClient} = require('@google-cloud/vmwareengine').v1;

  // Instantiates a client
  const vmwareengineClient = new VmwareEngineClient();

  async function callCreateHcxActivationKey() {
    // Construct request
    const request = {
      parent,
      hcxActivationKey,
      hcxActivationKeyId,
    };

    // Run request
    const [operation] = await vmwareengineClient.createHcxActivationKey(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateHcxActivationKey();
  // [END vmwareengine_v1_generated_VmwareEngine_CreateHcxActivationKey_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
