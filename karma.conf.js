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
            'karma-babel-preprocessor',
            'karma-mocha'
        ],

        preprocessors: {
            '../specs/*.js': [ 'babel' ],
            '../specs/**/*.js': [ 'babel' ],
            './dist/main.js': [ 'webpack' ],
        },
        babelPreprocessor: {
            options: {
                presets: [ 'es2015' ],
                sourceMap: 'inline'
            }
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