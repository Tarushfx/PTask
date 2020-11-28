import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    default: "anonymous",
  },
  tags: {
    type: [String],
  },
});
export default QuoteSchema;
