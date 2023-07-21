import React, { useState } from "react";
import "./LandingButton.scss";
import pixelHeart from "../../resources/images/icons/pixel-heart.svg";
import arrow from "../../resources/images/icons/arrow.svg";

const LandingButton = ({ label, link, type }) => {

  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
  };
  
  return (
    <a
    href={link}
    className={`landing-button ${type ?? ""} ${clicked ? "clicked" : ""}`}
    target="_blank"
    rel="noreferrer noopener"
    onClick={handleClick}
    >
      <img className="pixel" src={pixelHeart} alt="Pixel Heart" />
      <div className="label">{label}</div>
      <img className="arrow" src={arrow} alt="Arrow" />
    </a>
  );
};

export default LandingButton;
