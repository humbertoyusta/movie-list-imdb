/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["m.media-amazon.com"],
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "m.media-amazon.com",
        //         port: "",
        //         pathname: "m.media-amazon.com/**",
        //     },
        // ],
    },
};

module.exports = nextConfig;
