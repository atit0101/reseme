/** @type {import('next').NextConfig} */


console.log("APP : ", process.env.APPENV);

const nextConfig = {
    reactStrictMode: true,
    output: "export",
    // basePath: "/web"
};

export default nextConfig;
