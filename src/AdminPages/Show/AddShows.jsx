import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import AxiosService from "../../Routes/AxiosService";
import ApiRoutes from "../../Routes/AxiosRoutes";
import Form from "react-bootstrap/Form";

function AddShows() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      movieId: "",
      theater: "",
      screen: "",
      time: "",
      price: "",
     
      fromDate: "",
      toDate: "",
    },

    onSubmit: async (values) => {
      try {
        let res = await AxiosService.post(
          '/show/list',
           values,
         
         );
         if (res.status === 201) {
           toast.success("Show Created Successfully", {
             position: "top-center",
 
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           });
           navigate("/admin/show-list");
         }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    try {
      const res = await AxiosService.get(`${ApiRoutes.MOVIE_GET.path}`);
      if (res.status === 200) {
        setMovie(res.data.movie);

        console.log(res)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Topbar />
      <Sidebar>
        <div className="container-fluid px-4">
          <h2 className="mt-4">Shows</h2>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <Link
                to="/admin/dashboard"
                className="text-black text-decoration-none"
              >
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active">Add Show</li>
          </ol>
          <div className="border p-4">
            <form
              className="row g-3 needs-validation"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="movie name" className="form-label">
                  Movie Name
                </label>
                <Form.Select aria-label="Default select example"  name="movieId"   onChange={formik.handleChange}
                      value={formik.values.movieId}>
                  <option>Select Movie</option>
                  {movie.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.movieName}
                    </option>
                  ))}
                </Form.Select>
               
              </div>
              <div className="col-md-4">
                <label htmlFor="release date" className="form-label">
                   Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="fromDate"
                  onChange={formik.handleChange}
                  value={formik.values.fromDate}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="release date" className="form-label">
                  To Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="toDate"
                  onChange={formik.handleChange}
                  value={formik.values.toDate}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="theater" className="form-label">
                  Theater
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="theater"
                  name="theater"
                  placeholder="Theater"
                  onChange={formik.handleChange}
                  value={formik.values.theater}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="screen" className="form-label">
                  Screen
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="screen"
                  placeholder="screen"
                  onChange={formik.handleChange}
                  value={formik.values.screen}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="price" className="form-label">
                Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </div>
              
              <div className="col-md-4">
                <label htmlFor="link" className="form-label">
                Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="time"
                  placeholder="Time"
                  onChange={formik.handleChange}
                  value={formik.values.time}
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

export default AddShows;
