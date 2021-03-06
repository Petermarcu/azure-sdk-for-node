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

const models = require('./index');

/**
 * A Service Fabric.
 *
 * @extends models['Resource']
 */
class ServiceFabric extends models['Resource'] {
  /**
   * Create a ServiceFabric.
   * @property {string} [externalServiceFabricId] The backing service fabric
   * resource's id
   * @property {string} [environmentId] The resource id of the environment
   * under which the service fabric resource is present
   * @property {object} [applicableSchedule] The applicable schedule for the
   * virtual machine.
   * @property {object} [applicableSchedule.labVmsShutdown] The auto-shutdown
   * schedule, if one has been set at the lab or lab resource level.
   * @property {string} [applicableSchedule.labVmsShutdown.status] The status
   * of the schedule (i.e. Enabled, Disabled). Possible values include:
   * 'Enabled', 'Disabled'
   * @property {string} [applicableSchedule.labVmsShutdown.taskType] The task
   * type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
   * @property {object} [applicableSchedule.labVmsShutdown.weeklyRecurrence] If
   * the schedule will occur only some days of the week, specify the weekly
   * recurrence.
   * @property {array}
   * [applicableSchedule.labVmsShutdown.weeklyRecurrence.weekdays] The days of
   * the week for which the schedule is set (e.g. Sunday, Monday, Tuesday,
   * etc.).
   * @property {string}
   * [applicableSchedule.labVmsShutdown.weeklyRecurrence.time] The time of the
   * day the schedule will occur.
   * @property {object} [applicableSchedule.labVmsShutdown.dailyRecurrence] If
   * the schedule will occur once each day of the week, specify the daily
   * recurrence.
   * @property {string}
   * [applicableSchedule.labVmsShutdown.dailyRecurrence.time] The time of day
   * the schedule will occur.
   * @property {object} [applicableSchedule.labVmsShutdown.hourlyRecurrence] If
   * the schedule will occur multiple times a day, specify the hourly
   * recurrence.
   * @property {number}
   * [applicableSchedule.labVmsShutdown.hourlyRecurrence.minute] Minutes of the
   * hour the schedule will run.
   * @property {string} [applicableSchedule.labVmsShutdown.timeZoneId] The time
   * zone ID (e.g. Pacific Standard time).
   * @property {object}
   * [applicableSchedule.labVmsShutdown.notificationSettings] Notification
   * settings.
   * @property {string}
   * [applicableSchedule.labVmsShutdown.notificationSettings.status] If
   * notifications are enabled for this schedule (i.e. Enabled, Disabled).
   * Possible values include: 'Enabled', 'Disabled'
   * @property {number}
   * [applicableSchedule.labVmsShutdown.notificationSettings.timeInMinutes]
   * Time in minutes before event at which notification will be sent.
   * @property {string}
   * [applicableSchedule.labVmsShutdown.notificationSettings.webhookUrl] The
   * webhook URL to which the notification will be sent.
   * @property {string}
   * [applicableSchedule.labVmsShutdown.notificationSettings.emailRecipient]
   * The email recipient to send notifications to (can be a list of semi-colon
   * separated email addresses).
   * @property {string}
   * [applicableSchedule.labVmsShutdown.notificationSettings.notificationLocale]
   * The locale to use when sending a notification (fallback for unsupported
   * languages is EN).
   * @property {date} [applicableSchedule.labVmsShutdown.createdDate] The
   * creation date of the schedule.
   * @property {string} [applicableSchedule.labVmsShutdown.targetResourceId]
   * The resource ID to which the schedule belongs
   * @property {string} [applicableSchedule.labVmsShutdown.provisioningState]
   * The provisioning status of the resource.
   * @property {string} [applicableSchedule.labVmsShutdown.uniqueIdentifier]
   * The unique immutable identifier of a resource (Guid).
   * @property {object} [applicableSchedule.labVmsStartup] The auto-startup
   * schedule, if one has been set at the lab or lab resource level.
   * @property {string} [applicableSchedule.labVmsStartup.status] The status of
   * the schedule (i.e. Enabled, Disabled). Possible values include: 'Enabled',
   * 'Disabled'
   * @property {string} [applicableSchedule.labVmsStartup.taskType] The task
   * type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
   * @property {object} [applicableSchedule.labVmsStartup.weeklyRecurrence] If
   * the schedule will occur only some days of the week, specify the weekly
   * recurrence.
   * @property {array}
   * [applicableSchedule.labVmsStartup.weeklyRecurrence.weekdays] The days of
   * the week for which the schedule is set (e.g. Sunday, Monday, Tuesday,
   * etc.).
   * @property {string}
   * [applicableSchedule.labVmsStartup.weeklyRecurrence.time] The time of the
   * day the schedule will occur.
   * @property {object} [applicableSchedule.labVmsStartup.dailyRecurrence] If
   * the schedule will occur once each day of the week, specify the daily
   * recurrence.
   * @property {string} [applicableSchedule.labVmsStartup.dailyRecurrence.time]
   * The time of day the schedule will occur.
   * @property {object} [applicableSchedule.labVmsStartup.hourlyRecurrence] If
   * the schedule will occur multiple times a day, specify the hourly
   * recurrence.
   * @property {number}
   * [applicableSchedule.labVmsStartup.hourlyRecurrence.minute] Minutes of the
   * hour the schedule will run.
   * @property {string} [applicableSchedule.labVmsStartup.timeZoneId] The time
   * zone ID (e.g. Pacific Standard time).
   * @property {object} [applicableSchedule.labVmsStartup.notificationSettings]
   * Notification settings.
   * @property {string}
   * [applicableSchedule.labVmsStartup.notificationSettings.status] If
   * notifications are enabled for this schedule (i.e. Enabled, Disabled).
   * Possible values include: 'Enabled', 'Disabled'
   * @property {number}
   * [applicableSchedule.labVmsStartup.notificationSettings.timeInMinutes] Time
   * in minutes before event at which notification will be sent.
   * @property {string}
   * [applicableSchedule.labVmsStartup.notificationSettings.webhookUrl] The
   * webhook URL to which the notification will be sent.
   * @property {string}
   * [applicableSchedule.labVmsStartup.notificationSettings.emailRecipient] The
   * email recipient to send notifications to (can be a list of semi-colon
   * separated email addresses).
   * @property {string}
   * [applicableSchedule.labVmsStartup.notificationSettings.notificationLocale]
   * The locale to use when sending a notification (fallback for unsupported
   * languages is EN).
   * @property {date} [applicableSchedule.labVmsStartup.createdDate] The
   * creation date of the schedule.
   * @property {string} [applicableSchedule.labVmsStartup.targetResourceId] The
   * resource ID to which the schedule belongs
   * @property {string} [applicableSchedule.labVmsStartup.provisioningState]
   * The provisioning status of the resource.
   * @property {string} [applicableSchedule.labVmsStartup.uniqueIdentifier] The
   * unique immutable identifier of a resource (Guid).
   * @property {string} [provisioningState] The provisioning status of the
   * resource.
   * @property {string} [uniqueIdentifier] The unique immutable identifier of a
   * resource (Guid).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceFabric
   *
   * @returns {object} metadata of ServiceFabric
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceFabric',
      type: {
        name: 'Composite',
        className: 'ServiceFabric',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          externalServiceFabricId: {
            required: false,
            serializedName: 'properties.externalServiceFabricId',
            type: {
              name: 'String'
            }
          },
          environmentId: {
            required: false,
            serializedName: 'properties.environmentId',
            type: {
              name: 'String'
            }
          },
          applicableSchedule: {
            required: false,
            readOnly: true,
            serializedName: 'properties.applicableSchedule',
            type: {
              name: 'Composite',
              className: 'ApplicableSchedule'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          uniqueIdentifier: {
            required: false,
            readOnly: true,
            serializedName: 'properties.uniqueIdentifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceFabric;
