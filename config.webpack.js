var path = require('path');
module.exports = {
  mode: "production",
  entry: "./assets/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, "./source/javascripts/"),
    filename: "application.js"
    // publicPath: "/assets/"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower-components)\/(?!(swiper|dom7)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
