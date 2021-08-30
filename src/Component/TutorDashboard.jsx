import React from "react";
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";
import { Cards } from "./Card";
import Footer from "./Footer";
import Picture, { DashCard } from "./DashboardComponents";


const TeacherDashboard = () => {
  console.log("This is admin dash" + window.sessionStorage.getItem("apiKey"));
  let authencitaed = window.sessionStorage.getItem("authenticated");
  console.log(authencitaed);
  console.log("-----> " + authencitaed === "false");
  if (authencitaed === "false") {
    console.log("----- Not Authenticated ---");
    return window.location.href = 'http://localhost:3000/login';
  }
  let fname = window.sessionStorage.getItem("fName").toUpperCase();
  let lname = window.sessionStorage.getItem("lName").toUpperCase();

  return (
    <>
      <Dashboard
        user="Teacher"
        loc="/teacher" />
      <Picture
        heading="Welcome "
        name={fname}
        lname={lname}
        subheading="Welcome to your tutor account"
      />
      <div class="container-fluid">
        <h1>Your Services</h1>
        <div class="row">
          <div class="col">
            <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
              cardtitle="Get Demo by Tutor Id"
              cardtext="Get the demo According to tutor id"
              button="Get"
              link="#" />
          </div>
          <div class="col">
            <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
             cardtitle="Update Demo Status"
              cardtext ="Changes the demo status"
              button="View"
              link="/admin/userbytype" />
          </div>
          <div class="col">
            <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
              cardtitle="Get Reg By Tutor Id"
              cardtext ="Get all the registration from tutor id"
              button="Get"
              link="/admin/userbyemail" />
          </div>
        </div>
      </div>
      <Footer />


    </>

  );
}


export default TeacherDashboard;