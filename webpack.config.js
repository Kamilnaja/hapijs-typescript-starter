const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    watch: true,
    externals: [nodeExternals()],
    plugins: [new NodemonPlugin()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
