// node modules
// require("babel-polyfill");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyFiles = require("copy-webpack-plugin");

// check node environment
const prodMode = process.env.NODE_ENV === "production";

// configurations
module.exports = {
  devServer: { historyApiFallback: true },
  mode: prodMode ? "production" : "development",
  entry: { app: "./src/index.js" },
  devtool: prodMode ? false : "cheap-source-map",
  output: {
    filename: prodMode ? "[name].[contenthash:8].min.js" : "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/i,
        loader: "file?name=[path][name].[ext]!extract-loader!html-loader",
        include: path.join(__dirname, "assets"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      hash: true,
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: prodMode ? "[name].[contenthash:8].css" : "[name].css",
    }),
    new CopyFiles([{ from: "./assets", to: "assets" }]),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
