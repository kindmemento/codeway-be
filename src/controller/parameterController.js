const parameterService = require('../service/parameterService')

const getParameters = async (req, res) => {
	try {
		const parameters = await parameterService.getAllParameters()
		res.json(parameters)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Failed to retrieve parameters' })
	}
}

const updateParameter = async (req, res) => {
	const { id } = req.params
	const data = req.body

	try {
		await parameterService.updateParameter(id, data)
		res.json({ message: 'Parameter updated successfully' })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Failed to update parameter' })
	}
}

module.exports = {
	getParameters,
	updateParameter
}
