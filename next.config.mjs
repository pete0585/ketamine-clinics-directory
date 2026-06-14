/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/lactation-consultant/:slug',
        destination: '/clinic/:slug',
        permanent: true,
      },
      {
        source: '/ibclc/:slug',
        destination: '/clinic/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
