/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-us", "pt-br"],
    defaultLocale: "en-us",
    pages: {
      // "*": ["common"],
      "/": ["home"], // app/page.tsx
      // '/checkout': ['checkout'], // app/checkout/page.tsx
    },
  },
};

module.exports = nextConfig;
