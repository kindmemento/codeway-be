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

// const updateParameter = async (id, data) => {
// 	// @TODO: Validate incoming data before sending a request
// 	// @TODO: In case of simultaneous requests, process the first one, reject the rest
// 	await ParameterModel.doc(id).update(data)
// 	return { id, ...data }
// }

const deleteParameter = async id => {
	await firestore.collection('parameters').doc(id).delete()
	return { success: true }
}

module.exports = {
	createParameter,
	getAllParameters,
	deleteParameter,
	// updateParameter,
}
