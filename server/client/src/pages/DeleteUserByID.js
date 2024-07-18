import React, { useState } from "react";
import { deleteUserByID } from "../api/user";
import { validateNumber } from "../utils/utils";

const DeleteUserByID = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDeleteUserById = () => {
    if (!id) {
      setError("ID is required.");
      return;
    }

    try {
      if (validateNumber(id)) {
        setError("");
        deleteUserByID(id).then((data) => {
          if (data.code === 400) {
            setError(data.message);
            setMessage("");
          } else {
            setMessage(data.message);
            setId("");
            setError("");
          }
        });
      } else {
        setError("Please enter only numbers.");
        setMessage("");
      }

      //User deleted successfully.
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
          onClick={handleDeleteUserById}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete User
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

export default DeleteUserByID;
