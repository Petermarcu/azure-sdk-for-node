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
 * The workflow run trigger.
 *
 */
class WorkflowRunTrigger {
  /**
   * Create a WorkflowRunTrigger.
   * @property {string} [name] Gets the name.
   * @property {object} [inputs] Gets the inputs.
   * @property {object} [inputsLink] Gets the link to inputs.
   * @property {string} [inputsLink.uri] The content link URI.
   * @property {string} [inputsLink.contentVersion] The content version.
   * @property {number} [inputsLink.contentSize] The content size.
   * @property {object} [inputsLink.contentHash] The content hash.
   * @property {string} [inputsLink.contentHash.algorithm] The algorithm of the
   * content hash.
   * @property {string} [inputsLink.contentHash.value] The value of the content
   * hash.
   * @property {object} [inputsLink.metadata] The metadata.
   * @property {object} [outputs] Gets the outputs.
   * @property {object} [outputsLink] Gets the link to outputs.
   * @property {string} [outputsLink.uri] The content link URI.
   * @property {string} [outputsLink.contentVersion] The content version.
   * @property {number} [outputsLink.contentSize] The content size.
   * @property {object} [outputsLink.contentHash] The content hash.
   * @property {string} [outputsLink.contentHash.algorithm] The algorithm of
   * the content hash.
   * @property {string} [outputsLink.contentHash.value] The value of the
   * content hash.
   * @property {object} [outputsLink.metadata] The metadata.
   * @property {date} [scheduledTime] Gets the scheduled time.
   * @property {date} [startTime] Gets the start time.
   * @property {date} [endTime] Gets the end time.
   * @property {string} [trackingId] Gets the tracking id.
   * @property {object} [correlation] The run correlation.
   * @property {string} [correlation.clientTrackingId] The client tracking id.
   * @property {string} [code] Gets the code.
   * @property {string} [status] Gets the status. Possible values include:
   * 'NotSpecified', 'Paused', 'Running', 'Waiting', 'Succeeded', 'Skipped',
   * 'Suspended', 'Cancelled', 'Failed', 'Faulted', 'TimedOut', 'Aborted',
   * 'Ignored'
   * @property {object} [error] Gets the error.
   * @property {object} [trackedProperties] Gets the tracked properties.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkflowRunTrigger
   *
   * @returns {object} metadata of WorkflowRunTrigger
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRunTrigger',
      type: {
        name: 'Composite',
        className: 'WorkflowRunTrigger',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          inputs: {
            required: false,
            readOnly: true,
            serializedName: 'inputs',
            type: {
              name: 'Object'
            }
          },
          inputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'inputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          outputs: {
            required: false,
            readOnly: true,
            serializedName: 'outputs',
            type: {
              name: 'Object'
            }
          },
          outputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'outputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          scheduledTime: {
            required: false,
            readOnly: true,
            serializedName: 'scheduledTime',
            type: {
              name: 'DateTime'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          trackingId: {
            required: false,
            readOnly: true,
            serializedName: 'trackingId',
            type: {
              name: 'String'
            }
          },
          correlation: {
            required: false,
            serializedName: 'correlation',
            type: {
              name: 'Composite',
              className: 'Correlation'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Object'
            }
          },
          trackedProperties: {
            required: false,
            readOnly: true,
            serializedName: 'trackedProperties',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowRunTrigger;
