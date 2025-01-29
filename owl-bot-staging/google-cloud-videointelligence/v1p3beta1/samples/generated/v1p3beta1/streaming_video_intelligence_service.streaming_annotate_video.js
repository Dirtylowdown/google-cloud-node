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

function main() {
  // [START videointelligence_v1p3beta1_generated_StreamingVideoIntelligenceService_StreamingAnnotateVideo_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Provides information to the annotator, specifing how to process the
   *  request. The first `AnnotateStreamingVideoRequest` message must only
   *  contain a `video_config` message.
   */
  // const videoConfig = {}
  /**
   *  The video data to be annotated. Chunks of video data are sequentially
   *  sent in `StreamingAnnotateVideoRequest` messages. Except the initial
   *  `StreamingAnnotateVideoRequest` message containing only
   *  `video_config`, all subsequent `AnnotateStreamingVideoRequest`
   *  messages must only contain `input_content` field.
   *  Note: as with all bytes fields, protobuffers use a pure binary
   *  representation (not base64).
   */
  // const inputContent = Buffer.from('string')

  // Imports the Videointelligence library
  const {StreamingVideoIntelligenceServiceClient} = require('@google-cloud/video-intelligence').v1p3beta1;

  // Instantiates a client
  const videointelligenceClient = new StreamingVideoIntelligenceServiceClient();

  async function callStreamingAnnotateVideo() {
    // Construct request
    const request = {
    };

    // Run request
    const stream = await videointelligenceClient.streamingAnnotateVideo();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end();
  }

  callStreamingAnnotateVideo();
  // [END videointelligence_v1p3beta1_generated_StreamingVideoIntelligenceService_StreamingAnnotateVideo_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
