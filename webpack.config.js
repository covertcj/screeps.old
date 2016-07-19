/* eslint-disable */

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/main.js",
        libraryTarget: "commonjs2"
    },

    // devtool: "source-map",

    resolve: {
        extensions: ["", ".js"]
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};