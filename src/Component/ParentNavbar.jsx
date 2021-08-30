import React from 'react';
import { NavLink } from 'react-router-dom';
import  img1  from '../Logo.png';
const ParentDasborad =()=>{
 return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container">
  <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
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
          <NavLink className="nav-link" to="/login">Demo Request</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/registration">Appointed Tutor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Add Subject</NavLink>
        </li>    
        <li className="nav-item">
          <NavLink className="nav-link" to="/"  aria-current="page">Logout</NavLink>
        </li>  
      </ul>
    </div>
  </div>
</nav>
);
}
export default ParentDasborad;