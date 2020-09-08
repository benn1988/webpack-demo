// Webpack config used for our production env

const path = require("path");                // A node built-in plugin to generate the path to the files
const common = require("./webpack.common");  // Import the common config
const { merge } = require("webpack-merge");  // Plugin to merge multiple webpack configs
const { CleanWebpackPlugin } = require("clean-webpack-plugin");     // Clean dist folder with each time we build
const MiniCssExtractPlugin = require("mini-css-extract-plugin");    // Move the CSS into a separate file instead of injecting styles into DOM
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");  // Plugin for CSS minification
const TerserPlugin = require("terser-webpack-plugin");              // Plugin for JS minification
var HtmlWebpackPlugin = require('html-webpack-plugin');     // Plugin to generate the HTML file for us


module.exports = merge(common, {
    mode: "production", // Optimize for production
    output: {
        filename: '[name].[contentHash].bundle.js', // Adding contentHash to hash an unique filename for each version, based on file content
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$/, // regex to target all css files
            use: [
                MiniCssExtractPlugin.loader, // 3. Move CSS into files
                "css-loader", // 2. Turns css into commonjs
                "sass-loader" // 1. Turns sass into css
            ]
        }]
    }
});