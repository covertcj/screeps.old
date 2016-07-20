/* eslint-env node */

module.exports = {
    entry: './webpack.test.bootstrap.js',
    target: 'web',
    output: {
        filename: './dist/test.js',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['src', 'specs', 'node_modules']
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    node: {
        fs: 'empty'
    }
};
