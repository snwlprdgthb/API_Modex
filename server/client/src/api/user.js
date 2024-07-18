import axios from "axios";

export const getAllUsers = async () => {
  const config = {
    headers: {},
  };
  const response = await axios.get(`http://127.0.0.1:5444/api/users`, config);
  return response.data;
};

export const createUser = async (login, email) => {
  const config = {
    headers: {},
  };
  const response = await axios.post(
    `http://127.0.0.1:5444/api/users`,
    { login: login, email: email },
    config
  );
  return response.data;
};

export const getUserByID = async (id) => {
  const config = {
    headers: {},
  };
  const response = await axios.get(
    `http://127.0.0.1:5444/api/users/${id}`,
    config
  );
  return response.data;
};

export const updateUserByID = async (login, email, id) => {
  const config = {
    headers: {},
  };
  const response = await axios.put(
    `http://127.0.0.1:5444/api/users/${id}`,
    { login: login, email: email },
    config
  );
  return response.data;
};

export const deleteUserByID = async (id) => {
  const config = {
    headers: {},
  };
  const response = await axios.delete(
    `http://127.0.0.1:5444/api/users/${id}`,
    config
  );
  return response.data;
};
