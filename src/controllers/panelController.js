const PanelService = require('../services/panelService')

const createParameter = async (req, rest) => {
	try {
		const newParam = await PanelService.createParameter(req.body)
		rest.status(201).json(newParam)
	} catch (error) {
		rest.status(500).json({ error: 'Failed to create parameter' })
	}
}

const getAllParameters = async (req, res) => {
	try {
		const parameters = await PanelService.getAllParameters()
		res.status(200).json(parameters)
	} catch (error) {
		res.status(500).json({ error: 'Failed to retrieve parameters' })
	}
}
