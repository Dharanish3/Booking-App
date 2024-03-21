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

function ShowIndex() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  //   Modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  //   Movie Search
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState([]);

  //   Get Movie
  const getData = async () => {
    try {
      const res = await AxiosService.get('show/list');
      console.log(res)
      if (res.status === 200) {
        setShows(res.data.shows);
        setSearch(res.data.shows);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Search Function
  const handleChange = (event) => {
    setSearch(
      movie.filter((val) =>
        val.movieName.toLowerCase().includes(event.target.value)
      )
    );
  };

  //  Delete Movie
  const deleteShow = async (id) => {
    try {
      const res = await AxiosService.delete(
        `/show/${id}`
      );
      if (res.status === 200) {
        toast.success("Show Deleted Successfully", {
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
            <li className="breadcrumb-item active">Shows</li>
          </ol>
          <div className="row">
            <div className="col">
              <div className="input-group input-group-sm p-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Search
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  placeholder="search movie"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col">
              <Button
                variant="success"
                onClick={() => navigate("/admin/show-add")}
              >
                {" "}
                Add New Shows <i className="fas fa-plus-circle"></i>{" "}
              </Button>
            </div>
          </div>

          <br />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">S.No</th>
                <th className="text-center">Movie</th>
                <th className="text-center">Theatre</th>
                <th className="text-center">price</th>
                <th className="text-center">screen</th>
               
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0 ? (
                search.map((item, i) => (
                  <>
                    <tr key={i}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center"> {item.movieId.movieName}</td>
                      <td className="text-center">{item.theater}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">{item.screen.join(',')}</td>
                      
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
                          onClick={() => deleteShow(item._id)}
                        >
                          yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan={7}>
                    No data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Sidebar>
    </>
  );
}

export default ShowIndex;
