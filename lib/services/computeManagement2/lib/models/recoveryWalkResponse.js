/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response after calling a manual recovery walk
 *
 */
class RecoveryWalkResponse {
  /**
   * Create a RecoveryWalkResponse.
   * @member {boolean} [walkPerformed] Whether the recovery walk was performed
   * @member {number} [nextPlatformUpdateDomain] The next update domain that
   * needs to be walked. Null means walk spanning all update domains has been
   * completed
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryWalkResponse
   *
   * @returns {object} metadata of RecoveryWalkResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryWalkResponse',
      type: {
        name: 'Composite',
        className: 'RecoveryWalkResponse',
        modelProperties: {
          walkPerformed: {
            required: false,
            readOnly: true,
            serializedName: 'walkPerformed',
            type: {
              name: 'Boolean'
            }
          },
          nextPlatformUpdateDomain: {
            required: false,
            readOnly: true,
            serializedName: 'nextPlatformUpdateDomain',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryWalkResponse;