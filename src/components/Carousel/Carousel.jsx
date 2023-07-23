import React from "react";
import "./Carousel.scss";
import LandingButton from "../../sections/Landing/LandingButton";
import pixelStar from "../../resources/images/graphics/pixel-star.svg";


var colourCodes = {
  "pink": "#f8b3b8",
  "turquoise": "#A8EFE4",
  "purple": "#7676E8",
  "darkPink": "#FC6D83",
}

export const Carousel = ({ content, slideNext }) => {

  const next = () => {
    slideNext();
  }

    return (
        <div className="carousel-wrappersss" id="carousel">
        <div className="carousel-box">
          <div className="carousel-header" style={{backgroundColor: colourCodes[content.colour]}}>
            <div className="white-box"></div>
            <div className="white-box"></div>
            <div className="white-box"></div>
          </div>
          <div className="carousel-card">
            <div className="carousel-img-wrapper">
              <img className="carousel-image" src={content.image} />
            </div>
            <div className="carousel-text">
              <p>
                {content.quote}
              </p>
            </div>

            <div className="carousel-button-section">
              <div>
                {/* <LandingButton
                  className = "carousel-button"
                  link={content.link}
                  label="Explore Career Page"
                /> */}
              </div>

              <div onClick={next} className="carousel-button">
                  {/* <a className="landing-button">
                    <img className="pixel" src={pixelStar} alt="Pixel Star" />
                    <div className="label">Next</div>
                  </a> */}
              </div>
              
            </div>
          </div>
      </div>
      </div>
    );
};

export default Carousel;
