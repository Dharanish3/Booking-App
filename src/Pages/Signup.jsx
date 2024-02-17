import React from "react";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const res = await AxiosService.post(
        `${ApiRoutes.SIGN_UP.path}`,
        formProps
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate('/login')
      }
    } catch (error) {
      toast.error("Enter All Field");
    }
  };

  return (
    <>
      <section className="account-section bg_img">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                {/* <span className="cate">welcome</span> */}
                <h2 className="title">Sign Up </h2>
              </div>
              <form className="account-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    name= "name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email1">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    name= "email"
                    id="email1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">
                    Mobile<span>*</span>
                  </label>
                  <input type="text" placeholder="Phone"  name= "phone" id="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pass1">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                   
                    name= "password"
                    required
                  />
                </div>

                {/* <div className="form-group checkgroup">
                            <input type="checkbox" id="bal" required checked/>
                            <label for="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                        </div> */}
                <div className="form-group text-center">
                  <button className="button-id" type="submit">Sign Up</button>
                </div>
              </form>
              <div className="option">
                Already have an account? <Link to="/login">Login</Link>
              </div>

              {/* <ul className="social-icons">
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
                    </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
