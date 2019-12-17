require("dotenv").config();
require("./config/database");

const server = require("./config/server");
const routes = require("./config/routes");

routes(server);
