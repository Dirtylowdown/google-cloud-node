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

function main(nodeVersion, imageType) {
  // [START container_v1_generated_ClusterManager_UpdateNodePool_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Kubernetes version to change the nodes to (typically an
   *  upgrade).
   *  Users may specify either explicit versions offered by Kubernetes Engine or
   *  version aliases, which have the following behavior:
   *  - "latest": picks the highest valid Kubernetes version
   *  - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
   *  - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
   *  - "1.X.Y-gke.N": picks an explicit Kubernetes version
   *  - "-": picks the Kubernetes master version
   */
  // const nodeVersion = 'abc123'
  /**
   *  Required. The desired image type for the node pool. Please see
   *  https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for
   *  available image types.
   */
  // const imageType = 'abc123'
  /**
   *  The name (project, location, cluster, node pool) of the node pool to
   *  update. Specified in the format
   *  `projects/* /locations/* /clusters/* /nodePools/*`.
   */
  // const name = 'abc123'
  /**
   *  The desired list of Google Compute Engine
   *  zones (https://cloud.google.com/compute/docs/zones#available) in which the
   *  node pool's nodes should be located. Changing the locations for a node pool
   *  will result in nodes being either created or removed from the node pool,
   *  depending on whether locations are being added or removed.
   */
  // const locations = ['abc','def']
  /**
   *  The desired workload metadata config for the node pool.
   */
  // const workloadMetadataConfig = {}
  /**
   *  Upgrade settings control disruption and speed of the upgrade.
   */
  // const upgradeSettings = {}
  /**
   *  The desired network tags to be applied to all nodes in the node pool.
   *  If this field is not present, the tags will not be changed. Otherwise,
   *  the existing network tags will be *replaced* with the provided tags.
   */
  // const tags = {}
  /**
   *  The desired node taints to be applied to all nodes in the node pool.
   *  If this field is not present, the taints will not be changed. Otherwise,
   *  the existing node taints will be *replaced* with the provided taints.
   */
  // const taints = {}
  /**
   *  The desired node labels to be applied to all nodes in the node pool.
   *  If this field is not present, the labels will not be changed. Otherwise,
   *  the existing node labels will be *replaced* with the provided labels.
   */
  // const labels = {}
  /**
   *  Parameters that can be configured on Linux nodes.
   */
  // const linuxNodeConfig = {}
  /**
   *  Node kubelet configs.
   */
  // const kubeletConfig = {}
  /**
   *  Node network config.
   */
  // const nodeNetworkConfig = {}
  /**
   *  GCFS config.
   */
  // const gcfsConfig = {}
  /**
   *  Confidential nodes config.
   *  All the nodes in the node pool will be Confidential VM once enabled.
   */
  // const confidentialNodes = {}
  /**
   *  Enable or disable gvnic on the node pool.
   */
  // const gvnic = {}
  /**
   *  The current etag of the node pool.
   *  If an etag is provided and does not match the current etag of the node
   *  pool, update will be blocked and an ABORTED error will be returned.
   */
  // const etag = 'abc123'
  /**
   *  Enable or disable NCCL fast socket for the node pool.
   */
  // const fastSocket = {}
  /**
   *  Logging configuration.
   */
  // const loggingConfig = {}
  /**
   *  The resource labels for the node pool to use to annotate any related
   *  Google Compute Engine resources.
   */
  // const resourceLabels = {}
  /**
   *  Parameters that can be configured on Windows nodes.
   */
  // const windowsNodeConfig = {}
  /**
   *  A list of hardware accelerators to be attached to each node.
   *  See https://cloud.google.com/compute/docs/gpus for more information about
   *  support for GPUs.
   */
  // const accelerators = [1,2,3,4]
  /**
   *  Optional. The desired Google Compute Engine machine
   *  type (https://cloud.google.com/compute/docs/machine-types) for nodes in the
   *  node pool. Initiates an upgrade operation that migrates the nodes in the
   *  node pool to the specified machine type.
   */
  // const machineType = 'abc123'
  /**
   *  Optional. The desired disk type (e.g. 'pd-standard', 'pd-ssd' or
   *  'pd-balanced') for nodes in the node pool.
   *  Initiates an upgrade operation that migrates the nodes in the
   *  node pool to the specified disk type.
   */
  // const diskType = 'abc123'
  /**
   *  Optional. The desired disk size for nodes in the node pool specified in GB.
   *  The smallest allowed disk size is 10GB.
   *  Initiates an upgrade operation that migrates the nodes in the
   *  node pool to the specified disk size.
   */
  // const diskSizeGb = 1234
  /**
   *  Desired resource manager tag keys and values to be attached to the nodes
   *  for managing Compute Engine firewalls using Network Firewall Policies.
   *  Existing tags will be replaced with new values.
   */
  // const resourceManagerTags = {}
  /**
   *  The desired containerd config for nodes in the node pool.
   *  Initiates an upgrade operation that recreates the nodes with the new
   *  config.
   */
  // const containerdConfig = {}
  /**
   *  Specifies the configuration of queued provisioning.
   */
  // const queuedProvisioning = {}
  /**
   *  List of Storage Pools where boot disks are provisioned.
   *  Existing Storage Pools will be replaced with storage-pools.
   */
  // const storagePools = ['abc','def']

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callUpdateNodePool() {
    // Construct request
    const request = {
      nodeVersion,
      imageType,
    };

    // Run request
    const response = await containerClient.updateNodePool(request);
    console.log(response);
  }

  callUpdateNodePool();
  // [END container_v1_generated_ClusterManager_UpdateNodePool_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
