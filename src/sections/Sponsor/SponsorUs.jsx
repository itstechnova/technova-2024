import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";

var colourCodes = {
  lightGold: "#FFCA69", //gold sponsor
  lightPurple: "#ADB4F9", //silver sponsor
  lightPink: "#FFA3AF", //bronze sponsor
  darkPink: "#FC6D83", //startup

};


export const SponsorUs = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 700) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(1.5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 520,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <SectionWrapper id="sponsor">
      <div className="sponsor-us-container">
        {/* <img id="flowers" src={flowers} alt="plant and bee"/> */}

        <h1 className="sponsor-us-title">Sponsor Us</h1>
        <hr></hr>
        <div className="sponsor-us-content">
          <div className="sponsor-us-text">
            <div className="sponsor-us-description">
              <p>
                Support more than 300+ young women in the next step of their
                journey by sponsoring the next generation of leaders. <br />
                Interested in sponsoring? Email us at{" "}
                <a
                  href="mailto:sponsors@itstechnova.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  sponsors@itstechnova.org
                </a>
              </p>
            </div>
            <div className="sponsor-us-button-container">
              <Button
                link="mailto:sponsors@itstechnova.org"
                label="Join us as a sponsor"
                target="_blank"
                rel="noreferrer noopener"
              />
              <Button
                link="https://www.itstechnova.org/pdfs/sponsorship_package.pdf"
                label="Sponsorship Package"
                target="_blank"
                rel="noreferrer noopener"
                type="pink"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SponsorUs;
