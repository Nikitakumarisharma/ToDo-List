import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Props: title (string), searchBar (boolean)
export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid py-3">
          {/* Display the title with bold styling */}
          <div className="navbar-brand title" style={{ fontWeight: 'bold' }}>
            {props.title}
          </div>

          {/* Display the home and about links */}
          <ul className="navbar-nav ms-auto mb-1 mb-lg-2">
            <li className="nav-item">
              <Link to="/" className="nav-link active lg:mx-4 mx-1" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          {/* Login button */}
          <button className="loginHeader">Login</button>
        </div>
      </nav>
    </>
  );
}

// Define the propTypes for the Header component
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
