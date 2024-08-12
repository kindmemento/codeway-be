const { admin } = require('../config/firebase')

const firebaseAuth = async (req, res, next) => {
	const idToken = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null

	if (!idToken) return res.status(401).json({ message: 'Unauthorized: No ID token provided' })

	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken)
		req.user = decodedToken
		next()
	} catch (error) {
		res.status(401).json({ message: 'Unauthorized: Invalid or expired token' })
	}
}

module.exports = firebaseAuth
