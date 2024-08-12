const { db }= require('../config/firebase')

const getAllParameters = async () => {
	const parameters = []
	const snapshot = await db.collection('parameters').get()
	snapshot.forEach(doc => {
		parameters.push({ id: doc.id, ...doc.data() })
	})
	return parameters
}

// @TODO: Test this out
const updateParameters = async (id, data) => {
	await db.collection('parameters').doc(id).set(data, { merge: true })
}

module.exports = {
	getAllParameters,
	updateParameters
}
