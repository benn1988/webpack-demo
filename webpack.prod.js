const path = require("path");                // A node built-in plugin to generate the path to the files
const common = require("./webpack.common");  // Import the common config
const { merge } = require("webpack-merge");  // Merge webpack configs
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",                    // Optimize for production
    output: {
        filename: '[name].[contentHash].bundle.js', // Adding contentHash to hash an unique filename for each version, based on file content
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()]
});