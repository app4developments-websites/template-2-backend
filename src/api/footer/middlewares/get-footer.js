"use strict";

/**
 * `get-footer` middleware
 */

const populate = {
  footer: {
    fields: "*",
    populate: {
      footerSection: {
        fields: "*",
      },
      quickLinks: {
        fields: "heading",
      },
      installApp: {
        fields: "heading",
        populate: {
          download_buttons: {
            fields: "*",
            populate: {
              image: {
                fields: "url",
              },
            },
          },
        },
      },
      background: {
        fields: "url",
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In get-footer middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
