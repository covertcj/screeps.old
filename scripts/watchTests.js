var webpack = require('webpack');
var config = require('../webpack.config');

var tests = require('../webpack.test.config'),
    testsCompiler = webpack(tests);

testsCompiler.watch({}, function (err) {
    if (err) {
        console.log(err);
    }
});
