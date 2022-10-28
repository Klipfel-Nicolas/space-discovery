const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        'home': path.resolve(__dirname,'../src/home.js'),
        'perseverence': path.resolve(__dirname, '../src/perseverence.js')
    },
    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            filename:'home.html',
            chunks: ['home'],
            title: 'Home',
            template: path.resolve(__dirname, '../src/views/index.html'),
            description: 'Home Page',
            minify: true
        }),
        new HtmlWebpackPlugin({
            filename: 'perseverence.html',
            chunks: ['perseverence'],
            title: 'Perseverence',
            template: path.resolve(__dirname, '../src/views/perseverence.html'),
            description: 'Perseverence Page',
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use:
                [
                    'html-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            //SCSS
            /* {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
              }, */

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                }
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/fonts/[hash][ext]'
                }
            }
        ]
    }
}
