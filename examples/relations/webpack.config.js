module.exports = {
    context: __dirname,
    entry: "./example.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}