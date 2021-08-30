import React from "react";
import { Cards } from "./Card";
import "../Css/AdminDashboard.css"
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";
import Footer from "./Footer";
import Picture, { DashCard } from "./DashboardComponents";

const ParentDashboard = () => {
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
                user="Parent"
                loc="/parent" />
            <Picture
                heading="Welcome Parent"
                name= {fname} 
                lname ={lname}
                subheading="Welcome to your parent account"
            />
            <div class="container-fluid">
                <h1>Your Services</h1>
                <div class="row">
                    <div class="col">
                        <DashCard
                            imgsrc="https://source.unsplash.com/1000x5000/?user,admin,people"
                            cardtitle="View All Subjects"
                            cardtext="View List of all the Subjects"
                            button="View"
                            link="/registration"
                        />
                    </div>
                    <div class="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x5000/?user,admin,people"
                            cardtitle="Get Demo by Parent Id"
                            cardtext="Get Demo According to parent Id"
                            button="View"
                            link="/admin/userbytype" />
                    </div>
                    <div class="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x5000/?user,admin,people"
                            cardtitle="Get Reg By Parent Id"
                            cardtext="Get registration according to parent id"
                            button="View"
                            link="/admin/userbyemail" />
                    </div>
                    <div class="col">
                        <DashCard imgsrc="https://source.unsplash.com/1000x5000/?user,admin,people"
                            cardtitle="Request Demo"
                            cardtext="Request for a demo booking"
                            button="Book"
                            link="/admin/userbyemail" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ParentDashboard;