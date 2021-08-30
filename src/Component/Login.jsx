import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import "../Css/Login.css";
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { objToQueryString, ajaxGet } from './Helper';

let email;
let password;

function getUsers() {
    const paramMap = {
        user: email,
        password: password
    };
    ajaxGet('http://localhost:8080/login',paramMap,loginCallBack);
}

function loginCallBack(response){
    console.log(response);
    if (response.ok) {
        console.log(response);
        response.json().then(jsonData => {

            window.sessionStorage.setItem("apiKey", jsonData.token);
            window.sessionStorage.setItem("authenticated", true);
            window.sessionStorage.setItem("fName", jsonData.fName);
            window.sessionStorage.setItem("lName", jsonData.lName);
            console.log("Key----" + window.sessionStorage.getItem("apiKey"));

            console.log("hello " + jsonData.userType);
            if (jsonData.userType === "admin") {
                window.location.href = 'http://localhost:3000/admin';
            }
            else if (jsonData.userType == "parent") {
                window.location.href = 'http://localhost:3000/parent';
            }
            else if (jsonData.userType == "tutor") {
                window.location.href = 'http://localhost:3000/teacher'
            }
            else{
               
            }
            return response;
        });
    }
    else {
        alert("The Email Id or Passwrod is incorrect");
        return Promise.reject(response);
    }
}
function shoot() {
    // if(email ===""|| password===""||password==undefined){
    //     alert("Fill all the details");
    //     return false;
    // }
    // if(email.includes("@")&&email.includes(".com")){}
    // else{
    //     alert("invalid email")
    //     return false;
    // }
    // if(password.length<6||password.length>15)
    // {
    //    alert("password length must be between 6 to 15");
    //   return false;
    // }

    getUsers();
}


const Login = () => {
    const emailEvent = (event) => {
        email = event.target.value;
        console.log(email);
    }
    const passwordEvent = (event) => {
        password = event.target.value;
    }
    return (
        <>
            <Navbar />
            <div className="main">
                <div className="intro">
                    <h2>Application Login Page</h2>
                    <p>Login from here to access.</p>
                </div>
                <div className="form">
                    <input type="email" placeholder="Email Id" className="input" id="email" onChange={emailEvent} />
                    <input type="password" placeholder="Password" className="input" id="password" onChange={passwordEvent} />
                    <input type="button" value="Login" className="button" id="button" onClick={shoot} />
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Login;
