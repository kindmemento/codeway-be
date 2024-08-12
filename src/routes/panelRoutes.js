const express = require('express')
const {
	createParameter,
	getAllParameters,
	updateParameter,
	deleteParameter
} = require('../controllers/panelController')

const router = express.Router()

router.post('/panel/parameters', createParameter)
router.get('/panel/parameters', getAllParameters)
router.put('/panel/parameters/:id', updateParameter)
router.post('/panel/parameters/:id', deleteParameter)

module.exports = router
