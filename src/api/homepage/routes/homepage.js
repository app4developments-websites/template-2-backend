"use strict";

/**
 * homepage router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::homepage.homepage", {
  config: {
    find: {
      middlewares: ["api::homepage.get-homepage"],
    },
    findOne: {
      middlewares: ["api::homepage.get-homepage"],
    },
  },
});
