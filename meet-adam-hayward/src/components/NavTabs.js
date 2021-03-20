import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white " href="/">
          MeetAdamHayward<span style={{color:"orange"}}>.com</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link
                to="/"
                className="nav-link active text-white text-uppercase ml-5"
              >
                Home&nbsp;<i className="fa fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link active text-white text-uppercase ml-5"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/contact"
                className="nav-link active text-white text-uppercase ml-5"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;

