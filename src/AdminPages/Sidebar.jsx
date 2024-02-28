import React from "react";
import { useLogout } from "../Components/useLogout";
import Footer from "../Components/Footer";
import { useNavigate , Link } from "react-router-dom";

function Sidebar({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to="/admin/dashboard" >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </Link>
                <div className="sb-sidenav-menu-heading">Pages</div>
                <Link
                  className="nav-link collapsed"
                 to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-video-camera"></i>
                  </div>
                  Movies
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/admin/movieslist">
                      All Movie
                    </Link>
                    <Link className="nav-link" to="/admin/movie-create">
                     Add Movie
                    </Link>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapsePages"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                 <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="401.html">
                          Slider
                        </a>
                        <a className="nav-link" href="404.html">
                          Footer
                        </a>
                        
                      </nav>
                </div>
               
                
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <Link className="nav-link" to="/">
                <div className="small"></div>
                <i className="fas fa-power-off"></i> &nbsp;
                Logout
              </Link>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
        <main>{children}</main>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
