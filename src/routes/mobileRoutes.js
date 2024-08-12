const express = require('express')
const { getMobileConfiguration } = require('../controllers/mobileContoller')

const router = express.Router()

router.get('/mobile/config', getMobileConfiguration)

module.exports = router
