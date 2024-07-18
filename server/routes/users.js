const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../controllers/users");

router.get("/users", getAllUsers);

router.post("/users", createUser);

router.get("/users/:id", getUserByID);

router.put("/users/:id", updateUserByID);

router.delete("/users/:id", deleteUserByID);

module.exports = router;
