/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/collection/:slug",
        destination: "/collections/:slug",
        permanent: true,
      },
      {
        source: "/collections/luxesh",
        destination: "/collections/luxesheen",
        permanent: true,
      },
      {
        source: "/collections/earthsculpt",
        destination: "/collections/earthcast",
        permanent: true,
      },
      {
        source: "/collections/metal-aura",
        destination: "/collections/metalaura",
        permanent: true,
      },
      {
        source: "/shop/outdoor",
        destination: "/shop/dual-space",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
