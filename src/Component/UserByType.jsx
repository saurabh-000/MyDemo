import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Topcard, { Input, Button } from "./Input";
import Navbar from "./Navbar";
import { DataGrid, useGridApiEventHandler, useGridApiRef } from '@material-ui/data-grid';
import { objToQueryString, ajaxGet } from './Helper';
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";

var type;
const UserByType =()=>
{
    const [userDataList, setData] = useState([]);
    const userListColumns = [
        { field: 'userId', headerName: 'USER ID', width: 150 },
        { field: 'fName', headerName: 'First Name', width: 200 },
        { field: 'lName', headerName: 'Last Name', width: 200 },
        { field: 'userEmail', headerName: 'Emal', width: 200 },
        { field: 'userType', headerName: 'Role', width: 200 },
    ];
    const getAllUserCallback = (response) => {
        if (response.ok) {
            response.json().then(jsonData => {
                console.log("json --> " + JSON.stringify(jsonData));
                setData(jsonData);
            });
        }
        else {
            alert("The User type is Incorrect");
            return Promise.reject(response);
        }
    }
    const loadUserListGrid = () => {
        ajaxGet("http://localhost:8080/admin/allUserByType", { userType: type}, getAllUserCallback);
    }
    const emailEvent = (event) => {
        type = event.target.value;
        console.log(type);
    }
    return(
     <>
     <Dashboard
                user="Admin"
                loc="/admin"
            />
    
    <form class="container">
                <div class="form-group ">
                    <label for="exampleInputFirstName">Type</label>
                    <input type="text" class="form-control" id="fName" aria-describedby="emailHelp"
                       onChange={emailEvent}  placeholder="Enter User Type" />
                </div>
            </form>
            <button type="button" class="btn btn-outline-info" onClick={loadUserListGrid}>Submit</button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userDataList}
                    columns={userListColumns}
                    getRowId={(row) => row.userId} // primary key in row here it is userId
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>

    <Footer/>
    </>
    );
}

export default UserByType;