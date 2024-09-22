import React from "react";
import "./Partner.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import wicsImg from "../../resources/images/logo/wics.svg";
import wieImg from "../../resources/images/logo/wie-logo.svg";
import velocityImg from "../../resources/images/logo/velocity.svg";
import dominoes1 from "../../resources/images/graphics/dominoes1.svg";
import dominoes2 from "../../resources/images/graphics/dominoes2.svg";
import funguy from "../../resources/images/graphics/funguy.svg";
import guyshadow from "../../resources/images/graphics/guyshadow.svg";
import bluepokerchip from "../../resources/images/graphics/bluepokerchip.png";
import purpleguy from "../../resources/images/graphics/purpleguy.svg";
import pinkchip from "../../resources/images/graphics/pinkchip.png";
import tealpokerchip from "../../resources/images/graphics/tealpokerchip.png"
import purplepokerchip from "../../resources/images/graphics/purplepokerchip.png"

const Partner = () => (
  <SectionWrapper id="partner">
    <div className="our-partners-container">

      {/* <div id="l-upper-corner">
        <img id="r-pinkflower" src={tealpokerchip} />
        <img id="purple-flower" src={purplepokerchip} />
      </div> */}

      <h1 className="our-partners-title">In Partnership With</h1>
      <hr className="our-partners-divider"></hr>
      <div className="our-partners-pink-box">
        <div className="our-partners-box">
          <div className="our-partners-header">
            <h1 className="our-partners-title">Women in Computer Science</h1>
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
          </div>
        </div>
      </div>
      <div id = "pushed">
        <img id="purple-guy" src={purpleguy} />
        <img id="purple-shadow" src={guyshadow} />
        <img id="pushed-chip" src={pinkchip} />
      </div>
      
    </div>

    <div className="our-partners-container-two">

      <div id = "dominoes">
        <img id="dominoes-1" src={dominoes1} />
        <img id="dominoes-2" src={dominoes2} />
      </div>

      <h1 className="our-partners-title">Our Partners</h1>
      <hr className="our-partners-divider"></hr>
      <div className="our-partners-blue-box">
        <div className="our-partners-box">
          <img src={wieImg} alt="WiCS" className="our-partners-logo" />
          <img src={wicsImg} alt="WiCS" className="our-partners-logo" />
          <img src={velocityImg} alt="WiCS" className="our-partners-logo" />
        </div>
      </div>

      <div>
      <div id="fun">
        <img id="fun-guy" src={funguy} />
        <img id = "shadow" src={guyshadow} />
      </div>

      <div id="r-chips">
        <img id="r-purple-chip" src={bluepokerchip} />
        <img id="r-pink-chip" src={pinkchip} />
      </div>
      </div>
      
    </div>
    
  </SectionWrapper>
  
);

export default Partner;
