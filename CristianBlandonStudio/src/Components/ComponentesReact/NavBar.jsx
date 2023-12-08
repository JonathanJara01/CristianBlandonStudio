
import { NavLink } from "react-router-dom";
import imagenNav from '../Fotos/cBs-removebg-preview.png'
import style from '../Css/NavBar.module.css'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const NavBar = () => {

  
/*   useEffect= (()=>{
setBaseDeDatos
  },[]) */

  useDispatch()

    return (
<div className={style.contenedorNav}>
<nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <div className={style.containerImg}>
      <NavLink to={'/Home'} className="nav-item" >
     <img src={imagenNav} className={style.img} />
      </NavLink>
      </div>
   {/*  <a className="navbar-brand" href="#" >Cristian Blandón Studio</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Cristian Blandón Studio</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <NavLink to={'/Home'} className="nav-item">
            <a className="nav-link" href="#">Acerca De Nosotros</a>
          </NavLink>
          <NavLink to={'/Galeria'} className="nav-item">
            <a className="nav-link" href="#">Galeria</a>
          </NavLink>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestros Servicios
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <NavLink to={'/Peluqueria'}><a className="dropdown-item" href="#">Peluqueria</a></NavLink>
              <NavLink to={'/Novias'}><a className="dropdown-item" href="#">Novias</a></NavLink>
              <NavLink to={'/Barberia'}><a className="dropdown-item" href="#">Barbería</a></NavLink>
            </ul>
          <NavLink to={'/Contacto'} className="nav-item">
            <a className="nav-link" href="#">Contactanos Aquí</a>
          </NavLink>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success" type="submit">Busca Aquí</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</div>
    );
};

export default NavBar;







  