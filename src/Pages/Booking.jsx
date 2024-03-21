import React, { useState, useEffect, useContext } from "react";
import "./Booking.css";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { BookContext } from "../Utils/BookingContextComponent";

function Booking() {
  const navigate = useNavigate();
  const { movie } = useContext(BookContext);
  const [selectedTheater, setSelectedTheater] = useState();
  const [selectScreen, setSelectScreen] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [date, setDate] = useState();

  let userId = sessionStorage.getItem("userId");


  let movieId = movie?._id;
 



  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Pad month and day with leading zeros if needed
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    const totalPrice = selectedSeats.length * (100 || 0);
    setTotalAmount(totalPrice);
  }, [selectedSeats]);

  useEffect(() => {
    const totalNumber = selectedSeats.length;
    setTotalTickets(totalNumber);
  }, [selectedSeats]);
  
  const handleTheaterChange = (e) => {
    setSelectedTheater(e.target.value);
    console.log(e.target.value);
    setSelectScreen("");
  };
  const handleChangeScreen = (e) => {
    setSelectScreen(e.target.value);
    console.log(e.target.value);
    setSelectedTime("");
  };
  const handleChangeTime = (e) => {
    setSelectedTime(e.target.value);
    console.log(e.target.value);
  };
  const toggleSeatSelection = (seatIndex) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatIndex)
        ? prevSeats.filter((seat) => seat !== seatIndex)
        : [...prevSeats, seatIndex]
    );
    
  };

  //   Booking Form

  const handleBooking = async () => {
    try {
      const res = await AxiosService.post("/booking", {
        movieId,
        theater: selectedTheater,
        time: selectedTime,
        status: "confirmed",
        numTickets: totalTickets,
        totalPrice: totalAmount,

        screen: selectScreen,
        date,
        seatNumber: selectedSeats,
        user: userId,
      });

      if (res.status === 201) {
        toast.success("Booked Successfully", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error("Failed to book tickets. Please try again later.");
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        toast.error("Failed to connect to the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <Layout>
        <div className="container row">
          {movie && (
            <div className="col-lg-6">
              <Card
                style={{ width: "55%", height: "50%", cursor: "pointer" }}
                className="m-3  d-flex" // Add the d-flex class here
              >
                <Card.Img
                  variant="top"
                  src={`${ApiRoutes.Image.path}/${movie.images}`}
                />
                <Card.Body className="d-flex flex-column">
                  {" "}
                  {/* Add flex-column to stack elements vertically */}
                  <Card.Title>{movie.movieName}</Card.Title>
                  <Card.Text>{movie.type}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
          <div className="col-lg-6 p-5">
            <div className="flex-container">
              <div>
                <label htmlFor="">Select theater</label>
                <select value={selectedTheater} onChange={handleTheaterChange}>
                  <option value="">Select Theater</option>
                  {movie &&
                    movie.shows.map((show) => (
                      <option key={show.theater} value={show.theater}>
                        {show.theater}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Select Screen</label>
                <select
                  className="screen"
                  value={selectScreen}
                  onChange={handleChangeScreen}
                >
                  <option value="">Select Screen</option>
                  {selectedTheater &&
                    movie &&
                    movie.shows
                      .filter((show) => show.theater === selectedTheater)
                      .map((show) =>
                        show.screen.map((screen, screenIndex) => (
                          <option key={screenIndex} value={screen}>
                            {screen}
                          </option>
                        ))
                      )}
                </select>
              </div>
              <div>
                <label htmlFor="">Select Time</label>
                <select value={selectedTime} onChange={handleChangeTime}>
                  <option value="">Select Time</option>
                  {selectScreen &&
                    movie &&
                    movie.shows
                      .filter(
                        (show) =>
                          show.theater === selectedTheater &&
                          show.screen.includes(selectScreen)
                      )
                      .map((show) =>
                        show.time.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))
                      )}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="">Select Date</label>
              <input
                type="date"
                className="ml-4"
                value={date}
                min={getTodayDate()}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <ul class="showcase">
              <li>
                <div class="seat"></div>
                <small>N/A</small>
              </li>

              <li>
                <div class="seat selected"></div>
                <small>Selected</small>
              </li>

              <li>
                <div class="seat occupied"></div>
                <small>Occupied</small>
              </li>
            </ul>
            <div className="screen-seats m-4 ">
              {movie &&
                movie.shows
                  .filter(
                    (show) =>
                      show.theater === selectedTheater &&
                      show.screen.includes(selectScreen)
                  )
                  .map((show) =>
                    show.seats.map((seat, index) => (
                      <div
                        key={index}
                        className={`seat ${seat.booked ? "unavailable" : ""} ${
                          selectedSeats.includes(index) ? "selected" : ""
                        }`}
                        onClick={() => toggleSeatSelection(index)}
                      >
                        <div className="seat-number" disabled={seat===selectedSeats}>{index}</div>
                      </div>
                    ))
                  )}
            </div>

            <p>Total Tickets : {totalTickets}</p>
            <p>Total Price : {totalAmount} </p>
            <button
              type="submit"
              onClick={handleBooking}
              className="btn btn-danger"
              disabled={
                !movieId ||
                !selectedTheater ||
                !selectedTime ||
                !totalTickets ||
                !totalAmount ||
                !selectScreen ||
                !date ||
                !selectedSeats ||
                !userId
              }
            >
              Book Tickets
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Booking;
