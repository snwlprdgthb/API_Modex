const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  { strict: false }
);

module.exports = User = mongoose.model("users", UserSchema);
