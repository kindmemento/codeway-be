const admin = require('../config/firebase')
const firestore = admin.firestore()

// @TODO: Remove service layer try-catch blocks for simplicity before deployment

const createParameter = async (data) => {
	try {
		const now = admin.firestore.Timestamp.now()

		const dataWithTimestamp = {
			...data,
			created: now
		}

		const newParamRef = await firestore.collection('parameters').add(dataWithTimestamp)

		const newParamDoc = await newParamRef.get()
		const newParamData = newParamDoc.data()

		return {
			id: newParamRef.id,
			...newParamData
		}
	} catch (error) {
		console.error('Error creating parameter:', error)
		throw error
	}
}

const getAllParameters = async () => {
	try {
		const snapshot = await firestore.collection('parameters').get()
		const params = []
		snapshot.forEach(doc => params.push({ id: doc.id, ...doc.data() }))
		return params
	} catch (error) {
		console.error('Error fetching parameters:', error)
		throw error
	}
}

// const updateParameter = async (id, data) => {
// 	// @TODO: Validate incoming data before sending a request
// 	// @TODO: In case of simultaneous requests, process the first one, reject the rest
// 	await ParameterModel.doc(id).update(data)
// 	return { id, ...data }
// }

// const deleteParameter = async (id) => {
// 	await ParameterModel.doc(id).delete()
// 	return { id }
// }

module.exports = {
	createParameter,
	getAllParameters,
	// updateParameter,
	// deleteParameter
}
