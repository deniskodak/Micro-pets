const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { create } = require('sass-alias')

module.exports = (mode) => ({
    entry: {
        'micro-pets': path.join(__dirname, '../src/index.js'),
        'light-theme': path.join(__dirname, '../src/styles/light-theme.css'),
        'dark-theme': path.join(__dirname, '../src/styles/dark-theme.css'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
    },
    mode,
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
                                        '../src/styles'
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
            '@components': path.resolve(__dirname, '../src/components/'),
            '@pages': path.resolve(__dirname, '../src/Pages'),
            commonTypes: path.resolve(__dirname, '../src/commonTypes'),
            '@context': path.resolve(__dirname, '../src/Context'),
            images: path.resolve(__dirname, '../src/images'),
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            chunkFilename: 'style.[name].css',
        }),
    ],
})
