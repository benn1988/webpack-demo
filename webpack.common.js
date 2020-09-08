const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Require html plugin, so that we can later use it

module.exports = {
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    }, 
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })], // plugin to generate the HTML and insert the generated file name into it
    module: {
        rules: [
            {
                test: /\.scss$/, // regex to target all css files
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader",   // 2. Turns css into commonjs
                    "sass-loader"   // 1. Turns sass into css
                ]
            },
            {
              test: /\.html$/,
              use: ["html-loader"]
            },
            {
              test: /\.(svg|png|jpg|gif)$/,
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
    },
};