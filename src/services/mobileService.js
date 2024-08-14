const { firestore } = require('../config/firebase')

const getMobileConfiguration = async () => {
	const snapshot = await firestore.collection('parameters').get()
	const config = {}
	snapshot.forEach(doc => config[doc.data().key] = doc.data().value)
	return config
}

module.exports = { getMobileConfiguration }
