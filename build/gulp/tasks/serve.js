const browserSync = require("browser-sync").create();
const browserSyncConfig = require("../config/browsersync");

function livePreview(done) {
  browserSync.init(browserSyncConfig);
  done();
}

function previewReload(done) {
  browserSync.reload();
  done();
}

module.exports = {
  livePreview,
  previewReload,
  browserSync,
};
