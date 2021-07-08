const path = require('path')
const resolve = function(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  lintOnSave: 'warning',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions:[".js",".vue",".json",".ts",".tsx"],
      alias:{
        "@":resolve('src'),
        "_a":resolve('src/assets'),
        "_c":resolve('src/components'),
        "_u":resolve('src/utils')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/utils.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}