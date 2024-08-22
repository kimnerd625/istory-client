/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // '/api'로 시작하는 모든 경로
        destination:
          "http://ec2-52-79-247-22.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/:path*", // 이 경로로 프록시
      },
    ];
  },
};

export default nextConfig;
