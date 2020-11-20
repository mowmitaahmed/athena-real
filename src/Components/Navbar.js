import React from "react";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="home">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-right">
              <li className="nav-item active">
                <Link
                  className="nav-link mr-3"
                  smooth={true}
                  duration={1000}
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3"
                  smooth={true}
                  duration={1000}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3"
                  smooth={true}
                  duration={1000}
                  to="service"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3"
                  smooth={true}
                  duration={1000}
                  to="achievement"
                >
                  Achievement
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mr-3"
                  smooth={true}
                  duration={1000}
                  to="pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-3" to="team">
                  Our Team
                </Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0 text-right">
              <button className="btn common-btn" type="submit">
                <Link
                  smooth={true}
                  duration={1000} to="contact">
                   Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
