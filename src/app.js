const express = require('express')
const app = express()
const parameterRoutes = require('./route/parameterRoutes')

app.use(express.json())
app.use('/parameters', parameterRoutes)

module.exports = app