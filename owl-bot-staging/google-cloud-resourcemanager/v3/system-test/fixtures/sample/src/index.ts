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

import {FoldersClient, OrganizationsClient, ProjectsClient, TagBindingsClient, TagHoldsClient, TagKeysClient, TagValuesClient} from '@google-cloud/resource-manager';

// check that the client class type name can be used
function doStuffWithFoldersClient(client: FoldersClient) {
  client.close();
}
function doStuffWithOrganizationsClient(client: OrganizationsClient) {
  client.close();
}
function doStuffWithProjectsClient(client: ProjectsClient) {
  client.close();
}
function doStuffWithTagBindingsClient(client: TagBindingsClient) {
  client.close();
}
function doStuffWithTagHoldsClient(client: TagHoldsClient) {
  client.close();
}
function doStuffWithTagKeysClient(client: TagKeysClient) {
  client.close();
}
function doStuffWithTagValuesClient(client: TagValuesClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const foldersClient = new FoldersClient();
  doStuffWithFoldersClient(foldersClient);
  // check that the client instance can be created
  const organizationsClient = new OrganizationsClient();
  doStuffWithOrganizationsClient(organizationsClient);
  // check that the client instance can be created
  const projectsClient = new ProjectsClient();
  doStuffWithProjectsClient(projectsClient);
  // check that the client instance can be created
  const tagBindingsClient = new TagBindingsClient();
  doStuffWithTagBindingsClient(tagBindingsClient);
  // check that the client instance can be created
  const tagHoldsClient = new TagHoldsClient();
  doStuffWithTagHoldsClient(tagHoldsClient);
  // check that the client instance can be created
  const tagKeysClient = new TagKeysClient();
  doStuffWithTagKeysClient(tagKeysClient);
  // check that the client instance can be created
  const tagValuesClient = new TagValuesClient();
  doStuffWithTagValuesClient(tagValuesClient);
}

main();
