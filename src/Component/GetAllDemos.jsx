import React, { useState, useEffect } from "react";
import Footer from "./Footer";

import Dashboard, { DashboardCarousel } from "./DashboardNavBar";


const GetAllDemos = () => {


    return (
        <>
            <Dashboard
                user="Admin"
                loc="/admin"
            />
            <table className="table">
                <thead>
                <tr>
                    <th>DemoId</th>
                    <th>ParentId</th>
                    <th>Status</th>
                    <th>SubjectId</th>
                    <th>SubjectName</th>
                    <th>TutorId</th>
                    <th>TutorName</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                    <td>d</td>
                    <td>e</td>
                    <td>f</td>
                    <td>g</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <Footer />
        </>
    );
}


export default GetAllDemos;