const express = require('express')
const app = express()
const panelRoutes = require('./routes/panelRoutes')

app.use(express.json())
app.use('/api', panelRoutes)

module.exports = app