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

function main(recognizer) {
  // [START speech_v2_generated_Speech_StreamingRecognize_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Recognizer to use during recognition. The
   *  expected format is
   *  `projects/{project}/locations/{location}/recognizers/{recognizer}`. The
   *  {recognizer} segment may be set to `_` to use an empty implicit Recognizer.
   */
  // const recognizer = 'abc123'
  /**
   *  StreamingRecognitionConfig to be used in this recognition attempt.
   *  If provided, it will override the default RecognitionConfig stored in the
   *  Recognizer.
   */
  // const streamingConfig = {}
  /**
   *  Inline audio bytes to be Recognized.
   *  Maximum size for this field is 15 KB per request.
   */
  // const audio = Buffer.from('string')

  // Imports the Speech library
  const {SpeechClient} = require('@google-cloud/speech').v2;

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function callStreamingRecognize() {
    // Construct request
    const request = {
      recognizer,
    };

    // Run request
    const stream = await speechClient.streamingRecognize();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end();
  }

  callStreamingRecognize();
  // [END speech_v2_generated_Speech_StreamingRecognize_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
