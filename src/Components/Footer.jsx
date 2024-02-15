import React from "react";

function Footer() {
    const date = new Date().getFullYear()
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="logo">
              <a href="index-1.html">
                <img src="assets/images/footer/footer-logo.png" alt="footer" />
              </a>
            </div>
            <ul className="social-icons">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#0">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-area">
              <div className="left">
                <p>
                  Copyright © {date}.All Rights Reserved By{" "}
                  <a href="#0">Buy  Tickets  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
