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
 * Defines a response. All schemas that return at the root of the response must
 * inherit from this object.
 *
 * @extends models['Identifiable']
 */
class Response extends models['Identifiable'] {
  /**
   * Create a Response.
   * @property {string} [readLink] The URL that returns this resource.
   * @property {string} [webSearchUrl] The URL to Bing's search result for this
   * item.
   * @property {array} [potentialAction]
   * @property {array} [immediateAction]
   * @property {string} [preferredClickthroughUrl]
   * @property {string} [adaptiveCard]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Response
   *
   * @returns {object} metadata of Response
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Response',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Response',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          potentialAction: {
            required: false,
            readOnly: true,
            serializedName: 'potentialAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          immediateAction: {
            required: false,
            readOnly: true,
            serializedName: 'immediateAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          preferredClickthroughUrl: {
            required: false,
            readOnly: true,
            serializedName: 'preferredClickthroughUrl',
            type: {
              name: 'String'
            }
          },
          adaptiveCard: {
            required: false,
            readOnly: true,
            serializedName: 'adaptiveCard',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Response;