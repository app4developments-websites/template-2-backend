"use strict";

/**
 * `homepage-populate` middleware
 */

const populate = {
  hero: {
    fields: ["mainText", "subText"],
    populate: {
      image: {
        fields: "url",
      },
      buttons: {
        fields: ["label", "href", "type"],
      },
    },
  },
  ourStory: {
    fields: ["heading", "content"],
    populate: {
      imageLeft: {
        fields: "url",
      },
      imageRight: {
        fields: "url",
      },
    },
  },
  topPicks: {
    fields: "heading",
    populate: {
      food_items: {
        fields: ["name", "price", "description"],
        populate: {
          thumbnail: {
            fields: "url",
          },
        },
      },
      menuButton: {
        populate: {
          fields: ["label", "href", "type"],
        },
      },
    },
  },
  downloadApp: {
    fields: ["heading", "content"],
    populate: {
      mainBackground: {
        fields: "url",
      },
      appScreenshot: {
        fields: "url",
      },
      buttons: {
        fields: ["label", "href", "type"],
      },
      download_buttons: {
        fields: "href",
        populate: {
          image: {
            fields: "url",
          },
        },
      },
    },
  },
  footer: {
    fields: "*",
    populate: {
      address: {
        fields: "*",
      },
      openingHours: {
        fields: "*",
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In homepage-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
