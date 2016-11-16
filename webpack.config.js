var webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    'entry': './src/index.js',
    'output': {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    'module': {
        'loaders': [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /(\.scss|\.css)$/,
                exclude: /node_modules/,
                loader: 'style!css!sass!postcss'//添加对样式表的处理
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ]
}