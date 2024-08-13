const { admin, firestore } = require('../config/firebase')

const createParameter = async data => {
	const now = admin.firestore.Timestamp.now()

	const dataWithTimestamp = {
		...data,
		created: now,
	}

	const newParamRef = await firestore.collection('parameters').add(dataWithTimestamp)

	const newParamDoc = await newParamRef.get()
	const newParamData = newParamDoc.data()

	return {
		id: newParamRef.id,
		...newParamData,
	}
}

const getAllParameters = async () => {
	const snapshot = await firestore.collection('parameters').get()
	const params = []
	snapshot.forEach(doc => params.push({ id: doc.id, ...doc.data() }))
	return params
}

const updateParameter = async (id, data) => {
	const now = admin.firestore.Timestamp.now()
	const paramRef = firestore.collection('parameters').doc(id)

	// Check for conflicts, prevent if any
	const doc = await paramRef.get()
	if (!doc.exists) {
		throw new Error('Parameter not found')
	}

	data.last_updated = now

	await paramRef.update(data)

	const updatedParam = await paramRef.get()
	return { id: updatedParam.id, ...updatedParam.data() }
}

const deleteParameter = async id => {
	await firestore.collection('parameters').doc(id).delete()
	return { success: true }
}

module.exports = {
	createParameter,
	getAllParameters,
	deleteParameter,
	updateParameter,
}
