import ShowModel from "../Models/show.js";
import MovieModel from "../Models/movie.js";

// const generateSeatData = (numRows, seatsPerRow) => {
//   const seats = [];
//   const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, numRows); 

//   for (let i = 0; i < numRows; i++) {
//     for (let j = 1; j <= seatsPerRow; j++) {
//       seats.push({ row: rows[i], number: j, booked: false });
//     }
//   }

//   return seats;
// };

// get all shows
const getShows = async (req, res) => {
  try {
    const shows = await ShowModel.find().populate("movieId");
    res.status(200).send({
      message: "Theater find Successfully",
      shows,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};

// create shows
const createShows = async (req, res) => {
  try {
    const { movieId, theater, screen, time, fromDate, toDate, seats,price } =
      req.body;
    const movie = await MovieModel.findById(movieId);
    if (!movie) {
      res.status(500).send({ message: "Movie Not exist" });
    }

   const seat = ["1","2","3",'4',"5","6","7","8","9","10"]
    const show = await ShowModel({
      movieId,
      theater,
      screen,
      time,
      fromDate,
      toDate,
      price,
      seats : seat
    });
    
    movie.shows.push(show);
    await show.save();
    await movie.save();
    res.status(201).send({
      message: "show created Successfully",
      show,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};

// get show by id
const getShowById = async (req, res) => {
  try {
    const show = await ShowModel.find({ _id: req.params._id }).populate('movieId');
    if (show) {
      res.status(200).send({
        message: "Show Find Successfully",
        show,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};

// get show by name
// const getTheaterByName = async (req, res) => {
//   try {
//     const theater = await TheaterModel.findOne({ name: req.params.name });
//     if (theater) {
//       res.status(200).send({
//         message: "Theatre Find Successfully",
//         theater,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Internal Server error",
//       success: false,
//     });
//   }
// };

// edit theatre
const editShow = async (req, res) => {
  try {
    const { movieId, theaterId, screen, time, fromDate, toDate, price } =
      req.body;
    const show = await ShowModel.findOneAndUpdate(
      { _id: req.params._id },
      { movieId, theaterId, screen, time, fromDate, toDate, price },
      { new: true }
    );
    if (!show) {
      res.status(500).send({
        message: "show if exist ",
      });
    } else {
      res.status(200).send({
        message: "show Edit Successfully",
        show,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};

// delete theater
const deleteShow = async (req, res) => {
  try {
    const show = await ShowModel.findOneAndDelete({
      _id: req.params._id,
    });
    const moviIndex = show.movieId;
    const movie = await MovieModel.findById(moviIndex);
    movie.shows.pull(show);

    await movie.save();
    if (show) {
      res.status(200).send({
        message: "Show Deleted Successfully",
        show,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};

export default {
  getShows,
  createShows,
  getShowById,

  editShow,
  deleteShow,
};
