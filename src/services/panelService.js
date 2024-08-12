const ParameterModel = require('../models/parameterModel')

const createParameter = async (data) => {
	// @TODO: Validate incoming data before sending a request
	const newParam = await ParameterModel.add(data)
	return { id: newParam.id, ...data }
}

const getAllParameters = async () => {
	const snapshot = await ParameterModel.get()
	const params = []
	snapshot.forEach(doc => params.push({ id: doc.id, ...doc.data() }))
	return params
}

const updateParameter = async (id, data) => {
	// @TODO: Validate incoming data before sending a request
	// @TODO: In case of simultaneous requests, process the first one, reject the rest
	await ParameterModel.doc(id).update(data)
	return { id, ...data }
}

const deleteParameter = async (id) => {
	await ParameterModel.doc(id).delete()
	return { id }
}

module.exports = {
	createParameter,
	getAllParameters,
	updateParameter,
	deleteParameter
}
