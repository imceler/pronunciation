const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'src/js/index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 1234
    },
    module: {
      rules: [
            {
                test: /\.js$/, 
                use: 'babel-loader', 
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
	            use: [
                    'style-loader',
                    {
		            loader: 'css-loader',
		            options: {
		                importLoaders: 1
		             }
	                },      
                    'postcss-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader', 
                }
            }
      ]  
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Pronunciation',
            template: path.resolve(__dirname, 'dist/index.html')
        })
    ]
}