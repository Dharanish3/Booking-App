import React from "react";
import { Link } from "react-router-dom";

function Card({movie}) {

  return (
    <>
      <div className="col-sm-6 col-lg-4" key={movie.id}>
        <div className="movie-grid">
          <div className="movie-thumb c-thumb">
            <a href="#0">
              <img src={movie.images[0].image} alt="movie" />
            </a>
          </div>
          <div className="movie-content bg-one">
            <h5 className="title m-0">
              <Link to={`/movie/${movie.movieName}`}>{movie.movieName}</Link>
            </h5>
            <ul className="movie-rating-percent">
              <li>
                <div className="thumb">
                  <img src="assets/images/movie/tomato.png" alt="movie" />
                </div>
                <span className="content">{movie.ratings}</span>
              </li>
              <li>
                <div className="thumb">
                  <img src="assets/images/movie/cake.png" alt="movie" />
                </div>
                <span className="content">{movie.language}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
