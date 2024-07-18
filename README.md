# Node.js RESTful API and React Web Application

This project combines a Node.js backend implementing a simple RESTful API and a React frontend that interacts with the API. Both components are containerized using Docker for easy deployment and management.

## Backend (Node.js RESTful API)

The backend provides CRUD operations for managing users using Node.js and Express.js. It follows RESTful principles, includes error handling, input validation, and is Dockerized for easy setup and scalability.

### API Endpoints

- **GET /api/users:** Retrieve a list of users.
- **POST /api/users:** Create a new user.
- **GET /api/users/:id:** Retrieve a specific user by ID.
- **PUT /api/users/:id:** Update an existing user by ID.
- **DELETE /api/users/:id:** Delete a user by ID.

### Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **Docker:** Containerization platform for packaging the application.

## Frontend (React Web Application)

The frontend is a React application that consumes the Node.js API endpoints to display and manage user data. It utilizes Tailwind CSS for styling and is Dockerized for seamless integration with the backend.

### Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling the application.



### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/snwlprdgthb/modex_API
   cd modex_API

2. **Clone the repository:**

   ```bash
   docker-compose up --build


### Environment Variables (.env files)

This project requires the use of `.env` files for both the frontend and backend components.

#### Backend (.env)

Create a `.env` file in the root directory of the backend with the following variables:

- **MONGO_URI:** MongoDB connection string for database connection.
- **NODE_ENV:** Environment mode (e.g., development, production).

#### Frontend (.env)

Create a `.env` file in the `client` directory of the frontend with the following variable:

- **REACT_APP_FRONTEND_URI:** URL of the frontend application.

**REACT_APP_FRONTEND_URI=http://localhost:5444**
