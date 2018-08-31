const path = require("path")

module.exports = {
    entry: {
        main: [
            "./src/main.js", // Multiple files will concatinate
        ]
    },
    mode: "development", // development or production
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
    }
}