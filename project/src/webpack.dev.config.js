const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9001
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react'],
                        plugins: [ 'transform-class-properties', '@babel/plugin-syntax-dynamic-import' ] //
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    //'style-loader', 'css-loader', 'sass-loader'
                    'handlebars-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Hello world',
            template: 'src/templates/index.hbs',
            description: 'Some description'
        })
    ]
}