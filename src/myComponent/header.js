import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Props: title (string), searchBar (boolean)
export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-3">
          {/* Display the title */}
          <a className="navbar-brand" to="#">
            {props.title}
          </a>
          {/* Display the home and about links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" aria-current="page" to="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
          </ul>
          {/* Display the toggle button for the navbar */}
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
          {/* Display the search bar if the searchBar prop is true */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {props.searchBar ? (
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                ) : (
                  "no seach bar"
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// Define the propTypes for the Header component
Header.propTypes = {
  title: PropTypes.string,
};