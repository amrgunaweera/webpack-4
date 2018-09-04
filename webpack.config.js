const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // Define entry point
    entry: {
        main: [
            "./src/scripts/main.js",
            //"./src/scss/styles.scss" // Multiple files will concatinate
        ]
    },
    mode: "development", // development or production(min file)
    // Define output point
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'dist/js')
    },

    module: {
        rules: [
            // Babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },

            // SCSS
            {
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
              }
        ]
    },

    plugins: [
        new ExtractTextPlugin("./dist/css/styles.css"),
    ],

    devServer: {
        contentBase: "dist"
    }
  };