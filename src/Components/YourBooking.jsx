import React, { useContext } from "react";
import "./booking.css";
import Layout from "../Pages/Layout";
import Spinner from "react-bootstrap/Spinner";
import { UserContext } from "../Utils/UserContextComponents";
import ApiRoutes from "../Routes/AxiosRoutes";

function YourBooking() {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <Layout>
        <Spinner animation="border" variant="secondary" />
      </Layout>
    );
  }
  return (
    <>
      <Layout>
        <div className="container mb-5">
          <div className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
              <h1 className="text-black p-4">Your Bookings</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <ul className="list-group shadow">
                {user.bookings.map((booking) => (
                  <>
                    <li className="list-group-item">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h3 className="mt-0 font-weight-bold mb-2">
                            {booking.movieId.movieName} -<span className="font-2">{ new Date(booking.bookingDate).toDateString()}</span>
                          </h3>
                          <h5 className="mt-0 font-weight-bold mb-2">
                            {booking.theater} - {booking.screen}
                          </h5>
                          <h6 className="font-italic text-muted mb-0 small">
                            <b>Seat Number :</b> A-
                            {booking.seatNumber.join(" ,")}
                          </h6>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="font-weight-bold my-2">
                              {" "}
                              <b>Tickets Price :</b> ₹.{booking.totalPrice}
                            </h6>
                            <ul className="list-inline small"></ul>
                          </div>
                        </div>
                        
                        <img
                          src={`${ApiRoutes.Image.path}/${booking.movieId.images}`}
                          alt="Generic placeholder image"
                          width="200"
                          className="image ml-lg-5 order-1 order-lg-2"
                        />
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default YourBooking;
