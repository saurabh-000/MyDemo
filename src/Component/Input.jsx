import React from "react";



const Topcard = (props) => {

    return (
        <>
            <div class="card text-center">
                <div className="card-body">
                    <h5 className="card-title"><b>{props.heading}</b></h5>
                    <p className="card-text">{props.title}</p>
                </div>
            </div>
        </>
    );
}

const Input = (props)=>{

    return(
    <form class="container">
        <div class="form-group ">
            <label for="exampleInputFirstName">{props.label}</label>
            <input type="text" class="form-control" id="fName" aria-describedby="emailHelp"
                placeholder={props.placeholder}/>
        </div>
      </form>
    );  

}

const Button = (props)=>{
    return(
    <form class="container mt-20">
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    );
}

export default Topcard;
export{Input,Button};