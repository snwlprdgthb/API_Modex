import React, { useState } from "react";
import { getUserByID } from "../api/user";
import { validateNumber } from "../utils/utils";

const GetUserByID = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleGetUserById = () => {
    if (!id) {
      setError("ID is required.");
      return;
    }

    try {
      if (validateNumber(id)) {
        getUserByID(id).then((data) => {
          if (data.code === 400) {
            setUser(null);
            setError(data.message);
          } else {
            console.log(data);
            setUser(data);
            setId("");
            setError("");
          }
        });
      } else {
        setError("Please enter only numbers.");
      }
    } catch (err) {
      setError(err.message);
    }

    // const userData = getUserByID(id);
    // if (userData) {
    //   setUser(userData);
    //   setError("");
    // } else {
    //   setUser(null);
    //   setError("User not found.");
    // }
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
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <button
          onClick={handleGetUserById}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get User By ID
        </button>
      </div>

      {user && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Login:</strong> {user.login}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>MongoDB ObjectID:</strong> {user._id}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetUserByID;
