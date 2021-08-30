
import Carousel from './Carousel';
import React, { useState, useEffect } from "react";
import Footer from './Footer';
import Topcard, { Input, Button } from './Input';
import Navbar from './Navbar';
import { ajaxPost } from './Helper';
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";


const TutorRegistration = props => {

    const [user, setUser] = useState(props.user);

    const submit = e => {
        e.preventDefault();
        let userbody = user.user;
        let body = JSON.stringify(user);
        console.log("form body --> " + body);
        ajaxPost("http://localhost:8080/admin/save", "", body, saveUserCallBack);
    }

    const saveUserCallBack = (response) => {
        if (response.ok) {
            alert("User Saved Successfully");
        }
        else {
            alert("The User type is Incorrect");
            return Promise.reject(response);
        }
    }


    return (
        <>
            <Dashboard
                user="Admin"
                loc="/admin"
            />
            <Topcard
                heading="Tutor Registration"
                title="Enter the details to add a new tutor"
            />
            <Carousel />

            <form onSubmit={submit}>
                <div style={{ margin: '10px' }}>
                    <input
                        style={{ width: '100%', padding: '10px' }}
                        type="text"
                        placeholder="Enter First Name"
                        name="user[fName]"
                        onChange={e => setUser({ ...user, fName: e.target.value })}
                    />
                </div>
                <div style={{ margin: '10px' }}>
                    <input
                        style={{ width: '100%', padding: '10px' }}
                        placeholder="Enter Last Name"
                        type="text"
                        name="user[lName]"
                        onChange={e => setUser({ ...user, lName: e.target.value })}
                    />
                </div>
                <div style={{ margin: '10px' }}>
                    <input
                        style={{ width: '100%', padding: '10px' }}
                        placeholder="Enter Email"
                        type="text"
                        name="user[userEmail]"
                        onChange={e => setUser({ ...user, userEmail: e.target.value })}
                    />
                </div>
                <div style={{ margin: '10px' }}>
                    <input
                        style={{ width: '100%', padding: '10px' }}
                        placeholder="Enter Password"
                        type="text"
                        name="user[password]"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <input style={{ margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white' }} type="submit" name="save" />
            </form>
            <Footer />
        </>
    );
}


export default TutorRegistration;