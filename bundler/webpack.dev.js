const path = require('path')
const { merge } = require('webpack-merge')

const commonConfiguration = require('./webpack.common')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'development',

        devtool: 'inline-source-map',

        devServer: {
            hot: false,
            devMiddleware: {
                writeToDisk: true,
            },
        },

        output:
        {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js',
            clean: true,
        },
        
        stats: 'errors-warnings',
    }
)