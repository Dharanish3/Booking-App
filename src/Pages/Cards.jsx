import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";

function Cards({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ width: "25%", height: "50%", cursor: "pointer" }}
        className="m-3"
        onClick={() => navigate(`/movie/${movie.movieName}`)}
      >
        <Card.Img variant="top" src={movie.images[0].image} />
        <Card.Body>
          <Card.Title>{movie.movieName}</Card.Title>
          <Card.Text>{movie.type}</Card.Text>
        </Card.Body>
      </Card>

      {/*  */}
    </>
  );
}

export default Cards;
