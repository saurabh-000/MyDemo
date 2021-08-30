import React from 'react';
import java from '../Images/Java.png';
import python from '../Images/python.png';
import C from '../Images/C++.png';
import angular from '../Images/Angular.png';
import '../Css/Card.css';
import { NavLink } from 'react-router-dom';
const Card = () => {
  return (
    <>
      <div className="container" >
        <div className="row">
        <h1>&mdash;</h1>
          <div className="section-title">
            <p><h2>Popular Courses Upgrade your skills with newest courses</h2></p>
          </div>
          <div className="col card">
            <img src={C} class="card-img-top col-5" alt="C++ pic" />
            <div className="card-body">
              <h5 className="card-title">C++ Course</h5>
              <p className="card-text">C++ tutorial provides basic and advanced concepts of C++. Our C++ tutorial is designed for beginners and professionals.</p>

            </div>
          </div>
          <div className="col card">
            <img src={java} class="card-img-top col-5" alt="Java" />
            <div className="card-body">
              <h5 className="card-title">Java Course</h5>
              <p className="card-text">Our core Java programming tutorial is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology.</p>

            </div>
          </div>
          <div className="col card">
            <img src={python} class="card-img-top col-5" alt="Python" />
            <div className="card-body">
              <h5 className="card-title">Python Tutorial</h5>
              <p className="card-text">Python tutorial provides basic and advanced concepts of Python. Our Python tutorial is designed for beginners and professionals.</p>

            </div>
          </div>
          <div className="col card">
            <img src={angular} class="card-img-top col-5" alt="Angular" />
            <div className="card-body">
              <h5 className="card-title">Angular 7 Tutorial</h5>
              <p className="card-text">Angular 7 tutorial provides basic and advanced concepts of Angular 7. Our Angular 7 Tutorial is designed for beginners and professionals both.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const Cards = (props) => {
  return (

    <div className="row">
      <div className="col card">
        <img src={props.imgsrc} class="card-img-top col-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardtitle}</h5>
          <p className="card-text">{props.cardtext}</p>
          <NavLink to="#" class="btn btn-primary">{props.button}</NavLink>
        </div>
      </div>
    </div>

  );
}
export default Card;

export { Cards };