const PanelService = require('../services/panelService')

const createParameter = async (req, rest) => {
	try {
		const newParam = await PanelService.createParameter(req.body)
		rest.status(201).json(newParam)
	} catch (error) {
		console.error(`Error creating parameter`, error)
		rest.status(500).json({ error: 'Failed to create parameter' })
	}
}

const getAllParameters = async (req, res) => {
	try {
		const parameters = await PanelService.getAllParameters()
		res.status(200).json(parameters)
	} catch (error) {
		console.error(`Error fetching parameters`, error)
		res.status(500).json({ error: 'Failed to retrieve parameters' })
	}
}

const updateParameter = async (req, res) => {
	const { id } = req.params
	try {
		const updatedParam = await PanelService.updateParameter(id, req.body)
		res.status(200).json(updatedParam)
	} catch (error) {
		res.status(500).json({ error: 'Failed to update parameter' })
	}
}

const deleteParameter = async (req, res) => {
	const { id } = req.params
	try {
		const deletedParam = await PanelService.deleteParameter(id)
		res.status(200).json(deletedParam)
	} catch (error) {
		console.error(`Error deleting parameter with id ${id}:`, error)
		res.status(500).json({ error: 'Failed to delete parameter' })
	}
}

module.exports = {
	createParameter,
	getAllParameters,
	updateParameter,
	deleteParameter
}
