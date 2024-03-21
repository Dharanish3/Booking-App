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

function TheaterIndex() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  //   Modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  //   Movie Search
  const [theaters, setTheaters] = useState([]);
  const [search, setSearch] = useState([]);

  //   Get Movie
  const getData = async () => {
    try {
      const res = await AxiosService.get("/theater/list");
      if (res.status === 200) {
        setTheaters(res.data.theaters);
        setSearch(res.data.theaters);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Search Function
  const handleChange = (event) => {
    setSearch(
      theaters.filter((val) =>
        val.name.toLowerCase().includes(event.target.value)
      )
    );
  };

  //  Delete Movie
  const deleteTheater = async (id) => {
    try {
      const res = await AxiosService.delete(
        `theater/${id}`
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
            <li className="breadcrumb-item active">All Theater</li>
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
                onClick={() => navigate("/admin/theater-add")}
              >
                {" "}
                Add New Theater <i className="fas fa-plus-circle"></i>{" "}
              </Button>
            </div>
          </div>

          <br />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">S.No</th>
                <th className="text-center">Theater Name</th>
                <th className="text-center">Location</th>

                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0 ? (
                search.map((item, i) => (
                  <>
                    <tr key={i}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center"> {item.name}</td>
                      <td className="text-center">{item.location}</td>

                      <td className="text-center">
                        <Link to={`/admin/theater-edit/${item._id}`}>
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
                          onClick={() => deleteTheater(item._id)}
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

export default TheaterIndex;
