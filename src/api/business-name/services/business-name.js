'use strict';

/**
 * business-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-name.business-name');
