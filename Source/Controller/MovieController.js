import MovieModel from "../Models/movie.js";
import fs from "fs";



// Get Movie
const getMovie = async (req, res) => {
  try {
    const movie = await MovieModel.find();
    res.status(200).send({
      message: "User find Successfully",
      movie,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};



// Create Movie
const createMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findOne({ movieName: req.body.movieName });

    if (!movie) {
      // Include the images field in the req.body object
      req.body.images = req.file.filename;

      const createFilm = await MovieModel.create(req.body);

      res.status(200).send({
        message: "Movie Created Successfully",
        createFilm,
        images: req.body.images, // Include the images in the response if needed
      });
    } else {
      res.status(500).send({
        message: "Movie Already Exists",
        createFilm: null,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};


//  get Movie by Id
const getMovieById = async (req, res) => {
  try {
    const movie = await MovieModel.findOne({ _id: req.params._id }).populate("shows");
    if (movie) {
      res.status(200).send({
        message: "Movie Find Successfully",
        movie,
      });
    } else {
      res.status(500).send({
        message: "Movie Not Find",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};



const getMovieByName = async (req, res) => {
  try {
    const movie = await MovieModel.findOne({ movieName: req.params.movieName });
    if (movie) {
      res.status(200).send({
        message: "Movie Find Successfully",
        movie,
      });
    } else {
      res.status(500).send({
        message: "Movie Not Find",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};



// Edit Movie By Id
const editMovieById = async (req, res) => {
  try {
    const movie = await MovieModel.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    if (movie) {
      res.status(200).send({
        message: "Movie Edit Successfully",
        movie,
      });
    } else {
      res.status(500).send({
        message: "Movie Not Find",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};




// Delete Movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findOneAndDelete({ _id: req.params._id });

    if (movie) {
      res.status(200).send({
        message: "Movie deleted successfully",
        movie,
      });
    } else {
      res.status(404).send({
        message: "Movie not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};




export default {
  getMovie,
  createMovie,
  getMovieById,
  deleteMovie,
  editMovieById,
  getMovieByName,
};
