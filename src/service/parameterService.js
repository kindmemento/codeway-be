const { db } = require('../config/firebase')

const getAllParameters = async () => {
	const snapshot = await db.collection('parameters').get()
	return snapshot.docs.map(doc => doc.data())
}

// @TODO: Test this out
const updateParameter = async (id, data) => {
	await db.collection('parameters').doc(id).set(data, { merge: true })
}

module.exports = {
	getAllParameters,
	updateParameter,
}
