import BookModel from "../Models/booking.js";
import UserModel from "../Models/user.js";
import MovieModel from "../Models/user.js";
import ShowModel from "../Models/show.js";
import mongoose from "mongoose";
import Authnticate from "../Auth/Authnticate.js";
import Emailservice from "../Auth/EmailService.js";
import fs from "fs";

// Create Book
const newBooking = async (req, res, next) => {
  const {
    showId,
    movieId,
    status,
    numTickets,
    totalPrice,
    bookingDate,
    date,
    screen,
    seatNumber,
    user,
  } = req.body;

  // Validate if user ID is provided
  if (!user) {
    return res.status(404).send({ message: "User not found with given ID" });
  }

  let existingMovie;
  let existingUser;
  let existingShow;

  try {
    // Validate if movie ID is provided
    if (!movieId) {
      return res.status(400).send({ message: "Movie ID is required" });
    }

    existingMovie = await MovieModel.findById(movieId);

    // Validate if movie with given ID exists
    if (!existingMovie) {
      return res.status(404).send({ message: "Movie Not Found With Given ID" });
    }

    existingUser = await UserModel.findById(user);

    // Validate if user with given ID exists
    if (!existingUser) {
      return res.status(404).json({ message: "User not found with given ID" });
    }

    existingShow = await ShowModel.findById(showId);

    // Validate if user with given ID exists
    if (!existingShow) {
      return res.status(404).send({ message: "User not found with given ID" });
    }

    // Create a new booking
    const booking = new BookModel({
      movieId,
      showId,
      status,
      numTickets,
      totalPrice,
      bookingDate,
      screen,
      date,
      seatNumber,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();

    existingMovie.bookings.push(booking);
    existingUser.bookings.push(booking);
    existingShow.bookings.push(booking);

    await existingUser.save({ session });
    await existingMovie.save({ session });
    await existingShow.save({ session });

    await booking.save({ session });
    session.commitTransaction();
    // Save the booking to the database

    return res.status(201).send({ message: "Booked Successfully" });
  } catch (err) {
    // Handle any errors that occur during the process
    console.log(err);
    return res.status(500).json({ message: "Unable to create a booking" });
  }
};

export default {
  newBooking,
};
