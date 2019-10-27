const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // publicPath: 'http://localhost:1234/',
        publicPath: '/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 1234
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                  loader: 'babel-loader'
            }
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
                    options: {
                        outputPath: 'assets/'
                    }
                },
            }
      ]  
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Pronunciation',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}