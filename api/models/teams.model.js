import mongoose from "mongoose";
import UserSchema from "./UserSchema";

const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  members: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserSchema.ObjectId,
      },
    ],
  },
  description: String,
});
