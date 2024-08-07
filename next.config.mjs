/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "/resume",
    experimental: {
        metadata: true,
    },
};

export default nextConfig;
