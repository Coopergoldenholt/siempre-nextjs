const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withOffline = require("next-offline");

const nextConfig = {
    target: "serverless",
    workboxOpts: {
      swDest: "static/service-worker.js",
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "networkFirst",
          options: {
            cacheName: "https-calls",
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  };

module.exports = withPlugins(
    [
        [
            withOptimizedImages,
            {
                mozjpeg: {
                    quality: 90,
                },
                webp: {
                    preset: 'default',
                    quality: 90,
                },
            },
        ],
        withFonts,
        withCSS
    ],
    withOffline(nextConfig)
);

