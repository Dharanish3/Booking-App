import mongoose from "./setup.js";

const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: [true, "The field is Required"],
    },
    releaseDate: {
      type: Date,
      get: function (val) {
        return val ? val.toISOString().split("T")[0] : "";
      },
    },

    language: {
      type: String,
      required: [true, "language field is required"],
    },
    type: {
      type: String,
      required: [true, "Password is Required"],
    },
    running: String,
    ratings: String,
    gallery:  String,
    link: String,
    images: String,

    reviews: String,
    category: {
      type: String,
      default: "Latest",
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    cast: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    bookings: [{ type: mongoose.Types.ObjectId, ref: "booking" }],
    shows: [{ type: mongoose.Types.ObjectId, ref: "show" }]
  },
  {
    collection: "movie",
  }
);

const schema = mongoose.model("movie", movieSchema);

export default schema;
