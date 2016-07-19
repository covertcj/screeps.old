/* eslint-env node */

var webpack = require('karma-webpack');

module.exports = function (cfg) {
    cfg.set({
        browsers: [ 'Chrome' ],
        singleRun: false,
        frameworks: [ 'mocha' ],

        files: [ 'specs/*.js', 'specs/**/*.js' ],

        plugins: [ 
            webpack,
            'karma-chrome-launcher',
            'karma-mocha'
        ],

        preprocessors: {
            'specs/*.js': [ 'webpack' ],
            'specs/**/*.js': [ 'webpack' ],
            'src/*.js': [ 'webpack' ],
            'src/**/*.js': [ 'webpack' ]
        },

        reporters: [ 'dots' ],

        webpack: {
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            }
        },

        webpackServer: {
            noInfo: true
        }
    });
};