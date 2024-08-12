/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.thecocktaildb.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
    output: 'export', // Add this line
};

export default nextConfig;

{
  "scripts": {
    "build": "next build"
  }
}
