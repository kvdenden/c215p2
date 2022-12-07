const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/skulls/:hash.svg",
        destination: "/api/skulls/:hash",
      },
    ];
  },
};

module.exports = nextConfig;
