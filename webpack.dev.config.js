var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
      'bundle.js': ['whatwg-fetch', './src/main.js', 'webpack-hot-middleware/client']
  },
    // 入口
    entry: {
        main: ['whatwg-fetch', './src/routers', 'webpack-hot-middleware/client']
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: 'http://localhost:3000/dist/'
    },
    // 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            { test: /vux.src.*?js$/, loader: 'babel' }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader?sourceMap", {
                    publicPath: "../dist/"
                }
            )
        }
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],

        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            'vux-components': 'vux/src/components/'
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css", { allChunks: true, resolve: ['modules'] }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
