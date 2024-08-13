const express = require('express')
const {
	createParameter,
	getAllParameters,
	updateParameter,
	deleteParameter
} = require('../controllers/panelController')
const apiTokenAuth = require('../middleware/apiTokenAuth')
const firebaseAuth = require('../middleware/firebaseAuth')

const router = express.Router()

router.post('/panel/parameters', apiTokenAuth, createParameter)
router.get('/panel/parameters', apiTokenAuth, getAllParameters)
router.put('/panel/parameters/:id', firebaseAuth, updateParameter)
router.delete('/panel/parameters/:id', apiTokenAuth, deleteParameter)

module.exports = router
