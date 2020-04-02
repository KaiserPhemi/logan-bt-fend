// node modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// check node environment
const prodMode = process.env.NODE_ENV === "production";

// configurations
module.exports = {
  mode: prodMode ? "production" : "development",
  entry: { app: "./src/index.js" },
  devtool: prodMode ? false : "cheap-source-map",
  output: {
    filename: prodMode ? "[name].[contenthash:8].min.js" : "[name].js",
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
    new MiniCssExtractPlugin({
      filename: prodMode ? "[name].[contenthash:8].css" : "[name].css"
    })
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  }
};
