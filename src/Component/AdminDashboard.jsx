import React from "react";
import { Cards } from "./Card";
import "../Css/AdminDashboard.css"
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";
import Footer from "./Footer";
import Picture, { DashCard } from "./DashboardComponents";
const AdminDashboard = () => {
    console.log("This is admin dash" + window.sessionStorage.getItem("apiKey"));
    let authencitaed = window.sessionStorage.getItem("authenticated");
    console.log(authencitaed);
    console.log("-----> "+authencitaed==="false");
    if(authencitaed==="false")
    {
        console.log("----- Not Authenticated ---");
        return window.location.href='http://localhost:3000/login';
    }
    let fname = window.sessionStorage.getItem("fName").toUpperCase();
    let lname = window.sessionStorage.getItem("lName").toUpperCase();
    
    return (
        <>
            <Dashboard
                user="Admin"
                loc="/admin"
            />
            <div className="container-fluid">
                <h1>User Management</h1>
                <div className="row">
                    <div className="col">
                        <DashCard
                            imgsrc="https://source.unsplash.com/1000x3000//?user,admin,people"
                            cardtitle="Get All Users"
                            cardtext="View List of all the Users"
                            button="View"
                            link="/admin/getAllUsers"
                        />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000//?user,admin,people"
                            cardtitle="Get User By Type"
                            cardtext="View User According to the type"
                            button="View"
                            link="/admin/userbytype" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000//?user,admin,people"
                            cardtitle="User By Email"
                            cardtext="View User By Email"
                            button="View"
                            link="/admin/userbyemail" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1>Tutor Management</h1>
                <div className="row">
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
                            cardtitle="Save Tutor"
                            cardtext="Save a New Tutor"
                            button="Save"
                            link="/admin/tutorregistration" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
                            cardtitle="Update Tutor"
                            cardtext="Update the tutor details "
                            button="Update"
                            link="/admin/updatetutor" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?tutor,teacher,study"
                            cardtitle="Map tutor"
                            cardtext="Maps the Tutor to a new subject"
                            button="Map"
                            link="/registration" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1>Subject Management</h1>
                <div className="row">
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?books,subject"
                            cardtitle="Subjects"
                            cardtext="View Subjects"
                            button="View"
                            link="/registration" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?books,subject"
                            cardtitle="Subject By Name"
                            cardtext="Get the Subject by Name"
                            button="Get"
                            link="/registration" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?books,subject"
                            cardtitle="Save Subjects"
                            cardtext="Save a new Subject"
                            button="Save"
                            link="/registration" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1>Registration Management</h1>
                <div className="row">
                    <div className="col">
                        <DashCard
                            imgsrc="https://source.unsplash.com/1000x3000/?Booking,registration,forms"
                            cardtitle="Get All registration"
                            cardtext="View All the Registration"
                            button="View"
                            link="/registration" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?Booking,registration,forms"
                            cardtitle="Get Registration By Subject Id"
                            cardtext="Get Registration according to the subject id"
                            button="Get"
                            link="/registration" />
                    </div>
                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x3000/?Booking,registration,forms"
                            cardtitle="Get Registration By Tutor Id"
                            cardtext="Get Registration By Tutor Id"
                            button="Get"
                            link="/registration" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1>Demo Management</h1>
                <div className="row">

                    <div className="col">
                        <DashCard imgsrc="https://source.unsplash.com/800x1500/?login,account,coding"
                            cardtitle="Get All Demos"
                            cardtext="View All the Demos registered by the parent"
                            button="View"
                            link="/admin/getalldemos" />
                    </div>
                    <div className="col">
                        <DashCard
                            imgsrc="https://source.unsplash.com/800x1500/?login,account,coding"
                            cardtitle="Get Demo By ID"
                            cardtext="Get the Demo by ID"
                            button="Get"
                            link="/admin/getdemobyid" />

                    </div>
                </div>
            </div>


            <Footer />

        </>
    );
}

export default AdminDashboard;