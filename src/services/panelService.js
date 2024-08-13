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

// @TODO: Test this with Newman
const updateParameter = async (id, data) => {
	try {
		const updatedData = await firestore.runTransaction(async transaction => {
			const docRef = firestore.collection('parameters').doc(id)
			const doc = await transaction.get(docRef)

			if (!doc.exists) {
				throw new Error('Parameter not found')
			}

			const existingData = doc.data()
			const currentTimestamp = admin.firestore.Timestamp.now()

			// Transaction will fail if a concurrent one is updating the doc
			transaction.update(docRef, {
				...data,
				last_updated: currentTimestamp,
			})

			return {
				id: docRef.id,
				...existingData,
				...data,
				last_updated: currentTimestamp,
			}
		})
		return updatedData
	} catch (error) {
		if (error.code === 'aborted') {
			// 'aborted' error code means transaction failed due to concurrency
			const conflictError = new Error('Conflict detected: This parameter was modified by another user.')
			conflictError.status = 409
			throw conflictError
		} else {
			console.error(`Error updating parameter with id ${id}:`, error)
			throw error // Rethrow original error if it's not a concurrency issue
		}
	}
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
