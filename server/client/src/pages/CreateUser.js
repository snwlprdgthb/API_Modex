import React, { useState } from "react";
import { createUser } from "../api/user";
import { validateEmail } from "../utils/utils";

const CreateUser = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = () => {
    if (!login || !email) {
      setError("Email and Login are required!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    createUser(login, email).then((data) => {
      if (data.code === 400) {
        setError(data.message);
      } else {
        setMessage(data.message);
        setLogin("");
        setEmail("");
        setError("");
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700">Login:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
        </div>

        <button
          onClick={handleCreateUser}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create User
        </button>

        {message && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success: </strong>
            <span className="block sm:inline">{message}</span>
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
