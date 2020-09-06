const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/, // regex to target all css files
                use: ["style-loader", "css-loader"] //  'style-loader' comes first and followed by 'css-loader'
            }
        ]
    }
};