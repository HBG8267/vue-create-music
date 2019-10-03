const path = require('path')
function resolve (dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('api', resolve('src/api/index.js'))
  }
}
