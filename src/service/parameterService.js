const db = require('../config/firestore')

const getParameters = async () => {
	const snapshot = await db.collection('parameters').get()
	return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

module.exports = {
	getParameters
}
