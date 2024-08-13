const express = require('express')
const cors = require('cors')
const app = express()
const panelRoutes = require('./routes/panelRoutes')
const mobileRoutes = require('./routes/mobileRoutes')

const FRONTEND_URL = process.env.FRONTEND_PANEL_URL

const corsOptions = {
	origin: FRONTEND_URL,
	methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
	allowedHeaders: 'Content-Type, Authorization',
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', panelRoutes)
app.use('/api', mobileRoutes)

module.exports = app
