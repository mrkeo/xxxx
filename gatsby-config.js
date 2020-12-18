/* eslint-disable max-len */

require("dotenv").config({
  path: ".env",
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "Pawel Idzikowski",
    siteTitleAlt: "pawel idzikowski",
    siteHeadline: "Pawel Idzikowski",
    siteDescription:
      "Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images from LekoArts used by github.com/trolit",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
  },
  plugins: [
    "@lekoarts/gatsby-theme-emma",
    "gatsby-plugin-mdx-embed",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "content/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        cwd: process.cwd(),
        watch: true,
        initialScan: true,
        onChangeFullScanLint: false,
        onChangeFullScanFormat: false,
        prettierLast: false,
        ignorePatterns: [
          "**/node_modules/**/*",
          "**/.git/**/*",
          "**/dist/**/*",
          ".cache/**/*",
          "public/**/*",
        ], // string or array of paths/files/globs to ignore
        prettier: {
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          printWidth: 100,
        },
        eslint: {
          formatter: "stylish", // set custom or third party formatter
          emitWarning: true, // if true, will emit lint warnings
          failOnError: false,
          failOnWarning: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Emma - @lekoarts/gatsby-theme-emma",
        short_name: "Emma",
        description:
          "Minimalistic bright portfolio with full-width grid and large images",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#b83280",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    shouldAnalyseBundle && {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
