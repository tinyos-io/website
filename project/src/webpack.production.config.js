const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    optimization: {
        splitChunks:{
            chunks: "all",
            minSize:10000,
            automaticNameDelimiter: '_'
        }

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
                    //'style-loader', 'css-loader'
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    //'style-loader', 'css-loader', 'sass-loader'
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        // new UglifyJsPlugin(), // included by default
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        //new CleanWebpackPlugin('dist'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Hello world',
            template: 'src/templates/index.hbs',
            description: 'Some description'
        })
    ]
}