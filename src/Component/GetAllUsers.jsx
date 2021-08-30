import React, { useState, useEffect, useRef } from "react";
import { objToQueryString, ajaxGet, ajaxPost } from './Helper';
import { DataGrid, useGridApiEventHandler, useGridApiRef } from '@material-ui/data-grid';
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";




const GetAllUsers = (props) => {

  //initialize useStae this DATA object can be update by calling SETDATA method (defined as Const)
  const [userDataList, setData] = useState([]);

  const [user, setUser] = useState({userId:"",fName:"",lName:"",userEmail:"",password:"",active:"Y"});

  const userUpdatePopupOpen= useRef(null);
  const userUpdatePopupClose= useRef(null);

  const userListColumns = [
    { field: 'userId', headerName: 'USER ID', width: 150 },
    { field: 'fName', headerName: 'First Name', width: 200 },
    { field: 'lName', headerName: 'Last Name', width: 200 },
    { field: 'userEmail', headerName: 'Emal', width: 200 },
    { field: 'userType', headerName: 'Role', width: 200 },
  ];

  
  const submit = e => {
    e.preventDefault();
    let body = JSON.stringify(user);
    console.log("form body --> " + body);
    ajaxPost("http://localhost:8080/admin/update", "", body, saveUserCallBack);
  }

  const saveUserCallBack = (response) => {
    if (response.ok) {
      alert("User Saved Successfully");
      userUpdatePopupClose.current.click();
      loadUserListGrid();

    }
    else {
      alert("The User type is Incorrect");
      return Promise.reject(response);
    }
  }


  const getAllUserCallback = (response) => {
    if (response.ok) {
      response.json().then(jsonData => {
        console.log("json --> " + JSON.stringify(jsonData));
        setData(jsonData);
      });
    }
    else {
      alert("The Email Id or Passwrod is incorrect");
      return Promise.reject(response);
    }
  }
  const loadUserListGrid = () => {
    ajaxGet("http://localhost:8080/admin/allUser", null, getAllUserCallback);
  }
  useEffect(() => {
    if (userDataList.length < 1) {
      loadUserListGrid();
    }
  });

  function currentlySelected(selections) {
    console.log("-----" + selections);
    console.log("selections --> " + selections);
    console.log("selections.selectionModel --> " + selections);
    console.log("selections.selectionModel --> " + userDataList);
    const selectedIDs = new Set(selections);
    const selectedRowData = userDataList.filter((row) =>
      selectedIDs.has(row.userId)
    );
    console.log("selected rowData:", selectedRowData);

    setUser(selectedRowData[0]);
    userUpdatePopupOpen.current.click();
  }

  return (
    <>
      <Dashboard
        user="Admin"
        loc="/admin"
      />
      <div><h4 style={{marginTop:"10", marginBottom:"10"}}>All User Data</h4></div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={userDataList}
          columns={userListColumns}
          getRowId={(row) => row.userId} // primary key in row here it is userId
          disableMultipleSelection={true}
          onRowSelected={(e) => console.log(e)}
          onSelectionModelChange={currentlySelected}
        />
      </div>
      <button ref={userUpdatePopupOpen} class="btn btn-primary btn-lg invisible" data-toggle="modal" data-target="#myModal"></button>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <form onSubmit={submit}>
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Update User</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div class="modal-body">
              <input
                  type="text"
                  readOnly="readOnly"
                  name="user[userId]"
                  value={user.userId}
                  onChange={e => setUser({ ...user, userId: e.target.value })}
                />
                <input
                  type="text"
                  name="user[fName]"
                  value={user.fName}
                  onChange={e => setUser({ ...user, fName: e.target.value })}
                />
                <input
                  type="text"
                  name="user[lName]"
                  value={user.lName}
                  onChange={e => setUser({ ...user, lName: e.target.value })}
                />
                <input
                  type="text"
                  name="user[userEmail]"
                  value={user.userEmail}
                  onChange={e => setUser({ ...user, userEmail: e.target.value })}
                />
                <input
                  type="text"
                  name="user[active]"
                  value={user.active}
                  onChange={e => setUser({ ...user, active: e.target.value })}
                />
              </div>
              <div class="modal-footer">
                <button ref={userUpdatePopupClose} type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}


export default GetAllUsers;