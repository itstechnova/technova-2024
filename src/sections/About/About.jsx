import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import prepareTitle from "../../resources/images/graphics/prepare-title.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import hackTitle from "../../resources/images/graphics/hack-title.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import connectTitle from "../../resources/images/graphics/connect-title.svg";

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
                    <hr className="about-divider"></hr>
                    <p>{about.description1}</p>
                    <p>{about.description2}</p>
                </div>
            </div>
            
            <Slider {...settings} className="about-slider">
                <div className="about-events">
                    <img src={connectTile} alt="Connect" />
                    <div className="about-events-title">
                        <img className="about-events-image" src={connectTitle} alt="Connect Title" />
                        <p>{about.connectCaption}</p>
                    </div>
                </div>
                <div className="about-events">
                    <img src={hackTile} alt="Hack" />
                    <div className="about-events-title">
                        <img className="about-events-image" src={hackTitle} alt="Hack Title" />
                        <p>{about.hackCaption}</p>
                    </div>
                </div>
                <div className="about-events">
                    <img src={prepareTile} alt="Prepare" />
                    <div className="about-events-title">
                        <img className="about-events-image" src={prepareTitle} alt="Prepare Title" />
                        <p>{about.prepareCaption}</p>
                    </div>
                </div>
            </Slider>
        </div>
    </SectionWrapper>
    )
};

export default About;
