const baseConfig = require("../base.config.js");

module.exports = {
  ...baseConfig,
  content: ["./app/design/frontend/[theme]/[store-view]/**/*.phtml"],
  theme: {
    extend: {
      // Your store-specific theme extensions
    },
  },
};
