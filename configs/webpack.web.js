const ip = require('ip').address();
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log('server is running! Please open ' + chalk.green('http://' + ip + ':8080/'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = function() {
    const config = {
        entry: {
            app: './src/app.js'
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].[hash:7].web.js',
        },
        resolve: {
            extensions: ['*', '.vue', '.js'],
            alias: {
                'src': path.join(__dirname, './src'),
                'views': path.join(__dirname, './src/views'),
                'services': path.join(__dirname, './src/services'),
                'utils': path.join(__dirname, './src/utils'),
                'constants': path.join(__dirname, './src/constants'),
                'assets': path.join(__dirname, './src/assets'),
            }
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.vue(\?[^?]+)?$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new webpack.BannerPlugin({
                banner: '// { "framework": ' + ('.vue' === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
                raw: true,
                exclude: 'Vue'
            }),
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            })
        ]
    };

    if (!isProd) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: 'web/index.dev.html',
                title: 'Hello Weex',
                isDevServer: true,
                chunksSortMode: 'dependency',
                inject: 'head'
            })
        );

        config.devServer = {
            compress: true,
            host: '0.0.0.0',
            port: '8080',
            historyApiFallback: true,
            public: ip + ':8080',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        };
    } else {
        // 抽取vue文件css
        config.module.rules[0].options = {
            loaders: {
                css: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'vue-style-loader'
                })
            }
        };
        config.plugins.push(
            new ExtractTextPlugin('[name].[hash:7].css'),
            new HtmlWebpackPlugin({
                template: 'web/index.html',
                inject: true,
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        )
    }

    return config;

}