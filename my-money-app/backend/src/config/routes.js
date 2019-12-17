const express = require("express");
const router = express.Router();

module.exports = function(server) {
  server.use("/api", router);

  // Rotas de Ciclo de Pagamento
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
