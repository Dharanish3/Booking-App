import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <section className="account-section bg_img">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <h2 className="title">Login</h2>
              </div>
              <form className="account-form">
                <div className="form-group">
                  <label for="email2">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    id="email2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="pass3">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="pass3"
                    required
                  />
                </div>
                <div className="form-group checkgroup">
                  <input
                    type="checkbox"
                    id="bal2"
                    required
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label for="bal2">remember password</label>
                  <Link to="/forgot" className="forget-pass">
                    Forget Password
                  </Link>
                </div>
                <div className="form-group text-center">
                  <input type="submit" value="log in" />
                </div>
              </form>
              <div className="option">
                Don't have an account? <Link to="/signup">sign up now</Link>
              </div>

              {/* <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-google"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
