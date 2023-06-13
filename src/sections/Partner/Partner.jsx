import React from "react";
import "./Partner.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import wicsImg from "../../resources/images/logo/wics.svg";
import pixelHeart from "../../resources/images/graphics/pixel-heart.svg";
import arrow from "../../resources/images/graphics/arrow.svg";

const Partner = () => (
  <SectionWrapper id="partner">
    <div className="our-partners-container">
      <h1 className="our-partners-title">In Partnership With</h1>
      <hr className="our-partners-divider"></hr>


      <div className="our-partners-box">
        <div className="our-partners-header">
          <div className="white-box"></div>
          <div className="white-box"></div>
          <div className="white-box"></div>
        </div>
        <div className="our-partners">
          
          {/* <img src={wicsmobile} alt="WiCS" className="mobile_img" /> */}
          <div className="our-partners-text">
            <p>
              We are working in partnership with the University of Waterloo’s
              David R. Cheriton School of Computer Science - Women in Computer
              Science (WiCS). 
            </p>
            <br />
            <p>  
              WiCS is dedicated to promoting gender equity for
              students interested in studying computer science and looking to
              pursue careers in computing for the past 14 years, currently playing
              an active role in supporting over 2700 students.
            </p>
          </div>
          <img src={wicsImg} alt="WiCS" className="wics_logo" />
          <div className="wics_button">
              <a className="our-partners-button" href="https://cs.uwaterloo.ca/wics">
                <img src={pixelHeart} />
                <p>Find out more about WiCS</p>
                <img src={arrow} />
              </a>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Partner;
