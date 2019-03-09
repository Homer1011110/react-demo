const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        a: '../src/a.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(projectRoot, 'static/js'),
        publicPath: '/js/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                },
                /* commonbiz: {
                    minSize: 1,
                    name: 'commonbiz',
                    chunks: 'all',
                    test: /[\\/]src\/lib[\\/]/,
                    priority: 10,
                }, */
            },
        }
    },
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
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    babelrcRoots: [
                        // Keep the root as a root
                        "../",

                        // Also consider monorepo packages "root" and load their .babelrc files.
                        // "./packages/*"
                    ]
                    /* rootMode: "upward", */
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(projectRoot, 'static'),
        ], { allowExternal: true }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(projectRoot, 'src/tpls/index.tpl')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};