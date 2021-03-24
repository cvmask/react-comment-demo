module.exports = function override(config, env) {
    //do stuff with the webpack config...
    //配置别名
    config.resolve.alias = {
        '@': resolve('src')
    };
    
    return config;
  }