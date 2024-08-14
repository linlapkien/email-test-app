import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'email_test_app',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Email': './pages/email.tsx',
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
