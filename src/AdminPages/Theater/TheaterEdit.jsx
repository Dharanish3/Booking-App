import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import AxiosService from "../../Routes/AxiosService";
import ApiRoutes from "../../Routes/AxiosRoutes";

function TheaterEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const [initialValues, setValues] = useState({
    name:'',
    location:''
  });

  const getData = async () => {
    let { _id } = params;
    try {
      const res = await AxiosService.get(
        `/theater/${_id}`
      );
    
      if (res.status === 200) {
        setValues({
          name: res.data.theater.name,
          location: res.data.theater.location,
    
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,

    enableReinitialize: true,
    onSubmit: async (values) => {
      let { _id } = params;
      values._id = _id;
      try {
        let res = await AxiosService.put(
          `/theater/${_id}`,
          values
        );
        if (res.status === 200) {
          toast.success("Movie Edited Successfully", {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <Sidebar>
        <div className="container-fluid px-4">
          <h2 className="mt-4">Movies</h2>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <Link
                to="/admin/dashboard"
                className="text-black text-decoration-none"
              >
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active">Edit Theater</li>
          </ol>
          <div className="border p-4">
            <form
              className="row g-3 needs-validation"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <label for="movie name" className="form-label">
                  Movie Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="language"
                  name="name"
                  placeholder="Movie Title"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              
              <div className="col-md-4">
                <label for="language" className="form-label">
                  Language
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

export default TheaterEdit;
