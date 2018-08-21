const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

//exportar o objeto que representa toda configuração do webpack
module.exports = {
  mode: "development", // production
  //entrada na pasta aonde esta o arquivo principal
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    //pathname aponta para o diretorio raiz.
    path: __dirname + "/public"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader" // interpreta @import, url()...
        ]
      }]
  }
}

//comando para testar o console no terminal
//npm start && node dist/main.js
