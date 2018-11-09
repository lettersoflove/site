var path = require('path');

module.exports = {
  mode: "production",
  entry: "./assets/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, "./source/javascripts/"),
    filename: "application.js"
    // publicPath: "/assets/"
  },
  // module: {
  //        rules: [
  //            {
  //                test: /\.js$/,
  //                loader: 'babel-loader',
  //                query: {
  //                    presets: ['es2015']
  //                }
  //            }
  //        ]
  //       }
}

 /* module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        issuer: { test, include, exclude },
        enforce: "pre",
        enforce: "post",
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      },
      {
        test: /\.html$/,
        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            }
          }
        ]
      }
    ],
  },

  plugins: [
    // ...
  ]
  */
