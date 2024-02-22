import React, { useState } from "react";
import { Link } from "react-router-dom";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function AdminLogin() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const res = await AxiosService.post(
        `${ApiRoutes.ADMIN_SIGN_IN.path}`,
        formProps,{
            authenticate: ApiRoutes. ADMIN_SIGN_IN.authenticate,
          }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
     

        if(res.data.role === 'Admin'){
            navigate('/admin/dashboard')
        }else{
            toast.error('Admin Uses only')
        }
        
      
      } else {
        toast.error(error.response.data.message || error.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label for="inputEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      id="inputRememberPassword"
                      type="checkbox"
                      value=""
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <label
                      className="form-check-label"
                      for="inputRememberPassword"
                    >
                      Remember Password
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small" href="password.html">
                      Forgot Password?
                    </a>
                    <button className="btn btn-danger" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              {/* <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
