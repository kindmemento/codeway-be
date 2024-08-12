const { db } = require('../config/firebase')
const ParameterModel = db.collection('parameters')

module.exports = ParameterModel