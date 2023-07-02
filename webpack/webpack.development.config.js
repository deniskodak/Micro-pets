const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('../package.json')

module.exports = {
    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:9001/',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        historyApiFallback: {
            index: 'micro-pets.html',
        },
        devMiddleware: {
            index: 'micro-pets.html',
            writeToDisk: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/template.hbs'),
            minify: false,
            chunks: ['light-theme', 'micro-pets'],
            filename: 'micro-pets.html',
        }),
        new ModuleFederationPlugin({
            name: 'MicroPetsApp',
            filename: 'remoteEntry.js',
            remotes: {
                // TicTacToeApp:
                // start up Tic Tac Toe locally to use this url
                // 'TicTacToeApp@http://localhost:9000/remoteEntry.js',
                // 'TicTacToeApp@https://deniskodak.github.io/tictaktoe/remoteEntry.js',
                HoverBoardApp:
                    // start up Hover Board locally to use this url
                    // 'HoverBoardApp@http://localhost:9003/remoteEntry.js',
                    'HoverBoardApp@https://deniskodak.github.io/hover-board/remoteEntry.js',
                ImageFinderApp:
                    // start up Image Finder locally to use this url
                    // 'ImageFinderApp@http://localhost:8002/remoteEntry.js',
                    'ImageFinderApp@https://deniskodak.github.io/js-image-finder/remoteEntry.js',
            },
            shared: {
                ...dependencies,
                react: {
                    requiredVersion: dependencies.react,
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: dependencies['react-dom'],
                },
            },
        }),
    ],
}
