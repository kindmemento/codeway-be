const ParameterModel = require('../models/parameterModel')

const getMobileConfiguration = async () => {
	const snapshot = await ParameterModel.get()
	const config = {}
	snapshot.forEach(doc => config[doc.data().key] = doc.data().value)
	return config
}

module.exports = { getMobileConfiguration }
