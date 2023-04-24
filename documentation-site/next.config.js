/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */

const { resolve } = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    loadYard: process.env.LOAD_YARD,
  },
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // fix to correctly resolve mjs file exports
    // probably can be removed with next.js update
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.alias.baseui = resolve(__dirname, '../dist');
    config.resolve.alias.examples = resolve(__dirname, 'examples');
    // references next polyfills example: https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
    const originalEntry = config.entry;
    config.resolve.fallback = { fs: false };
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./helpers/polyfills.js')) {
        entries['main.js'].unshift('./helpers/polyfills.js');
      }

      return entries;
    };

    if (dev) {
      config.devtool = 'inline-source-map';
    }

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
