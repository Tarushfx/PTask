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
    type: Array,
  },
});
export default QuoteSchema;
