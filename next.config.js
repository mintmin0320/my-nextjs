/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['search.pstatic.net'],
  },
  i18n: {
    /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    // html 문서를 ko(한국어로)
    locales: ['ko'],
    defaultLocale: 'ko',
  },
}

module.exports = nextConfig
