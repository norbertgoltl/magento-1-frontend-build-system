const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const tailwindcss = require("tailwindcss");
const paths = require("../config/paths");
const env = require("../config/env");
const browserSync = require("browser-sync").create();

function devTailwind() {
  return src(paths.tailwind.src)
    .pipe(postcss([tailwindcss(paths.tailwind.configStore)]))
    .pipe(concat(env.outputCssFileName))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

module.exports = {
  devTailwind,
};
