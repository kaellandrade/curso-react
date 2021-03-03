const express = require('express')

module.exports = function (server) {
    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Cliclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleServece')
    BillingCycle.register(router, '/billingCycles')

}