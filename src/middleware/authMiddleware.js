const { admin } = require('../config/firebase')

const authMiddleware = async (req, res, next) => {
	const idToken = req.headers.authorization?.split(' ')[1]
	if (!idToken) return res.status(401).json({ message: 'Unauthorized' })

	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken)
		req.user = decodedToken
		next()
	} catch (error) {
		res.status(401).json({ message: 'Invalid or expired token' })
	}
}

module.exports = authMiddleware
