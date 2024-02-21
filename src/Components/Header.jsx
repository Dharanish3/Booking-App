import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useLogout } from "./useLogout";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();

  const isLoggedIn = sessionStorage.getItem('token') ;
  return (
    <>
      <Navbar expand="lg" className="bg-body-dark custom-navbar">
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
                to="/login"
                className={location.pathname === "/login" ? "active" : ""}
                id="color"
              >
                Movies
              </Nav.Link>
              {/* Add more Nav.Link elements as needed */}
            </Nav>
          </Navbar.Collapse>
          {isLoggedIn ? (
            <Button variant="danger" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button variant="danger" onClick={() => navigate("/login")}>
              Signup / Login
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
