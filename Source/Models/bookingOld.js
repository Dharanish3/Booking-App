import mongoose from "./setup.js";

const bookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Types.ObjectId,
      ref: "movie",
    },
    screen: {
      type: String,
    },

    date: {
      type: Date,
      get: function (val) {
        return val ? val.toISOString().split("T")[0] : "";
      },
    },
    seatNumber: {
      type: String,
     
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "booking",
  }
);

const schema = mongoose.model("booking", bookingSchema);

export default schema;
