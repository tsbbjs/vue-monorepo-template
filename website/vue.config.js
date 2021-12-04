const path = require(`path`);
const pkg = require('./package.json');

module.exports = {
  productionSourceMap: true,
  publicPath: '/vue-monorepo-template/',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue-monorepo-template, 简单的 vue 3 包开发工程实例模板。',
      description: pkg.description,
      keywordss: pkg.keywords.join(','),
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
        'vue-router': path.resolve(`./node_modules/vue-router`),
      },
    },
  },
  chainWebpack: (conf) => {
    conf.module.rule('text').test(/\.md$/i).use('raw-loader').loader('raw-loader').end();
    conf.optimization.splitChunks({
      chunks: 'all', // async对异步引入的代码分割 initial 对同步引入代码分割 all对同步异步引入的分割都开启
      minSize: 30000, // 字节 引入的文件大于30kb才进行分割
      maxSize: 0, // 文件的最大尺寸，优先级：maxInitialRequest/maxAsyncRequests < maxSize < minSize
      minChunks: 1, // 模块至少使用次数
      maxAsyncRequests: 30, // 同时加载的模块数量最多是_个，只分割出同时引入的前_个文件（按需加载模块）
      maxInitialRequests: 25, // 首页加载的时候引入的文件最多 _ 个（加载初始页面）
      automaticNameDelimiter: '~', // 缓存组和生成文件名称之间的连接符
      name: true, // 缓存组里面的 filename 生效，覆盖默认命名
      cacheGroups: {
        // decodenamedcharacterreference: {
        //   name: 'vendors-decode-named-character-reference',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](decode-named-character-reference)[\\/]/,
        //   priority: -3,
        // },
        // micromarkcorecommonmark: {
        //   name: 'vendors-micromark-core-commonmark',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](micromark-core-commonmark)[\\/]/,
        //   priority: -3,
        // },
        // hastutilselect: {
        //   name: 'vendors-hast-util',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](hast-util-select|hast-util-to-html|hast-util-from-parse5|hast-util-hyperscript)[\\/]/,
        //   priority: -3,
        // },
        // refractor: {
        //   name: 'vendors-refractor',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](refractor)[\\/]/,
        //   priority: -2,
        // },
        // parse5: {
        //   name: 'vendors-parse5',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](parse5)[\\/]/,
        //   priority: -2,
        // },
        // corejs: {
        //   name: 'vendors-core-js',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](core-js)[\\/]/,
        //   priority: -2,
        // },
        // rehypeprism: {
        //   name: 'vendors-rehype-prism',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](\@mapbox[\\/]rehype-prism)[\\/]/,
        //   priority: -2,
        // },
        // vue: {
        //   name: 'vendors-vue',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](vue|@vue)[\\/]/,
        //   priority: -2,
        // },
        // vuerouter: {
        //   name: 'vendors-vue-router',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
        //   priority: -2,
        // },
      },
    });
  },
};
