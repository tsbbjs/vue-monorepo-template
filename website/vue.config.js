const path = require(`path`);

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
        'vue-router': path.resolve(`./node_modules/vue-router`),
      },
    },
  },
};
