/** @type {import('next').NextConfig} */
const nextConfig = {
    Images: {
        remotePatterns: [
            {
                hostname: "utfs.io",
            },
        ],
    },
}
export default nextConfig;
