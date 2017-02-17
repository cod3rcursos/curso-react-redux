const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    // Adicionado no ex.3
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                // O plugin foi adicionado no ex.12
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}