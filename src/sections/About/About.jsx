import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import createSelector from "../../resources/images/graphics/create-selector.png";
import careerSelector from "../../resources/images/graphics/career-selector.png";
import communitySelector from "../../resources/images/graphics/community-selector.png";

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
    <SectionWrapper id="about" >
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>{about.title}</h1>
                    <br></br>
                    <p>{about.description1}</p>
                    <p>{about.description2}</p>
                </div>
            </div>
        </div>
    </SectionWrapper>
    )
};

export default About;
