const express = require('express')
const app = express()
const panelRoutes = require('./routes/panelRoutes')
const mobileRoutes = require('./routes/mobileRoutes')

app.use(express.json())
app.use('/api', panelRoutes)
app.use('/api', mobileRoutes)

module.exports = app