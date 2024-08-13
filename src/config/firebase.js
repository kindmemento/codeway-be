const admin = require('firebase-admin')
const dotenv = require('dotenv')
dotenv.config()
const serviceAccount = require('../../firebaseServiceAccountKey.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseUrl: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
})

// @TODO: Fix the issue with env variables
// admin.initializeApp({
// 	credential: admin.credential.cert({
// 		projectId: process.env.FIREBASE_PROJECT_ID,
// 		privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
// 		clientEmail: process.env.FIREBASE_CLIENT_EMAIL
// 	}),
// 	databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
// })

const firestore = admin.firestore()

module.exports = { admin, firestore }
