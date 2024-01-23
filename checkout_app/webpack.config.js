const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'checkoutApp',
            filename: 'remoteEntry.js',
            exposes: {
                './checkout': './src/App.js',
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 9002,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        targets: 'defaults'
                                    }
                                ],
                                '@babel/preset-react',
                            ]
                        }
                    }
                ]
            },
        ]
    }
}
