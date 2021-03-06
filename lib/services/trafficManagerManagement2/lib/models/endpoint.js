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
 * Class representing a Traffic Manager endpoint.
 *
 * @extends models['ProxyResource']
 */
class Endpoint extends models['ProxyResource'] {
  /**
   * Create a Endpoint.
   * @member {string} [targetResourceId] The Azure Resource URI of the of the
   * endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
   * @member {string} [target] The fully-qualified DNS name or IP address of
   * the endpoint. Traffic Manager returns this value in DNS responses to
   * direct traffic to this endpoint.
   * @member {string} [endpointStatus] The status of the endpoint. If the
   * endpoint is Enabled, it is probed for endpoint health and is included in
   * the traffic routing method. Possible values include: 'Enabled', 'Disabled'
   * @member {number} [weight] The weight of this endpoint when using the
   * 'Weighted' traffic routing method. Possible values are from 1 to 1000.
   * @member {number} [priority] The priority of this endpoint when using the
   * 'Priority' traffic routing method. Possible values are from 1 to 1000,
   * lower values represent higher priority. This is an optional parameter.  If
   * specified, it must be specified on all endpoints, and no two endpoints can
   * share the same priority value.
   * @member {string} [endpointLocation] Specifies the location of the external
   * or nested endpoints when using the 'Performance' traffic routing method.
   * @member {string} [endpointMonitorStatus] The monitoring status of the
   * endpoint. Possible values include: 'CheckingEndpoint', 'Online',
   * 'Degraded', 'Disabled', 'Inactive', 'Stopped'
   * @member {number} [minChildEndpoints] The minimum number of endpoints that
   * must be available in the child profile in order for the parent profile to
   * be considered available. Only applicable to endpoint of type
   * 'NestedEndpoints'.
   * @member {array} [geoMapping] The list of countries/regions mapped to this
   * endpoint when using the 'Geographic' traffic routing method. Please
   * consult Traffic Manager Geographic documentation for a full list of
   * accepted values.
   * @member {array} [subnets] The list of subnets, IP addresses, and/or
   * address ranges mapped to this endpoint when using the 'Subnet' traffic
   * routing method. An empty list will match all ranges not covered by other
   * endpoints.
   * @member {array} [customHeaders] List of custom headers.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Endpoint
   *
   * @returns {object} metadata of Endpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Endpoint',
      type: {
        name: 'Composite',
        className: 'Endpoint',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          targetResourceId: {
            required: false,
            serializedName: 'properties.targetResourceId',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'properties.target',
            type: {
              name: 'String'
            }
          },
          endpointStatus: {
            required: false,
            serializedName: 'properties.endpointStatus',
            type: {
              name: 'String'
            }
          },
          weight: {
            required: false,
            serializedName: 'properties.weight',
            type: {
              name: 'Number'
            }
          },
          priority: {
            required: false,
            serializedName: 'properties.priority',
            type: {
              name: 'Number'
            }
          },
          endpointLocation: {
            required: false,
            serializedName: 'properties.endpointLocation',
            type: {
              name: 'String'
            }
          },
          endpointMonitorStatus: {
            required: false,
            serializedName: 'properties.endpointMonitorStatus',
            type: {
              name: 'String'
            }
          },
          minChildEndpoints: {
            required: false,
            serializedName: 'properties.minChildEndpoints',
            type: {
              name: 'Number'
            }
          },
          geoMapping: {
            required: false,
            serializedName: 'properties.geoMapping',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          subnets: {
            required: false,
            serializedName: 'properties.subnets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EndpointPropertiesSubnetsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'EndpointPropertiesSubnetsItem'
                  }
              }
            }
          },
          customHeaders: {
            required: false,
            serializedName: 'properties.customHeaders',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EndpointPropertiesCustomHeadersItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'EndpointPropertiesCustomHeadersItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Endpoint;
