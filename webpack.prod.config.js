const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var SCRIPTS_PATH = __dirname + "/server/static/scripts";
var TEMPLATES_PATH = __dirname + "/server/templates";

module.exports = options => {
  return {
    mode: "production",
    bail: true,
    profile: true,
    entry: "./client/entry.js",
    output: {
      path: SCRIPTS_PATH,
      publicPath: "/static/scripts/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|JPG|jpeg|woff|woff2|eot|ttf|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([SCRIPTS_PATH, TEMPLATES_PATH]),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css)$/
      }),
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),
      new HtmlWebPackPlugin({
        template: "client/views/index.html",
        filename: "../../templates/index.html"
      })
      // new CopyWebpackPlugin([
      //   // relative path is from src
      //   { from: './src/img/favicon.ico' }
      // ])
    ]
  };
};
