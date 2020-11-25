import mongoose from "mongoose";
// import user from "./UserSchema";

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
export default { TeamSchema };
