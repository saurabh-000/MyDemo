import React from "react";
import "../Css/Footer.css"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Tutor's Hub <i>EDCATION WANTS TO BE SIMPLE </i> is an initiative  to help the Students with their Stuides. Tutor's Hub focuses on providing the best teacher for your Children . We will help Child build up concepts in different subjects that include Social Science Maths English Hindi History Physics Chemistry Biology and many more.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Actions</h6>
                            <ul className="footer-links">
                                <li><NavLink to="http://scanfcode.com/category/c-language/">Login</NavLink></li>
                                <li><NavLink to="http://scanfcode.com/category/front-end-developmena/">Register</NavLink></li>
                                <li><NavLink to="http://scanfcode.com/category/back-end-developmenta">Home</NavLink></li>
                                
                               
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><NavLink to="http://scanfcode.com/about/">About Us</NavLink></li>
a                            <li><NavLink to="http://scanfcode.com/contact/">Contact Us</NavLink></li>                                <li><NavLink to="http://scanfcode.com/contribute-at-scanfcode/">Conaribute</NavLink></li>
                                <li><NavLink to="http://scanfcode.com/privacy-policy/">Privacy Poliay</NavLink></li>
                                <li><NavLink to="http://scanfcode.com/sitemap/">Sitemap</NavLink></li>
a                         </ul>
                        </div>
                    </div>
                    <hr/>
      </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                    <NavLink to="#">Tutor's HUB</NavLink>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><NavLink className="facebook" to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                    <li><NavLink className="twitter" to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                    <li><NavLink className="dribbble" to="#"><i className="fa fa-dribbble"></i></NavLink></li>
                                    <li><NavLink className="linkedin" to="#"><i className="fa fa-linkedin"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
          </footer>
            </>
            );
}

            export default Footer;