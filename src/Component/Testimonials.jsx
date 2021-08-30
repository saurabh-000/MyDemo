import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Css/Testimonials.css";
import tutor1 from '../Images/tutor1.jpg';
import tutor2 from '../Images/tutor2.jpg';
import tutor3 from '../Images/tutor3.jpg';
import tutor4 from '../Images/tutor4.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
const Testimonials= () => {
  return (
      <>
          <div className="section-title">
            <p><h1>Popular Teacher</h1></p>
          </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img  src={tutor1} alt='Math' />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
            <h4>Ratings</h4>
            <AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/>
          </div>
        </div>

        <div>
          <img src={tutor2} alt='Math' />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
           
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
            <h4>Ratings</h4>
            <AiTwotoneStar/><AiTwotoneStar/>
          </div>
        </div>

        <div>
          <img src={tutor3} alt='Math' />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
            <h4>Ratings</h4>
            <AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/>
          </div>
        </div>

        <div>
          <img src={tutor4} alt='Math' />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
            <h4>Ratings</h4>
            <AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
export default Testimonials;