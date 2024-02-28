import mongoose from "./setup.js";

const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: [true, "The field is Required"],
    },
    releaseDate: String,

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
    images: [
      {
        image: String,
      },
    ],
    link : String,
    gallery: [
      {
        image: String,
      },
    ],
    reviews: String,
    category: String,
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    cast: [
      {
        actorName: String,
        characterName: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "movie",
  }
);

const schema = mongoose.model("movie", movieSchema);

export default schema;