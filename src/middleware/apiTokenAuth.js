const API_TOKEN = process.env.API_TOKEN

const apiTokenAuth = (req, res, next) => {
	const authHeader = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null

	if (authHeader !== API_TOKEN) {
		return res.status(403).json({ message: 'Unauthorized: Invalid or missing API token' })
	}

	next()
}

module.exports = apiTokenAuth