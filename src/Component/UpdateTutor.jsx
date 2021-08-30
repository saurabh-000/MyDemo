import React from "react";
import Footer from './Footer';
import Topcard, { Input, Button } from './Input';
import Navbar from './Navbar';
import Carousel from './Carousel';


const UpdateTutor = () => {
    return (
        <>
            <Navbar />
            <Topcard
                heading="Tutor Update"
                title="Enter the new details of the tutor"
            />
            <Carousel />
            <Input
                label="User Id"
                placeholder="Enter User Id"
            />
            <Input
                label="First Name"
                placeholder="Enter First Name"
            />
            <Input
                label="Last Name"
                placeholder="Enter Last Name"
            />
            <Input
                label="Email Id"
                placeholder="Enter Email id"
            />
            <Button />
            <Footer />

        </>
    );

}

export default UpdateTutor;