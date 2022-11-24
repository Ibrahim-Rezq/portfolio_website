/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVE_URL: "http://localhost:8000/",
    // "https://my-json-server.typicode.com/Ibrahim-Rezq/portfolio_website/projects/"
  },
  images: {
    domains: ["picsum.photos", "loremipsum.io"],
  },
}

module.exports = nextConfig
