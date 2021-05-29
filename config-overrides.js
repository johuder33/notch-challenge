const { resolve } = require('path');
module.exports = function override(config, env) {
  const resolver = config.resolve;
  if (resolver) {
    resolver.modules.push(resolve('src'));
  }
  // New config, e.g. config.plugins.push...
  return config
}