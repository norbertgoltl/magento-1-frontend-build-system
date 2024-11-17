# Modern Magento 1.x Frontend Build System

A modern frontend build system for Magento 1.x themes, integrating Tailwind CSS with a flexible development workflow and live reload capabilities. This toolset is designed to streamline frontend development processes and enhance the developer experience when working with Magento 1.x themes.

## Features

- 🎨 Tailwind CSS integration for modern styling
- 🔄 Live reload with BrowserSync for rapid development
- 📦 Modular Gulp task system for frontend assets
- 🎯 Multi-theme and store view support for complex projects
- 💻 Frontend development optimized workflow

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gulp CLI (`npm install -g gulp-cli`)
- Magento 1.x installation

## Installation

1. Install Gulp globally if you haven't already:

```bash
npm install -g gulp-cli
```

2. Copy the build files to your Magento project and install dependencies:

```bash
npm install
```

3. Set up your environment variables (optional):

```bash
# Create .env file
cp .env.example .env

# Configure your environment variables
THEME_NAME=your-theme
STORE_VIEW=your-store
PROXY_URL=http://localhost
HOST_NAME=your-domain.local
```

## Project Structure

```
build/
├── gulp/
│   ├── config/
│   │   ├── paths.js                # Path configurations
│   │   ├── env.js                  # Environment variables
│   │   └── browsersync.js          # BrowserSync settings
│   └── tasks/
│       ├── clean.js                # Cache cleaning
│       ├── styles.js               # CSS/Tailwind processing
│       ├── serve.js                # BrowserSync related tasks
│       └── watch.js                # File watching
└── tailwind/
    ├── base.config.js              # Base Tailwind configuration
    ├── css/
    │   └── storeviews/
    │       └── [store-view].css    # Store-specific Tailwind CSS
    └── storeviews/
        └── [store-view].config.js  # Store-specific Tailwind config
```

## Usage

### Development

Start the development server with live reload:

```bash
gulp
```

This will:

- Clean the cache
- Compile Tailwind CSS
- Start BrowserSync
- Watch for changes

### Production Build

Build for production:

```bash
NODE_ENV=production gulp build
```

## Available Commands

- `gulp` - Start development server
- `gulp build` - Build for production
- `gulp watch` - Watch for changes without server
- `gulp clean` - Clean cache

## Configuration

### Tailwind CSS

Store-specific Tailwind configurations should be located in:

```
build/tailwind/storeviews/[store-view].config.js
```

Example configuration:

```javascript
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
```

### Environment Variables

Available environment variables:

| Variable        | Default          | Description               |
| --------------- | ---------------- | ------------------------- |
| THEME_NAME      | default          | Theme directory name      |
| STORE_VIEW      | default          | Store view directory name |
| PROXY_URL       | http://localhost | Local development URL     |
| HOST_NAME       | localhost        | Host name for BrowserSync |
| OUTPUT_CSS_FILE | styles.css       | Output CSS filename       |

## Troubleshooting

### Cache Issues

If changes are not reflecting:

1. Clear Magento cache:

```bash
rm -rf var/cache/*
```

2. Force refresh in browser:

- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`

### Live Reload Not Working

Check if:

1. BrowserSync is running (check console output)
2. Correct paths are set in Tailwind config
3. Host configuration matches your local setup

## License

This project is licensed under the MIT License - see the LICENSE file for details
