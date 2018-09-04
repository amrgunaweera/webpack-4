const path = require("path")

module.exports = {

    // Define entry point
    entry: {
        main: [
            "./src/main.js", // Multiple files will concatinate
        ]
    },
    mode: "development", // development or production

    // Define output point
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/js"
    },
    devServer: {
        contentBase: "dist"
    }
}