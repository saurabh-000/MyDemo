import React from "react";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { mapValues } from 'lodash';
import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import RequestDemoForm from "./RequestDemoForm";
import  PeopleOutlineTwoToneIcon  from "@material-ui/icons/PeopleOutlineTwoTone";
import "../Css/AdminDashboard.css"
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";
import { Container } from '@material-ui/core';

const RequestDemoForm = () => {
    const intialFValues= {
    demoId:'',
    parentId: '',
    subjectId: '',
    subjectName: '',
    tutorId: '',
    tutorName: '',
    }

    const [values, setvalues] = useState(initialFValues);

    return (
    
        <form>
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Demo Id"
            value={values.demoId}
            placeholder="Enter demo Id"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Parent Id"
            value={values.parentId}
            placeholder="Enter your Id"
            />
            <TextField
            variant="outlined"
            label="Subject Id"
            value={values.subjectId}
            placeholder="Enter subject id"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Subject Name"
            value={values.subjectName}
            placeholder="Enter subject name"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Tutor Id"
            placeholder="Enter the tutor id"
            value={values.tutorId}
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Tutor Name"
            placeholder="Enter the tutor name"
            value={values.tutorName}
            />
           <Container>
               <Button
               onClick={() => console.log('you clicked me')}
               type="submit"
               color="secondary"
               variant="contained"
            >
                Request for Demo
            </Button>
           </Container>
        </form>
    );
}
export default function UpdateDemoForm();