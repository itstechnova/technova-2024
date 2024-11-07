import React, { useState } from "react";
import "./OurSponsors.scss";

import wealthsimple from "../../resources/images/sponsors/wealthsimple.png";
import opentext from "../../resources/images/sponsors/opentext.png";
import bbb from "../../resources/images/sponsors/bigbluebubble.png";
import cds from "../../resources/images/sponsors/cds.png";
import ubisoft from "../../resources/images/sponsors/ubisoft.png";
import cse from "../../resources/images/sponsors/cse.jpg";
import janestreet from "../../resources/images/sponsors/janestreet.png";
import manulife from "../../resources/images/sponsors/manulife.png";

const sponsors = [
  {
    name: "Canadian Digital Service",
    img: cds,
    alt: "cds.png",
    quote: "The Canadian Digital Service (CDS) is relentlessly focused on improving how the federal government designs and delivers digital services to people in Canada. They build digital products that solve common service problems for public servants and provide guidance and tools for Government of Canada (GC) teams to help improve the delivery of services to the public."
  },
  {
    name: "Jane Street",
    img: janestreet,
    alt: "janetreet.png",
    quote: "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving. They innovate in tech, from functional programming to machine learning to programmable hardware."
  },
  {
    name: "Ubisoft Toronto",
    img: ubisoft,
    alt: "ubisoft.png",
    quote: "Ubisoft Toronto is one of the largest development studios within Ubisoft, employing talented developers from around the world. They create worlds and tell stories that grip you, inspire you, and challenge you."
  },
  {
    name: "Manulife",
    img: manulife,
    alt: "manulife.png",
    quote: "Manulife Financial Corporation is a Canadian multinational insurance company and financial services provider headquartered in Toronto, Ontario. They are a leading international financial services group that helps people make their decisions easier and lives better."
  },
  {
    name: "Wealthsimple",
    img: wealthsimple,
    alt: "wealthsimple.png",
    quote: "Wealthsimple is on a mission to help everyone achieve financial freedom by reimagining what it means to manage their money. Using smart technology, they take financial services that are often confusing, opaque and expensive and make them transparent and low-cost for everyone."
  },
  {
    name: "Big Blue Bubble",
    img: bbb,
    alt: "bigbluebubble.png",
    quote: "Big Blue Bubble is a veteran mobile game developer with more than a decade of experience creating innovative and creative titles. Their studio has released more than 100 titles to date across a variety of platforms, including our own award-winning franchise, My Singing Monsters."
  },
  {
    name: "Communications Security Establishment",
    img: cse,
    alt: "cse.jpg",
    quote: "Communications Security Establishment Canada (CSE) is the national cryptologic agency, providing the Government of Canada with information technology security and foreign signals intelligence. CSE hires Canadians with a wide range of skills, experiences and perspectives because diversity makes us stronger."
  },
  {
    name: "OpenText",
    img: opentext,
    alt: "opentext.png",
    quote: "OpenText is a world leader in Information Management, helping companies securely capture, govern and exchange information on a global scale. They offer cloud-native solutions in an integrated and flexible Information Management platform."
  },
];

const OurSponsors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide == sponsors.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide == 0 ? sponsors.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="our-sponsors-container">
      <div className="carousel">
        <div className="carousel-slide">
          <img src={sponsors[currentSlide].img} alt={sponsors[currentSlide].alt} className="carousel-slide-img" />
        </div>
        <p className="carousel-slide-text">{sponsors[currentSlide].quote}</p>
      </div>
      <div className="carousel-dots">
        <div className="prev-arrow" onClick={handlePrev}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M12.1663 23.7787L0.387695 12.0001L12.1663 0.221436L14.3617 2.41675L4.77832 12.0001L14.3617 21.5834L12.1663 23.7787Z" />
          </svg>
        </div>
        <div className="carousel-dots-container">
          {sponsors.map((_, slide) => (
            <div
              key={slide}
              className={`carousel-dot ${slide == currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(slide)}
            />
          ))}
        </div>
        <div className="next-arrow" onClick={handleNext}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M2.83366 23.7787L14.6123 12.0001L2.83366 0.221436L0.638346 2.41675L10.2217 12.0001L0.638346 21.5834L2.83366 23.7787Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
