const del = require("del");
const paths = require("../config/paths");

function devClean() {
  return del(paths.cache, { force: true });
}

module.exports = devClean;
