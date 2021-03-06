const webpackCopy = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: {
        // transportadvapp: './src/index.tsx',
        defaultapp: './src/index.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outputDirectory),
        libraryTarget: 'umd',
        // publicPath: '/transport/',
        publicPath: '/',
    },
    node: {
        fs: 'empty',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new webpackCopy([
            { from: 'node_modules/mpbootstrap/dist' },
            { from: 'importmap.json' },
            { from: 'node_modules/systemjs/dist', to: 'extlib/systemjs' },
            { from: 'node_modules/react/umd', to: 'extlib/react' },
            { from: 'node_modules/react-dom/umd', to: 'extlib/react-dom' },
            { from: 'node_modules/redux/dist', to: 'extlib/redux' },
            { from: 'node_modules/react-redux/dist', to: 'extlib/react-redux' },
            {
                from: 'node_modules/styled-components/dist',
                to: 'extlib/styled-components',
            },
        ]),
        new webpack.ProvidePlugin({
            Promise:
                'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
            fetch:
                'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
        }),
    ],
    devtool: '#source-map',
    // devtool: 'none',
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css'],
    },

    module: {
        rules: [
            { parser: { system: false } },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(jpe?g|gif|svg|png|woff|ttf|eot|wav|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 12000,
                            name(file) {
                                return 'public/[name].[ext]';
                            },
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        redux: 'redux',
        'react-redux': 'react-redux',
        'styled-components': 'styled-components',
    },
};
