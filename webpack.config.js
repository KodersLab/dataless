module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "index.js",
        sourceMapFilename: "index.map"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}