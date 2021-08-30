
import React from 'react';
import Navbar from './Navbar';
import Carousel  from './Carousel';
import  '../Css/Home.css';
import Footer from './Footer';
import Card from './Card';
import img from '../Images/student.jpg';
import Testimonials from './Testimonials';
const Home =()=>
{
    return(
        <>
            <Navbar/>
            <Carousel/>
<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">  
    <img src={img} alt="student" class="img-thumbnail" height="300px"  />
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2>
      <h4><strong>MISSION:</strong> Our Mission is to promote student achievement and preparation for global competitiveness by fostering educational excellence and ensuring equal access.</h4>
      <p><strong>VISION:</strong> We are an award winning organization that is dedicated in helping you to find the right teacher for your
                child that will help the child in getting a better understanding of the subject as well as of the
                society. Our mentors help the child to grow and unveal their real potential by using interactive
                learning students are able to score better. We are a family of 10 million happy parents and working from
                the last 15 years with a dedication of bringing the best out of a children and preparing them for a better future</p>
       </div>
    </div>
</div>
       
        <Testimonials/>
        <Card/>
         <Footer/>
        </>
    );
}
export default Home;