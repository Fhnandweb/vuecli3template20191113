const webpack = require('webpack')
const path = require('path')
const baseUrl = process.env.VUE_APP_BASEURL
module.exports = {
  publicPath: baseUrl,
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  devServer: {
    // host: 'localhost',
    // port: 8888
    proxy: {
      // 配置代理
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/entry.less')]
    }
  }
}
