/* eslint-env node */

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/main.js',
        libraryTarget: 'commonjs'
    },

    // devtool: 'source-map',

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};