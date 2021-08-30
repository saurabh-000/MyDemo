import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Picture, { DashCard } from "./DashboardComponents";

const logOut=()=>{
    window.sessionStorage.setItem ("apiKey","");
    window.sessionStorage.setItem ("authenticated",false);
    
}

let fname = window.sessionStorage.getItem("fName");

let lname = window.sessionStorage.getItem("lName");

const Dashboard =(props)=>{
    return(
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" style={{height: 116}}>
        <div className="container-fluid">
          <NavLink to={props.loc} className="navbar-brand" >{props.user} Dashboard</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " style={{textAlign:'right'}} aria-current="page" to="/" onClick={logOut}>Logout</NavLink>
                <label style={{color:'white', float:'right'}}>Welcome {fname} {lname}</label>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
}
const DashboardCarousel = ()=>{
    return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1500x500/?welcome,greeting" className="d-block w-100" alt="..."/>
    </div>
    
  </div>
</div>
);
}

export default Dashboard;
export {DashboardCarousel};