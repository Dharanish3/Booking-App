import mongoose from "./setup.js";

const showSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Types.ObjectId,
      ref: "movie",
    },
    theater: {
      type: String,
      required: true,
    },
    screen: {
      type: [String],
      required: true,
    },
    time: {
      type: [String], 
      required: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seats: [String],
    bookings: [{ type: mongoose.Types.ObjectId, ref: "booking" }],
  },
  {
    collection: "show",
  }
);

const schema = mongoose.model("show", showSchema);

export default schema;
