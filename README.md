# NeuralBase - Parameters Management API

### Overview
This is the backend project for a Parameters Management API, built with Node.js and Express.
The API serves the frontend panel and handles all parameter management operations, including authentication and data storage using Firestore.

### Features
	- RESTful API: Provides endpoints for managing application parameters.
	- Authentication: Firebase Admin SDK for authenticating requests.
	- Data Storage: Uses Firebase for storing and retrieving parameters.

### Prerequisites
	- Node.js: Ensure you have Node.js installed. Recommended version: v20.16.0
	- npm: Node package manager. Recommended version: v10.8.1
	- Firebase Project: Set up a Firebase project with Firestore and Firebase Authentication, or use an existing one.

### Environment Variables
	PORT=3000
	FIREBASE_PROJECT_ID=your_project_id
	FIREBASE_PRIVATE_KEY=your_private_key
	FIREBASE_CLIENT_EMAIL=your_client_email
	API_TOKEN=
	FRONTEND_PANEL_URL=

### IMPORTANT
- You need to setup your own Firebase Project and enter your credentials for `Project ID`, `Private Key`, and `Client Email`
- Since the project uses a `ServiceAccountKey.json` file to initialize Firebase, you can include your own, and omit `FIREBASE_PRIVATE_KEY` entirely.
- **FOR EASE OF USE ONLY**, I've included my own `serviceAccountKey.json` file to speed up setup time.

---

- Use `IikZW3r6JKUYuCz4Q0dnokLlzBjYzo9lK_QsHr33FYI` for API token
- Use `http://localhost:5173` for `FRONTEND_PANEL_URL` for local server, since frontend project runs on port `5173` by default.

### Installation
1. Clone the repository:\
`git clone https://gitlab.com/cortexconfig/NeuralBase.git`

2. Install dependencies:\
`npm install`

3. Run the development server:\
`npm run start`

4. Build for production:\
`npm run build`


### API Endpoints
#### Parameters
- Get All Parameters: GET `/api/panel/parameters` (Requires API token)
- Add Parameters: POST `/api/panel/parameters` (Requires API token)
- Update Parameter: PUT `/api/panel/parameters/:id` (Requires Firebase ID token)
- Delete Parameter: DELETE `/api/panel/parameters/:id` (Requires API token)

### Deployment
1. Set up environment variables: Ensure your .env file is correctly set up with your Firebase credentials and API token.
2. Deploy to a server: You can deploy the backend to a cloud server like Heroku, AWS, or Google Cloud

### Usage
- Run `npm run start` to start the server
- Use the API endpoints to manage parameters, either from the frontend or through an API client such as Postman.
- A ready-to-use Postman collection is provided inside project root in `JSON` format.