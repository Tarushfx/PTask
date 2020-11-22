import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  members: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  description: String,
});
module.exports = {
  TeamSchema,
};
