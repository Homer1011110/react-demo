const path = require('path')
const fsPromise = require('fs').promises
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const projectRoot = path.resolve(__dirname, '../')

const config = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(projectRoot, 'static/js'),
        publicPath: '/js/',
    },
});

fsPromise.writeFile('webpack.output.json', JSON.stringify(config, null, 4))

module.exports = config