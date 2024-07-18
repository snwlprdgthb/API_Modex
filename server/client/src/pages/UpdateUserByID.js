import React, { useState } from "react";
import { updateUserByID } from "../api/user";
import { validateNumber, validateEmail } from "../utils/utils";

const UpdateUserByID = () => {
  const [id, setId] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdateUserById = () => {
    if (!id) {
      setError("ID field are required.");
      setMessage("");
      return;
    }

    if (!validateNumber(id)) {
      setError("Please enter only numbers.");
      setMessage("");
      return;
    }

    if (!login && !email) {
      setError("Login or Email field are required.");
      setMessage("");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    try {
      updateUserByID(login, email, id).then((data) => {
        console.log(data);

        if (data.code === 400) {
          setError(data.message);
          setMessage("");
        } else {
          setMessage(data.message);
          setId("");
          setLogin("");
          setEmail("");
          setError("");
        }
      });
    } catch (err) {
      setMessage("");
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700">ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <button
          onClick={handleUpdateUserById}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update User By ID
        </button>

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

export default UpdateUserByID;
