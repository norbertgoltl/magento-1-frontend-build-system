const env = require("./env");

const paths = {
  styles: {
    src: `skin/frontend/${env.themeName}/${env.storeView}/css/src/**/*.css`,
    dest: `skin/frontend/${env.themeName}/${env.storeView}/css/`,
    watch: [`build/tailwind/css/storeviews/${env.storeView}.css`],
  },
  phtml: {
    watch: [
      `app/design/frontend/${env.themeName}/${env.storeView}/**/*.phtml`,
      `app/design/frontend/ultimo/default/**/*.phtml`,
    ],
  },
  tailwind: {
    src: `skin/frontend/${env.themeName}/${env.storeView}/tailwindcss/**/*.css`,
    configBase: "./build/tailwind/base.config.js",
    configStore: `./build/tailwind/storeviews/${env.storeView}.config.js`,
  },
  cache: "var/cache",
};

module.exports = paths;
