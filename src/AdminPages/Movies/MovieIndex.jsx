import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AxiosService from "../../Routes/AxiosService";
import ApiRoutes from "../../Routes/AxiosRoutes";
import { toast } from "react-toastify";

import Modal from "react-bootstrap/Modal";

function MovieIndex() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [movie, setMovie] = useState();

  //   Get Movie
  const getData = async () => {
    try {
      const res = await AxiosService.get(`${ApiRoutes.MOVIE_GET.path}`);
      if (res.status === 200) {
        setMovie(res.data.movie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  Delete Movie
  const deleteMovie = async (id) => {
    try {
      const res = await AxiosService.delete(
        `${ApiRoutes.MOVIE_DELETE.path}/${id}`
      );
      if (res.status === 200) {
        toast.success("Movie Deleted Successfully", {
          position: "top-center",

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        handleCloseModal();
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <li className="breadcrumb-item active">All Movies</li>
          </ol>
          <Button
            variant="success"
            onClick={() => navigate("/admin/movie-create")}
          >
            {" "}
            Add New Movie <i className="fas fa-plus-circle"></i>{" "}
          </Button>
          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">S.No</th>
                <th className="text-center">Movie Name</th>
                <th className="text-center">Language</th>
                <th className="text-center">Release Date</th>
                <th className="text-center">Running Time</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {movie &&
                movie.map((item, i) => (
                  <>
                    <tr key={i}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center"> {item.movieName}</td>
                      <td className="text-center">{item.language}</td>
                      <td className="text-center">{item.releaseDate}</td>
                      <td className="text-center">{item.running}</td>
                      <td className="text-center">
                        {" "}
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            
                          />
                        </Form>
                      </td>
                      <td className="text-center">
                        <Link to={`/admin/movie-edit/${item._id}`}>
                          <i
                            className="fas fa-pencil-square "
                            style={{ color: "blur" }}
                          ></i>
                        </Link>
                        &nbsp;{" "}
                        <Link onClick={handleShowModal}>
                          <i className="fas fa-trash" style={{ color: "red" }}>
                            delete
                          </i>
                        </Link>
                      </td>
                    </tr>
                    <Modal show={showModal} onHide={handleCloseModal}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>Are, You Sure Want to delete?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseModal}>
                          Cancel
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => deleteMovie(item._id)}
                        >
                          yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ))}
            </tbody>
          </Table>
        </div>
      </Sidebar>
    </>
  );
}

export default MovieIndex;
