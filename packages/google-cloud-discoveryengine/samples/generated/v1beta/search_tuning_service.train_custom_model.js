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

function main(dataStore) {
  // [START discoveryengine_v1beta_generated_SearchTuningService_TrainCustomModel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Cloud Storage training input.
   */
  // const gcsTrainingInput = {}
  /**
   *  Required. The resource name of the Data Store, such as
   *  `projects/* /locations/global/collections/default_collection/dataStores/default_data_store`.
   *  This field is used to identify the data store where to train the models.
   */
  // const dataStore = 'abc123'
  /**
   *  Model to be trained. Supported values are:
   *   * **search-tuning**: Fine tuning the search system based on data provided.
   */
  // const modelType = 'abc123'
  /**
   *  The desired location of errors incurred during the data ingestion and
   *  training.
   */
  // const errorConfig = {}
  /**
   *  If not provided, a UUID will be generated.
   */
  // const modelId = 'abc123'

  // Imports the Discoveryengine library
  const {SearchTuningServiceClient} = require('@google-cloud/discoveryengine').v1beta;

  // Instantiates a client
  const discoveryengineClient = new SearchTuningServiceClient();

  async function callTrainCustomModel() {
    // Construct request
    const request = {
      dataStore,
    };

    // Run request
    const [operation] = await discoveryengineClient.trainCustomModel(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callTrainCustomModel();
  // [END discoveryengine_v1beta_generated_SearchTuningService_TrainCustomModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
