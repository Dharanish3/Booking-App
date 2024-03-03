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

function MovieEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const [initialValues, setValues] = useState({
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
  });

  const getData = async () => {
    let { _id } = params;
    try {
      const res = await AxiosService.get(
        `${ApiRoutes.MOVIE_GET_ID.path}/${_id}`
      );
      console.log("Movie data:", res.data.movie.movieName);
      if (res.status === 200) {
        setValues({
          movieName: res.data.movie.movieName,
          releaseDate: res.data.movie.releaseDate,
          language: res.data.movie.language,
          type: res.data.movie.type,
          running: res.data.movie.running,
          ratings: res.data.movie.ratings,
          link: res.data.movie.link,
          description: res.data.movie.description,
          images: res.data.movie.images,
          gallery: res.data.movie.gallery,
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
          `${ApiRoutes.MOVIE_EDIT.path}/${_id}`,
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
          navigate("/admin/movieslist");
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
            <li className="breadcrumb-item active">Edit Movie</li>
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
                  name="movieName"
                  placeholder="Movie Title"
                  onChange={formik.handleChange}
                  value={formik.values.movieName}
                />
              </div>
              <div className="col-md-4">
                <label for="release date" className="form-label">
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
                <label for="language" className="form-label">
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
                <label for="type" className="form-label">
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
                <label for="running time" className="form-label">
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
                <label for="link" className="form-label">
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
                  id="formFileLg"
                  type="text"
                  name="gallery"
                  onChange={formik.handleChange}
                  value={formik.values.gallery}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="formFileLg" className="form-label">
                  Image
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
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
                <label for="rating" className="form-label">
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
                <label for="description">Description</label>
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

export default MovieEdit;
