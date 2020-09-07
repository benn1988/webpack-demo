const path = require("path");                // A node built-in plugin to generate the path to the files
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Require html plugin, so that we can later use it

module.exports = {
    entry: "./src/index.js",                // JS file for input
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
            }
        ]
    },
};