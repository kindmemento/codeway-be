const apiTokenMiddleware = (req, res, next) => {
	const apiToken = req.headers['cc-api-token']
	if (apiToken !== process.env.API_TOKEN) {
		return res.status(403).json({ message: 'Forbidden' })
	}
	next()
}

module.exports = apiTokenMiddleware