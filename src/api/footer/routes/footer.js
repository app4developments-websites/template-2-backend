"use strict";

/**
 * homepage router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::footer.footer", {
  config: {
    find: {
      middlewares: ["api::footer.get-footer"],
    },
    findOne: {
      middlewares: ["api::footer.get-footer"],
    },
  },
});
