const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const webpack = require("webpack");
const path = require("path");

const liveReloadOptions = {
  appendScriptTag: true,
};
const PATHS = {
  src: path.resolve(__dirname, "./src"),
  dist: path.join(__dirname, "./dist")
}

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".svg"],
    alias: {
      jquery: require.resolve("jquery"),
      "~logo": path.resolve("./src/components/logo-icon/icon") 
    },
  },
  plugins: [
    new LiveReloadPlugin(liveReloadOptions),
    new HtmlWebpackPlugin({
      template: "./src/main-layout.pug",
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        include: [`${PATHS.src}/components`],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'img',
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
    ],
  },
};
