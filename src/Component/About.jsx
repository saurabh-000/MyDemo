import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import  '../Css/About.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BsFillAwardFill } from 'react-icons/bs';
import { DiCodeigniter } from 'react-icons/di';
import img from '../Images/GTF-Signature.png'
const About = ()=>
{
  return(
    <>
    <Navbar/>
    <section id="about">
          <div className="container">
               <div className="row">
                    <div className="col-md-12col-sm-16">
                         <div className="about-info">
                              <h2>Start your journey to a better life with online practical courses</h2>

                              <figure>
                                   <span><i className="fa fa-users"><BsFillBriefcaseFill />  <div class="tst-rating">
                                             <i class="fa fa-star"><toneStar/></i>
                                             <i class="fa fa-star"><toneStar/></i>
                                             <i class="fa fa-star"><toneStar/></i>
                                             <i class="fa fa-star"><toneStar/></i>
                                        </div></i></span>
                                   <figcaption>
                                     
                                        <h3>Professional Trainers</h3>
                                        <p>India’s #1 Premium Professional Training Institute For Python, Data Science, Ethical Hacking, Digital Marketing & AI Industrial Training</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-certificate"><BsFillAwardFill/></i></span>
                                   <figcaption>
                                        <h3>International Certifications</h3>
                                        <p>We pride ourselves on our ability to consistently improve the compliance maturity of all organizations types from all industries. We are a GLOBAL AUTHORITY in ASSESSMENT & CERTIFICATION.</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-bar-chart-o"><DiCodeigniter/></i></span>
                                   <figcaption>
                                        <h3>Practical Training</h3>
                                        <p>We will provide you live project training.Our industry expert trainers explain every topic with real-time examples to the students. We have trainers who have already run several applications and share their experiences with students. </p>
                                   </figcaption>
                              </figure>
                         </div>
                    </div>
                       <div className="col-sm-6">  
                       <img src={img} alt="student" class="img-thumbnail" height="300px"  />
                           </div>
                    <div className="col-md-offset-1 col-md-6 col-sm-4">
                         <div className="entry-form">
                              <form action="#" method="post">
                                   <h2>Signup today</h2>
                                   <input type="text" name="full name" className="form-control" placeholder="Full name" required=""/>

                                   <input type="email" name="email" className="form-control" placeholder="Your email address" required=""/>

                                   <input type="password" name="password" className="form-control" placeholder="Your password" required=""/>

                                   <button className="submit-btn form-control" id="form-submit">Get started</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     </section>


    <Footer/>
    </>
  );
}


export default About;