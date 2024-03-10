import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <NavLink
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <i className="fa fa-car me-3" />
          NG Garage
        </h2>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink
            to="/"
            className="nav-item nav-link"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item nav-link"
            activeclassname="active"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item nav-link"
            activeclassname="active"
          >
            Contact
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink
                to="/booking"
                className="nav-item nav-link"
                activeclassname="active"
              >
                Booking
              </NavLink>
              <NavLink to="/logout" className="nav-item nav-link">
                Logout
              </NavLink>
            </>
          )}

          {!isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className="nav-item nav-link"
                activeclassname="active"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="nav-item nav-link"
                activeclassname="active"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
