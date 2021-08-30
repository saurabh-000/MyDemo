import React from 'react';
import { NavLink } from 'react-router-dom';
import  img1  from '../Logo.png';
const Navbar =()=>{
 return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container">
  <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
    <img className="logo"src={img1} alt="Logo"/>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/registration">Registation</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>     
      </ul>
    </div>
  </div>
</nav>
);

}


export default Navbar;