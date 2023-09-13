import React from "react";
import "./Carousel.scss";
import pixelStar from "../../resources/images/graphics/pixel-star.svg";
import pixelHeart from "../../resources/images/icons/pixel-heart.svg";
import arrow from "../../resources/images/icons/arrow.svg";

var colourCodes = {
  lightGold: "#FFCA69", // gold sponsor
  lightPurple: "#ADB4F9", // silver sponsor
  lightPink: "#FFA3AF", // bronze sponsor
  darkPink: "#FC6D83", // startup
  turquoise: "#A8EFE4", // other sponsors
  
  // pink: "#f8b3b8",
  // purple: "#7676E8",
  // darkPink: "#FC6D83",
};

export const Carousel = ({ content, slideNext }) => {
  const handleNextClick = () => {
    slideNext();
  };

  const { title, quote, links, colour, sponsorTier } = content;

  let carouselContent = null;

  if (sponsorTier === 'bronze' || sponsorTier === 'other') {
    carouselContent = (
        <div className="carousel-wrapper" id="carousel">
        <div className="carousel-box">
          <div
            className="carousel-header"
            style={{ backgroundColor: colourCodes[colour] }}
          >
            {[...Array(3)].map((_, index) => (
              <div key={index} className="white-box"></div>
            ))}
          </div>
          <div className="carousel-card">
            <div className="carousel-title">
              <p>{title}</p>
            </div>
            {/* Render each link and its associated image */}
            <div className="carousel-images-box">
              {links.map((link, index) => (
                <div key={index} className="carousel-link">
                  <a
                    className="carousel-img-wrapper-bronze"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="carousel-image" src={link.image} alt="Carousel" />
                  </a>
                </div>
              ))}
            </div>
            {sponsorTier === 'bronze' && (
              <div onClick={handleNextClick} className="carousel-button">
                <a className="button">
                  <img className="pixel" src={pixelStar} alt="Pixel Star" />
                  <div className="label">Next</div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    carouselContent = (
        <div className="carousel-wrapper" id="carousel">
        <div className="carousel-box">
          <div
            className="carousel-header"
            style={{ backgroundColor: colourCodes[colour] }}
          >
            {[...Array(3)].map((_, index) => (
              <div key={index} className="white-box"></div>
            ))}
          </div>
          <div className="carousel-card">
            <div className="carousel-title">
              <p>{title}</p>
            </div>
            <div className="carousel-img-wrapper">
              <img className="carousel-image" src={links[0].image} alt="Carousel" />
            </div>
            <div className="carousel-text">
              <p>{quote}</p>
            </div>

            <div className="carousel-button-section">
              <div className="carousel-button">
                <a
                  className="button"
                  href={links[0].url}
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

              <div onClick={handleNextClick} className="carousel-button">
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
  }

  return carouselContent;
};

export default Carousel;
