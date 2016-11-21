var webpack = require('webpack');
var path = require('path');
const srcPath = path.join(__dirname, 'src');

module.exports = {
    devtool: "source-map", //Enables debugging on es6 code rather than transpiled es5 in the browser
    entry: [
        "./src/entry.js", //Entry point for the application, first JS file to be run when the bundle is injected.
    ],
    output: { //output object is where the bundle file should go after everything is built
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js', //creates a file called bundle.js (bundles everything in app, css, js, jsx into this file)
        publicPath: '/public/' //where webpack looks for assets-- webpack will automatically create this directory.
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js']
    },
    module: { //Module object is configuration for all loaders
        loaders: [ //Array of loaders-- when you build webpack will run all files that are included in the loaders.
            {
                test: /\.jsx?$/, //Tells webpack how to handle certain file types and inject them into the bundle.
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                loader: 'style!css!sass?outputStyle=expanded'
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loader: 'style!css'
            },
            {
              test: /\.gif$/,
              loader: 'file'
            }
        ]
    }
};
