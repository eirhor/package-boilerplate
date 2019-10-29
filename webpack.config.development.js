const path = require('path');
const os = require('os');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    context: process.cwd(),
    entry: {
        index: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: true,
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: 'TypeScript',
            excludeWarnings: false,
        }),

    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts'
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'warning',
        open: true,
        historyApiFallback: true,
        stats: 'errors-only',
    }
};