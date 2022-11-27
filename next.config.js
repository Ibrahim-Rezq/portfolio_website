/** @type {import('next').NextConfig} */
const result = require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  env: result.parsed,
  images: {
    domains: ["picsum.photos", "loremipsum.io"],
  },
}

module.exports = nextConfig
