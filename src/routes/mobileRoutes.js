const express = require('express')
const { getMobileConfiguration } = require('../controllers/mobileContoller')
const apiTokenAuth = require('../middleware/apiTokenAuth')

const router = express.Router()

router.get('/mobile/config', apiTokenAuth, getMobileConfiguration)

module.exports = router
