const env = {
  themeName: process.env.THEME_NAME || "your-theme",
  storeView: process.env.STORE_VIEW || "your-store",
  proxyUrl: process.env.PROXY_URL || "http://localhost",
  hostName: process.env.HOST_NAME || "your-domain.local",
  outputCssFileName: process.env.OUTPUT_CSS_FILE || "styles.css",
  isDevelopment: process.env.NODE_ENV !== "production",
};

module.exports = env;
