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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PoolUpdatePropertiesParameter class.
 * @constructor
 * @summary Parameters for a CloudPoolOperations.UpdateProperties request.
 *
 * @member {object} [startTask] A task to run on each compute node as it joins
 * the pool. If omitted, any existing start task is removed from the pool.
 * 
 * @member {string} [startTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such
 * as environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example
 * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * 
 * @member {array} [startTask.resourceFiles]
 * 
 * @member {array} [startTask.environmentSettings]
 * 
 * @member {boolean} [startTask.runElevated]
 * 
 * @member {number} [startTask.maxTaskRetryCount]
 * 
 * @member {boolean} [startTask.waitForSuccess]
 * 
 * @member {array} certificateReferences A list of certificates to be
 * installed on each compute node in the pool. If you specify an empty
 * collection, any existing certificate references are removed from the pool.
 * 
 * @member {array} applicationPackageReferences A list of application packages
 * to be installed on each compute node in the pool. If you specify an empty
 * collection, any existing application packages references are removed from
 * the pool.
 * 
 * @member {array} metadata A list of name-value pairs associated with the
 * pool as metadata. If you specify an empty collection, any existing
 * metadata is removed from the pool.
 * 
 */
function PoolUpdatePropertiesParameter() {
}

/**
 * Defines the metadata of PoolUpdatePropertiesParameter
 *
 * @returns {object} metadata of PoolUpdatePropertiesParameter
 *
 */
PoolUpdatePropertiesParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolUpdatePropertiesParameter',
    type: {
      name: 'Composite',
      className: 'PoolUpdatePropertiesParameter',
      modelProperties: {
        startTask: {
          required: false,
          serializedName: 'startTask',
          type: {
            name: 'Composite',
            className: 'StartTask'
          }
        },
        certificateReferences: {
          required: true,
          serializedName: 'certificateReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateReference'
                }
            }
          }
        },
        applicationPackageReferences: {
          required: true,
          serializedName: 'applicationPackageReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationPackageReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationPackageReference'
                }
            }
          }
        },
        metadata: {
          required: true,
          serializedName: 'metadata',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetadataItemElementType',
                type: {
                  name: 'Composite',
                  className: 'MetadataItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PoolUpdatePropertiesParameter;