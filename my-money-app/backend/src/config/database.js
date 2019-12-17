const mongoose = require("mongoose");
const connUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";

mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";

mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";

console.log(connUrl);

module.exports = mongoose.connect(connUrl, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
});
