
import React, {useState} from 'react'
import Carousel from './Carousel';
import { Redirect, useHistory,withRouter } from 'react-router-dom';
import {browserHistory} from 'react-router';
import { SubjectTwoTone } from '@material-ui/icons';

function AddSubjectForm(props) {
  const[subjectName, newName] = useState('')
 
  const getUsers = async ()=>{
    const response = fetch('http://localhost:8080/saveSubject', {
        method: 'POST',
  });
  
  Function shoot =()=> {
    // if(subjectName ===""|| subejctName==undefined){
    //     alert("Fill all the details");
    //     return false;
    // }
     getUsers();
  } 
  const SubjectNameEvent=( event)=>{

    newName(event.target.value)
  } 
  return (
     <>
          <div>
            <h1 className="display-4">Add Subject in the Database</h1>
          </div>
          <Carousel/>
     <div>
        <div className="container">
          
          <p className="lead">Enter the subject.</p>
        </div>
      </div>
    <form className="container">
        <div className="form-group ">
          <small >Mandatory <sup>*<sup/></sup></small>
            <input type="text" className="form-control" id="fName" value={subjectName}
                placeholder="Enter SubjectName" onChange ={SubjectNameEvent}/>
             <label> SubjectName</label>
        </div>

        <button type="submit"  Value = "Submit"className="AddSubject" onClick={shoot}>Submit</button>
    </form>
     <div>
     </div>
     </>
    )
}
export default AddSubjectForm;