const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'micro-pets.js',
        publicPath: 'https://deniskodak.github.io/Micro-pets/',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/Pages'),
            commonTypes: path.resolve(__dirname, 'src/commonTypes'),
            '@context': path.resolve(__dirname, 'src/Context'),
        },
        extensions: ['', '.ts', '.tsx', '.js', '.css', 'module.scss', '.json'],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template.hbs',
        }),
        new ModuleFederationPlugin({
            name: 'MicroPetsApp',
            filename: 'remoteEntry.js',
            remotes: {
                TicTacToeApp:
                    'TicTacToeApp@https://deniskodak.github.io/tictaktoe/remoteEntry.js',
                HoverBoardApp:
                    'HoverBoardApp@https://deniskodak.github.io/hover-board/remoteEntry.js',
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
