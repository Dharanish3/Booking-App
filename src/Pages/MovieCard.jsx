import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";

import { useNavigate , useLocation } from "react-router-dom";
import Card from "./Card";

function MovieCard() {
  const location = useLocation()
  console.log(location)

  const [movie, setMovie] = useState();

  const getData = async () => {
    try {
      const res = await AxiosService.get(`${ApiRoutes.MOVIE_GET.path}`);
      if (res.status === 200) {
        setMovie(res.data.movie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="movie-section padding-top padding-bottom bg-two">
      <div className="container">
        <div className="row flex-wrap-reverse justify-content-center">
          <div className="col-lg-12">
            <div className="article-section padding-bottom">
              <div className="section-header-1">
                <h2 className="title">movies</h2>
                {
                  location.pathname === '/view-all' ? '' : <Link className="view-all" to="/view-all">
                  View All
                </Link>
                }
                
              </div>
              <div className="row mb-30-none justify-content-center">
                {movie &&
                  movie.map((item, id) => <Card key={id} movie={item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieCard;
