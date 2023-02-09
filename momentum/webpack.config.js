'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/dist/js'
        // path: path.resolve(__dirname + 'src/dist/js')
    },
    watch: true,

    devtool: "source-map",

    module: {}
};
