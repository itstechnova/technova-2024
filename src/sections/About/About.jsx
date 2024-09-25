import React, { useState, useRef } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import connect from "../../resources/images/graphics/connect.svg";
import connectImg from "../../resources/images/graphics/connectImg.svg";
import community from "../../resources/images/graphics/community.svg";
import communityImg from "../../resources/images/graphics/communityImg.svg";
import create from "../../resources/images/graphics/create.svg";
import createImg from "../../resources/images/graphics/createImg.svg";

const About = () => {
  const sections = [
    {
      id: "community",
      img: communityImg,
      des: community,
      cap: "Technical workshops and community-building events to prepare you for the hackathon and your career in technology!",
    },
    {
      id: "create",
      img: createImg,
      des: create,
      cap: "A 36-hour virtual hackathon to work with a team of dedicated individuals to design, create, and build - bringing your project idea to life!",
    },
    {
      id: "connect",
      img: connectImg,
      des: connect,
      cap: "Tech fair to meet fellow hackers, make friends, and build bridges with industry professionals who want to connect with hackers like you!",
    },
  ];

  const [visibleSection, setVisibleSection] = useState(0); // Track the currently visible section
  const sectionRefs = useRef([]); // Store refs for each section

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop; // Current scroll position
    const containerHeight = container.clientHeight; // Height of the container

    // Determine which section should be visible based on scroll position
    const newVisibleSection = Math.round(scrollTop / containerHeight);
    if (newVisibleSection >= 0 && newVisibleSection < sections.length) {
      setVisibleSection(newVisibleSection);
    }
  };

  return (
    <SectionWrapper id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>{about.title}</h1>
            <br />
            <p>{about.description1}</p>
            <p>{about.description2}</p>
          </div>
        </div>
      </div>

      <div className="scroll-sections" onScroll={handleScroll}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`scroll-section ${visibleSection === index ? "visible" : "hidden"}`}
          >
            <div className="scroll-content">
              <img className="scroll-img" src={section.img} alt={section.id} />
              <div className="scroll-caption">
                <img src={section.des} alt={`${section.id} description`} />
                <p>{section.cap}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
