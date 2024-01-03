'use strict';

/**
 * hero-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-block.hero-block');
