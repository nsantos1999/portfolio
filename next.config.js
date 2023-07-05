/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: true,
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
    // pages: {
    //   "/": ["home"], // app/page.tsx
    // },
  },
};

module.exports = nextConfig;
