const env = require("./env");

const browserSyncConfig = {
  proxy: {
    target: env.proxyUrl,
    proxyReq: [
      function (proxyReq) {
        proxyReq.setHeader("Host", env.hostName);
      },
    ],
  },
  localOnly: true,
  socket: {
    domain: "localhost:3000",
  },
  ghostMode: false,
  notify: false,
  ui: false,
  etag: true,
  codeSync: true,
  browser: "google chrome",
};

module.exports = browserSyncConfig;
