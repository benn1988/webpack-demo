const path = require("path");                // A node built-in plugin to generate the path to the files
const common = require("./webpack.common");  // Import the common config
const { merge } = require("webpack-merge"); 

module.exports = merge(common, {
    mode: "development",                    // Optimize for development
    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, "dist")
    }
});