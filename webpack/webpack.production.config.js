const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('../package.json')

module.exports = {
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'https://micro-pets.vercel.app/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/template.hbs'),
            chunks: ['light-theme', 'micro-pets'],
            filename: 'micro-pets.html',
        }),
        new ModuleFederationPlugin({
            name: 'MicroPetsApp',
            filename: 'remoteEntry.js',
            remotes: {
                TicTacToeApp:
                    'TicTacToeApp@https://deniskodak.github.io/tictaktoe/remoteEntry.js',
                HoverBoardApp:
                    'HoverBoardApp@https://deniskodak.github.io/hover-board/remoteEntry.js',
                ImageFinderApp:
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
