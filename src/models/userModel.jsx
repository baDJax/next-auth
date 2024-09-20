import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: [true, "Please enter a unique username"],
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiration: Date,
  verifyToken: String,
  verifyTokenExpiration: Date,
});

export const User = mongoose.model.users || mongoose.model("users", userSchema);
