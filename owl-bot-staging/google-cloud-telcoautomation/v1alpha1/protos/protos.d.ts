// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace telcoautomation. */
        namespace telcoautomation {

            /** Namespace v1alpha1. */
            namespace v1alpha1 {

                /** Represents a TelcoAutomation */
                class TelcoAutomation extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TelcoAutomation service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TelcoAutomation service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TelcoAutomation;

                    /**
                     * Calls ListOrchestrationClusters.
                     * @param request ListOrchestrationClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOrchestrationClustersResponse
                     */
                    public listOrchestrationClusters(request: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListOrchestrationClustersCallback): void;

                    /**
                     * Calls ListOrchestrationClusters.
                     * @param request ListOrchestrationClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listOrchestrationClusters(request: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse>;

                    /**
                     * Calls GetOrchestrationCluster.
                     * @param request GetOrchestrationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrchestrationCluster
                     */
                    public getOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetOrchestrationClusterCallback): void;

                    /**
                     * Calls GetOrchestrationCluster.
                     * @param request GetOrchestrationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest): Promise<google.cloud.telcoautomation.v1alpha1.OrchestrationCluster>;

                    /**
                     * Calls CreateOrchestrationCluster.
                     * @param request CreateOrchestrationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.CreateOrchestrationClusterCallback): void;

                    /**
                     * Calls CreateOrchestrationCluster.
                     * @param request CreateOrchestrationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteOrchestrationCluster.
                     * @param request DeleteOrchestrationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.DeleteOrchestrationClusterCallback): void;

                    /**
                     * Calls DeleteOrchestrationCluster.
                     * @param request DeleteOrchestrationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteOrchestrationCluster(request: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEdgeSlms.
                     * @param request ListEdgeSlmsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEdgeSlmsResponse
                     */
                    public listEdgeSlms(request: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListEdgeSlmsCallback): void;

                    /**
                     * Calls ListEdgeSlms.
                     * @param request ListEdgeSlmsRequest message or plain object
                     * @returns Promise
                     */
                    public listEdgeSlms(request: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse>;

                    /**
                     * Calls GetEdgeSlm.
                     * @param request GetEdgeSlmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EdgeSlm
                     */
                    public getEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetEdgeSlmCallback): void;

                    /**
                     * Calls GetEdgeSlm.
                     * @param request GetEdgeSlmRequest message or plain object
                     * @returns Promise
                     */
                    public getEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest): Promise<google.cloud.telcoautomation.v1alpha1.EdgeSlm>;

                    /**
                     * Calls CreateEdgeSlm.
                     * @param request CreateEdgeSlmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.CreateEdgeSlmCallback): void;

                    /**
                     * Calls CreateEdgeSlm.
                     * @param request CreateEdgeSlmRequest message or plain object
                     * @returns Promise
                     */
                    public createEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEdgeSlm.
                     * @param request DeleteEdgeSlmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.DeleteEdgeSlmCallback): void;

                    /**
                     * Calls DeleteEdgeSlm.
                     * @param request DeleteEdgeSlmRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEdgeSlm(request: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBlueprint.
                     * @param request CreateBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public createBlueprint(request: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.CreateBlueprintCallback): void;

                    /**
                     * Calls CreateBlueprint.
                     * @param request CreateBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public createBlueprint(request: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls UpdateBlueprint.
                     * @param request UpdateBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public updateBlueprint(request: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.UpdateBlueprintCallback): void;

                    /**
                     * Calls UpdateBlueprint.
                     * @param request UpdateBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public updateBlueprint(request: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls GetBlueprint.
                     * @param request GetBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public getBlueprint(request: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetBlueprintCallback): void;

                    /**
                     * Calls GetBlueprint.
                     * @param request GetBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public getBlueprint(request: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls DeleteBlueprint.
                     * @param request DeleteBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteBlueprint(request: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.DeleteBlueprintCallback): void;

                    /**
                     * Calls DeleteBlueprint.
                     * @param request DeleteBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBlueprint(request: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListBlueprints.
                     * @param request ListBlueprintsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBlueprintsResponse
                     */
                    public listBlueprints(request: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListBlueprintsCallback): void;

                    /**
                     * Calls ListBlueprints.
                     * @param request ListBlueprintsRequest message or plain object
                     * @returns Promise
                     */
                    public listBlueprints(request: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse>;

                    /**
                     * Calls ApproveBlueprint.
                     * @param request ApproveBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public approveBlueprint(request: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ApproveBlueprintCallback): void;

                    /**
                     * Calls ApproveBlueprint.
                     * @param request ApproveBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public approveBlueprint(request: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls ProposeBlueprint.
                     * @param request ProposeBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public proposeBlueprint(request: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ProposeBlueprintCallback): void;

                    /**
                     * Calls ProposeBlueprint.
                     * @param request ProposeBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public proposeBlueprint(request: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls RejectBlueprint.
                     * @param request RejectBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Blueprint
                     */
                    public rejectBlueprint(request: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.RejectBlueprintCallback): void;

                    /**
                     * Calls RejectBlueprint.
                     * @param request RejectBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public rejectBlueprint(request: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.Blueprint>;

                    /**
                     * Calls ListBlueprintRevisions.
                     * @param request ListBlueprintRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBlueprintRevisionsResponse
                     */
                    public listBlueprintRevisions(request: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListBlueprintRevisionsCallback): void;

                    /**
                     * Calls ListBlueprintRevisions.
                     * @param request ListBlueprintRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listBlueprintRevisions(request: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse>;

                    /**
                     * Calls SearchBlueprintRevisions.
                     * @param request SearchBlueprintRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchBlueprintRevisionsResponse
                     */
                    public searchBlueprintRevisions(request: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.SearchBlueprintRevisionsCallback): void;

                    /**
                     * Calls SearchBlueprintRevisions.
                     * @param request SearchBlueprintRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public searchBlueprintRevisions(request: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest): Promise<google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse>;

                    /**
                     * Calls SearchDeploymentRevisions.
                     * @param request SearchDeploymentRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchDeploymentRevisionsResponse
                     */
                    public searchDeploymentRevisions(request: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.SearchDeploymentRevisionsCallback): void;

                    /**
                     * Calls SearchDeploymentRevisions.
                     * @param request SearchDeploymentRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public searchDeploymentRevisions(request: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest): Promise<google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse>;

                    /**
                     * Calls DiscardBlueprintChanges.
                     * @param request DiscardBlueprintChangesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiscardBlueprintChangesResponse
                     */
                    public discardBlueprintChanges(request: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.DiscardBlueprintChangesCallback): void;

                    /**
                     * Calls DiscardBlueprintChanges.
                     * @param request DiscardBlueprintChangesRequest message or plain object
                     * @returns Promise
                     */
                    public discardBlueprintChanges(request: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest): Promise<google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse>;

                    /**
                     * Calls ListPublicBlueprints.
                     * @param request ListPublicBlueprintsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPublicBlueprintsResponse
                     */
                    public listPublicBlueprints(request: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListPublicBlueprintsCallback): void;

                    /**
                     * Calls ListPublicBlueprints.
                     * @param request ListPublicBlueprintsRequest message or plain object
                     * @returns Promise
                     */
                    public listPublicBlueprints(request: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse>;

                    /**
                     * Calls GetPublicBlueprint.
                     * @param request GetPublicBlueprintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PublicBlueprint
                     */
                    public getPublicBlueprint(request: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetPublicBlueprintCallback): void;

                    /**
                     * Calls GetPublicBlueprint.
                     * @param request GetPublicBlueprintRequest message or plain object
                     * @returns Promise
                     */
                    public getPublicBlueprint(request: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest): Promise<google.cloud.telcoautomation.v1alpha1.PublicBlueprint>;

                    /**
                     * Calls CreateDeployment.
                     * @param request CreateDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public createDeployment(request: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.CreateDeploymentCallback): void;

                    /**
                     * Calls CreateDeployment.
                     * @param request CreateDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createDeployment(request: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.Deployment>;

                    /**
                     * Calls UpdateDeployment.
                     * @param request UpdateDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public updateDeployment(request: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.UpdateDeploymentCallback): void;

                    /**
                     * Calls UpdateDeployment.
                     * @param request UpdateDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateDeployment(request: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.Deployment>;

                    /**
                     * Calls GetDeployment.
                     * @param request GetDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public getDeployment(request: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetDeploymentCallback): void;

                    /**
                     * Calls GetDeployment.
                     * @param request GetDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getDeployment(request: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.Deployment>;

                    /**
                     * Calls RemoveDeployment.
                     * @param request RemoveDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public removeDeployment(request: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.RemoveDeploymentCallback): void;

                    /**
                     * Calls RemoveDeployment.
                     * @param request RemoveDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public removeDeployment(request: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListDeployments.
                     * @param request ListDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDeploymentsResponse
                     */
                    public listDeployments(request: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListDeploymentsCallback): void;

                    /**
                     * Calls ListDeployments.
                     * @param request ListDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listDeployments(request: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse>;

                    /**
                     * Calls ListDeploymentRevisions.
                     * @param request ListDeploymentRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDeploymentRevisionsResponse
                     */
                    public listDeploymentRevisions(request: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListDeploymentRevisionsCallback): void;

                    /**
                     * Calls ListDeploymentRevisions.
                     * @param request ListDeploymentRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listDeploymentRevisions(request: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse>;

                    /**
                     * Calls DiscardDeploymentChanges.
                     * @param request DiscardDeploymentChangesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiscardDeploymentChangesResponse
                     */
                    public discardDeploymentChanges(request: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.DiscardDeploymentChangesCallback): void;

                    /**
                     * Calls DiscardDeploymentChanges.
                     * @param request DiscardDeploymentChangesRequest message or plain object
                     * @returns Promise
                     */
                    public discardDeploymentChanges(request: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest): Promise<google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse>;

                    /**
                     * Calls ApplyDeployment.
                     * @param request ApplyDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public applyDeployment(request: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ApplyDeploymentCallback): void;

                    /**
                     * Calls ApplyDeployment.
                     * @param request ApplyDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public applyDeployment(request: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.Deployment>;

                    /**
                     * Calls ComputeDeploymentStatus.
                     * @param request ComputeDeploymentStatusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ComputeDeploymentStatusResponse
                     */
                    public computeDeploymentStatus(request: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ComputeDeploymentStatusCallback): void;

                    /**
                     * Calls ComputeDeploymentStatus.
                     * @param request ComputeDeploymentStatusRequest message or plain object
                     * @returns Promise
                     */
                    public computeDeploymentStatus(request: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest): Promise<google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse>;

                    /**
                     * Calls RollbackDeployment.
                     * @param request RollbackDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public rollbackDeployment(request: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.RollbackDeploymentCallback): void;

                    /**
                     * Calls RollbackDeployment.
                     * @param request RollbackDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public rollbackDeployment(request: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.Deployment>;

                    /**
                     * Calls GetHydratedDeployment.
                     * @param request GetHydratedDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HydratedDeployment
                     */
                    public getHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.GetHydratedDeploymentCallback): void;

                    /**
                     * Calls GetHydratedDeployment.
                     * @param request GetHydratedDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.HydratedDeployment>;

                    /**
                     * Calls ListHydratedDeployments.
                     * @param request ListHydratedDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHydratedDeploymentsResponse
                     */
                    public listHydratedDeployments(request: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ListHydratedDeploymentsCallback): void;

                    /**
                     * Calls ListHydratedDeployments.
                     * @param request ListHydratedDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listHydratedDeployments(request: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest): Promise<google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse>;

                    /**
                     * Calls UpdateHydratedDeployment.
                     * @param request UpdateHydratedDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HydratedDeployment
                     */
                    public updateHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.UpdateHydratedDeploymentCallback): void;

                    /**
                     * Calls UpdateHydratedDeployment.
                     * @param request UpdateHydratedDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.HydratedDeployment>;

                    /**
                     * Calls ApplyHydratedDeployment.
                     * @param request ApplyHydratedDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HydratedDeployment
                     */
                    public applyHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest, callback: google.cloud.telcoautomation.v1alpha1.TelcoAutomation.ApplyHydratedDeploymentCallback): void;

                    /**
                     * Calls ApplyHydratedDeployment.
                     * @param request ApplyHydratedDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public applyHydratedDeployment(request: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest): Promise<google.cloud.telcoautomation.v1alpha1.HydratedDeployment>;
                }

                namespace TelcoAutomation {

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listOrchestrationClusters}.
                     * @param error Error, if any
                     * @param [response] ListOrchestrationClustersResponse
                     */
                    type ListOrchestrationClustersCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getOrchestrationCluster}.
                     * @param error Error, if any
                     * @param [response] OrchestrationCluster
                     */
                    type GetOrchestrationClusterCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.OrchestrationCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|createOrchestrationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateOrchestrationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|deleteOrchestrationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteOrchestrationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listEdgeSlms}.
                     * @param error Error, if any
                     * @param [response] ListEdgeSlmsResponse
                     */
                    type ListEdgeSlmsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getEdgeSlm}.
                     * @param error Error, if any
                     * @param [response] EdgeSlm
                     */
                    type GetEdgeSlmCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.EdgeSlm) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|createEdgeSlm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEdgeSlmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|deleteEdgeSlm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEdgeSlmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|createBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type CreateBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|updateBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type UpdateBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type GetBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|deleteBlueprint}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteBlueprintCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listBlueprints}.
                     * @param error Error, if any
                     * @param [response] ListBlueprintsResponse
                     */
                    type ListBlueprintsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|approveBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type ApproveBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|proposeBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type ProposeBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|rejectBlueprint}.
                     * @param error Error, if any
                     * @param [response] Blueprint
                     */
                    type RejectBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Blueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listBlueprintRevisions}.
                     * @param error Error, if any
                     * @param [response] ListBlueprintRevisionsResponse
                     */
                    type ListBlueprintRevisionsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|searchBlueprintRevisions}.
                     * @param error Error, if any
                     * @param [response] SearchBlueprintRevisionsResponse
                     */
                    type SearchBlueprintRevisionsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|searchDeploymentRevisions}.
                     * @param error Error, if any
                     * @param [response] SearchDeploymentRevisionsResponse
                     */
                    type SearchDeploymentRevisionsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|discardBlueprintChanges}.
                     * @param error Error, if any
                     * @param [response] DiscardBlueprintChangesResponse
                     */
                    type DiscardBlueprintChangesCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listPublicBlueprints}.
                     * @param error Error, if any
                     * @param [response] ListPublicBlueprintsResponse
                     */
                    type ListPublicBlueprintsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getPublicBlueprint}.
                     * @param error Error, if any
                     * @param [response] PublicBlueprint
                     */
                    type GetPublicBlueprintCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.PublicBlueprint) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|createDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type CreateDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|updateDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type UpdateDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type GetDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|removeDeployment}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type RemoveDeploymentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listDeployments}.
                     * @param error Error, if any
                     * @param [response] ListDeploymentsResponse
                     */
                    type ListDeploymentsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listDeploymentRevisions}.
                     * @param error Error, if any
                     * @param [response] ListDeploymentRevisionsResponse
                     */
                    type ListDeploymentRevisionsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|discardDeploymentChanges}.
                     * @param error Error, if any
                     * @param [response] DiscardDeploymentChangesResponse
                     */
                    type DiscardDeploymentChangesCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|applyDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type ApplyDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|computeDeploymentStatus}.
                     * @param error Error, if any
                     * @param [response] ComputeDeploymentStatusResponse
                     */
                    type ComputeDeploymentStatusCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|rollbackDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type RollbackDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|getHydratedDeployment}.
                     * @param error Error, if any
                     * @param [response] HydratedDeployment
                     */
                    type GetHydratedDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.HydratedDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|listHydratedDeployments}.
                     * @param error Error, if any
                     * @param [response] ListHydratedDeploymentsResponse
                     */
                    type ListHydratedDeploymentsCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|updateHydratedDeployment}.
                     * @param error Error, if any
                     * @param [response] HydratedDeployment
                     */
                    type UpdateHydratedDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.HydratedDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.telcoautomation.v1alpha1.TelcoAutomation|applyHydratedDeployment}.
                     * @param error Error, if any
                     * @param [response] HydratedDeployment
                     */
                    type ApplyHydratedDeploymentCallback = (error: (Error|null), response?: google.cloud.telcoautomation.v1alpha1.HydratedDeployment) => void;
                }

                /** BlueprintView enum. */
                enum BlueprintView {
                    BLUEPRINT_VIEW_UNSPECIFIED = 0,
                    BLUEPRINT_VIEW_BASIC = 1,
                    BLUEPRINT_VIEW_FULL = 2
                }

                /** DeploymentView enum. */
                enum DeploymentView {
                    DEPLOYMENT_VIEW_UNSPECIFIED = 0,
                    DEPLOYMENT_VIEW_BASIC = 1,
                    DEPLOYMENT_VIEW_FULL = 2
                }

                /** ResourceType enum. */
                enum ResourceType {
                    RESOURCE_TYPE_UNSPECIFIED = 0,
                    NF_DEPLOY_RESOURCE = 1,
                    DEPLOYMENT_RESOURCE = 2
                }

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    STATUS_IN_PROGRESS = 1,
                    STATUS_ACTIVE = 2,
                    STATUS_FAILED = 3,
                    STATUS_DELETING = 4,
                    STATUS_DELETED = 5,
                    STATUS_PEERING = 10,
                    STATUS_NOT_APPLICABLE = 11
                }

                /** DeploymentLevel enum. */
                enum DeploymentLevel {
                    DEPLOYMENT_LEVEL_UNSPECIFIED = 0,
                    HYDRATION = 1,
                    SINGLE_DEPLOYMENT = 2,
                    MULTI_DEPLOYMENT = 3,
                    WORKLOAD_CLUSTER_DEPLOYMENT = 4
                }

                /** Properties of an OrchestrationCluster. */
                interface IOrchestrationCluster {

                    /** OrchestrationCluster name */
                    name?: (string|null);

                    /** OrchestrationCluster managementConfig */
                    managementConfig?: (google.cloud.telcoautomation.v1alpha1.IManagementConfig|null);

                    /** OrchestrationCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OrchestrationCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** OrchestrationCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** OrchestrationCluster tnaVersion */
                    tnaVersion?: (string|null);

                    /** OrchestrationCluster state */
                    state?: (google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.State|keyof typeof google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.State|null);
                }

                /** Represents an OrchestrationCluster. */
                class OrchestrationCluster implements IOrchestrationCluster {

                    /**
                     * Constructs a new OrchestrationCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster);

                    /** OrchestrationCluster name. */
                    public name: string;

                    /** OrchestrationCluster managementConfig. */
                    public managementConfig?: (google.cloud.telcoautomation.v1alpha1.IManagementConfig|null);

                    /** OrchestrationCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OrchestrationCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OrchestrationCluster labels. */
                    public labels: { [k: string]: string };

                    /** OrchestrationCluster tnaVersion. */
                    public tnaVersion: string;

                    /** OrchestrationCluster state. */
                    public state: (google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.State|keyof typeof google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.State);

                    /**
                     * Creates a new OrchestrationCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrchestrationCluster instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster): google.cloud.telcoautomation.v1alpha1.OrchestrationCluster;

                    /**
                     * Encodes the specified OrchestrationCluster message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.verify|verify} messages.
                     * @param message OrchestrationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrchestrationCluster message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.OrchestrationCluster.verify|verify} messages.
                     * @param message OrchestrationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrchestrationCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrchestrationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.OrchestrationCluster;

                    /**
                     * Decodes an OrchestrationCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrchestrationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.OrchestrationCluster;

                    /**
                     * Verifies an OrchestrationCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrchestrationCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrchestrationCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.OrchestrationCluster;

                    /**
                     * Creates a plain object from an OrchestrationCluster message. Also converts values to other types if specified.
                     * @param message OrchestrationCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.OrchestrationCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrchestrationCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrchestrationCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OrchestrationCluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        DELETING = 3,
                        FAILED = 4
                    }
                }

                /** Properties of an EdgeSlm. */
                interface IEdgeSlm {

                    /** EdgeSlm name */
                    name?: (string|null);

                    /** EdgeSlm orchestrationCluster */
                    orchestrationCluster?: (string|null);

                    /** EdgeSlm createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** EdgeSlm updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** EdgeSlm labels */
                    labels?: ({ [k: string]: string }|null);

                    /** EdgeSlm tnaVersion */
                    tnaVersion?: (string|null);

                    /** EdgeSlm state */
                    state?: (google.cloud.telcoautomation.v1alpha1.EdgeSlm.State|keyof typeof google.cloud.telcoautomation.v1alpha1.EdgeSlm.State|null);

                    /** EdgeSlm workloadClusterType */
                    workloadClusterType?: (google.cloud.telcoautomation.v1alpha1.EdgeSlm.WorkloadClusterType|keyof typeof google.cloud.telcoautomation.v1alpha1.EdgeSlm.WorkloadClusterType|null);
                }

                /** Represents an EdgeSlm. */
                class EdgeSlm implements IEdgeSlm {

                    /**
                     * Constructs a new EdgeSlm.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IEdgeSlm);

                    /** EdgeSlm name. */
                    public name: string;

                    /** EdgeSlm orchestrationCluster. */
                    public orchestrationCluster: string;

                    /** EdgeSlm createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** EdgeSlm updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** EdgeSlm labels. */
                    public labels: { [k: string]: string };

                    /** EdgeSlm tnaVersion. */
                    public tnaVersion: string;

                    /** EdgeSlm state. */
                    public state: (google.cloud.telcoautomation.v1alpha1.EdgeSlm.State|keyof typeof google.cloud.telcoautomation.v1alpha1.EdgeSlm.State);

                    /** EdgeSlm workloadClusterType. */
                    public workloadClusterType: (google.cloud.telcoautomation.v1alpha1.EdgeSlm.WorkloadClusterType|keyof typeof google.cloud.telcoautomation.v1alpha1.EdgeSlm.WorkloadClusterType);

                    /**
                     * Creates a new EdgeSlm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EdgeSlm instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IEdgeSlm): google.cloud.telcoautomation.v1alpha1.EdgeSlm;

                    /**
                     * Encodes the specified EdgeSlm message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.EdgeSlm.verify|verify} messages.
                     * @param message EdgeSlm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IEdgeSlm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EdgeSlm message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.EdgeSlm.verify|verify} messages.
                     * @param message EdgeSlm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IEdgeSlm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EdgeSlm message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EdgeSlm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.EdgeSlm;

                    /**
                     * Decodes an EdgeSlm message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EdgeSlm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.EdgeSlm;

                    /**
                     * Verifies an EdgeSlm message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EdgeSlm message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EdgeSlm
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.EdgeSlm;

                    /**
                     * Creates a plain object from an EdgeSlm message. Also converts values to other types if specified.
                     * @param message EdgeSlm
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.EdgeSlm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EdgeSlm to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EdgeSlm
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EdgeSlm {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        DELETING = 3,
                        FAILED = 4
                    }

                    /** WorkloadClusterType enum. */
                    enum WorkloadClusterType {
                        WORKLOAD_CLUSTER_TYPE_UNSPECIFIED = 0,
                        GDCE = 1,
                        GKE = 2
                    }
                }

                /** Properties of a Blueprint. */
                interface IBlueprint {

                    /** Blueprint name */
                    name?: (string|null);

                    /** Blueprint revisionId */
                    revisionId?: (string|null);

                    /** Blueprint sourceBlueprint */
                    sourceBlueprint?: (string|null);

                    /** Blueprint revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint approvalState */
                    approvalState?: (google.cloud.telcoautomation.v1alpha1.Blueprint.ApprovalState|keyof typeof google.cloud.telcoautomation.v1alpha1.Blueprint.ApprovalState|null);

                    /** Blueprint displayName */
                    displayName?: (string|null);

                    /** Blueprint repository */
                    repository?: (string|null);

                    /** Blueprint files */
                    files?: (google.cloud.telcoautomation.v1alpha1.IFile[]|null);

                    /** Blueprint labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Blueprint createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint sourceProvider */
                    sourceProvider?: (string|null);

                    /** Blueprint deploymentLevel */
                    deploymentLevel?: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel|null);

                    /** Blueprint rollbackSupport */
                    rollbackSupport?: (boolean|null);
                }

                /** Represents a Blueprint. */
                class Blueprint implements IBlueprint {

                    /**
                     * Constructs a new Blueprint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IBlueprint);

                    /** Blueprint name. */
                    public name: string;

                    /** Blueprint revisionId. */
                    public revisionId: string;

                    /** Blueprint sourceBlueprint. */
                    public sourceBlueprint: string;

                    /** Blueprint revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint approvalState. */
                    public approvalState: (google.cloud.telcoautomation.v1alpha1.Blueprint.ApprovalState|keyof typeof google.cloud.telcoautomation.v1alpha1.Blueprint.ApprovalState);

                    /** Blueprint displayName. */
                    public displayName: string;

                    /** Blueprint repository. */
                    public repository: string;

                    /** Blueprint files. */
                    public files: google.cloud.telcoautomation.v1alpha1.IFile[];

                    /** Blueprint labels. */
                    public labels: { [k: string]: string };

                    /** Blueprint createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Blueprint sourceProvider. */
                    public sourceProvider: string;

                    /** Blueprint deploymentLevel. */
                    public deploymentLevel: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel);

                    /** Blueprint rollbackSupport. */
                    public rollbackSupport: boolean;

                    /**
                     * Creates a new Blueprint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Blueprint instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IBlueprint): google.cloud.telcoautomation.v1alpha1.Blueprint;

                    /**
                     * Encodes the specified Blueprint message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.Blueprint.verify|verify} messages.
                     * @param message Blueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Blueprint message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.Blueprint.verify|verify} messages.
                     * @param message Blueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Blueprint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Blueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.Blueprint;

                    /**
                     * Decodes a Blueprint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Blueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.Blueprint;

                    /**
                     * Verifies a Blueprint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Blueprint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Blueprint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.Blueprint;

                    /**
                     * Creates a plain object from a Blueprint message. Also converts values to other types if specified.
                     * @param message Blueprint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.Blueprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Blueprint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Blueprint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Blueprint {

                    /** ApprovalState enum. */
                    enum ApprovalState {
                        APPROVAL_STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        PROPOSED = 2,
                        APPROVED = 3
                    }
                }

                /** Properties of a PublicBlueprint. */
                interface IPublicBlueprint {

                    /** PublicBlueprint name */
                    name?: (string|null);

                    /** PublicBlueprint displayName */
                    displayName?: (string|null);

                    /** PublicBlueprint description */
                    description?: (string|null);

                    /** PublicBlueprint deploymentLevel */
                    deploymentLevel?: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel|null);

                    /** PublicBlueprint sourceProvider */
                    sourceProvider?: (string|null);

                    /** PublicBlueprint rollbackSupport */
                    rollbackSupport?: (boolean|null);
                }

                /** Represents a PublicBlueprint. */
                class PublicBlueprint implements IPublicBlueprint {

                    /**
                     * Constructs a new PublicBlueprint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IPublicBlueprint);

                    /** PublicBlueprint name. */
                    public name: string;

                    /** PublicBlueprint displayName. */
                    public displayName: string;

                    /** PublicBlueprint description. */
                    public description: string;

                    /** PublicBlueprint deploymentLevel. */
                    public deploymentLevel: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel);

                    /** PublicBlueprint sourceProvider. */
                    public sourceProvider: string;

                    /** PublicBlueprint rollbackSupport. */
                    public rollbackSupport: boolean;

                    /**
                     * Creates a new PublicBlueprint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PublicBlueprint instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IPublicBlueprint): google.cloud.telcoautomation.v1alpha1.PublicBlueprint;

                    /**
                     * Encodes the specified PublicBlueprint message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.PublicBlueprint.verify|verify} messages.
                     * @param message PublicBlueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IPublicBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PublicBlueprint message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.PublicBlueprint.verify|verify} messages.
                     * @param message PublicBlueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IPublicBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PublicBlueprint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PublicBlueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.PublicBlueprint;

                    /**
                     * Decodes a PublicBlueprint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PublicBlueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.PublicBlueprint;

                    /**
                     * Verifies a PublicBlueprint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PublicBlueprint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PublicBlueprint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.PublicBlueprint;

                    /**
                     * Creates a plain object from a PublicBlueprint message. Also converts values to other types if specified.
                     * @param message PublicBlueprint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.PublicBlueprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PublicBlueprint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PublicBlueprint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Deployment. */
                interface IDeployment {

                    /** Deployment name */
                    name?: (string|null);

                    /** Deployment revisionId */
                    revisionId?: (string|null);

                    /** Deployment sourceBlueprintRevision */
                    sourceBlueprintRevision?: (string|null);

                    /** Deployment revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment state */
                    state?: (google.cloud.telcoautomation.v1alpha1.Deployment.State|keyof typeof google.cloud.telcoautomation.v1alpha1.Deployment.State|null);

                    /** Deployment displayName */
                    displayName?: (string|null);

                    /** Deployment repository */
                    repository?: (string|null);

                    /** Deployment files */
                    files?: (google.cloud.telcoautomation.v1alpha1.IFile[]|null);

                    /** Deployment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Deployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment sourceProvider */
                    sourceProvider?: (string|null);

                    /** Deployment workloadCluster */
                    workloadCluster?: (string|null);

                    /** Deployment deploymentLevel */
                    deploymentLevel?: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel|null);

                    /** Deployment rollbackSupport */
                    rollbackSupport?: (boolean|null);
                }

                /** Represents a Deployment. */
                class Deployment implements IDeployment {

                    /**
                     * Constructs a new Deployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDeployment);

                    /** Deployment name. */
                    public name: string;

                    /** Deployment revisionId. */
                    public revisionId: string;

                    /** Deployment sourceBlueprintRevision. */
                    public sourceBlueprintRevision: string;

                    /** Deployment revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment state. */
                    public state: (google.cloud.telcoautomation.v1alpha1.Deployment.State|keyof typeof google.cloud.telcoautomation.v1alpha1.Deployment.State);

                    /** Deployment displayName. */
                    public displayName: string;

                    /** Deployment repository. */
                    public repository: string;

                    /** Deployment files. */
                    public files: google.cloud.telcoautomation.v1alpha1.IFile[];

                    /** Deployment labels. */
                    public labels: { [k: string]: string };

                    /** Deployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment sourceProvider. */
                    public sourceProvider: string;

                    /** Deployment workloadCluster. */
                    public workloadCluster: string;

                    /** Deployment deploymentLevel. */
                    public deploymentLevel: (google.cloud.telcoautomation.v1alpha1.DeploymentLevel|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentLevel);

                    /** Deployment rollbackSupport. */
                    public rollbackSupport: boolean;

                    /**
                     * Creates a new Deployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Deployment instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDeployment): google.cloud.telcoautomation.v1alpha1.Deployment;

                    /**
                     * Encodes the specified Deployment message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.Deployment.verify|verify} messages.
                     * @param message Deployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Deployment message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.Deployment.verify|verify} messages.
                     * @param message Deployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Deployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Deployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.Deployment;

                    /**
                     * Decodes a Deployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Deployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.Deployment;

                    /**
                     * Verifies a Deployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Deployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Deployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.Deployment;

                    /**
                     * Creates a plain object from a Deployment message. Also converts values to other types if specified.
                     * @param message Deployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.Deployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Deployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Deployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Deployment {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        APPLIED = 2,
                        DELETING = 3
                    }
                }

                /** Properties of a HydratedDeployment. */
                interface IHydratedDeployment {

                    /** HydratedDeployment name */
                    name?: (string|null);

                    /** HydratedDeployment state */
                    state?: (google.cloud.telcoautomation.v1alpha1.HydratedDeployment.State|keyof typeof google.cloud.telcoautomation.v1alpha1.HydratedDeployment.State|null);

                    /** HydratedDeployment files */
                    files?: (google.cloud.telcoautomation.v1alpha1.IFile[]|null);

                    /** HydratedDeployment workloadCluster */
                    workloadCluster?: (string|null);
                }

                /** Represents a HydratedDeployment. */
                class HydratedDeployment implements IHydratedDeployment {

                    /**
                     * Constructs a new HydratedDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IHydratedDeployment);

                    /** HydratedDeployment name. */
                    public name: string;

                    /** HydratedDeployment state. */
                    public state: (google.cloud.telcoautomation.v1alpha1.HydratedDeployment.State|keyof typeof google.cloud.telcoautomation.v1alpha1.HydratedDeployment.State);

                    /** HydratedDeployment files. */
                    public files: google.cloud.telcoautomation.v1alpha1.IFile[];

                    /** HydratedDeployment workloadCluster. */
                    public workloadCluster: string;

                    /**
                     * Creates a new HydratedDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HydratedDeployment instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IHydratedDeployment): google.cloud.telcoautomation.v1alpha1.HydratedDeployment;

                    /**
                     * Encodes the specified HydratedDeployment message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.HydratedDeployment.verify|verify} messages.
                     * @param message HydratedDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IHydratedDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HydratedDeployment message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.HydratedDeployment.verify|verify} messages.
                     * @param message HydratedDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IHydratedDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HydratedDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HydratedDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.HydratedDeployment;

                    /**
                     * Decodes a HydratedDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HydratedDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.HydratedDeployment;

                    /**
                     * Verifies a HydratedDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HydratedDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HydratedDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.HydratedDeployment;

                    /**
                     * Creates a plain object from a HydratedDeployment message. Also converts values to other types if specified.
                     * @param message HydratedDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.HydratedDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HydratedDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HydratedDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HydratedDeployment {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        APPLIED = 2
                    }
                }

                /** Properties of a ListOrchestrationClustersRequest. */
                interface IListOrchestrationClustersRequest {

                    /** ListOrchestrationClustersRequest parent */
                    parent?: (string|null);

                    /** ListOrchestrationClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOrchestrationClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListOrchestrationClustersRequest filter */
                    filter?: (string|null);

                    /** ListOrchestrationClustersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListOrchestrationClustersRequest. */
                class ListOrchestrationClustersRequest implements IListOrchestrationClustersRequest {

                    /**
                     * Constructs a new ListOrchestrationClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest);

                    /** ListOrchestrationClustersRequest parent. */
                    public parent: string;

                    /** ListOrchestrationClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListOrchestrationClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListOrchestrationClustersRequest filter. */
                    public filter: string;

                    /** ListOrchestrationClustersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListOrchestrationClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrchestrationClustersRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest;

                    /**
                     * Encodes the specified ListOrchestrationClustersRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest.verify|verify} messages.
                     * @param message ListOrchestrationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrchestrationClustersRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest.verify|verify} messages.
                     * @param message ListOrchestrationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrchestrationClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrchestrationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest;

                    /**
                     * Decodes a ListOrchestrationClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrchestrationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest;

                    /**
                     * Verifies a ListOrchestrationClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrchestrationClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrchestrationClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest;

                    /**
                     * Creates a plain object from a ListOrchestrationClustersRequest message. Also converts values to other types if specified.
                     * @param message ListOrchestrationClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrchestrationClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrchestrationClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrchestrationClustersResponse. */
                interface IListOrchestrationClustersResponse {

                    /** ListOrchestrationClustersResponse orchestrationClusters */
                    orchestrationClusters?: (google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster[]|null);

                    /** ListOrchestrationClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListOrchestrationClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListOrchestrationClustersResponse. */
                class ListOrchestrationClustersResponse implements IListOrchestrationClustersResponse {

                    /**
                     * Constructs a new ListOrchestrationClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersResponse);

                    /** ListOrchestrationClustersResponse orchestrationClusters. */
                    public orchestrationClusters: google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster[];

                    /** ListOrchestrationClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListOrchestrationClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListOrchestrationClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrchestrationClustersResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersResponse): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse;

                    /**
                     * Encodes the specified ListOrchestrationClustersResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse.verify|verify} messages.
                     * @param message ListOrchestrationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrchestrationClustersResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse.verify|verify} messages.
                     * @param message ListOrchestrationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListOrchestrationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrchestrationClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrchestrationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse;

                    /**
                     * Decodes a ListOrchestrationClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrchestrationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse;

                    /**
                     * Verifies a ListOrchestrationClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrchestrationClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrchestrationClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse;

                    /**
                     * Creates a plain object from a ListOrchestrationClustersResponse message. Also converts values to other types if specified.
                     * @param message ListOrchestrationClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListOrchestrationClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrchestrationClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrchestrationClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetOrchestrationClusterRequest. */
                interface IGetOrchestrationClusterRequest {

                    /** GetOrchestrationClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOrchestrationClusterRequest. */
                class GetOrchestrationClusterRequest implements IGetOrchestrationClusterRequest {

                    /**
                     * Constructs a new GetOrchestrationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest);

                    /** GetOrchestrationClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOrchestrationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOrchestrationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest): google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest;

                    /**
                     * Encodes the specified GetOrchestrationClusterRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest.verify|verify} messages.
                     * @param message GetOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOrchestrationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest.verify|verify} messages.
                     * @param message GetOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOrchestrationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest;

                    /**
                     * Decodes a GetOrchestrationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest;

                    /**
                     * Verifies a GetOrchestrationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOrchestrationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOrchestrationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest;

                    /**
                     * Creates a plain object from a GetOrchestrationClusterRequest message. Also converts values to other types if specified.
                     * @param message GetOrchestrationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetOrchestrationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOrchestrationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetOrchestrationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateOrchestrationClusterRequest. */
                interface ICreateOrchestrationClusterRequest {

                    /** CreateOrchestrationClusterRequest parent */
                    parent?: (string|null);

                    /** CreateOrchestrationClusterRequest orchestrationClusterId */
                    orchestrationClusterId?: (string|null);

                    /** CreateOrchestrationClusterRequest orchestrationCluster */
                    orchestrationCluster?: (google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster|null);

                    /** CreateOrchestrationClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateOrchestrationClusterRequest. */
                class CreateOrchestrationClusterRequest implements ICreateOrchestrationClusterRequest {

                    /**
                     * Constructs a new CreateOrchestrationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest);

                    /** CreateOrchestrationClusterRequest parent. */
                    public parent: string;

                    /** CreateOrchestrationClusterRequest orchestrationClusterId. */
                    public orchestrationClusterId: string;

                    /** CreateOrchestrationClusterRequest orchestrationCluster. */
                    public orchestrationCluster?: (google.cloud.telcoautomation.v1alpha1.IOrchestrationCluster|null);

                    /** CreateOrchestrationClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateOrchestrationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateOrchestrationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest): google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest;

                    /**
                     * Encodes the specified CreateOrchestrationClusterRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest.verify|verify} messages.
                     * @param message CreateOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateOrchestrationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest.verify|verify} messages.
                     * @param message CreateOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ICreateOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateOrchestrationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest;

                    /**
                     * Decodes a CreateOrchestrationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest;

                    /**
                     * Verifies a CreateOrchestrationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateOrchestrationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateOrchestrationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest;

                    /**
                     * Creates a plain object from a CreateOrchestrationClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateOrchestrationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.CreateOrchestrationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateOrchestrationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateOrchestrationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteOrchestrationClusterRequest. */
                interface IDeleteOrchestrationClusterRequest {

                    /** DeleteOrchestrationClusterRequest name */
                    name?: (string|null);

                    /** DeleteOrchestrationClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteOrchestrationClusterRequest. */
                class DeleteOrchestrationClusterRequest implements IDeleteOrchestrationClusterRequest {

                    /**
                     * Constructs a new DeleteOrchestrationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest);

                    /** DeleteOrchestrationClusterRequest name. */
                    public name: string;

                    /** DeleteOrchestrationClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteOrchestrationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteOrchestrationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest): google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest;

                    /**
                     * Encodes the specified DeleteOrchestrationClusterRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest.verify|verify} messages.
                     * @param message DeleteOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteOrchestrationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest.verify|verify} messages.
                     * @param message DeleteOrchestrationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDeleteOrchestrationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteOrchestrationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest;

                    /**
                     * Decodes a DeleteOrchestrationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteOrchestrationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest;

                    /**
                     * Verifies a DeleteOrchestrationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteOrchestrationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteOrchestrationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest;

                    /**
                     * Creates a plain object from a DeleteOrchestrationClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteOrchestrationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DeleteOrchestrationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteOrchestrationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteOrchestrationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEdgeSlmsRequest. */
                interface IListEdgeSlmsRequest {

                    /** ListEdgeSlmsRequest parent */
                    parent?: (string|null);

                    /** ListEdgeSlmsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEdgeSlmsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEdgeSlmsRequest filter */
                    filter?: (string|null);

                    /** ListEdgeSlmsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListEdgeSlmsRequest. */
                class ListEdgeSlmsRequest implements IListEdgeSlmsRequest {

                    /**
                     * Constructs a new ListEdgeSlmsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest);

                    /** ListEdgeSlmsRequest parent. */
                    public parent: string;

                    /** ListEdgeSlmsRequest pageSize. */
                    public pageSize: number;

                    /** ListEdgeSlmsRequest pageToken. */
                    public pageToken: string;

                    /** ListEdgeSlmsRequest filter. */
                    public filter: string;

                    /** ListEdgeSlmsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListEdgeSlmsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEdgeSlmsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest;

                    /**
                     * Encodes the specified ListEdgeSlmsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest.verify|verify} messages.
                     * @param message ListEdgeSlmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEdgeSlmsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest.verify|verify} messages.
                     * @param message ListEdgeSlmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEdgeSlmsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEdgeSlmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest;

                    /**
                     * Decodes a ListEdgeSlmsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEdgeSlmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest;

                    /**
                     * Verifies a ListEdgeSlmsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEdgeSlmsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEdgeSlmsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest;

                    /**
                     * Creates a plain object from a ListEdgeSlmsRequest message. Also converts values to other types if specified.
                     * @param message ListEdgeSlmsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEdgeSlmsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEdgeSlmsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEdgeSlmsResponse. */
                interface IListEdgeSlmsResponse {

                    /** ListEdgeSlmsResponse edgeSlms */
                    edgeSlms?: (google.cloud.telcoautomation.v1alpha1.IEdgeSlm[]|null);

                    /** ListEdgeSlmsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEdgeSlmsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEdgeSlmsResponse. */
                class ListEdgeSlmsResponse implements IListEdgeSlmsResponse {

                    /**
                     * Constructs a new ListEdgeSlmsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsResponse);

                    /** ListEdgeSlmsResponse edgeSlms. */
                    public edgeSlms: google.cloud.telcoautomation.v1alpha1.IEdgeSlm[];

                    /** ListEdgeSlmsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEdgeSlmsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEdgeSlmsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEdgeSlmsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsResponse): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse;

                    /**
                     * Encodes the specified ListEdgeSlmsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse.verify|verify} messages.
                     * @param message ListEdgeSlmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEdgeSlmsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse.verify|verify} messages.
                     * @param message ListEdgeSlmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListEdgeSlmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEdgeSlmsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEdgeSlmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse;

                    /**
                     * Decodes a ListEdgeSlmsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEdgeSlmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse;

                    /**
                     * Verifies a ListEdgeSlmsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEdgeSlmsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEdgeSlmsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse;

                    /**
                     * Creates a plain object from a ListEdgeSlmsResponse message. Also converts values to other types if specified.
                     * @param message ListEdgeSlmsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListEdgeSlmsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEdgeSlmsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEdgeSlmsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEdgeSlmRequest. */
                interface IGetEdgeSlmRequest {

                    /** GetEdgeSlmRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEdgeSlmRequest. */
                class GetEdgeSlmRequest implements IGetEdgeSlmRequest {

                    /**
                     * Constructs a new GetEdgeSlmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest);

                    /** GetEdgeSlmRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEdgeSlmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEdgeSlmRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest): google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest;

                    /**
                     * Encodes the specified GetEdgeSlmRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest.verify|verify} messages.
                     * @param message GetEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEdgeSlmRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest.verify|verify} messages.
                     * @param message GetEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEdgeSlmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest;

                    /**
                     * Decodes a GetEdgeSlmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest;

                    /**
                     * Verifies a GetEdgeSlmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEdgeSlmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEdgeSlmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest;

                    /**
                     * Creates a plain object from a GetEdgeSlmRequest message. Also converts values to other types if specified.
                     * @param message GetEdgeSlmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetEdgeSlmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEdgeSlmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEdgeSlmRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEdgeSlmRequest. */
                interface ICreateEdgeSlmRequest {

                    /** CreateEdgeSlmRequest parent */
                    parent?: (string|null);

                    /** CreateEdgeSlmRequest edgeSlmId */
                    edgeSlmId?: (string|null);

                    /** CreateEdgeSlmRequest edgeSlm */
                    edgeSlm?: (google.cloud.telcoautomation.v1alpha1.IEdgeSlm|null);

                    /** CreateEdgeSlmRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateEdgeSlmRequest. */
                class CreateEdgeSlmRequest implements ICreateEdgeSlmRequest {

                    /**
                     * Constructs a new CreateEdgeSlmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest);

                    /** CreateEdgeSlmRequest parent. */
                    public parent: string;

                    /** CreateEdgeSlmRequest edgeSlmId. */
                    public edgeSlmId: string;

                    /** CreateEdgeSlmRequest edgeSlm. */
                    public edgeSlm?: (google.cloud.telcoautomation.v1alpha1.IEdgeSlm|null);

                    /** CreateEdgeSlmRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateEdgeSlmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEdgeSlmRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest): google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest;

                    /**
                     * Encodes the specified CreateEdgeSlmRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest.verify|verify} messages.
                     * @param message CreateEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEdgeSlmRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest.verify|verify} messages.
                     * @param message CreateEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ICreateEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEdgeSlmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest;

                    /**
                     * Decodes a CreateEdgeSlmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest;

                    /**
                     * Verifies a CreateEdgeSlmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEdgeSlmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEdgeSlmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest;

                    /**
                     * Creates a plain object from a CreateEdgeSlmRequest message. Also converts values to other types if specified.
                     * @param message CreateEdgeSlmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.CreateEdgeSlmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEdgeSlmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEdgeSlmRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEdgeSlmRequest. */
                interface IDeleteEdgeSlmRequest {

                    /** DeleteEdgeSlmRequest name */
                    name?: (string|null);

                    /** DeleteEdgeSlmRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteEdgeSlmRequest. */
                class DeleteEdgeSlmRequest implements IDeleteEdgeSlmRequest {

                    /**
                     * Constructs a new DeleteEdgeSlmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest);

                    /** DeleteEdgeSlmRequest name. */
                    public name: string;

                    /** DeleteEdgeSlmRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteEdgeSlmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEdgeSlmRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest): google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest;

                    /**
                     * Encodes the specified DeleteEdgeSlmRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest.verify|verify} messages.
                     * @param message DeleteEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEdgeSlmRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest.verify|verify} messages.
                     * @param message DeleteEdgeSlmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDeleteEdgeSlmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEdgeSlmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest;

                    /**
                     * Decodes a DeleteEdgeSlmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEdgeSlmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest;

                    /**
                     * Verifies a DeleteEdgeSlmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEdgeSlmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEdgeSlmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest;

                    /**
                     * Creates a plain object from a DeleteEdgeSlmRequest message. Also converts values to other types if specified.
                     * @param message DeleteEdgeSlmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DeleteEdgeSlmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEdgeSlmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEdgeSlmRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBlueprintRequest. */
                interface ICreateBlueprintRequest {

                    /** CreateBlueprintRequest parent */
                    parent?: (string|null);

                    /** CreateBlueprintRequest blueprintId */
                    blueprintId?: (string|null);

                    /** CreateBlueprintRequest blueprint */
                    blueprint?: (google.cloud.telcoautomation.v1alpha1.IBlueprint|null);
                }

                /** Represents a CreateBlueprintRequest. */
                class CreateBlueprintRequest implements ICreateBlueprintRequest {

                    /**
                     * Constructs a new CreateBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest);

                    /** CreateBlueprintRequest parent. */
                    public parent: string;

                    /** CreateBlueprintRequest blueprintId. */
                    public blueprintId: string;

                    /** CreateBlueprintRequest blueprint. */
                    public blueprint?: (google.cloud.telcoautomation.v1alpha1.IBlueprint|null);

                    /**
                     * Creates a new CreateBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest): google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest;

                    /**
                     * Encodes the specified CreateBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest.verify|verify} messages.
                     * @param message CreateBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest.verify|verify} messages.
                     * @param message CreateBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ICreateBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest;

                    /**
                     * Decodes a CreateBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest;

                    /**
                     * Verifies a CreateBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest;

                    /**
                     * Creates a plain object from a CreateBlueprintRequest message. Also converts values to other types if specified.
                     * @param message CreateBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.CreateBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBlueprintRequest. */
                interface IUpdateBlueprintRequest {

                    /** UpdateBlueprintRequest blueprint */
                    blueprint?: (google.cloud.telcoautomation.v1alpha1.IBlueprint|null);

                    /** UpdateBlueprintRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBlueprintRequest. */
                class UpdateBlueprintRequest implements IUpdateBlueprintRequest {

                    /**
                     * Constructs a new UpdateBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest);

                    /** UpdateBlueprintRequest blueprint. */
                    public blueprint?: (google.cloud.telcoautomation.v1alpha1.IBlueprint|null);

                    /** UpdateBlueprintRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest): google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest;

                    /**
                     * Encodes the specified UpdateBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest.verify|verify} messages.
                     * @param message UpdateBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest.verify|verify} messages.
                     * @param message UpdateBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IUpdateBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest;

                    /**
                     * Decodes an UpdateBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest;

                    /**
                     * Verifies an UpdateBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest;

                    /**
                     * Creates a plain object from an UpdateBlueprintRequest message. Also converts values to other types if specified.
                     * @param message UpdateBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.UpdateBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBlueprintRequest. */
                interface IGetBlueprintRequest {

                    /** GetBlueprintRequest name */
                    name?: (string|null);

                    /** GetBlueprintRequest view */
                    view?: (google.cloud.telcoautomation.v1alpha1.BlueprintView|keyof typeof google.cloud.telcoautomation.v1alpha1.BlueprintView|null);
                }

                /** Represents a GetBlueprintRequest. */
                class GetBlueprintRequest implements IGetBlueprintRequest {

                    /**
                     * Constructs a new GetBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest);

                    /** GetBlueprintRequest name. */
                    public name: string;

                    /** GetBlueprintRequest view. */
                    public view: (google.cloud.telcoautomation.v1alpha1.BlueprintView|keyof typeof google.cloud.telcoautomation.v1alpha1.BlueprintView);

                    /**
                     * Creates a new GetBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest): google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest;

                    /**
                     * Encodes the specified GetBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest.verify|verify} messages.
                     * @param message GetBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest.verify|verify} messages.
                     * @param message GetBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest;

                    /**
                     * Decodes a GetBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest;

                    /**
                     * Verifies a GetBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest;

                    /**
                     * Creates a plain object from a GetBlueprintRequest message. Also converts values to other types if specified.
                     * @param message GetBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBlueprintRequest. */
                interface IDeleteBlueprintRequest {

                    /** DeleteBlueprintRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBlueprintRequest. */
                class DeleteBlueprintRequest implements IDeleteBlueprintRequest {

                    /**
                     * Constructs a new DeleteBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest);

                    /** DeleteBlueprintRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest): google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest;

                    /**
                     * Encodes the specified DeleteBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest.verify|verify} messages.
                     * @param message DeleteBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest.verify|verify} messages.
                     * @param message DeleteBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDeleteBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest;

                    /**
                     * Decodes a DeleteBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest;

                    /**
                     * Verifies a DeleteBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest;

                    /**
                     * Creates a plain object from a DeleteBlueprintRequest message. Also converts values to other types if specified.
                     * @param message DeleteBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DeleteBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBlueprintsRequest. */
                interface IListBlueprintsRequest {

                    /** ListBlueprintsRequest parent */
                    parent?: (string|null);

                    /** ListBlueprintsRequest filter */
                    filter?: (string|null);

                    /** ListBlueprintsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBlueprintsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListBlueprintsRequest. */
                class ListBlueprintsRequest implements IListBlueprintsRequest {

                    /**
                     * Constructs a new ListBlueprintsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest);

                    /** ListBlueprintsRequest parent. */
                    public parent: string;

                    /** ListBlueprintsRequest filter. */
                    public filter: string;

                    /** ListBlueprintsRequest pageSize. */
                    public pageSize: number;

                    /** ListBlueprintsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListBlueprintsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBlueprintsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest): google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest;

                    /**
                     * Encodes the specified ListBlueprintsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest.verify|verify} messages.
                     * @param message ListBlueprintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBlueprintsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest.verify|verify} messages.
                     * @param message ListBlueprintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBlueprintsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBlueprintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest;

                    /**
                     * Decodes a ListBlueprintsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBlueprintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest;

                    /**
                     * Verifies a ListBlueprintsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBlueprintsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBlueprintsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest;

                    /**
                     * Creates a plain object from a ListBlueprintsRequest message. Also converts values to other types if specified.
                     * @param message ListBlueprintsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListBlueprintsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBlueprintsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBlueprintsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBlueprintsResponse. */
                interface IListBlueprintsResponse {

                    /** ListBlueprintsResponse blueprints */
                    blueprints?: (google.cloud.telcoautomation.v1alpha1.IBlueprint[]|null);

                    /** ListBlueprintsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBlueprintsResponse. */
                class ListBlueprintsResponse implements IListBlueprintsResponse {

                    /**
                     * Constructs a new ListBlueprintsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintsResponse);

                    /** ListBlueprintsResponse blueprints. */
                    public blueprints: google.cloud.telcoautomation.v1alpha1.IBlueprint[];

                    /** ListBlueprintsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBlueprintsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBlueprintsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintsResponse): google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse;

                    /**
                     * Encodes the specified ListBlueprintsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse.verify|verify} messages.
                     * @param message ListBlueprintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBlueprintsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse.verify|verify} messages.
                     * @param message ListBlueprintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBlueprintsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBlueprintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse;

                    /**
                     * Decodes a ListBlueprintsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBlueprintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse;

                    /**
                     * Verifies a ListBlueprintsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBlueprintsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBlueprintsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse;

                    /**
                     * Creates a plain object from a ListBlueprintsResponse message. Also converts values to other types if specified.
                     * @param message ListBlueprintsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListBlueprintsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBlueprintsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBlueprintsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApproveBlueprintRequest. */
                interface IApproveBlueprintRequest {

                    /** ApproveBlueprintRequest name */
                    name?: (string|null);
                }

                /** Represents an ApproveBlueprintRequest. */
                class ApproveBlueprintRequest implements IApproveBlueprintRequest {

                    /**
                     * Constructs a new ApproveBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest);

                    /** ApproveBlueprintRequest name. */
                    public name: string;

                    /**
                     * Creates a new ApproveBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApproveBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest): google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest;

                    /**
                     * Encodes the specified ApproveBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest.verify|verify} messages.
                     * @param message ApproveBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApproveBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest.verify|verify} messages.
                     * @param message ApproveBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IApproveBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApproveBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApproveBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest;

                    /**
                     * Decodes an ApproveBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApproveBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest;

                    /**
                     * Verifies an ApproveBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApproveBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApproveBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest;

                    /**
                     * Creates a plain object from an ApproveBlueprintRequest message. Also converts values to other types if specified.
                     * @param message ApproveBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ApproveBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApproveBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApproveBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProposeBlueprintRequest. */
                interface IProposeBlueprintRequest {

                    /** ProposeBlueprintRequest name */
                    name?: (string|null);
                }

                /** Represents a ProposeBlueprintRequest. */
                class ProposeBlueprintRequest implements IProposeBlueprintRequest {

                    /**
                     * Constructs a new ProposeBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest);

                    /** ProposeBlueprintRequest name. */
                    public name: string;

                    /**
                     * Creates a new ProposeBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProposeBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest): google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest;

                    /**
                     * Encodes the specified ProposeBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest.verify|verify} messages.
                     * @param message ProposeBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProposeBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest.verify|verify} messages.
                     * @param message ProposeBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IProposeBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProposeBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProposeBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest;

                    /**
                     * Decodes a ProposeBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProposeBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest;

                    /**
                     * Verifies a ProposeBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProposeBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProposeBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest;

                    /**
                     * Creates a plain object from a ProposeBlueprintRequest message. Also converts values to other types if specified.
                     * @param message ProposeBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ProposeBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProposeBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProposeBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RejectBlueprintRequest. */
                interface IRejectBlueprintRequest {

                    /** RejectBlueprintRequest name */
                    name?: (string|null);
                }

                /** Represents a RejectBlueprintRequest. */
                class RejectBlueprintRequest implements IRejectBlueprintRequest {

                    /**
                     * Constructs a new RejectBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest);

                    /** RejectBlueprintRequest name. */
                    public name: string;

                    /**
                     * Creates a new RejectBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RejectBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest): google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest;

                    /**
                     * Encodes the specified RejectBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest.verify|verify} messages.
                     * @param message RejectBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RejectBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest.verify|verify} messages.
                     * @param message RejectBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IRejectBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RejectBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RejectBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest;

                    /**
                     * Decodes a RejectBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RejectBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest;

                    /**
                     * Verifies a RejectBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RejectBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RejectBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest;

                    /**
                     * Creates a plain object from a RejectBlueprintRequest message. Also converts values to other types if specified.
                     * @param message RejectBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.RejectBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RejectBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RejectBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBlueprintRevisionsRequest. */
                interface IListBlueprintRevisionsRequest {

                    /** ListBlueprintRevisionsRequest name */
                    name?: (string|null);

                    /** ListBlueprintRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBlueprintRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListBlueprintRevisionsRequest. */
                class ListBlueprintRevisionsRequest implements IListBlueprintRevisionsRequest {

                    /**
                     * Constructs a new ListBlueprintRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest);

                    /** ListBlueprintRevisionsRequest name. */
                    public name: string;

                    /** ListBlueprintRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListBlueprintRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListBlueprintRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBlueprintRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest;

                    /**
                     * Encodes the specified ListBlueprintRevisionsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest.verify|verify} messages.
                     * @param message ListBlueprintRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBlueprintRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest.verify|verify} messages.
                     * @param message ListBlueprintRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBlueprintRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBlueprintRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest;

                    /**
                     * Decodes a ListBlueprintRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBlueprintRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest;

                    /**
                     * Verifies a ListBlueprintRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBlueprintRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBlueprintRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest;

                    /**
                     * Creates a plain object from a ListBlueprintRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListBlueprintRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBlueprintRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBlueprintRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBlueprintRevisionsResponse. */
                interface IListBlueprintRevisionsResponse {

                    /** ListBlueprintRevisionsResponse blueprints */
                    blueprints?: (google.cloud.telcoautomation.v1alpha1.IBlueprint[]|null);

                    /** ListBlueprintRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBlueprintRevisionsResponse. */
                class ListBlueprintRevisionsResponse implements IListBlueprintRevisionsResponse {

                    /**
                     * Constructs a new ListBlueprintRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsResponse);

                    /** ListBlueprintRevisionsResponse blueprints. */
                    public blueprints: google.cloud.telcoautomation.v1alpha1.IBlueprint[];

                    /** ListBlueprintRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBlueprintRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBlueprintRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsResponse): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse;

                    /**
                     * Encodes the specified ListBlueprintRevisionsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse.verify|verify} messages.
                     * @param message ListBlueprintRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBlueprintRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse.verify|verify} messages.
                     * @param message ListBlueprintRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListBlueprintRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBlueprintRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBlueprintRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse;

                    /**
                     * Decodes a ListBlueprintRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBlueprintRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse;

                    /**
                     * Verifies a ListBlueprintRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBlueprintRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBlueprintRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse;

                    /**
                     * Creates a plain object from a ListBlueprintRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListBlueprintRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListBlueprintRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBlueprintRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBlueprintRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchBlueprintRevisionsRequest. */
                interface ISearchBlueprintRevisionsRequest {

                    /** SearchBlueprintRevisionsRequest parent */
                    parent?: (string|null);

                    /** SearchBlueprintRevisionsRequest query */
                    query?: (string|null);

                    /** SearchBlueprintRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchBlueprintRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchBlueprintRevisionsRequest. */
                class SearchBlueprintRevisionsRequest implements ISearchBlueprintRevisionsRequest {

                    /**
                     * Constructs a new SearchBlueprintRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest);

                    /** SearchBlueprintRevisionsRequest parent. */
                    public parent: string;

                    /** SearchBlueprintRevisionsRequest query. */
                    public query: string;

                    /** SearchBlueprintRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** SearchBlueprintRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchBlueprintRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchBlueprintRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest;

                    /**
                     * Encodes the specified SearchBlueprintRevisionsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest.verify|verify} messages.
                     * @param message SearchBlueprintRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchBlueprintRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest.verify|verify} messages.
                     * @param message SearchBlueprintRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchBlueprintRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchBlueprintRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest;

                    /**
                     * Decodes a SearchBlueprintRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchBlueprintRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest;

                    /**
                     * Verifies a SearchBlueprintRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchBlueprintRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchBlueprintRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest;

                    /**
                     * Creates a plain object from a SearchBlueprintRevisionsRequest message. Also converts values to other types if specified.
                     * @param message SearchBlueprintRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchBlueprintRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchBlueprintRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchBlueprintRevisionsResponse. */
                interface ISearchBlueprintRevisionsResponse {

                    /** SearchBlueprintRevisionsResponse blueprints */
                    blueprints?: (google.cloud.telcoautomation.v1alpha1.IBlueprint[]|null);

                    /** SearchBlueprintRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchBlueprintRevisionsResponse. */
                class SearchBlueprintRevisionsResponse implements ISearchBlueprintRevisionsResponse {

                    /**
                     * Constructs a new SearchBlueprintRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsResponse);

                    /** SearchBlueprintRevisionsResponse blueprints. */
                    public blueprints: google.cloud.telcoautomation.v1alpha1.IBlueprint[];

                    /** SearchBlueprintRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchBlueprintRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchBlueprintRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsResponse): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse;

                    /**
                     * Encodes the specified SearchBlueprintRevisionsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse.verify|verify} messages.
                     * @param message SearchBlueprintRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchBlueprintRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse.verify|verify} messages.
                     * @param message SearchBlueprintRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ISearchBlueprintRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchBlueprintRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchBlueprintRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse;

                    /**
                     * Decodes a SearchBlueprintRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchBlueprintRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse;

                    /**
                     * Verifies a SearchBlueprintRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchBlueprintRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchBlueprintRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse;

                    /**
                     * Creates a plain object from a SearchBlueprintRevisionsResponse message. Also converts values to other types if specified.
                     * @param message SearchBlueprintRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.SearchBlueprintRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchBlueprintRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchBlueprintRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiscardBlueprintChangesRequest. */
                interface IDiscardBlueprintChangesRequest {

                    /** DiscardBlueprintChangesRequest name */
                    name?: (string|null);
                }

                /** Represents a DiscardBlueprintChangesRequest. */
                class DiscardBlueprintChangesRequest implements IDiscardBlueprintChangesRequest {

                    /**
                     * Constructs a new DiscardBlueprintChangesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest);

                    /** DiscardBlueprintChangesRequest name. */
                    public name: string;

                    /**
                     * Creates a new DiscardBlueprintChangesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscardBlueprintChangesRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest;

                    /**
                     * Encodes the specified DiscardBlueprintChangesRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest.verify|verify} messages.
                     * @param message DiscardBlueprintChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscardBlueprintChangesRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest.verify|verify} messages.
                     * @param message DiscardBlueprintChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscardBlueprintChangesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscardBlueprintChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest;

                    /**
                     * Decodes a DiscardBlueprintChangesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscardBlueprintChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest;

                    /**
                     * Verifies a DiscardBlueprintChangesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscardBlueprintChangesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscardBlueprintChangesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest;

                    /**
                     * Creates a plain object from a DiscardBlueprintChangesRequest message. Also converts values to other types if specified.
                     * @param message DiscardBlueprintChangesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscardBlueprintChangesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiscardBlueprintChangesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiscardBlueprintChangesResponse. */
                interface IDiscardBlueprintChangesResponse {
                }

                /** Represents a DiscardBlueprintChangesResponse. */
                class DiscardBlueprintChangesResponse implements IDiscardBlueprintChangesResponse {

                    /**
                     * Constructs a new DiscardBlueprintChangesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesResponse);

                    /**
                     * Creates a new DiscardBlueprintChangesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscardBlueprintChangesResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesResponse): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse;

                    /**
                     * Encodes the specified DiscardBlueprintChangesResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse.verify|verify} messages.
                     * @param message DiscardBlueprintChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscardBlueprintChangesResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse.verify|verify} messages.
                     * @param message DiscardBlueprintChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDiscardBlueprintChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscardBlueprintChangesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscardBlueprintChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse;

                    /**
                     * Decodes a DiscardBlueprintChangesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscardBlueprintChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse;

                    /**
                     * Verifies a DiscardBlueprintChangesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscardBlueprintChangesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscardBlueprintChangesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse;

                    /**
                     * Creates a plain object from a DiscardBlueprintChangesResponse message. Also converts values to other types if specified.
                     * @param message DiscardBlueprintChangesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DiscardBlueprintChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscardBlueprintChangesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiscardBlueprintChangesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPublicBlueprintsRequest. */
                interface IListPublicBlueprintsRequest {

                    /** ListPublicBlueprintsRequest parent */
                    parent?: (string|null);

                    /** ListPublicBlueprintsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPublicBlueprintsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPublicBlueprintsRequest. */
                class ListPublicBlueprintsRequest implements IListPublicBlueprintsRequest {

                    /**
                     * Constructs a new ListPublicBlueprintsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest);

                    /** ListPublicBlueprintsRequest parent. */
                    public parent: string;

                    /** ListPublicBlueprintsRequest pageSize. */
                    public pageSize: number;

                    /** ListPublicBlueprintsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPublicBlueprintsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPublicBlueprintsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest;

                    /**
                     * Encodes the specified ListPublicBlueprintsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest.verify|verify} messages.
                     * @param message ListPublicBlueprintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPublicBlueprintsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest.verify|verify} messages.
                     * @param message ListPublicBlueprintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPublicBlueprintsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPublicBlueprintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest;

                    /**
                     * Decodes a ListPublicBlueprintsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPublicBlueprintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest;

                    /**
                     * Verifies a ListPublicBlueprintsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPublicBlueprintsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPublicBlueprintsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest;

                    /**
                     * Creates a plain object from a ListPublicBlueprintsRequest message. Also converts values to other types if specified.
                     * @param message ListPublicBlueprintsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPublicBlueprintsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPublicBlueprintsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPublicBlueprintsResponse. */
                interface IListPublicBlueprintsResponse {

                    /** ListPublicBlueprintsResponse publicBlueprints */
                    publicBlueprints?: (google.cloud.telcoautomation.v1alpha1.IPublicBlueprint[]|null);

                    /** ListPublicBlueprintsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPublicBlueprintsResponse. */
                class ListPublicBlueprintsResponse implements IListPublicBlueprintsResponse {

                    /**
                     * Constructs a new ListPublicBlueprintsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsResponse);

                    /** ListPublicBlueprintsResponse publicBlueprints. */
                    public publicBlueprints: google.cloud.telcoautomation.v1alpha1.IPublicBlueprint[];

                    /** ListPublicBlueprintsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPublicBlueprintsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPublicBlueprintsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsResponse): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse;

                    /**
                     * Encodes the specified ListPublicBlueprintsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse.verify|verify} messages.
                     * @param message ListPublicBlueprintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPublicBlueprintsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse.verify|verify} messages.
                     * @param message ListPublicBlueprintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListPublicBlueprintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPublicBlueprintsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPublicBlueprintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse;

                    /**
                     * Decodes a ListPublicBlueprintsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPublicBlueprintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse;

                    /**
                     * Verifies a ListPublicBlueprintsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPublicBlueprintsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPublicBlueprintsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse;

                    /**
                     * Creates a plain object from a ListPublicBlueprintsResponse message. Also converts values to other types if specified.
                     * @param message ListPublicBlueprintsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListPublicBlueprintsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPublicBlueprintsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPublicBlueprintsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPublicBlueprintRequest. */
                interface IGetPublicBlueprintRequest {

                    /** GetPublicBlueprintRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPublicBlueprintRequest. */
                class GetPublicBlueprintRequest implements IGetPublicBlueprintRequest {

                    /**
                     * Constructs a new GetPublicBlueprintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest);

                    /** GetPublicBlueprintRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPublicBlueprintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPublicBlueprintRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest): google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest;

                    /**
                     * Encodes the specified GetPublicBlueprintRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest.verify|verify} messages.
                     * @param message GetPublicBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPublicBlueprintRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest.verify|verify} messages.
                     * @param message GetPublicBlueprintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetPublicBlueprintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPublicBlueprintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPublicBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest;

                    /**
                     * Decodes a GetPublicBlueprintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPublicBlueprintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest;

                    /**
                     * Verifies a GetPublicBlueprintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPublicBlueprintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPublicBlueprintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest;

                    /**
                     * Creates a plain object from a GetPublicBlueprintRequest message. Also converts values to other types if specified.
                     * @param message GetPublicBlueprintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetPublicBlueprintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPublicBlueprintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPublicBlueprintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDeploymentRequest. */
                interface ICreateDeploymentRequest {

                    /** CreateDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreateDeploymentRequest deploymentId */
                    deploymentId?: (string|null);

                    /** CreateDeploymentRequest deployment */
                    deployment?: (google.cloud.telcoautomation.v1alpha1.IDeployment|null);
                }

                /** Represents a CreateDeploymentRequest. */
                class CreateDeploymentRequest implements ICreateDeploymentRequest {

                    /**
                     * Constructs a new CreateDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest);

                    /** CreateDeploymentRequest parent. */
                    public parent: string;

                    /** CreateDeploymentRequest deploymentId. */
                    public deploymentId: string;

                    /** CreateDeploymentRequest deployment. */
                    public deployment?: (google.cloud.telcoautomation.v1alpha1.IDeployment|null);

                    /**
                     * Creates a new CreateDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest): google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest;

                    /**
                     * Encodes the specified CreateDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest.verify|verify} messages.
                     * @param message CreateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest.verify|verify} messages.
                     * @param message CreateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ICreateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest;

                    /**
                     * Decodes a CreateDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest;

                    /**
                     * Verifies a CreateDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest;

                    /**
                     * Creates a plain object from a CreateDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreateDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.CreateDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDeploymentRequest. */
                interface IUpdateDeploymentRequest {

                    /** UpdateDeploymentRequest deployment */
                    deployment?: (google.cloud.telcoautomation.v1alpha1.IDeployment|null);

                    /** UpdateDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDeploymentRequest. */
                class UpdateDeploymentRequest implements IUpdateDeploymentRequest {

                    /**
                     * Constructs a new UpdateDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest);

                    /** UpdateDeploymentRequest deployment. */
                    public deployment?: (google.cloud.telcoautomation.v1alpha1.IDeployment|null);

                    /** UpdateDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest): google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest;

                    /**
                     * Encodes the specified UpdateDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest.verify|verify} messages.
                     * @param message UpdateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest.verify|verify} messages.
                     * @param message UpdateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IUpdateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest;

                    /**
                     * Decodes an UpdateDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest;

                    /**
                     * Verifies an UpdateDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.UpdateDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDeploymentRequest. */
                interface IGetDeploymentRequest {

                    /** GetDeploymentRequest name */
                    name?: (string|null);

                    /** GetDeploymentRequest view */
                    view?: (google.cloud.telcoautomation.v1alpha1.DeploymentView|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentView|null);
                }

                /** Represents a GetDeploymentRequest. */
                class GetDeploymentRequest implements IGetDeploymentRequest {

                    /**
                     * Constructs a new GetDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest);

                    /** GetDeploymentRequest name. */
                    public name: string;

                    /** GetDeploymentRequest view. */
                    public view: (google.cloud.telcoautomation.v1alpha1.DeploymentView|keyof typeof google.cloud.telcoautomation.v1alpha1.DeploymentView);

                    /**
                     * Creates a new GetDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest): google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest;

                    /**
                     * Encodes the specified GetDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest.verify|verify} messages.
                     * @param message GetDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest.verify|verify} messages.
                     * @param message GetDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest;

                    /**
                     * Decodes a GetDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest;

                    /**
                     * Verifies a GetDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest;

                    /**
                     * Creates a plain object from a GetDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveDeploymentRequest. */
                interface IRemoveDeploymentRequest {

                    /** RemoveDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a RemoveDeploymentRequest. */
                class RemoveDeploymentRequest implements IRemoveDeploymentRequest {

                    /**
                     * Constructs a new RemoveDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest);

                    /** RemoveDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new RemoveDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest): google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest;

                    /**
                     * Encodes the specified RemoveDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest.verify|verify} messages.
                     * @param message RemoveDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest.verify|verify} messages.
                     * @param message RemoveDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IRemoveDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest;

                    /**
                     * Decodes a RemoveDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest;

                    /**
                     * Verifies a RemoveDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest;

                    /**
                     * Creates a plain object from a RemoveDeploymentRequest message. Also converts values to other types if specified.
                     * @param message RemoveDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.RemoveDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentsRequest. */
                interface IListDeploymentsRequest {

                    /** ListDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListDeploymentsRequest filter */
                    filter?: (string|null);

                    /** ListDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDeploymentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDeploymentsRequest. */
                class ListDeploymentsRequest implements IListDeploymentsRequest {

                    /**
                     * Constructs a new ListDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest);

                    /** ListDeploymentsRequest parent. */
                    public parent: string;

                    /** ListDeploymentsRequest filter. */
                    public filter: string;

                    /** ListDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest): google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest;

                    /**
                     * Encodes the specified ListDeploymentsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest.verify|verify} messages.
                     * @param message ListDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest.verify|verify} messages.
                     * @param message ListDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest;

                    /**
                     * Decodes a ListDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest;

                    /**
                     * Verifies a ListDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentsResponse. */
                interface IListDeploymentsResponse {

                    /** ListDeploymentsResponse deployments */
                    deployments?: (google.cloud.telcoautomation.v1alpha1.IDeployment[]|null);

                    /** ListDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDeploymentsResponse. */
                class ListDeploymentsResponse implements IListDeploymentsResponse {

                    /**
                     * Constructs a new ListDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentsResponse);

                    /** ListDeploymentsResponse deployments. */
                    public deployments: google.cloud.telcoautomation.v1alpha1.IDeployment[];

                    /** ListDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentsResponse): google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse;

                    /**
                     * Encodes the specified ListDeploymentsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse.verify|verify} messages.
                     * @param message ListDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse.verify|verify} messages.
                     * @param message ListDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse;

                    /**
                     * Decodes a ListDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse;

                    /**
                     * Verifies a ListDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentRevisionsRequest. */
                interface IListDeploymentRevisionsRequest {

                    /** ListDeploymentRevisionsRequest name */
                    name?: (string|null);

                    /** ListDeploymentRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDeploymentRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDeploymentRevisionsRequest. */
                class ListDeploymentRevisionsRequest implements IListDeploymentRevisionsRequest {

                    /**
                     * Constructs a new ListDeploymentRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest);

                    /** ListDeploymentRevisionsRequest name. */
                    public name: string;

                    /** ListDeploymentRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListDeploymentRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDeploymentRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest;

                    /**
                     * Encodes the specified ListDeploymentRevisionsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message ListDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message ListDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest;

                    /**
                     * Decodes a ListDeploymentRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest;

                    /**
                     * Verifies a ListDeploymentRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest;

                    /**
                     * Creates a plain object from a ListDeploymentRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListDeploymentRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentRevisionsResponse. */
                interface IListDeploymentRevisionsResponse {

                    /** ListDeploymentRevisionsResponse deployments */
                    deployments?: (google.cloud.telcoautomation.v1alpha1.IDeployment[]|null);

                    /** ListDeploymentRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDeploymentRevisionsResponse. */
                class ListDeploymentRevisionsResponse implements IListDeploymentRevisionsResponse {

                    /**
                     * Constructs a new ListDeploymentRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsResponse);

                    /** ListDeploymentRevisionsResponse deployments. */
                    public deployments: google.cloud.telcoautomation.v1alpha1.IDeployment[];

                    /** ListDeploymentRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDeploymentRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsResponse): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse;

                    /**
                     * Encodes the specified ListDeploymentRevisionsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message ListDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message ListDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse;

                    /**
                     * Decodes a ListDeploymentRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse;

                    /**
                     * Verifies a ListDeploymentRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse;

                    /**
                     * Creates a plain object from a ListDeploymentRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListDeploymentRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListDeploymentRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchDeploymentRevisionsRequest. */
                interface ISearchDeploymentRevisionsRequest {

                    /** SearchDeploymentRevisionsRequest parent */
                    parent?: (string|null);

                    /** SearchDeploymentRevisionsRequest query */
                    query?: (string|null);

                    /** SearchDeploymentRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchDeploymentRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchDeploymentRevisionsRequest. */
                class SearchDeploymentRevisionsRequest implements ISearchDeploymentRevisionsRequest {

                    /**
                     * Constructs a new SearchDeploymentRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest);

                    /** SearchDeploymentRevisionsRequest parent. */
                    public parent: string;

                    /** SearchDeploymentRevisionsRequest query. */
                    public query: string;

                    /** SearchDeploymentRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** SearchDeploymentRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchDeploymentRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDeploymentRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest;

                    /**
                     * Encodes the specified SearchDeploymentRevisionsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message SearchDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDeploymentRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message SearchDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDeploymentRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest;

                    /**
                     * Decodes a SearchDeploymentRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest;

                    /**
                     * Verifies a SearchDeploymentRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDeploymentRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDeploymentRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest;

                    /**
                     * Creates a plain object from a SearchDeploymentRevisionsRequest message. Also converts values to other types if specified.
                     * @param message SearchDeploymentRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDeploymentRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchDeploymentRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchDeploymentRevisionsResponse. */
                interface ISearchDeploymentRevisionsResponse {

                    /** SearchDeploymentRevisionsResponse deployments */
                    deployments?: (google.cloud.telcoautomation.v1alpha1.IDeployment[]|null);

                    /** SearchDeploymentRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchDeploymentRevisionsResponse. */
                class SearchDeploymentRevisionsResponse implements ISearchDeploymentRevisionsResponse {

                    /**
                     * Constructs a new SearchDeploymentRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsResponse);

                    /** SearchDeploymentRevisionsResponse deployments. */
                    public deployments: google.cloud.telcoautomation.v1alpha1.IDeployment[];

                    /** SearchDeploymentRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchDeploymentRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDeploymentRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsResponse): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse;

                    /**
                     * Encodes the specified SearchDeploymentRevisionsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message SearchDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDeploymentRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message SearchDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ISearchDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDeploymentRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse;

                    /**
                     * Decodes a SearchDeploymentRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse;

                    /**
                     * Verifies a SearchDeploymentRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDeploymentRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDeploymentRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse;

                    /**
                     * Creates a plain object from a SearchDeploymentRevisionsResponse message. Also converts values to other types if specified.
                     * @param message SearchDeploymentRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.SearchDeploymentRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDeploymentRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchDeploymentRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiscardDeploymentChangesRequest. */
                interface IDiscardDeploymentChangesRequest {

                    /** DiscardDeploymentChangesRequest name */
                    name?: (string|null);
                }

                /** Represents a DiscardDeploymentChangesRequest. */
                class DiscardDeploymentChangesRequest implements IDiscardDeploymentChangesRequest {

                    /**
                     * Constructs a new DiscardDeploymentChangesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest);

                    /** DiscardDeploymentChangesRequest name. */
                    public name: string;

                    /**
                     * Creates a new DiscardDeploymentChangesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscardDeploymentChangesRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest;

                    /**
                     * Encodes the specified DiscardDeploymentChangesRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest.verify|verify} messages.
                     * @param message DiscardDeploymentChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscardDeploymentChangesRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest.verify|verify} messages.
                     * @param message DiscardDeploymentChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscardDeploymentChangesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscardDeploymentChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest;

                    /**
                     * Decodes a DiscardDeploymentChangesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscardDeploymentChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest;

                    /**
                     * Verifies a DiscardDeploymentChangesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscardDeploymentChangesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscardDeploymentChangesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest;

                    /**
                     * Creates a plain object from a DiscardDeploymentChangesRequest message. Also converts values to other types if specified.
                     * @param message DiscardDeploymentChangesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscardDeploymentChangesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiscardDeploymentChangesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiscardDeploymentChangesResponse. */
                interface IDiscardDeploymentChangesResponse {
                }

                /** Represents a DiscardDeploymentChangesResponse. */
                class DiscardDeploymentChangesResponse implements IDiscardDeploymentChangesResponse {

                    /**
                     * Constructs a new DiscardDeploymentChangesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesResponse);

                    /**
                     * Creates a new DiscardDeploymentChangesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscardDeploymentChangesResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesResponse): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse;

                    /**
                     * Encodes the specified DiscardDeploymentChangesResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse.verify|verify} messages.
                     * @param message DiscardDeploymentChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscardDeploymentChangesResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse.verify|verify} messages.
                     * @param message DiscardDeploymentChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IDiscardDeploymentChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscardDeploymentChangesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscardDeploymentChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse;

                    /**
                     * Decodes a DiscardDeploymentChangesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscardDeploymentChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse;

                    /**
                     * Verifies a DiscardDeploymentChangesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscardDeploymentChangesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscardDeploymentChangesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse;

                    /**
                     * Creates a plain object from a DiscardDeploymentChangesResponse message. Also converts values to other types if specified.
                     * @param message DiscardDeploymentChangesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.DiscardDeploymentChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscardDeploymentChangesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiscardDeploymentChangesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApplyDeploymentRequest. */
                interface IApplyDeploymentRequest {

                    /** ApplyDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents an ApplyDeploymentRequest. */
                class ApplyDeploymentRequest implements IApplyDeploymentRequest {

                    /**
                     * Constructs a new ApplyDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest);

                    /** ApplyDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new ApplyDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplyDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest): google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest;

                    /**
                     * Encodes the specified ApplyDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest.verify|verify} messages.
                     * @param message ApplyDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplyDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest.verify|verify} messages.
                     * @param message ApplyDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IApplyDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplyDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplyDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest;

                    /**
                     * Decodes an ApplyDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplyDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest;

                    /**
                     * Verifies an ApplyDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplyDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplyDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest;

                    /**
                     * Creates a plain object from an ApplyDeploymentRequest message. Also converts values to other types if specified.
                     * @param message ApplyDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ApplyDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplyDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApplyDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ComputeDeploymentStatusRequest. */
                interface IComputeDeploymentStatusRequest {

                    /** ComputeDeploymentStatusRequest name */
                    name?: (string|null);
                }

                /** Represents a ComputeDeploymentStatusRequest. */
                class ComputeDeploymentStatusRequest implements IComputeDeploymentStatusRequest {

                    /**
                     * Constructs a new ComputeDeploymentStatusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest);

                    /** ComputeDeploymentStatusRequest name. */
                    public name: string;

                    /**
                     * Creates a new ComputeDeploymentStatusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeDeploymentStatusRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest;

                    /**
                     * Encodes the specified ComputeDeploymentStatusRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest.verify|verify} messages.
                     * @param message ComputeDeploymentStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeDeploymentStatusRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest.verify|verify} messages.
                     * @param message ComputeDeploymentStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeDeploymentStatusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeDeploymentStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest;

                    /**
                     * Decodes a ComputeDeploymentStatusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeDeploymentStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest;

                    /**
                     * Verifies a ComputeDeploymentStatusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeDeploymentStatusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeDeploymentStatusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest;

                    /**
                     * Creates a plain object from a ComputeDeploymentStatusRequest message. Also converts values to other types if specified.
                     * @param message ComputeDeploymentStatusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeDeploymentStatusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeDeploymentStatusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ComputeDeploymentStatusResponse. */
                interface IComputeDeploymentStatusResponse {

                    /** ComputeDeploymentStatusResponse name */
                    name?: (string|null);

                    /** ComputeDeploymentStatusResponse aggregatedStatus */
                    aggregatedStatus?: (google.cloud.telcoautomation.v1alpha1.Status|keyof typeof google.cloud.telcoautomation.v1alpha1.Status|null);

                    /** ComputeDeploymentStatusResponse resourceStatuses */
                    resourceStatuses?: (google.cloud.telcoautomation.v1alpha1.IResourceStatus[]|null);
                }

                /** Represents a ComputeDeploymentStatusResponse. */
                class ComputeDeploymentStatusResponse implements IComputeDeploymentStatusResponse {

                    /**
                     * Constructs a new ComputeDeploymentStatusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusResponse);

                    /** ComputeDeploymentStatusResponse name. */
                    public name: string;

                    /** ComputeDeploymentStatusResponse aggregatedStatus. */
                    public aggregatedStatus: (google.cloud.telcoautomation.v1alpha1.Status|keyof typeof google.cloud.telcoautomation.v1alpha1.Status);

                    /** ComputeDeploymentStatusResponse resourceStatuses. */
                    public resourceStatuses: google.cloud.telcoautomation.v1alpha1.IResourceStatus[];

                    /**
                     * Creates a new ComputeDeploymentStatusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeDeploymentStatusResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusResponse): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse;

                    /**
                     * Encodes the specified ComputeDeploymentStatusResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse.verify|verify} messages.
                     * @param message ComputeDeploymentStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeDeploymentStatusResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse.verify|verify} messages.
                     * @param message ComputeDeploymentStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IComputeDeploymentStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeDeploymentStatusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeDeploymentStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse;

                    /**
                     * Decodes a ComputeDeploymentStatusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeDeploymentStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse;

                    /**
                     * Verifies a ComputeDeploymentStatusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeDeploymentStatusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeDeploymentStatusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse;

                    /**
                     * Creates a plain object from a ComputeDeploymentStatusResponse message. Also converts values to other types if specified.
                     * @param message ComputeDeploymentStatusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ComputeDeploymentStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeDeploymentStatusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeDeploymentStatusResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RollbackDeploymentRequest. */
                interface IRollbackDeploymentRequest {

                    /** RollbackDeploymentRequest name */
                    name?: (string|null);

                    /** RollbackDeploymentRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents a RollbackDeploymentRequest. */
                class RollbackDeploymentRequest implements IRollbackDeploymentRequest {

                    /**
                     * Constructs a new RollbackDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest);

                    /** RollbackDeploymentRequest name. */
                    public name: string;

                    /** RollbackDeploymentRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new RollbackDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RollbackDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest): google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest;

                    /**
                     * Encodes the specified RollbackDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest.verify|verify} messages.
                     * @param message RollbackDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RollbackDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest.verify|verify} messages.
                     * @param message RollbackDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IRollbackDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RollbackDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RollbackDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest;

                    /**
                     * Decodes a RollbackDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RollbackDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest;

                    /**
                     * Verifies a RollbackDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RollbackDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RollbackDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest;

                    /**
                     * Creates a plain object from a RollbackDeploymentRequest message. Also converts values to other types if specified.
                     * @param message RollbackDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.RollbackDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RollbackDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RollbackDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IOperationMetadata): google.cloud.telcoautomation.v1alpha1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHydratedDeploymentRequest. */
                interface IGetHydratedDeploymentRequest {

                    /** GetHydratedDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHydratedDeploymentRequest. */
                class GetHydratedDeploymentRequest implements IGetHydratedDeploymentRequest {

                    /**
                     * Constructs a new GetHydratedDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest);

                    /** GetHydratedDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHydratedDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHydratedDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest): google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest;

                    /**
                     * Encodes the specified GetHydratedDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest.verify|verify} messages.
                     * @param message GetHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHydratedDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest.verify|verify} messages.
                     * @param message GetHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IGetHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHydratedDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest;

                    /**
                     * Decodes a GetHydratedDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest;

                    /**
                     * Verifies a GetHydratedDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHydratedDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHydratedDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest;

                    /**
                     * Creates a plain object from a GetHydratedDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetHydratedDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.GetHydratedDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHydratedDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHydratedDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHydratedDeploymentsRequest. */
                interface IListHydratedDeploymentsRequest {

                    /** ListHydratedDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListHydratedDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHydratedDeploymentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListHydratedDeploymentsRequest. */
                class ListHydratedDeploymentsRequest implements IListHydratedDeploymentsRequest {

                    /**
                     * Constructs a new ListHydratedDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest);

                    /** ListHydratedDeploymentsRequest parent. */
                    public parent: string;

                    /** ListHydratedDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListHydratedDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListHydratedDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHydratedDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest;

                    /**
                     * Encodes the specified ListHydratedDeploymentsRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest.verify|verify} messages.
                     * @param message ListHydratedDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHydratedDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest.verify|verify} messages.
                     * @param message ListHydratedDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHydratedDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHydratedDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest;

                    /**
                     * Decodes a ListHydratedDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHydratedDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest;

                    /**
                     * Verifies a ListHydratedDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHydratedDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHydratedDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListHydratedDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListHydratedDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHydratedDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHydratedDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHydratedDeploymentsResponse. */
                interface IListHydratedDeploymentsResponse {

                    /** ListHydratedDeploymentsResponse hydratedDeployments */
                    hydratedDeployments?: (google.cloud.telcoautomation.v1alpha1.IHydratedDeployment[]|null);

                    /** ListHydratedDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListHydratedDeploymentsResponse. */
                class ListHydratedDeploymentsResponse implements IListHydratedDeploymentsResponse {

                    /**
                     * Constructs a new ListHydratedDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsResponse);

                    /** ListHydratedDeploymentsResponse hydratedDeployments. */
                    public hydratedDeployments: google.cloud.telcoautomation.v1alpha1.IHydratedDeployment[];

                    /** ListHydratedDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListHydratedDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHydratedDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsResponse): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse;

                    /**
                     * Encodes the specified ListHydratedDeploymentsResponse message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse.verify|verify} messages.
                     * @param message ListHydratedDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHydratedDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse.verify|verify} messages.
                     * @param message ListHydratedDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IListHydratedDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHydratedDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHydratedDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse;

                    /**
                     * Decodes a ListHydratedDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHydratedDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse;

                    /**
                     * Verifies a ListHydratedDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHydratedDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHydratedDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListHydratedDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListHydratedDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ListHydratedDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHydratedDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHydratedDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHydratedDeploymentRequest. */
                interface IUpdateHydratedDeploymentRequest {

                    /** UpdateHydratedDeploymentRequest hydratedDeployment */
                    hydratedDeployment?: (google.cloud.telcoautomation.v1alpha1.IHydratedDeployment|null);

                    /** UpdateHydratedDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateHydratedDeploymentRequest. */
                class UpdateHydratedDeploymentRequest implements IUpdateHydratedDeploymentRequest {

                    /**
                     * Constructs a new UpdateHydratedDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest);

                    /** UpdateHydratedDeploymentRequest hydratedDeployment. */
                    public hydratedDeployment?: (google.cloud.telcoautomation.v1alpha1.IHydratedDeployment|null);

                    /** UpdateHydratedDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateHydratedDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHydratedDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest): google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest;

                    /**
                     * Encodes the specified UpdateHydratedDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest.verify|verify} messages.
                     * @param message UpdateHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHydratedDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest.verify|verify} messages.
                     * @param message UpdateHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IUpdateHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHydratedDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest;

                    /**
                     * Decodes an UpdateHydratedDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest;

                    /**
                     * Verifies an UpdateHydratedDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHydratedDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHydratedDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateHydratedDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateHydratedDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.UpdateHydratedDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHydratedDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHydratedDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApplyHydratedDeploymentRequest. */
                interface IApplyHydratedDeploymentRequest {

                    /** ApplyHydratedDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents an ApplyHydratedDeploymentRequest. */
                class ApplyHydratedDeploymentRequest implements IApplyHydratedDeploymentRequest {

                    /**
                     * Constructs a new ApplyHydratedDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest);

                    /** ApplyHydratedDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new ApplyHydratedDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplyHydratedDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest): google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest;

                    /**
                     * Encodes the specified ApplyHydratedDeploymentRequest message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest.verify|verify} messages.
                     * @param message ApplyHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplyHydratedDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest.verify|verify} messages.
                     * @param message ApplyHydratedDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IApplyHydratedDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplyHydratedDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplyHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest;

                    /**
                     * Decodes an ApplyHydratedDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplyHydratedDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest;

                    /**
                     * Verifies an ApplyHydratedDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplyHydratedDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplyHydratedDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest;

                    /**
                     * Creates a plain object from an ApplyHydratedDeploymentRequest message. Also converts values to other types if specified.
                     * @param message ApplyHydratedDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ApplyHydratedDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplyHydratedDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApplyHydratedDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ManagementConfig. */
                interface IManagementConfig {

                    /** ManagementConfig standardManagementConfig */
                    standardManagementConfig?: (google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig|null);

                    /** ManagementConfig fullManagementConfig */
                    fullManagementConfig?: (google.cloud.telcoautomation.v1alpha1.IFullManagementConfig|null);
                }

                /** Represents a ManagementConfig. */
                class ManagementConfig implements IManagementConfig {

                    /**
                     * Constructs a new ManagementConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IManagementConfig);

                    /** ManagementConfig standardManagementConfig. */
                    public standardManagementConfig?: (google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig|null);

                    /** ManagementConfig fullManagementConfig. */
                    public fullManagementConfig?: (google.cloud.telcoautomation.v1alpha1.IFullManagementConfig|null);

                    /** ManagementConfig oneofConfig. */
                    public oneofConfig?: ("standardManagementConfig"|"fullManagementConfig");

                    /**
                     * Creates a new ManagementConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagementConfig instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IManagementConfig): google.cloud.telcoautomation.v1alpha1.ManagementConfig;

                    /**
                     * Encodes the specified ManagementConfig message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ManagementConfig.verify|verify} messages.
                     * @param message ManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagementConfig message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ManagementConfig.verify|verify} messages.
                     * @param message ManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagementConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ManagementConfig;

                    /**
                     * Decodes a ManagementConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ManagementConfig;

                    /**
                     * Verifies a ManagementConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagementConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagementConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ManagementConfig;

                    /**
                     * Creates a plain object from a ManagementConfig message. Also converts values to other types if specified.
                     * @param message ManagementConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ManagementConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagementConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ManagementConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StandardManagementConfig. */
                interface IStandardManagementConfig {

                    /** StandardManagementConfig network */
                    network?: (string|null);

                    /** StandardManagementConfig subnet */
                    subnet?: (string|null);

                    /** StandardManagementConfig masterIpv4CidrBlock */
                    masterIpv4CidrBlock?: (string|null);

                    /** StandardManagementConfig clusterCidrBlock */
                    clusterCidrBlock?: (string|null);

                    /** StandardManagementConfig servicesCidrBlock */
                    servicesCidrBlock?: (string|null);

                    /** StandardManagementConfig clusterNamedRange */
                    clusterNamedRange?: (string|null);

                    /** StandardManagementConfig servicesNamedRange */
                    servicesNamedRange?: (string|null);

                    /** StandardManagementConfig masterAuthorizedNetworksConfig */
                    masterAuthorizedNetworksConfig?: (google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig|null);
                }

                /** Represents a StandardManagementConfig. */
                class StandardManagementConfig implements IStandardManagementConfig {

                    /**
                     * Constructs a new StandardManagementConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig);

                    /** StandardManagementConfig network. */
                    public network: string;

                    /** StandardManagementConfig subnet. */
                    public subnet: string;

                    /** StandardManagementConfig masterIpv4CidrBlock. */
                    public masterIpv4CidrBlock: string;

                    /** StandardManagementConfig clusterCidrBlock. */
                    public clusterCidrBlock: string;

                    /** StandardManagementConfig servicesCidrBlock. */
                    public servicesCidrBlock: string;

                    /** StandardManagementConfig clusterNamedRange. */
                    public clusterNamedRange: string;

                    /** StandardManagementConfig servicesNamedRange. */
                    public servicesNamedRange: string;

                    /** StandardManagementConfig masterAuthorizedNetworksConfig. */
                    public masterAuthorizedNetworksConfig?: (google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig|null);

                    /**
                     * Creates a new StandardManagementConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StandardManagementConfig instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig): google.cloud.telcoautomation.v1alpha1.StandardManagementConfig;

                    /**
                     * Encodes the specified StandardManagementConfig message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.StandardManagementConfig.verify|verify} messages.
                     * @param message StandardManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StandardManagementConfig message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.StandardManagementConfig.verify|verify} messages.
                     * @param message StandardManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IStandardManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StandardManagementConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StandardManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.StandardManagementConfig;

                    /**
                     * Decodes a StandardManagementConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StandardManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.StandardManagementConfig;

                    /**
                     * Verifies a StandardManagementConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StandardManagementConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StandardManagementConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.StandardManagementConfig;

                    /**
                     * Creates a plain object from a StandardManagementConfig message. Also converts values to other types if specified.
                     * @param message StandardManagementConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.StandardManagementConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StandardManagementConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StandardManagementConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FullManagementConfig. */
                interface IFullManagementConfig {

                    /** FullManagementConfig network */
                    network?: (string|null);

                    /** FullManagementConfig subnet */
                    subnet?: (string|null);

                    /** FullManagementConfig masterIpv4CidrBlock */
                    masterIpv4CidrBlock?: (string|null);

                    /** FullManagementConfig clusterCidrBlock */
                    clusterCidrBlock?: (string|null);

                    /** FullManagementConfig servicesCidrBlock */
                    servicesCidrBlock?: (string|null);

                    /** FullManagementConfig clusterNamedRange */
                    clusterNamedRange?: (string|null);

                    /** FullManagementConfig servicesNamedRange */
                    servicesNamedRange?: (string|null);

                    /** FullManagementConfig masterAuthorizedNetworksConfig */
                    masterAuthorizedNetworksConfig?: (google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig|null);
                }

                /** Represents a FullManagementConfig. */
                class FullManagementConfig implements IFullManagementConfig {

                    /**
                     * Constructs a new FullManagementConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IFullManagementConfig);

                    /** FullManagementConfig network. */
                    public network: string;

                    /** FullManagementConfig subnet. */
                    public subnet: string;

                    /** FullManagementConfig masterIpv4CidrBlock. */
                    public masterIpv4CidrBlock: string;

                    /** FullManagementConfig clusterCidrBlock. */
                    public clusterCidrBlock: string;

                    /** FullManagementConfig servicesCidrBlock. */
                    public servicesCidrBlock: string;

                    /** FullManagementConfig clusterNamedRange. */
                    public clusterNamedRange: string;

                    /** FullManagementConfig servicesNamedRange. */
                    public servicesNamedRange: string;

                    /** FullManagementConfig masterAuthorizedNetworksConfig. */
                    public masterAuthorizedNetworksConfig?: (google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig|null);

                    /**
                     * Creates a new FullManagementConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FullManagementConfig instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IFullManagementConfig): google.cloud.telcoautomation.v1alpha1.FullManagementConfig;

                    /**
                     * Encodes the specified FullManagementConfig message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.FullManagementConfig.verify|verify} messages.
                     * @param message FullManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IFullManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FullManagementConfig message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.FullManagementConfig.verify|verify} messages.
                     * @param message FullManagementConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IFullManagementConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FullManagementConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FullManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.FullManagementConfig;

                    /**
                     * Decodes a FullManagementConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FullManagementConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.FullManagementConfig;

                    /**
                     * Verifies a FullManagementConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FullManagementConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FullManagementConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.FullManagementConfig;

                    /**
                     * Creates a plain object from a FullManagementConfig message. Also converts values to other types if specified.
                     * @param message FullManagementConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.FullManagementConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FullManagementConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FullManagementConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MasterAuthorizedNetworksConfig. */
                interface IMasterAuthorizedNetworksConfig {

                    /** MasterAuthorizedNetworksConfig cidrBlocks */
                    cidrBlocks?: (google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock[]|null);
                }

                /** Represents a MasterAuthorizedNetworksConfig. */
                class MasterAuthorizedNetworksConfig implements IMasterAuthorizedNetworksConfig {

                    /**
                     * Constructs a new MasterAuthorizedNetworksConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig);

                    /** MasterAuthorizedNetworksConfig cidrBlocks. */
                    public cidrBlocks: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock[];

                    /**
                     * Creates a new MasterAuthorizedNetworksConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MasterAuthorizedNetworksConfig instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig;

                    /**
                     * Encodes the specified MasterAuthorizedNetworksConfig message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.verify|verify} messages.
                     * @param message MasterAuthorizedNetworksConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MasterAuthorizedNetworksConfig message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.verify|verify} messages.
                     * @param message MasterAuthorizedNetworksConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IMasterAuthorizedNetworksConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MasterAuthorizedNetworksConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MasterAuthorizedNetworksConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig;

                    /**
                     * Decodes a MasterAuthorizedNetworksConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MasterAuthorizedNetworksConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig;

                    /**
                     * Verifies a MasterAuthorizedNetworksConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MasterAuthorizedNetworksConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MasterAuthorizedNetworksConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig;

                    /**
                     * Creates a plain object from a MasterAuthorizedNetworksConfig message. Also converts values to other types if specified.
                     * @param message MasterAuthorizedNetworksConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MasterAuthorizedNetworksConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MasterAuthorizedNetworksConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MasterAuthorizedNetworksConfig {

                    /** Properties of a CidrBlock. */
                    interface ICidrBlock {

                        /** CidrBlock displayName */
                        displayName?: (string|null);

                        /** CidrBlock cidrBlock */
                        cidrBlock?: (string|null);
                    }

                    /** Represents a CidrBlock. */
                    class CidrBlock implements ICidrBlock {

                        /**
                         * Constructs a new CidrBlock.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock);

                        /** CidrBlock displayName. */
                        public displayName: string;

                        /** CidrBlock cidrBlock. */
                        public cidrBlock: string;

                        /**
                         * Creates a new CidrBlock instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CidrBlock instance
                         */
                        public static create(properties?: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;

                        /**
                         * Encodes the specified CidrBlock message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.verify|verify} messages.
                         * @param message CidrBlock message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CidrBlock message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.verify|verify} messages.
                         * @param message CidrBlock message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CidrBlock message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CidrBlock
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;

                        /**
                         * Decodes a CidrBlock message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CidrBlock
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;

                        /**
                         * Verifies a CidrBlock message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CidrBlock message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CidrBlock
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;

                        /**
                         * Creates a plain object from a CidrBlock message. Also converts values to other types if specified.
                         * @param message CidrBlock
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.telcoautomation.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CidrBlock to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CidrBlock
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a File. */
                interface IFile {

                    /** File path */
                    path?: (string|null);

                    /** File content */
                    content?: (string|null);

                    /** File deleted */
                    deleted?: (boolean|null);

                    /** File editable */
                    editable?: (boolean|null);
                }

                /** Represents a File. */
                class File implements IFile {

                    /**
                     * Constructs a new File.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IFile);

                    /** File path. */
                    public path: string;

                    /** File content. */
                    public content: string;

                    /** File deleted. */
                    public deleted: boolean;

                    /** File editable. */
                    public editable: boolean;

                    /**
                     * Creates a new File instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns File instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IFile): google.cloud.telcoautomation.v1alpha1.File;

                    /**
                     * Encodes the specified File message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.File.verify|verify} messages.
                     * @param message File message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified File message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.File.verify|verify} messages.
                     * @param message File message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a File message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns File
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.File;

                    /**
                     * Decodes a File message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns File
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.File;

                    /**
                     * Verifies a File message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a File message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns File
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.File;

                    /**
                     * Creates a plain object from a File message. Also converts values to other types if specified.
                     * @param message File
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this File to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for File
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceStatus. */
                interface IResourceStatus {

                    /** ResourceStatus name */
                    name?: (string|null);

                    /** ResourceStatus resourceNamespace */
                    resourceNamespace?: (string|null);

                    /** ResourceStatus group */
                    group?: (string|null);

                    /** ResourceStatus version */
                    version?: (string|null);

                    /** ResourceStatus kind */
                    kind?: (string|null);

                    /** ResourceStatus resourceType */
                    resourceType?: (google.cloud.telcoautomation.v1alpha1.ResourceType|keyof typeof google.cloud.telcoautomation.v1alpha1.ResourceType|null);

                    /** ResourceStatus status */
                    status?: (google.cloud.telcoautomation.v1alpha1.Status|keyof typeof google.cloud.telcoautomation.v1alpha1.Status|null);

                    /** ResourceStatus nfDeployStatus */
                    nfDeployStatus?: (google.cloud.telcoautomation.v1alpha1.INFDeployStatus|null);
                }

                /** Represents a ResourceStatus. */
                class ResourceStatus implements IResourceStatus {

                    /**
                     * Constructs a new ResourceStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IResourceStatus);

                    /** ResourceStatus name. */
                    public name: string;

                    /** ResourceStatus resourceNamespace. */
                    public resourceNamespace: string;

                    /** ResourceStatus group. */
                    public group: string;

                    /** ResourceStatus version. */
                    public version: string;

                    /** ResourceStatus kind. */
                    public kind: string;

                    /** ResourceStatus resourceType. */
                    public resourceType: (google.cloud.telcoautomation.v1alpha1.ResourceType|keyof typeof google.cloud.telcoautomation.v1alpha1.ResourceType);

                    /** ResourceStatus status. */
                    public status: (google.cloud.telcoautomation.v1alpha1.Status|keyof typeof google.cloud.telcoautomation.v1alpha1.Status);

                    /** ResourceStatus nfDeployStatus. */
                    public nfDeployStatus?: (google.cloud.telcoautomation.v1alpha1.INFDeployStatus|null);

                    /**
                     * Creates a new ResourceStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceStatus instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IResourceStatus): google.cloud.telcoautomation.v1alpha1.ResourceStatus;

                    /**
                     * Encodes the specified ResourceStatus message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ResourceStatus.verify|verify} messages.
                     * @param message ResourceStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IResourceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceStatus message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.ResourceStatus.verify|verify} messages.
                     * @param message ResourceStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IResourceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.ResourceStatus;

                    /**
                     * Decodes a ResourceStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.ResourceStatus;

                    /**
                     * Verifies a ResourceStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.ResourceStatus;

                    /**
                     * Creates a plain object from a ResourceStatus message. Also converts values to other types if specified.
                     * @param message ResourceStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.ResourceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NFDeployStatus. */
                interface INFDeployStatus {

                    /** NFDeployStatus targetedNfs */
                    targetedNfs?: (number|null);

                    /** NFDeployStatus readyNfs */
                    readyNfs?: (number|null);

                    /** NFDeployStatus sites */
                    sites?: (google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus[]|null);
                }

                /** Represents a NFDeployStatus. */
                class NFDeployStatus implements INFDeployStatus {

                    /**
                     * Constructs a new NFDeployStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.INFDeployStatus);

                    /** NFDeployStatus targetedNfs. */
                    public targetedNfs: number;

                    /** NFDeployStatus readyNfs. */
                    public readyNfs: number;

                    /** NFDeployStatus sites. */
                    public sites: google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus[];

                    /**
                     * Creates a new NFDeployStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NFDeployStatus instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.INFDeployStatus): google.cloud.telcoautomation.v1alpha1.NFDeployStatus;

                    /**
                     * Encodes the specified NFDeployStatus message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.NFDeployStatus.verify|verify} messages.
                     * @param message NFDeployStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.INFDeployStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NFDeployStatus message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.NFDeployStatus.verify|verify} messages.
                     * @param message NFDeployStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.INFDeployStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NFDeployStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NFDeployStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.NFDeployStatus;

                    /**
                     * Decodes a NFDeployStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NFDeployStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.NFDeployStatus;

                    /**
                     * Verifies a NFDeployStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NFDeployStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NFDeployStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.NFDeployStatus;

                    /**
                     * Creates a plain object from a NFDeployStatus message. Also converts values to other types if specified.
                     * @param message NFDeployStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.NFDeployStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NFDeployStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NFDeployStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NFDeploySiteStatus. */
                interface INFDeploySiteStatus {

                    /** NFDeploySiteStatus site */
                    site?: (string|null);

                    /** NFDeploySiteStatus pendingDeletion */
                    pendingDeletion?: (boolean|null);

                    /** NFDeploySiteStatus hydration */
                    hydration?: (google.cloud.telcoautomation.v1alpha1.IHydrationStatus|null);

                    /** NFDeploySiteStatus workload */
                    workload?: (google.cloud.telcoautomation.v1alpha1.IWorkloadStatus|null);
                }

                /** Represents a NFDeploySiteStatus. */
                class NFDeploySiteStatus implements INFDeploySiteStatus {

                    /**
                     * Constructs a new NFDeploySiteStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus);

                    /** NFDeploySiteStatus site. */
                    public site: string;

                    /** NFDeploySiteStatus pendingDeletion. */
                    public pendingDeletion: boolean;

                    /** NFDeploySiteStatus hydration. */
                    public hydration?: (google.cloud.telcoautomation.v1alpha1.IHydrationStatus|null);

                    /** NFDeploySiteStatus workload. */
                    public workload?: (google.cloud.telcoautomation.v1alpha1.IWorkloadStatus|null);

                    /**
                     * Creates a new NFDeploySiteStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NFDeploySiteStatus instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus): google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus;

                    /**
                     * Encodes the specified NFDeploySiteStatus message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus.verify|verify} messages.
                     * @param message NFDeploySiteStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NFDeploySiteStatus message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus.verify|verify} messages.
                     * @param message NFDeploySiteStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.INFDeploySiteStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NFDeploySiteStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NFDeploySiteStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus;

                    /**
                     * Decodes a NFDeploySiteStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NFDeploySiteStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus;

                    /**
                     * Verifies a NFDeploySiteStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NFDeploySiteStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NFDeploySiteStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus;

                    /**
                     * Creates a plain object from a NFDeploySiteStatus message. Also converts values to other types if specified.
                     * @param message NFDeploySiteStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.NFDeploySiteStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NFDeploySiteStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NFDeploySiteStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HydrationStatus. */
                interface IHydrationStatus {

                    /** HydrationStatus siteVersion */
                    siteVersion?: (google.cloud.telcoautomation.v1alpha1.ISiteVersion|null);

                    /** HydrationStatus status */
                    status?: (string|null);
                }

                /** Represents a HydrationStatus. */
                class HydrationStatus implements IHydrationStatus {

                    /**
                     * Constructs a new HydrationStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IHydrationStatus);

                    /** HydrationStatus siteVersion. */
                    public siteVersion?: (google.cloud.telcoautomation.v1alpha1.ISiteVersion|null);

                    /** HydrationStatus status. */
                    public status: string;

                    /**
                     * Creates a new HydrationStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HydrationStatus instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IHydrationStatus): google.cloud.telcoautomation.v1alpha1.HydrationStatus;

                    /**
                     * Encodes the specified HydrationStatus message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.HydrationStatus.verify|verify} messages.
                     * @param message HydrationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IHydrationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HydrationStatus message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.HydrationStatus.verify|verify} messages.
                     * @param message HydrationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IHydrationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HydrationStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HydrationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.HydrationStatus;

                    /**
                     * Decodes a HydrationStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HydrationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.HydrationStatus;

                    /**
                     * Verifies a HydrationStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HydrationStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HydrationStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.HydrationStatus;

                    /**
                     * Creates a plain object from a HydrationStatus message. Also converts values to other types if specified.
                     * @param message HydrationStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.HydrationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HydrationStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HydrationStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SiteVersion. */
                interface ISiteVersion {

                    /** SiteVersion nfVendor */
                    nfVendor?: (string|null);

                    /** SiteVersion nfType */
                    nfType?: (string|null);

                    /** SiteVersion nfVersion */
                    nfVersion?: (string|null);
                }

                /** Represents a SiteVersion. */
                class SiteVersion implements ISiteVersion {

                    /**
                     * Constructs a new SiteVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.ISiteVersion);

                    /** SiteVersion nfVendor. */
                    public nfVendor: string;

                    /** SiteVersion nfType. */
                    public nfType: string;

                    /** SiteVersion nfVersion. */
                    public nfVersion: string;

                    /**
                     * Creates a new SiteVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SiteVersion instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.ISiteVersion): google.cloud.telcoautomation.v1alpha1.SiteVersion;

                    /**
                     * Encodes the specified SiteVersion message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SiteVersion.verify|verify} messages.
                     * @param message SiteVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.ISiteVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SiteVersion message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.SiteVersion.verify|verify} messages.
                     * @param message SiteVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.ISiteVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SiteVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SiteVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.SiteVersion;

                    /**
                     * Decodes a SiteVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SiteVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.SiteVersion;

                    /**
                     * Verifies a SiteVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SiteVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SiteVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.SiteVersion;

                    /**
                     * Creates a plain object from a SiteVersion message. Also converts values to other types if specified.
                     * @param message SiteVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.SiteVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SiteVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SiteVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WorkloadStatus. */
                interface IWorkloadStatus {

                    /** WorkloadStatus siteVersion */
                    siteVersion?: (google.cloud.telcoautomation.v1alpha1.ISiteVersion|null);

                    /** WorkloadStatus status */
                    status?: (string|null);
                }

                /** Represents a WorkloadStatus. */
                class WorkloadStatus implements IWorkloadStatus {

                    /**
                     * Constructs a new WorkloadStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.telcoautomation.v1alpha1.IWorkloadStatus);

                    /** WorkloadStatus siteVersion. */
                    public siteVersion?: (google.cloud.telcoautomation.v1alpha1.ISiteVersion|null);

                    /** WorkloadStatus status. */
                    public status: string;

                    /**
                     * Creates a new WorkloadStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadStatus instance
                     */
                    public static create(properties?: google.cloud.telcoautomation.v1alpha1.IWorkloadStatus): google.cloud.telcoautomation.v1alpha1.WorkloadStatus;

                    /**
                     * Encodes the specified WorkloadStatus message. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.WorkloadStatus.verify|verify} messages.
                     * @param message WorkloadStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.telcoautomation.v1alpha1.IWorkloadStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadStatus message, length delimited. Does not implicitly {@link google.cloud.telcoautomation.v1alpha1.WorkloadStatus.verify|verify} messages.
                     * @param message WorkloadStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.telcoautomation.v1alpha1.IWorkloadStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.telcoautomation.v1alpha1.WorkloadStatus;

                    /**
                     * Decodes a WorkloadStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.telcoautomation.v1alpha1.WorkloadStatus;

                    /**
                     * Verifies a WorkloadStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.telcoautomation.v1alpha1.WorkloadStatus;

                    /**
                     * Creates a plain object from a WorkloadStatus message. Also converts values to other types if specified.
                     * @param message WorkloadStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.telcoautomation.v1alpha1.WorkloadStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
