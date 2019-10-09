const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin') 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        // publicPath: 'http://localhost:1234/',
        // publicPath: 'pronunciation',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[hash].[ext]',
	                    outputPath: 'assets'
                    }
                }
            }
      ]  
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Pronunciation',
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
          }),
          new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, 'dist/js/*.js')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/main.*"]
          })
    ]
}