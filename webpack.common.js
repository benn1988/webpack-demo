// Base webpack config, used for both dev and prod env

const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin"); // Plugin to generate the HTML file for us

module.exports = {
    entry: {  // Entry files of our JS
      main: "./src/index.js", // index.js -> main.js
      vendor: "./src/vendor.js" // vendor.js -> vendor.js
    },
    module: {
        rules: [
            {
              test: /\.html$/,  // regex for html files
              use: ["html-loader"]
            },
            {
              test: /\.(svg|png|jpg|gif)$/, // regex for different image file extensions
              use: {
                loader: "file-loader",
                options: {
                  esModule: false,
                  name: "[name].[hash].[ext]",
                  outputPath: "imgs"
                }
              }
            }
        ]
    }
};