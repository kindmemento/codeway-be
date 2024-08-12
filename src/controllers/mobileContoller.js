const MobileService = require('../services/mobileService')

const getMobileConfiguration = async (req, res) => {
	try {
		const config = await MobileService.getMobileConfiguration()
		res.status(200).json(config)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Failed to retrieve configuration' })
	}
}

module.exports = { getMobileConfiguration }
