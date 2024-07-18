import React from "react";

const MainPage = () => {
  console.log(process.env);
  return (
    <div className="container mx-auto p-8">
      <header className="text-center py-5 mb-10 bg-gray-800 text-white rounded shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to Our Project</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          About the Project
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This project is designed to demonstrate the integration of a React
          frontend with a Node.js backend. It includes various functionalities
          to manage user data, such as creating, retrieving, updating, and
          deleting users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          API Routes
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The API is built using Node.js and Express. It provides the following
          endpoints to interact with user data:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>
            <strong>GET /api/users</strong>: Retrieve a list of users
          </li>
          <li>
            <strong>POST /api/users</strong>: Create a new user
          </li>
          <li>
            <strong>GET /api/users/:id</strong>: Retrieve a specific user by ID
          </li>
          <li>
            <strong>PUT /api/users/:id</strong>: Update an existing user by ID
          </li>
          <li>
            <strong>DELETE /api/users/:id</strong>: Delete a user by ID
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          About JavaScript
        </h2>
        <p className="text-gray-600 leading-relaxed">
          JavaScript is a versatile and powerful programming language commonly
          used in web development. It allows developers to create dynamic and
          interactive user interfaces. Both the frontend (React) and backend
          (Node.js) of this project leverage the capabilities of JavaScript to
          provide a seamless user experience.
        </p>
      </section>

      <footer className="text-center py-5 mt-10 bg-gray-800 text-white rounded shadow-lg">
        <p>&copy; 2024 Our Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
