const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        'micro-pets': './src/index.js',
        'light-theme': './src/styles/light-theme.css',
        'dark-theme': './src/styles/dark-theme.css',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:9001/',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        historyApiFallback: {
            index: 'micro-pets.html',
        },
        devMiddleware: {
            index: 'micro-pets.html',
            writeToDisk: true,
        },
    },
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
            chunkFilename: 'style.[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template.hbs',
            minify: false,
            chunks: ['light-theme', 'micro-pets'],
            filename: 'micro-pets.html',
        }),
        new ModuleFederationPlugin({
            name: 'MicroPetsApp',
            filename: 'remoteEntry.js',
            remotes: {
                TicTacToeApp:
                    // start up TicTacToe locally to use this url
                    // 'TicTacToeApp@http://localhost:9000/remoteEntry.js',
                    'TicTacToeApp@https://deniskodak.github.io/tictaktoe/remoteEntry.js',
                HoverBoardApp:
                    // start up HoverBoard locally to use this url
                    // 'HoverBoardApp@http://localhost:9003/remoteEntry.js',
                    'HoverBoardApp@https://deniskodak.github.io/hover-board/remoteEntry.js',
            },
            shared: {
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
