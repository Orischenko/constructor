/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

module.exports = {
    context: __dirname + "/js",
    entry: __dirname + "/js/app.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },

    watch: true,
    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};