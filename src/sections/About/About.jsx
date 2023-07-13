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
                    <hr className="about-divider"></hr>
                    <p>{about.description1}</p>
                    <p>{about.description2}</p>
                </div>
            </div>
            <div className="about-events">
                <div className="animate">
                    <div className="hover_box">
                        <img className="about-events-selector" src={careerSelector} alt="community-selector" />
                        <img className="prep-image" style={{ gridArea: "prep-image" }} src={connectTile} alt="prepare-tile" />
                        <div style={{ gridArea: "prep-caption"}} className="about-caption">
                            <div className="about-title">
                                <h3>{about.prepareTitle}</h3>
                            </div>
                            <div className="about-description">
                                <p className="about-intro">{about.prepareDates}</p>
                                <p className="about-details">{about.prepareCaption}</p>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="animate">
                    <img className="about-events-selector " src={createSelector} alt="create-selector" />
                    <img className="hack-image" style={{ gridArea: "hack-image" }} src={hackTile} alt="hack-tile" />
                    <div style={{ gridArea: "hack-caption"}} className="about-caption">
                        <div className="about-title">
                            <h3>{about.hackTitle}</h3>
                        </div>
                        <div className="about-description">
                            <p className="about-intro">{about.hackDates}</p>
                            <p className="about-details">{about.hackCaption}</p>
                        </div>
                    </div>
                </div>
                <div className="animate">
                    <img className="about-events-selector" src={communitySelector} alt="career-selector" />
                    <img className="connect-image" style={{gridArea: "connect-image"}} src={prepareTile} alt="connect-tile" />
                    <div style={{ gridArea: "connect-caption"}} className="about-caption">
                        <div className="about-title">
                            <h3>{about.connectTitle}</h3>
                        </div>
                        <div className="about-description">
                            <p className="about-intro">{about.connectDates}</p>
                            <p className="about-details">{about.connectCaption}</p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="about-mobile">
            <Slider {...settings}>
            <div className="about-slider-container">
                <img className="mobile-image" src={prepareTile} alt="prepare-mobile" />
                <div className="mobile-text">
                    <div className="about-title">
                        <h3>{about.prepareTitle}</h3>
                    </div>
                    <div className="about-description">
                        <p className="about-intro">{about.prepareDates}</p>
                        <p>{about.prepareCaption}</p>
                    </div>
                </div>
            </div>
            <div className="about-slider-container">
                <img className="mobile-image" src={hackTile} alt="hack-mobile" />
                <div className="mobile-text">
                    <div className="about-title">
                        <h3>{about.hackTitle}</h3>
                    </div>
                    <div className="about-description">
                        <p className="about-intro">{about.hackDates}</p>
                        <p>{about.hackCaption}</p>
                    </div>
                </div>
            </div>
            <div className="about-slider-container">
                <img className="mobile-image" src={connectTile} alt="connect-mobile" />
                <div className="mobile-text">
                    <div className="about-title">
                        <h3>{about.connectTitle}</h3>
                    </div>
                    <div className="about-description">
                        <p className="about-intro">{about.connectDates}</p>
                        <p>{about.connectCaption}</p>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
        </div>
    </SectionWrapper >
    )
};

export default About;
