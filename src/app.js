const express = require('express')
const app = express()
const parmaeterRoutes = require('./route/parameterRoutes')

app.use(express.json())
app.use('/parameters', parmaeterRoutes)

module.exports = app