import React from "react";
import "./Conduct.scss";
import pixelHeart from "../../resources/images/icons/PixelHeart.svg";
import arrow from "../../resources/images/icons/arrow-1.svg"

const Conduct = () => (
    <React.Fragment id="conduct">
        <div className="conduct-container">
          <div className="conduct-container-shadow">
            <img className="pixel" src={pixelHeart} alt="Pixel Heart"/>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" >Code of Conduct </a>
            <img className="arrow" src={arrow} alt="Arrow"/>
          </div>
        </div>
    </React.Fragment>
);

export default Conduct;