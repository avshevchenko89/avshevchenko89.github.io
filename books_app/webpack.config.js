var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/client/app/');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');

var WebpackConfig = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src/client/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolveLoader: {
        root: path.resolve(__dirname, 'node_modules')
    }
};

module.exports = WebpackConfig;