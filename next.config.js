/** @type {import('next').NextConfig} */

module.exports= {
  node: {
    fs: 'empty'
  },
  reactStrictMode:false,
  webpack5: true,
  webpack: (config) =>{
    config.resolve.fallback = {fs:false};
    return config;
  },
};
