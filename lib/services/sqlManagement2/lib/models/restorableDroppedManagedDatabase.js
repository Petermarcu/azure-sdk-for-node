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
 * A restorable dropped managed database resource.
 *
 * @extends models['TrackedResource']
 */
class RestorableDroppedManagedDatabase extends models['TrackedResource'] {
  /**
   * Create a RestorableDroppedManagedDatabase.
   * @property {string} [databaseName] The name of the database.
   * @property {date} [creationDate] The creation date of the database (ISO8601
   * format).
   * @property {date} [deletionDate] The deletion date of the database (ISO8601
   * format).
   * @property {date} [earliestRestoreDate] The earliest restore date of the
   * database (ISO8601 format).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RestorableDroppedManagedDatabase
   *
   * @returns {object} metadata of RestorableDroppedManagedDatabase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RestorableDroppedManagedDatabase',
      type: {
        name: 'Composite',
        className: 'RestorableDroppedManagedDatabase',
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
            required: true,
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
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseName',
            type: {
              name: 'String'
            }
          },
          creationDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationDate',
            type: {
              name: 'DateTime'
            }
          },
          deletionDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.deletionDate',
            type: {
              name: 'DateTime'
            }
          },
          earliestRestoreDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.earliestRestoreDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = RestorableDroppedManagedDatabase;