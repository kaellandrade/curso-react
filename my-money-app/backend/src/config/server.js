const PORT = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParse = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParse()) 

server.listen(PORT, function () {
    console.log(`BACKEND is running on port ${PORT}`)
})

module.exports = server