import React from "react";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Layout>
        <section className="banner-section">
          <div
            className="banner-bg bg_img bg-fixed"
            data-background="assets/images/banner/banner01.jpg"
          ></div>
          <div className="container">
            <div className="banner-content">
              <h1 className="title  cd-headline clip">
                <span className="d-block">book your</span> tickets for
                <span className="color-theme cd-words-wrapper p-0 m-0">
                  <b className="is-visible">Movie</b>
                </span>
              </h1>
              <p>
                Safe, secure, reliable ticketing.Your ticket to live
                entertainment!
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
