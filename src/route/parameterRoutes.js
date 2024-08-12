const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const apiTokenMiddleware = require('../middleware/apiTokenMiddleware')
const parameterController = require('../controller/parameterController')

router.get('/', apiTokenMiddleware, parameterController.getParameters)
router.put('/:id', authMiddleware, parameterController.updateParameter)

module.exports = router
