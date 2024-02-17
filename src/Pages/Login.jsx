import React, { useState } from "react";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const res = await AxiosService.post(
        `${ApiRoutes.SIGN_IN.path}`,
        formProps
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        sessionStorage.setItem('token',res.data.token)
        navigate('/')
      }
      else{
        toast.error(error.response.data.message || error.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };


  return (
    <>
      <section className="account-section bg_img">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <h2 className="title">Login</h2>
              </div>
              <form className="account-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email2">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    id="email2"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass3">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="pass3"
                    name="password"
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
                  <button className="button-id" type="submit">Log In</button>
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
