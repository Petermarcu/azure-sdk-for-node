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
 * Base class for fabric specific details of container.
 *
 */
class ProtectionContainerFabricSpecificDetails {
  /**
   * Create a ProtectionContainerFabricSpecificDetails.
   * @member {string} [instanceType] Gets the class type. Overriden in derived
   * classes.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProtectionContainerFabricSpecificDetails
   *
   * @returns {object} metadata of ProtectionContainerFabricSpecificDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectionContainerFabricSpecificDetails',
      type: {
        name: 'Composite',
        className: 'ProtectionContainerFabricSpecificDetails',
        modelProperties: {
          instanceType: {
            required: false,
            readOnly: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectionContainerFabricSpecificDetails;