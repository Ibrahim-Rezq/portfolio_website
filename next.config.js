/** @type {import('next').NextConfig} */
const result = require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  env: result.parsed,
  images: {
    domains: ["images.ctfassets.net", "loremipsum.io"],
  },
}

module.exports = nextConfig
