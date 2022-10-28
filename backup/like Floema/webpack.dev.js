const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(
    commonConfiguration,
    {
        mode: 'development',

        devtool: 'inline-source-map',

        devServer: {
            devMiddleware: {
                writeToDisk: true,
            },
        },

        output:
        {
            path: path.resolve(__dirname, '../dist'),
            filename: 'bundle.js',
            clean: true,
        },

        plugins: [
            new CleanWebpackPlugin(),
        ],
        
        stats: 'errors-warnings',
    }
)