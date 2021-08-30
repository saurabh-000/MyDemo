import React from 'react';
import '../Images/notebook.jpg';
import '../Css/DashboardComponents.css'
import { NavLink } from 'react-router-dom';


const Picture = (props) => {

    return (<>
            <label style={{color:'white', float:'right'}}>{props.heading} {props.name} {props.lname}</label>
            
    </>);
}
const DashCard = (props) => {
    return(
    <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.imgsrc} className="img-fluid rounded-start" alt="..."/>
      </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.cardtitle}</h5>
                        <p className="card-text">{props.cardtext}</p>
                        <NavLink className="btn btn-outline-secondary" to={props.link} role="button">{props.button}</NavLink>
                    </div>
                </div>
            </div>
        </div>
        );
}


        export default Picture;
        export { DashCard};

