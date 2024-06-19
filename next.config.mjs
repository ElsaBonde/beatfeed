/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: process.env.NODE_ENV === 'test' ? '.next-test' : '.next',
};

export default nextConfig;
