// Copyright 2020 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Common Vulnerability Scoring System version 3.
 * For details, see https://www.first.org/cvss/specification-document
 *
 * @property {number} baseScore
 *   The base score is a function of the base metric scores.
 *
 * @property {number} exploitabilityScore
 *
 * @property {number} impactScore
 *
 * @property {number} attackVector
 *   Base Metrics
 *   Represents the intrinsic characteristics of a vulnerability that are
 *   constant over time and across user environments.
 *
 *   The number should be among the values of [AttackVector]{@link grafeas.v1.AttackVector}
 *
 * @property {number} attackComplexity
 *   The number should be among the values of [AttackComplexity]{@link grafeas.v1.AttackComplexity}
 *
 * @property {number} privilegesRequired
 *   The number should be among the values of [PrivilegesRequired]{@link grafeas.v1.PrivilegesRequired}
 *
 * @property {number} userInteraction
 *   The number should be among the values of [UserInteraction]{@link grafeas.v1.UserInteraction}
 *
 * @property {number} scope
 *   The number should be among the values of [Scope]{@link grafeas.v1.Scope}
 *
 * @property {number} confidentialityImpact
 *   The number should be among the values of [Impact]{@link grafeas.v1.Impact}
 *
 * @property {number} integrityImpact
 *   The number should be among the values of [Impact]{@link grafeas.v1.Impact}
 *
 * @property {number} availabilityImpact
 *   The number should be among the values of [Impact]{@link grafeas.v1.Impact}
 *
 * @typedef CVSSv3
 * @memberof grafeas.v1
 * @see [grafeas.v1.CVSSv3 definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/cvss.proto}
 */
const CVSSv3 = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  AttackComplexity: {
    ATTACK_COMPLEXITY_UNSPECIFIED: 0,
    ATTACK_COMPLEXITY_LOW: 1,
    ATTACK_COMPLEXITY_HIGH: 2
  },

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  AttackVector: {
    ATTACK_VECTOR_UNSPECIFIED: 0,
    ATTACK_VECTOR_NETWORK: 1,
    ATTACK_VECTOR_ADJACENT: 2,
    ATTACK_VECTOR_LOCAL: 3,
    ATTACK_VECTOR_PHYSICAL: 4
  },

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  Impact: {
    IMPACT_UNSPECIFIED: 0,
    IMPACT_HIGH: 1,
    IMPACT_LOW: 2,
    IMPACT_NONE: 3
  },

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  PrivilegesRequired: {
    PRIVILEGES_REQUIRED_UNSPECIFIED: 0,
    PRIVILEGES_REQUIRED_NONE: 1,
    PRIVILEGES_REQUIRED_LOW: 2,
    PRIVILEGES_REQUIRED_HIGH: 3
  },

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  Scope: {
    SCOPE_UNSPECIFIED: 0,
    SCOPE_UNCHANGED: 1,
    SCOPE_CHANGED: 2
  },

  /**
   * @enum {number}
   * @memberof grafeas.v1
   */
  UserInteraction: {
    USER_INTERACTION_UNSPECIFIED: 0,
    USER_INTERACTION_NONE: 1,
    USER_INTERACTION_REQUIRED: 2
  }
};