'use strict';

/**
 * recent-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-block.recent-block');
