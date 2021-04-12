const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  env:{
    API_URL: process.env.API_URL
  }
}

module.exports = withPlugins([withImages], nextConfig)

