const webpack = require("webpack");

//exportar o objeto que representa toda configuração do webpack
module.exports = {
  mode: "production", // development
  //entre na pasta entrada aonde esta o arquivo
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    //pathname aponta para o diretorio raiz.
    path: __dirname + "/public"
  },

  module: {
    //
    rules: [{

    }]
  }
};

//comando para testar o console no terminal
//npm start && node dist/main.js
