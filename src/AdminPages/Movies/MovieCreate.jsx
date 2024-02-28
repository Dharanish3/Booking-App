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

function MovieCreate() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      movieName: "",
      releaseDate: "",
      language: "",
      type: "",
      running: "",
      ratings: "",
      link: "",
      description: "",
      images: "",
      gallery: "",
    },

    onSubmit: async (values) => {
      try {
        let formData = new FormData();
        for (let key in values) {
          formData.append(key, values[key]);
        }
        let res = await AxiosService.post(
          `${ApiRoutes.MOVIE_CREATE.path}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.status === 200) {
          toast.success("Movie Created Successfully", {
            position: "top-center",

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/admin/movieslist");
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
            <li className="breadcrumb-item active">Add Movie</li>
          </ol>
          <div className="border p-4">
            <form
              className="row g-3 needs-validation"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="movie name" className="form-label">
                  Movie Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="language"
                  name="movieName"
                  placeholder="Movie Title"
                  onChange={formik.handleChange}
                  value={formik.values.movieName}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="release date" className="form-label">
                  Release Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="releaseDate"
                  onChange={formik.handleChange}
                  value={formik.values.releaseDate}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="language" className="form-label">
                  Language
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="language"
                  name="language"
                  placeholder="Language"
                  onChange={formik.handleChange}
                  value={formik.values.language}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  placeholder="Type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="running time" className="form-label">
                  Running Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="running time"
                  name="running"
                  placeholder="Time"
                  onChange={formik.handleChange}
                  value={formik.values.running}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="link" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="link"
                  placeholder="Link"
                  onChange={formik.handleChange}
                  value={formik.values.link}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="gallery" className="form-label">
                  Banner
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLgGallery"
                  onChange={formik.handleChange}
                  value={formik.values.gallery}
                  type="text"
                  name="gallery"
                  
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="formFileLg" className="form-label">
                  Image
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLgImages"
                  type="file"
                  accept="images/*"
                  name="images"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "images",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="rating" className="form-label">
                  Ratings
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rating"
                  name="ratings"
                  placeholder="Rating"
                  onChange={formik.handleChange}
                  value={formik.values.ratings}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  placeholder="Text Area"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  style={{ height: "100px" }}
                ></textarea>
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

export default MovieCreate;
