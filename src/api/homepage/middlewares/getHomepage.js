"use strict";

/**
 * `getHomepage` middleware
 */

const populate = {
  hero: {
    fields: "*",
    populate: {
      background: {
        fields: "url",
      },
      logo: {
        fields: "url",
      },
    },
  },
  info: {
    fields: "*",
    populate: {
      icon: {
        fields: "url",
      },
    },
  },
  about: {
    fields: "*",
    populate: {
      review: {
        fields: "*",
      },
      signatureImage: {
        fields: "url",
      },
      mainImage: {
        fields: "url",
      },
    },
  },
  menu: {
    fields: "*",
    populate: {
      menuSection: {
        fields: "*",
        populate: {
          image: {
            fields: "url",
          },
          image_button: {
            fields: "*",
            populate: {
              image: {
                fields: "url",
              },
            },
          },
        },
      },
    },
  },
  downloadApp: {
    fields: "*",
    populate: {
      screenshot: {
        fields: "url",
      },
      download_app_button: {
        fields: "*",
        populate: {
          image: {
            fields: "url",
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In getHomepage middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
