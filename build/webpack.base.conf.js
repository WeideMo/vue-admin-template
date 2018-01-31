var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractSass = new ExtractTextPlugin({
//   filename: utils.assetsPath('css/[name].[contenthash].css'),
//     disable: process.env.NODE_ENV === "development"
// });
// const extractCss = new ExtractTextPlugin({
//     filename: "libs.[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });
// console.log(JSON.stringify(vueLoaderConfig));
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    // Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，
    // ES6 中用来传递异步消息的的Promise，而IE低版本的浏览器不支持，需要加babel-polyfill，处理ie中报错，SCRIPT5022: [vuex] vuex requires a Promise polyfill in this browser
    // 只在dist目录下跑有效，npm run dev，无效
    app: ['babel-polyfill', './src/main.js'],
    utils: [
      //需要按一下顺序，否则打包不到(perfect.scrollbar、utils)
      './src/assets/js/libs/utils.js' 
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'), 
          resolve('test'),
          resolve('/node_modules/element-ui/src'),
          resolve('/node_modules/element-ui/packages')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|woff|eot|svg|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
      // ,{
      //   test:   /\.css$/,
      //   use: [{
      //     loader: "style-loader"
      // }, {
      //     loader: "css-loader"
      // },{
      //     loader:"postcss-loader"
      // }]
      // }
      // ,{
      //     test: /\.scss$/,          
      //     use: [{
      //       loader: "style-loader"
      //     },{
      //         loader: "css-loader"
      //     },{
      //       loader:"postcss-loader"
      //     }, {
      //       loader: "sass-loader"
      //   }]
      // }
    ]
  },
  plugins: [
    //  extractCss,
    // extractSass

  ]
}
