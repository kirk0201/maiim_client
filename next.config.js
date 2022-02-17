/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  optimizeFonts: false,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
};
