import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import AxiosService from "../../Routes/AxiosService";
import ApiRoutes from "../../Routes/AxiosRoutes";

function TheaterAdd() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name:"",
      location : ''
    },

    onSubmit: async (values) => {
      try {
      
        let res = await AxiosService.post(
         '/theater/list',
          values,
        
        );
        if (res.status === 201) {
          toast.success("Theater Created Successfully", {
            position: "top-center",

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/admin/theater");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Topbar />
      <Sidebar>
        <div className="container-fluid px-4">
          <h2 className="mt-4">Theater</h2>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <Link
                to="/admin/dashboard"
                className="text-black text-decoration-none"
              >
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active">Add Theater</li>
          </ol>
          <div className="border p-4">
            <form
              className="row g-3 needs-validation"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="movie name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="language"
                  name="name"
                  placeholder="Theater Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
       
              <div className="col-md-4">
                <label htmlFor="language" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="language"
                  name="location"
                  placeholder="location"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />
              </div>
            
              <div className="col-12">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default TheaterAdd;
