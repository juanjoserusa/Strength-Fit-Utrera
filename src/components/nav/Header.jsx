import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg border-body navbar__nav" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <div className="d-lg-flex justify-content-between w-100">
            <ul className="navbar-nav mx-auto text-center navbar_list-text">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/tarifas"}>
                  Tarifas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/filosofia"}>
                  Filosofia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/galeria"}>
                  Galeria
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/instalaciones"}>
                  Instalaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/contacto"}>
                  Contacto
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex d-lg-block mt-2 mt-lg-0 justify-content-center" role="search">
              <button className="btn btn-outline-success">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
