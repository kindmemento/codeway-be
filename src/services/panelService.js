const ParameterModel = require('../models/parameterModel')

const createParameter = async (data) => {
	// @TODO: Validate incoming data before sending a request
	const newParam = await ParameterModel.add(data)
	return { id: newParam.id, ...data }
}