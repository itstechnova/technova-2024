import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import flowers from "../../resources/images/graphics/sponsor-us-flowers.svg";
import amazon from "../../resources/images/sponsors/amazon.png";
import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";

var showcase = [
  {
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.amazon.jobs/student-programs",
    image: amazon,
  },
];

const SponsorUs = () => (
  <SectionWrapper id="sponsor">
    <div className="sponsor-us-container">
      <h1 className="sponsor-us-title">Sponsor Us</h1>
      <hr></hr>
      <div className="sponsor-us-content">
        <div className="sponsor-us-text">
          <div className="sponsor-us-description">
            <p>
              Support more than 300+ young women+ in the next step of their
              journey by sponsoring the next generation of leaders. <br />
              Interested in sponsoring? Email us at{" "}
              <a href="mailto:sponsors@itstechnova.org" target="_blank" rel="noreferrer noopener">
                sponsors@itstechnova.org
              </a>
            </p>
          </div>
          <div className="sponsor-us-button-container">
            <Button link="https://www.itstechnova.org/pdfs/sponsorship_package.pdf" label="Sponsorship Package"  target="_blank" rel="noreferrer noopener"/>
            <Button link="mailto:sponsors@itstechnova.org" label="Join us as a sponsor"  target="_blank" rel="noreferrer noopener"/>
          </div>
        </div>
        <div className="sponsor-us-images">
          <img
            className="flowers"
            src={flowers}
            alt="plant and bee"
          />
        </div>
      </div>
      {/* <h2 style={{marginTop:"24px"}}>Sponsor Showcase</h2>
            <div className="sponsor-us-showcase">
                {<Carousel content={showcase} type={CarouselTypes.sponsor} />}
            </div>             */}
      <OurSponsors />
    </div>
  </SectionWrapper>
);

export default SponsorUs;
