const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = (environment) => {
  const { env } = environment;
  const config = require(`./webpack.config.${env}.js`);

  return merge(commonConfig, config);
};
