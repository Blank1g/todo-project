const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'prod',
} = process.env;

module.exports = {
    entry: './src/app.ts',
    mode: NODE_ENV,
    target: 'node',
    watch: NODE_ENV === 'dev',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
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
    externals: [ nodeExternals() ],
    plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: ['npm run dev']
        })
    ]
}