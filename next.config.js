// @ts-check

const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/posts/test",
      destination: "/posts/get-started",
    },
  ],
};

module.exports = withContentCollections(nextConfig);
