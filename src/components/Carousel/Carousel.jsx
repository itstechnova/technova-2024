import React from "react";
import "./Carousel.scss";
import pixelStar from "../../resources/images/graphics/pixel-star.svg";
import pixelHeart from "../../resources/images/icons/pixel-heart.svg";
import arrow from "../../resources/images/icons/arrow.svg";

var colourCodes = {
  pink: "#f8b3b8",
  turquoise: "#A8EFE4",
  purple: "#7676E8",
  darkPink: "#FC6D83",
};

export const Carousel = ({ content, slideNext }) => {
  const next = () => {
    slideNext();
  };

  return (
    <div className="carousel-wrapper" id="carousel">
      <div className="carousel-box">
        <div
          className="carousel-header"
          style={{ backgroundColor: colourCodes[content.colour] }}
        >
          <div className="white-box"></div>
          <div className="white-box"></div>
          <div className="white-box"></div>
        </div>
        <div className="carousel-card">
          <div className="carousel-img-wrapper">
            <img className="carousel-image" src={content.image} />
          </div>
          <div className="carousel-text">
            <p>{content.quote}</p>
          </div>

          <div className="carousel-button-section">
            <div className="carousel-button">
              <a
                className="button"
                href={content.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="career-pixel"
                  src={pixelHeart}
                  alt="Pixel Heart"
                />
                <div className="career-text">Explore</div>
                <img className="career-pixel" src={arrow} alt="Pixel Heart" />
              </a>
            </div>

            <div onClick={next} className="carousel-button">
              <a className="button">
                <img className="pixel" src={pixelStar} alt="Pixel Star" />
                <div className="label">Next</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
