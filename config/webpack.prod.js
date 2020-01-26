const merge = require('webpack-merge');
const main = require('./webpack.electron.main');
const renderer = require('./webpack.electron.renderer')

module.exports = [
    merge(main, { mode: 'production'}),
    merge(renderer,{ mode: 'production'})
];