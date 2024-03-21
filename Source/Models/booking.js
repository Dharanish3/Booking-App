import mongoose from "./setup.js";

const bookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Types.ObjectId,
      ref: "movie",
      required: true,
    },
    theater: String,
    time: String,
    screen: String,
    numTickets: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["confirmed", "pending", "cancelled"],
      default: "confirmed",
    },

    bookingDate: {
      type: Date,
      default: Date.now,
    },
    date: {
      type: Date,
      get: function (val) {
        return val ? val.toISOString().split("T")[0] : "";
      },
    },
    seatNumber: [String],
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
