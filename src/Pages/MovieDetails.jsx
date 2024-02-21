import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { useParams } from "react-router-dom";
import MovieDetailCard from "./MovieDetailCard";

function MovieDetails() {
  const [movie, setMovie] = useState();
  const { movieName } = useParams();
  const getData = async () => {
    try {
      const res = await AxiosService.get(
        `${ApiRoutes.MOVIE_GET_NAME.path}/${movieName}`
      );
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
    <>
      <Layout>{movie && <MovieDetailCard movie={movie} />}</Layout>
    </>
  );
}

export default MovieDetails;
