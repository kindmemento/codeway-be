# NeuralBase - Parameters Management API

### Overview
This is the backend project for a Parameters Management API, built with Node.js and Express.
The API serves the frontend panel and handles all parameter management operations, including authentication and data storage using Firestore.

### Feature
	- RESTful API: Provides endpoints for managing application parameters.
	- Authentication: Firebase Admin SDK for authenticating requests.
	- Data Storage: Uses Firebase for storing and retrieving parameters.

### Prerequisites
	- Node.js: Ensure you have Node.js installed. Recommended version: v20.16.0
	- npm: Node package manager. Recommended version: v10.8.1
	- Firebase Project: Set up a Firebase project with Firestore and Firebase Authentication, or use an existing one.

### Environment Variables
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id
API_TOKEN=your_predefined_api_token

### Installation
1. Clone the repository
git clone

2. Install dependencies
npm install

3. Run the development server
npm run start

4. Build for production
npm run build


### API Endpoints
#### Parameters
- Get All Parameters: GET /api/panel/parameters (Requires API token)
- Add Parameters: POST /api/panel/parameters (Requires API token)
- Update Parameter: PUT /api/panel/parameters/:id (Requires Firebase ID token)
- Delete Parameter: DELETE /api/panel/parameters (Requires API token)

### Deployment
1. Set up environment variables: Ensure your .env file is correctly set up with your Firebase credentials and API token.
2. Deploy to a server: You can deploy the backend to a cloud server like Heroku, AWS, or Google Cloud

#### Example .env File
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id
API_TOKEN=your_predefined_api_token

### Usage
	- Start the server: Run `npm run start` to start the server
	- API Requests: Use the API endpoints to manage parameters, either from the frontend or through API clients like Postman.
