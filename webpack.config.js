var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
  
    module: {
        loaders: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/images/[name].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
