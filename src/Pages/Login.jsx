import React, { useState } from "react";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
        sessionStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        toast.error(error.response.data.message || error.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-1">
              <h2 className="heading-section">Login</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <label htmlFor="Email Address">Email</label>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      className="form-control rounded-left"
                      required
                    />
                  </div>
                  <label htmlFor="Email Address">Password</label>
                  <div className="form-group d-flex">
                  
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control rounded-left"
                      required
                    />
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">
                        Remember Me
                        <input type="checkbox"  checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-danger rounded submit p-3 px-5"
                    >
                      Login
                    </button>
                  </div>
                </form>
                
              </div>
              <div className="text-center p-5">
                Don't have an account? <Link to="/signup">sign up now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;
