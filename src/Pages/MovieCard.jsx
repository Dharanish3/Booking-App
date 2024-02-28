import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";

import { useNavigate, useLocation } from "react-router-dom";
import Cards from "./Cards";
import Layout from "./Layout";

function MovieCard() {
  const location = useLocation();
  console.log(location);

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
    <>
      {location.pathname === "/view-all" ? (
        <Layout>
          <h3 className="text-center m-4">All Movies</h3>
          <div className="container d-flex justify-content">
            {movie && movie.map((item, id) => <Cards key={id} movie={item} />)}
          </div>
        </Layout>
      ) : (
        <div className="container">
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Latest Releases</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link style={{ textDecoration: "none" }} to="/view-all">
                    View All
                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="d-flex justify-content">
            {movie && movie.map((item, id) => <Cards key={id} movie={item} />)}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
