const { watch, series } = require("gulp");
const paths = require("../config/paths");
const devClean = require("./clean");
const { devTailwind } = require("./styles");
const { previewReload } = require("./serve");

function watchFiles() {
  // Template files
  watch(paths.phtml.watch, series(devClean, devTailwind, previewReload));

  // Tailwind source files
  watch(paths.styles.watch, series(devClean, devTailwind));

  // Other CSS files
  watch(`${paths.styles.dest}**/*.css`, series(devClean, previewReload));
}

module.exports = watchFiles;
