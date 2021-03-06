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
 * Information about setup or main entry point of a code package deployed on a
 * Service Fabric node.
 *
 */
class CodePackageEntryPoint {
  /**
   * Create a CodePackageEntryPoint.
   * @property {string} [entryPointLocation] The location of entry point
   * executable on the node.
   * @property {string} [processId] The process ID of the entry point.
   * @property {string} [runAsUserName] The user name under which entry point
   * executable is run on the node.
   * @property {object} [codePackageEntryPointStatistics] Statistics about
   * setup or main entry point  of a code package deployed on a Service Fabric
   * node.
   * @property {string} [codePackageEntryPointStatistics.lastExitCode] The last
   * exit code of the entry point.
   * @property {date} [codePackageEntryPointStatistics.lastActivationTime] The
   * last time (in UTC) when Service Fabric attempted to run the entry point.
   * @property {date} [codePackageEntryPointStatistics.lastExitTime] The last
   * time (in UTC) when the entry point finished running.
   * @property {date}
   * [codePackageEntryPointStatistics.lastSuccessfulActivationTime] The last
   * time (in UTC) when the entry point ran successfully.
   * @property {date} [codePackageEntryPointStatistics.lastSuccessfulExitTime]
   * The last time (in UTC) when the entry point finished running gracefully.
   * @property {string} [codePackageEntryPointStatistics.activationCount]
   * Number of times the entry point has run.
   * @property {string}
   * [codePackageEntryPointStatistics.activationFailureCount] Number of times
   * the entry point failed to run.
   * @property {string}
   * [codePackageEntryPointStatistics.continuousActivationFailureCount] Number
   * of times the entry point continuously failed to run.
   * @property {string} [codePackageEntryPointStatistics.exitCount] Number of
   * times the entry point finished running.
   * @property {string} [codePackageEntryPointStatistics.exitFailureCount]
   * Number of times the entry point failed to exit gracefully.
   * @property {string}
   * [codePackageEntryPointStatistics.continuousExitFailureCount] Number of
   * times the entry point continuously failed to exit gracefully.
   * @property {string} [status] Specifies the status of the code package entry
   * point deployed on a Service Fabric node. Possible values include:
   * 'Invalid', 'Pending', 'Starting', 'Started', 'Stopping', 'Stopped'
   * @property {date} [nextActivationTime] The time (in UTC) when the entry
   * point executable will be run next.
   * @property {string} [instanceId] The instance ID for current running entry
   * point. For a code package setup entry point (if specified) runs first and
   * after it finishes main entry point is started. Each time entry point
   * executable is run, its instance id will change.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CodePackageEntryPoint
   *
   * @returns {object} metadata of CodePackageEntryPoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CodePackageEntryPoint',
      type: {
        name: 'Composite',
        className: 'CodePackageEntryPoint',
        modelProperties: {
          entryPointLocation: {
            required: false,
            serializedName: 'EntryPointLocation',
            type: {
              name: 'String'
            }
          },
          processId: {
            required: false,
            serializedName: 'ProcessId',
            type: {
              name: 'String'
            }
          },
          runAsUserName: {
            required: false,
            serializedName: 'RunAsUserName',
            type: {
              name: 'String'
            }
          },
          codePackageEntryPointStatistics: {
            required: false,
            serializedName: 'CodePackageEntryPointStatistics',
            type: {
              name: 'Composite',
              className: 'CodePackageEntryPointStatistics'
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'String'
            }
          },
          nextActivationTime: {
            required: false,
            serializedName: 'NextActivationTime',
            type: {
              name: 'DateTime'
            }
          },
          instanceId: {
            required: false,
            serializedName: 'InstanceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CodePackageEntryPoint;
