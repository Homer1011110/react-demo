const fsPromise = require('fs').promises
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
});

fsPromise.writeFile('webpack.output.json', JSON.stringify(config, null, 4))

module.exports = config