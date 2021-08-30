import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/MapToTutor.css';

const MapToTutor = ()=>{
  return (
         <>
         <Navbar/>
          <div>
            <h1 className="display-4">Map To Tutor</h1>
          </div>
     <div className="jumbotron jumbotron-fluid">
        <div className="container">
          
          <p className="lead">Enter the  details to register the Teacher with subject.</p>
        </div>
      </div>
    <form className="container">
        <div className="form-group ">
          <small >Mandatory <sup>*<sup/></sup></small>
            <input type="text" className="form-control" id="fName" aria-describedby="emailHelp"
                placeholder="Enter SubjectId"/>
             <label></label>
        </div>
        <div className="form-group ">
            <small >Mandatory <sup>*<sup/></sup></small>
            <input type="text" className="form-control" id="fName" aria-describedby="emailHelp"
                placeholder="Enter TutorId"/>
             <label></label>
        </div>
        <div className="form-group">
             <small >Optional <sup>*<sup/></sup></small>
            <input type="text" className="form-control" id="fName" aria-describedby="emailHelp"
                placeholder="Enter Subject Name"/>
             <label></label>
        </div>
        <div className="form-group">  <small >Optional <sup>*<sup/></sup></small>
            <input type="text" className="form-control" id="fName" aria-describedby="emailHelp"
                placeholder="Enter Tutor Name"/>
             <label></label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     <div>
     </div>
     <Footer/>
     </>
    );
  }
  export default  MapToTutor;