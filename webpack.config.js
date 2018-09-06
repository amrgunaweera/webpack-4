const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Define entry point
    entry: {
        main: [
            "./src/scripts/main.js",
            //"./src/scss/styles.scss" // Multiple files will concatinate
        ]
    },
    //mode: "development", // development or production(min file)
    // Define output point
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            //html
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
            // Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },

            // SCSS
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
                /* test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) */

                /* use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["../scss/styles.scss"],
                        sourceMap: true
                    }
                }] */
            },

            //CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    devServer: {
        contentBase: "dist"
    }
  };