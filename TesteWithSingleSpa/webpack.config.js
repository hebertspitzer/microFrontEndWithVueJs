const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const  { ModuleFederationPlugin }  =  require ( 'module-federation-plugin' )
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: 'development',
  entry: {
    'single-spa.config': './single-spa.config.js',
  },
  output: {
    publicPath: "http://localhost:8081/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "vuehost",
      filename: "remoteEntry.js",
      remotes: {
        footerAndHeaderFolder: "footerAndHeaderFolder@http://localhost:8080/remoteEntry.js"
      },
      exposes: {}
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    port: 8081,
  },
};
