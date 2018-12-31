const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = options => {
  return {
    mode: 'development',
    entry: [
      "webpack-dev-server/client?http://localhost:3000",
      // "webpack/hot/dev-server",
      "./client/entry.js"
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
    devServer: {
      historyApiFallback: true,
      port: "3000",

      contentBase: "./dist",

      host: "localhost",

      inline: true,

      stats: {
        colors: true
      },

      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
        "Access-Control-Allow-Headers": "X-Requested-With"
      },

      proxy: {
        "/api/**": {
          target: "http://127.0.0.1:5000",
          secure: false,
          changeOrigin: true
          // cookieDomainRewrite: true
        }
      },
      open: true,
      openPage: ""
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
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),
      new HtmlWebPackPlugin({
        // template: 'client/index.html',
        template: "client/views/index.html",
        filename: "./index.html"
      })
      // new CopyWebpackPlugin([
      //   // relative path is from src
      //   { from: './src/img/favicon.ico' }
      // ])
    ]
  };
};
