/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['i.imgur.com'],
  },
  i18n: {
    locales: ['en_US', 'pt_BR', 'es_ES', 'fr_FR'],
    defaultLocale: 'pt_BR',
    localeDetection: true,
  },
}

module.exports = nextConfig
