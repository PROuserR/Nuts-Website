import type { NextConfig } from 'next';

const appHostname = process.env.APP_URL
  ? (() => {
      try {
        return new URL(process.env.APP_URL).hostname;
      } catch {
        return undefined;
      }
    })()
  : undefined;

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    '*.run.app',
    '*.aistudio.google.com',
    ...(appHostname ? [appHostname] : []),
  ],
};

export default nextConfig;
