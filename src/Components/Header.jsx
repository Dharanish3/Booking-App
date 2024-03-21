import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useLogout } from "./useLogout";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userName = sessionStorage.getItem("name");

  const isLoggedIn =
    sessionStorage.getItem("token") && sessionStorage.getItem("role");
  return (
    <>
      <Navbar expand="lg" className="bg-body-dark  custom-navbar ">
        <Container>
          <Navbar.Brand as={Link} to="/" id="color">
            TICKETS 🎟️ BUY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {" "}
              {/* Use mx-auto to center Nav.Link elements */}
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                id="color"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/view-all"
                className={location.pathname === "/view-all" ? "active" : ""}
                id="color"
              >
                Movies
              </Nav.Link>
              {/* Add more Nav.Link elements as needed */}
            </Nav>
          </Navbar.Collapse>
          {isLoggedIn ? (
            
            <NavDropdown title={`Hi,  ${userName}`}  id="nav-dropdown">
              
              <NavDropdown.Item eventKey="4.1" onClick={()=> navigate('/user-profile')}>My Profile</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" onClick={()=> navigate('/yourbooking')}>Your Bookings</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4" onClick={()=> logout()}>Log Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button variant="danger" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
