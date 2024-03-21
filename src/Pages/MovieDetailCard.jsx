import React,{useContext} from "react";
import "./Movie.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ApiRoutes from "../Routes/AxiosRoutes";
import ReactPlayer from "react-player";
import { BsFilePlay } from "react-icons/bs";
import { BookContext } from "../Utils/BookingContextComponent";

function MovieDetailCard({ movie }) {

  return (
    <>
      <header
        className=" py-5"
        style={{
          backgroundImage: `url('${movie.gallery}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="container px-6">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-3 col-xl-7 col-xxl-6">
              <div className="my-3 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  {movie.movieName}
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  {movie.type}
                </p>
                <h5 className="  text-white mb-2">⭐ {movie.ratings}/5</h5>
                {movie.language.split(",").map((lang, index) => (
                  <Button key={index} variant="light" className="me-2 mb-2">
                    {lang.trim()}
                  </Button>
                ))}
                <br />
                <h6 className="  text-white mb-2">
                  {movie.running} &nbsp; { new Date(movie.releaseDate).toDateString()}
                </h6>
                <br />
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <Link
                    className="btn btn-danger btn-lg px-4 me-sm-3"
                    to={movie.link}
                    target="blank"
                  >
                  <i className="fa-solid fa-play"></i> Watch Trailer
                  </Link>
                  <Link
                    className="btn btn-danger btn-lg px-4 me-sm-3"
                    to={`/booking/${movie._id}`}
                  >
                    Book Tickets
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-xxl-6 d-none d-xl-block text-center">
              <div className="image-container" style={{ position: "relative" }}>
                <Link to={movie.link} target="_blank" rel="noopener noreferrer">
                  <BsFilePlay
                    style={{
                      color: "black",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
                <img
                  className="img-fluid rounded-3 mb-5 mb-lg-0"
                  src={`${ApiRoutes.Image.path}/${movie.images}`}
                  style={{ height: "350px", width: "auto" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bolder">About</h2>
              <p className="lead fw-normal text-muted mb-0">
                {movie.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDetailCard;
