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
 * Initializes a new instance of the JobScheduleAddParameter class.
 * @constructor
 * @summary A job schedule that allows recurring jobs by specifying when to
 * run jobs and a specification used to create each job.
 *
 * @member {string} id A string that uniquely identifies the schedule within
 * the account.
 * 
 * @member {string} [displayName] The display name for the schedule.
 * 
 * @member {object} schedule The schedule according to which jobs will be
 * created.
 * 
 * @member {date} [schedule.doNotRunUntil] If you do not specify a
 * doNotRunUntil time, the schedule becomes ready to create jobs immediately.
 * 
 * @member {date} [schedule.doNotRunAfter]
 * 
 * @member {moment.duration} [schedule.startWindow] If a job is not created
 * within the startWindow interval, then the 'opportunity' is lost; no job
 * will be created until the next recurrence of the schedule.
 * 
 * @member {moment.duration} [schedule.recurrenceInterval]
 * 
 * @member {object} jobSpecification The details of the jobs to be created on
 * this schedule.
 * 
 * @member {number} [jobSpecification.priority]  Priority values can range
 * from -1000 to 1000, with -1000 being the lowest priority and 1000 being
 * the highest priority. The default value is 0.
 * 
 * @member {string} [jobSpecification.displayName] The name need not be unique
 * and can contain any Unicode characters up to a maximum length of 1024.
 * 
 * @member {boolean} [jobSpecification.usesTaskDependencies]
 * 
 * @member {object} [jobSpecification.constraints]
 * 
 * @member {moment.duration} [jobSpecification.constraints.maxWallClockTime]
 * 
 * @member {number} [jobSpecification.constraints.maxTaskRetryCount]
 * 
 * @member {object} [jobSpecification.jobManagerTask]
 * 
 * @member {string} [jobSpecification.jobManagerTask.id]
 * 
 * @member {string} [jobSpecification.jobManagerTask.displayName]
 * 
 * @member {string} [jobSpecification.jobManagerTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * 
 * @member {array} [jobSpecification.jobManagerTask.resourceFiles]
 * 
 * @member {array} [jobSpecification.jobManagerTask.environmentSettings]
 * 
 * @member {object} [jobSpecification.jobManagerTask.constraints]
 * 
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.maxWallClockTime]
 * 
 * @member {moment.duration}
 * [jobSpecification.jobManagerTask.constraints.retentionTime] The default is
 * infinite.
 * 
 * @member {number}
 * [jobSpecification.jobManagerTask.constraints.maxTaskRetryCount]
 * 
 * @member {boolean} [jobSpecification.jobManagerTask.killJobOnCompletion]
 * 
 * @member {boolean} [jobSpecification.jobManagerTask.runElevated]
 * 
 * @member {boolean} [jobSpecification.jobManagerTask.runExclusive] If true,
 * no other tasks will run on the same compute node for as long as the Job
 * Manager is running. If false, other tasks can run simultaneously with the
 * Job Manager on a compute node. The Job Manager task counts normally
 * against the node's concurrent task limit, so this is only relevant if the
 * node allows multiple concurrent tasks.
 * 
 * @member {array}
 * [jobSpecification.jobManagerTask.applicationPackageReferences]
 * 
 * @member {object} [jobSpecification.jobPreparationTask]
 * 
 * @member {string} [jobSpecification.jobPreparationTask.id] The id can
 * contain any combination of alphanumeric characters including hyphens and
 * underscores and cannot contain more than 64 characters.
 * 
 * @member {string} [jobSpecification.jobPreparationTask.commandLine] The
 * command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in
 * the command line, for example using "cmd /c MyCommand" in Windows or
 * "/bin/sh -c MyCommand" in Linux.
 * 
 * @member {array} [jobSpecification.jobPreparationTask.resourceFiles]
 * 
 * @member {array} [jobSpecification.jobPreparationTask.environmentSettings]
 * 
 * @member {object} [jobSpecification.jobPreparationTask.constraints]
 * 
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
 * 
 * @member {moment.duration}
 * [jobSpecification.jobPreparationTask.constraints.retentionTime] The
 * default is infinite.
 * 
 * @member {number}
 * [jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
 * 
 * @member {boolean} [jobSpecification.jobPreparationTask.waitForSuccess]
 * 
 * @member {boolean} [jobSpecification.jobPreparationTask.runElevated]
 * 
 * @member {boolean}
 * [jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess] Note
 * that the Job Preparation task should still be written to be idempotent
 * because it can be rerun if the compute node is rebooted while Job
 * Preparation task is still running. The default value is true.
 * 
 * @member {object} [jobSpecification.jobReleaseTask]
 * 
 * @member {string} [jobSpecification.jobReleaseTask.id] The id can contain
 * any combination of alphanumeric characters including hyphens and
 * underscores and cannot contain more than 64 characters.
 * 
 * @member {string} [jobSpecification.jobReleaseTask.commandLine] The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command
 * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
 * MyCommand" in Linux.
 * 
 * @member {array} [jobSpecification.jobReleaseTask.resourceFiles]
 * 
 * @member {array} [jobSpecification.jobReleaseTask.environmentSettings]
 * 
 * @member {moment.duration}
 * [jobSpecification.jobReleaseTask.maxWallClockTime]
 * 
 * @member {moment.duration} [jobSpecification.jobReleaseTask.retentionTime]
 * The default is infinite.
 * 
 * @member {boolean} [jobSpecification.jobReleaseTask.runElevated] The default
 * value is false.
 * 
 * @member {array} [jobSpecification.commonEnvironmentSettings]
 * 
 * @member {object} [jobSpecification.poolInfo]
 * 
 * @member {string} [jobSpecification.poolInfo.poolId] You must specify either
 * poolId or autoPoolSpecification, but not both.
 * 
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification] You must
 * specify either poolId or autoPoolSpecification, but not both.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix] The
 * prefix can be up to 20 characters long.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption]
 * Possible values include: 'jobschedule', 'job', 'unmapped'
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
 * 
 * @member {object} [jobSpecification.poolInfo.autoPoolSpecification.pool]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize]
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
 * This property and VirtualMachineConfiguration are mutually exclusive and
 * one of the properties must be specified.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * The default value is * which specifies the latest operating system version
 * for the specified OS family.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
 * This property and CloudServiceConfiguration are mutually exclusive and one
 * of the properties must be specified.
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * For example, Canonical or MicrosoftWindowsServer.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * For example, UbuntuServer or WindowsServer.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * For example, 14.04.0-LTS or 2012-R2-Datacenter.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * A value of 'latest' can be specified to select the latest version of an
 * image. If omitted, the default is 'latest'.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems.
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * This property must not be specified if the imageReference property
 * specifies a Linux OS image.
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * If omitted, the default value is true.
 * 
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
 * How tasks are distributed among compute nodes in the pool.
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType]
 * Possible values include: 'spread', 'pack', 'unmapped'
 * 
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
 * 
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicated]
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
 * 
 * @member {moment.duration}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
 * The ARM resource identifier of the virtual network subnet which the
 * compute nodes of the pool will join. The virtual network must be in the
 * same region and subscription as the Azure Batch account. This property can
 * only be specified for pools created with a cloudServiceConfiguration.
 * 
 * @member {object}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
 * 
 * @member {string}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine]
 * The command line does not run under a shell, and therefore cannot take
 * advantage of shell features such as environment variable expansion. If you
 * want to take advantage of such features, you should invoke the shell in
 * the command line, for example using "cmd /c MyCommand" in Windows or
 * "/bin/sh -c MyCommand" in Linux.
 * 
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
 * 
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.runElevated]
 * 
 * @member {number}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * 
 * @member {boolean}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
 * 
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
 * 
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
 * 
 * @member {array}
 * [jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
 * 
 * @member {array} [jobSpecification.metadata]
 * 
 * @member {array} [metadata] A list of name-value pairs associated with the
 * schedule as metadata.
 * 
 */
function JobScheduleAddParameter() {
}

/**
 * Defines the metadata of JobScheduleAddParameter
 *
 * @returns {object} metadata of JobScheduleAddParameter
 *
 */
JobScheduleAddParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobScheduleAddParameter',
    type: {
      name: 'Composite',
      className: 'JobScheduleAddParameter',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        schedule: {
          required: true,
          serializedName: 'schedule',
          type: {
            name: 'Composite',
            className: 'Schedule'
          }
        },
        jobSpecification: {
          required: true,
          serializedName: 'jobSpecification',
          type: {
            name: 'Composite',
            className: 'JobSpecification'
          }
        },
        metadata: {
          required: false,
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

module.exports = JobScheduleAddParameter;