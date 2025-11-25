/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com; frame-src 'self' https://js.stripe.com https://checkout.stripe.com; connect-src 'self' https://api.stripe.com https://checkout.stripe.com https://*.supabase.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'npm:stripe@17.7.0': 'commonjs npm:stripe@17.7.0',
        'npm:@supabase/supabase-js@2.49.1': 'commonjs npm:@supabase/supabase-js@2.49.1',
      });
    }
    config.module.rules.push({
      test: /supabase\/functions\/.*\.ts$/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
