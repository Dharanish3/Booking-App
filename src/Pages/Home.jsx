import React from "react";
import "./home.css";
import { movieData } from "./Data";
import Layout from "./Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

function Home() {
  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };
  return (
    <>
      <Layout>
        <div className="slider-container">
          <Slider className="bg-black" {...settings}>
            {movieData.map((item, id) => (
              <>
                <div className="row" key={id}>
                  <div className="col-md-4 col-lg-4 d-flex align-items-center">
                    <div className="movie_content p-5">
                      <h3>{item.title}</h3>
                      <div className="description">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8  ">
                    <img src={item.image} className="image-fluid total" />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>

        <MovieCard />
        
      </Layout>
    </>
  );
}

export default Home;
