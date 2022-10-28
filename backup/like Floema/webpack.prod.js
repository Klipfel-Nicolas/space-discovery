const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
/* const { CleanWebpackPlugin } = require('clean-webpack-plugin') */

module.exports = merge(
    commonConfiguration,
    {
         output:
        {
            hashFunction: 'xxhash64',
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/static/'
        },

        mode: 'production',
        /* plugins:
        [
            new CleanWebpackPlugin()
        ] */
    }
)
