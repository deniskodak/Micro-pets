const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')
const { create } = require('sass-alias')

module.exports = {
    entry: {
        'micro-pets': './src/index.js',
        'light-theme': './src/styles/light-theme.css',
        'dark-theme': './src/styles/dark-theme.css',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
        publicPath: 'https://micro-pets.vercel.app/',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(jpg|png)?$/,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
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
                            sassOptions: {
                                importer: create({
                                    '@styles': path.join(
                                        __dirname,
                                        'src/styles'
                                    ),
                                }),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/Pages'),
            commonTypes: path.resolve(__dirname, 'src/commonTypes'),
            '@context': path.resolve(__dirname, 'src/Context'),
            images: path.resolve(__dirname, 'src/images'),
        },
        extensions: [
            '',
            '.ts',
            '.tsx',
            '.js',
            '.css',
            '.module.scss',
            '.json',
            '.svg',
            '.png',
            '.jpg',
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template.hbs',
            chunks: ['light-theme', 'micro-pets'],
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
