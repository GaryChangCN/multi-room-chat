const webpack = require('webpack');
const path = require('path');

let plugins = [];
let entry = "./src/index.jsx";
if (process.env.NODE_ENV == "production") {
    plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack
            .optimize
            .UglifyJsPlugin()
    ];
    entry = ["babel-polyfill", "./src/main.tsx"];
}
module.exports = {
    entry,
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test: /\.less$/,
            use: [
                "style-loader", "css-loader", "less-loader"
            ]
        }]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        port: 9900,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
	plugins
}