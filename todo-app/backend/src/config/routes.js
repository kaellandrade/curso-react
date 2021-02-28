const express = require('express')
module.exports = function (server){
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoServer = require('../api/todo/todoServece')
    todoServer.register(router, '/todos')
}