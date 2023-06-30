import React from "react";
import "./Partner.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import wicsImg from "../../resources/images/logo/wics.svg";
import pixelHeart from "../../resources/images/graphics/pixel-heart.svg";
import arrow from "../../resources/images/graphics/arrow.svg";
import pinkFlower from "../../resources/images/graphics/pink-flower.svg";
import purpleFlower from "../../resources/images/graphics/purple-flower.svg";
import tealFlower from "../../resources/images/graphics/teal-flower.svg";
import LandingButton from "../Landing/LandingButton";

const Partner = () => (
  <SectionWrapper id="partner">
    <div className="our-partners-container">
      <img id="r-pinkflower" src={pinkFlower} />
      <img id="purple-flower" src={purpleFlower} />
      <h1 className="our-partners-title">In Partnership With</h1>
      <hr className="our-partners-divider"></hr>
      <div className="our-partners-box">
        <div className="our-partners-header">
          <div className="white-box"></div>
          <div className="white-box"></div>
          <div className="white-box"></div>
        </div>
        <div className="our-partners">
          <img src={wicsImg} alt="WiCS" className="wics_logo" />
          <div className="our-partners-text">
            <p>
              We are working in partnership with the University of Waterloo’s
              David R. Cheriton School of Computer Science - Women in Computer
              Science (WiCS).
            </p>
            <br />
            <p>
              WiCS is dedicated to promoting gender equity for students
              interested in studying computer science and looking to pursue
              careers in computing for the past 14 years, currently playing an
              active role in supporting over 2700 students.
            </p>
          </div>

          <div className="wics_button">
            <LandingButton
              link="https://cs.uwaterloo.ca/wics"
              label="Learn more"
            />
            
          </div>
        </div>
      </div>
      <img id="l-pinkflower" src={pinkFlower} />
      <img id="teal-flower" src={tealFlower} />
    </div>
  </SectionWrapper>
);

export default Partner;
