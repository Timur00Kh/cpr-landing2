// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/[[...slug]]' },
      '/policy': { page: '/[[...slug]]' }
    };
  }
});
