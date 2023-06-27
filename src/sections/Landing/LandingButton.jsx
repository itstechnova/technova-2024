import React from "react";
import "./LandingButton.scss";
import pixelHeart from "../../resources/images/icons/pixel-heart.svg";
import arrow from "../../resources/images/icons/arrow.svg";

const LandingButton = ({ label, link, type }) => (
  <a href={link} className={type ?? "landing-button"} target="_blank">
    <img className="pixel" src={pixelHeart} alt="Pixel Heart" />
    <div className="label">{label}</div>
    <img className="arrow" src={arrow} alt="Arrow" />
  </a>
);

export default LandingButton;
