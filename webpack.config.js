// node modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: "file?name=[name].[ext]" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    new MiniCssExtractPlugin({ filename: "[name]-[contenthash:8].css" }),
    new WebpackMd5Hash()
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  }
};
