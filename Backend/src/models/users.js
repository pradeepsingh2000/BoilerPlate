const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'user'
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


userSchema.plugin(mongoosePaginate);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;