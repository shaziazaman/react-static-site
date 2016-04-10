var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data.js')
module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: './build',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },

    plugins: [
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ]
}