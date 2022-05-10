const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        assetModuleFilename: 'images/[hash].[ext]',
        publicPath: './',
        clean: true,
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, './src/components/'),
            '@containers': path.resolve(__dirname, './src/containers/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@icons': path.resolve(__dirname, './src/assets/icons/'),
            '@logos': path.resolve(__dirname, './src/assets/logos/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|gif|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename:  'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][hash].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080,
        compress: true,
        open: true
    }
}