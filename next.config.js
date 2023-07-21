/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: true,
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
