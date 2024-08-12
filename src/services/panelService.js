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
