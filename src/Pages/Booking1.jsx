import React, { useState, useEffect } from "react";
import "./home.css";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Booking() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const { _id } = useParams();

  const getData = async () => {
    try {
      const res = await AxiosService.get(`/user/movie/${_id}`);

      if (res.status === 200) {
        setMovie(res.data.movie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      // You might want to validate movieId and userId here

      const res = await AxiosService.post(`/booking`, {
        ...formProps,
        movieId: movie._id,
        user: sessionStorage.getItem("userId"),
      });

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message || "An error occurred");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Screen </label>
                <select
                  className="form-control form-control-lg"
                  name="screen"
                  required
                >
                  <option value="Screen 1">Screen 1</option>
                  <option value="Screen 2">Screen 2</option>
                  <option value="Screen 3"> Screen 3</option>
                </select>
              </div>
              <div className="form-group">
                <label for="date">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  placeholder="date"
                  required
                />
              </div>
              <div className="form-group">
                <label for="seat">Seat </label>
                <input
                  type="text"
                  name="seatNumber"
                  className="form-control"
                  placeholder="Enter seat"
                  required
                />
              </div>

              <button type="submit" className="btn btn-danger">
                Book Tickets
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Booking;
