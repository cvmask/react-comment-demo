const path = require('path')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    //配置别名
    config.resolve.alias = {
        '@': path.resolve(__dirname, 'src')
    };

    return config;
  }