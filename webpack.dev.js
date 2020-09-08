// Webpack config used for our development env

const path = require("path");                // A node built-in plugin to generate the path to the files
const common = require("./webpack.common");  // Import the common config
const { merge } = require("webpack-merge");  // Plugin to merge multiple webpack configs
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to generate the HTML file for us

module.exports = merge(common, {
    mode: "development",                    // Optimize for development
    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html" // Our hTML template
        })
      ],
    module: {
        rules: [
            {
                test: /\.scss$/, // regex to target all css files
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader",   // 2. Turns css into commonjs
                    "sass-loader"   // 1. Turns sass into css
                ]
            }
        ]
    }
});