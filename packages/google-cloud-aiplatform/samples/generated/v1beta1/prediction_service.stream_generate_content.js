// Copyright 2024 Google LLC
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

function main(model, contents) {
  // [START aiplatform_v1beta1_generated_PredictionService_StreamGenerateContent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The fully qualified name of the publisher model or tuned model
   *  endpoint to use.
   *  Publisher model format:
   *  `projects/{project}/locations/{location}/publishers/* /models/*`
   *  Tuned model endpoint format:
   *  `projects/{project}/locations/{location}/endpoints/{endpoint}`
   */
  // const model = 'abc123'
  /**
   *  Required. The content of the current conversation with the model.
   *  For single-turn queries, this is a single instance. For multi-turn queries,
   *  this is a repeated field that contains conversation history + latest
   *  request.
   */
  // const contents = [1,2,3,4]
  /**
   *  Optional. The user provided system instructions for the model.
   *  Note: only text should be used in parts and content in each part will be in
   *  a separate paragraph.
   */
  // const systemInstruction = {}
  /**
   *  Optional. The name of the cached content used as context to serve the
   *  prediction. Note: only used in explicit caching, where users can have
   *  control over caching (e.g. what content to cache) and enjoy guaranteed cost
   *  savings. Format:
   *  `projects/{project}/locations/{location}/cachedContents/{cachedContent}`
   */
  // const cachedContent = 'abc123'
  /**
   *  Optional. A list of `Tools` the model may use to generate the next
   *  response.
   *  A `Tool` is a piece of code that enables the system to interact with
   *  external systems to perform an action, or set of actions, outside of
   *  knowledge and scope of the model.
   */
  // const tools = [1,2,3,4]
  /**
   *  Optional. Tool config. This config is shared for all tools provided in the
   *  request.
   */
  // const toolConfig = {}
  /**
   *  Optional. The labels with user-defined metadata for the request. It is used
   *  for billing and reporting only.
   *  Label keys and values can be no longer than 63 characters
   *  (Unicode codepoints) and can only contain lowercase letters, numeric
   *  characters, underscores, and dashes. International characters are allowed.
   *  Label values are optional. Label keys must start with a letter.
   */
  // const labels = [1,2,3,4]
  /**
   *  Optional. Per request settings for blocking unsafe content.
   *  Enforced on GenerateContentResponse.candidates.
   */
  // const safetySettings = [1,2,3,4]
  /**
   *  Optional. Generation config.
   */
  // const generationConfig = {}

  // Imports the Aiplatform library
  const {PredictionServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new PredictionServiceClient();

  async function callStreamGenerateContent() {
    // Construct request
    const request = {
      model,
      contents,
    };

    // Run request
    const stream = await aiplatformClient.streamGenerateContent(request);
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
  }

  callStreamGenerateContent();
  // [END aiplatform_v1beta1_generated_PredictionService_StreamGenerateContent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
