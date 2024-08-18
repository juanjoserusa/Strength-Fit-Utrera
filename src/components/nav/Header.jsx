import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navbarToggler = useRef(null);
  const navbarCollapse = useRef(null);

  const handleNavLinkClick = () => {
    // Cierra el menú si está abierto
    if (navbarToggler.current && navbarToggler.current.classList.contains('collapsed') === false) {
      navbarToggler.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-body navbar__nav" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src="https://i.imgur.com/rcywUbz.png" width={"100px"} className="ms-3 mt-3"/>
        </Link>
        <button
          className="navbar-toggler"
          ref={navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" ref={navbarCollapse}>
          <div className="d-lg-flex justify-content-between w-100">
            <ul className="navbar-nav mx-auto text-center navbar_list-text">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"} onClick={handleNavLinkClick}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/tarifas"} onClick={handleNavLinkClick}>
                  Tarifas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/filosofia"} onClick={handleNavLinkClick}>
                  Filosofia
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/galeria"} onClick={handleNavLinkClick}>
                  Galeria
                </Link>
              </li> 
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/instalaciones"} onClick={handleNavLinkClick}>
                  Instalaciones
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/entrenamiento"} onClick={handleNavLinkClick}>
                  Ideas de entrenamientos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/contacto"} onClick={handleNavLinkClick}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
