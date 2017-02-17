const webpack = require('webpack')
// ExtractTextPlugin foi adicionado no ex.10
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // ExtractTextPlugin foi adicionado no ex.10
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    // O loader de js foi adicionado no ex.6
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                // Preset 'react' adicionado no ex.9
                presets: ['es2015', 'react'],
                // Plugin adicionado no ex.7
                plugins: ['transform-object-rest-spread']
            }
        }, 
        // O loader de css foi adicionado no ex.10
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}