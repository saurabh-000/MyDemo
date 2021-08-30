import React  from "react";

const Carousel = ()=>
{
    return(
    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1500x500/?books" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
                    <h5>Best Website for finding Tutors</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1500x500/?library" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
                    <h5>We have the best verified teachers</h5>
                    <p>A teacher that helps to build a deep understanding of the topic.</p>
                </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1500x500/?teacher" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
                    <h5>Award Winning Performance</h5>
                    <p>Winner of the Best Educational Website Award 2020.</p>
                </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>);
}

export default Carousel;