const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        a: './src/a.js',
        // b: './src/b.js',
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        chunkFilename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'static/js'),
        publicPath: '/js/',
    },
    /* optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }, */
    optimization: {},
    /* optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }, */
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['static']),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/tpls/index.tpl'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};