module.exports = {
    entry: "./src/boot/main.ts",
    output: {
        filename: "./dist/main.js",
        libraryTarget: "commonjs2"
    },

    // devtool: "source-map",

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]

        // preLoaders: [
        //     // all output .js files will be re-processed and given source maps
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    }
};