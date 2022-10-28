const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path')
const webpack = require('webpack')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, '../src/app');
const dirStyles = path.join(__dirname, '../src/styles');

module.exports = {
    entry: [path.join(dirApp, 'index.js'), path.join(dirStyles, 'index.scss')],

    /* resolve: {
        modules: [dirApp, dirStyles],
      }, */
    
    plugins:
    [
        new CleanWebpackPlugin(),

        new webpack.DefinePlugin({
            IS_DEVELOPMENT,
        }),

        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, '../static') 
                }
            ]
        }),

        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            //SCSS
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader, 
                    },
                    
                    {
                        loader: "css-loader",
                    },

                    {
                        loader: 'postcss-loader',
                    },

                    {
                        loader: "sass-loader",
                    }
                ],
              },

            // Images
            {
                test: /\.(png|jpg|gif|jpe?g|svg|woff2?|fnt|webp|mp4)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[name][ext]'
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
