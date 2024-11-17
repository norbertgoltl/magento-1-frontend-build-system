const { series, parallel } = require('gulp');

// Import tasks
const devClean = require('./build/gulp/tasks/clean');
const { devTailwind } = require('./build/gulp/tasks/styles');
const { livePreview } = require('./build/gulp/tasks/serve');
const watchFiles = require('./build/gulp/tasks/watch');

// Define default task
exports.default = series(
    devClean,
    parallel(devTailwind),
    livePreview,
    watchFiles
);

// Optional: Define additional tasks for different scenarios
exports.build = series(
    devClean,
    devTailwind
);

exports.watch = watchFiles;