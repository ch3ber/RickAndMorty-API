const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
   },
   mode: 'production',
   resolve: {
      extensions: ['.js', '.jsx'],
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
               { loader: 'html-loader' }
            ]
         },
         {
            test: /\.s[ac]ss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.svg|.png|.jpg|.jpeg$/,
            type: 'asset/resource'
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         template: './public/index.html',
         filename: './index.html',
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src', 'assets/img'),
               to: 'assets/img'
            }
         ]
      }),
      new Dotenv(),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserWebpackPlugin(),
      ]
   }
}
