var webpack = require('webpack');
module.exports = {
    'entry': __dirname + '/src/index.js',
    'output': {
        path: __dirname + '/public',
        filename: 'boundle.js',
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
    devServer: {
        contentBase: './public',
        port: '8080',
        histroyApiFallback: true,
        inline: true,
        colors: true
    },
    postcss: [
		require('autoprefixer')
	]
}