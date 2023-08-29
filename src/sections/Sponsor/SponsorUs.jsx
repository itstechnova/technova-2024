import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import flowers from "../../resources/images/graphics/sponsor-us-flowers.svg";
import amazon from "../../resources/images/sponsors/amazon.png";
import wealthsimple from "../../resources/images/sponsors/wealthsimple.png";
import google from "../../resources/images/sponsors/googlecloud.png";
import opentext from "../../resources/images/sponsors/opentext.jpg";
import cloudflare from "../../resources/images/sponsors/cloudflare.png";
import zynga from "../../resources/images/sponsors/zynga.png";
import sps from "../../resources/images/sponsors/sps.png";

import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";

var colourCodes = {
  pink: "#f8b3b8",
  turquoise: "#A8EFE4",
  purple: "#7676E8",
  darkPink: "#FC6D83",
};

var showcase = [
  // {
  //   // no quote, no link
  //   quote:
  //     "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
  //   link: "https://www.amazon.jobs/student-programs",
  //   image: wealthsimple,
  //   colour: "pink",
  // },
  // {
  //   // no quote, no link
  //   quote:
  //     "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
  //   link: "https://www.amazon.jobs/student-programs",
  //   image: google,
  //   colour: "darkPink",
  // },
  {
    quote:
      "Zynga is a global leader in interactive entertainment with a mission to connect the world through games and a wholly-owned label of Take-Two Interactive Software, Inc.",
    link: "https://www.zynga.com/",
    image: zynga,
    colour: "pink",
  },
  {
    quote:
      "At OpenText, we recognize the low demographic of women in STEM. As part of our ongoing efforts to encourage women to participate in STEM and feel recognized for their invaluable insights, we invite you to join our Women in Tech program.",
    link: "https://careers.opentext.com/?locale=en_US",
    image: opentext,
    colour: "turquoise",
  },
  {
    quote:
      "Cloudflare is the security, performance, and reliability company on a mission to help build a better Internet. Today it runs one of the world’s largest networks that powers anything connected to the Internet, with its services being used by everyone, from nonprofits and SMBs to Global 2000 companies and top government organizations.",
    link: "https://www.cloudflare.com/",
    image: cloudflare,
    colour: "purple",
  },
  {
    quote:
      "SPS Commerce is the world’s leading retail network, connecting trading partners around the globe to optimize supply chain operations for all retail partners. We support data-driven partnerships with innovative cloud technology, customer-obsessed service and accessible experts so our customers can focus on what they do best.",
    link: "https://www.spscommerce.com/",
    image: sps,
    colour: "darkPink",
  },
];

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

  return (
    <SectionWrapper id="sponsor">
      <div className="sponsor-us-container">
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
              <LandingButton
                link="https://www.itstechnova.org/pdfs/sponsorship_package.pdf"
                label="Sponsorship Package"
                target="_blank"
                rel="noreferrer noopener"
              />
              <LandingButton
                link="mailto:sponsors@itstechnova.org"
                label="Join us as a sponsor"
                target="_blank"
                rel="noreferrer noopener"
              />
            </div>
          </div>
          <div className="sponsor-us-images">
            <img className="flowers" src={flowers} alt="plant and bee" />
          </div>
        </div>
        <div className="sponsor-us-carousel-wrapper">
          <div className="sponsor-us-carousel">
            <Slider ref={sliderRef} {...settings}>
              {showcase.map((content, index) => (
                <Carousel key={index} content={content} slideNext={next} />
              ))}
            </Slider>
          </div>
        </div>
        <OurSponsors />
      </div>
    </SectionWrapper>
  );
};

export default SponsorUs;
