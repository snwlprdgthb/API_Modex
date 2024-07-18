import React, { useState } from "react";
import { getAllUsers } from "../api/user";

// // Пример функции, которая возвращает данные пользователей
// const fetchUsers = () => {
//   return [
//     { id: 1, email: "user1@example.com", login: "user1" },
//     { id: 2, email: "user2@example.com", login: "user2" },
//     { id: 3, email: "user3@example.com", login: "user3" },
//     // Добавьте больше пользователей по необходимости
//   ];
// };

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = () => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleGetUsers}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get Users
      </button>

      {users.length > 0 && (
        <table className="min-w-full mt-4 bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Login</th>
              <th className="px-4 py-2 border">Mongo ObjectID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.login}</td>
                <td className="px-4 py-2 border">{user._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetUsers;
