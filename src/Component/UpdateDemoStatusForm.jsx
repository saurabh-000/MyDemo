import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { mapValues } from 'lodash';
import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect } from 'react'
import { Container } from '@material-ui/core';


const intialFValues= {
    id:'',
    FirstName: '',
    LastName: '',
    email: '',
    Password: '',
    Status: '',

}

export default function UpdateDemoForm() {
    const [values, setvalues] = useState(initialFValues);

    return (
    
        <form>
            <TextField
            variant="outlined"
            fullWidth
            required
            label="First Name"
            value={values.FirstName}
            placeholder="Enter your first name"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Last Name"
            value={values.LastName}
            placeholder="Enter your last name"
            />
            <TextField
            variant="outlined"
            label="E-mail"
            value={values.email}
            placeholder="Enter your E-mail"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Id"
            value={values.id}
            placeholder="Enter your Identification"
            />
            <TextField
            variant="outlined"
            fullWidth
            required
            label="Password"
            placeholder="Enter your Password"
            value={values.Password}
            />
           <Container>
               <Button
               onClick={() => console.log('you clicked me')}
               type="submit"
               color="secondary"
               variant="contained"
            >
                Get Status
            </Button>
           </Container>
        </form>
    )

} 