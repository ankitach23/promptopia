/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  env:{
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_SIGNING_PRIVATE_KEY: process.env.JWT_SIGNING_PRIVATE_KEY,
    JWT_SIGNING_PRIVATE_KEY_ID: process.env.JWT_SIGNING_PRIVATE_KEY_ID,
    
  }
}

module.exports = nextConfig
