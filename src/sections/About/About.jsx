import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";
import hackSelector from "../../resources/images/graphics/hack-selector.svg";
import connectSelector from "../../resources/images/graphics/connect-selector.svg";
import prepareSelector from "../../resources/images/graphics/prepare-selector.svg";

const About = () => (
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
                    <img className="about-events-selector " src={prepareSelector} alt="prepare-selector" />
                    <img className="prep-image" style={{ gridArea: "prep-image" }} src={prepareTile} alt="prepare-tile" />
                    <div style={{ gridArea: "prep-caption"}} className="about-caption">
                        <div className="about-title">
                            <h3>{about.prepareTitle}</h3>
                        </div>
                        <div className="about-description">
                            <p className="about-intro">{about.prepareDates}</p>
                            <p>{about.prepareCaption}</p>
                        </div>
                    </div>
                </div>
                

                <div className="animate">
                    <img className="about-events-selector " src={hackSelector} alt="hack-selector" />
                    <img className="hack-image" style={{ gridArea: "hack-image" }} src={hackTile} alt="hack-tile" />
                    <div style={{ gridArea: "hack-caption"}} className="about-caption">
                        <div className="about-title">
                            <h3>{about.hackTitle}</h3>
                        </div>
                        <div className="about-description">
                            <p className="about-intro">{about.hackDates}</p>
                            <p>{about.hackCaption}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="animate">
                    <img className="about-events-selector " src={connectSelector} alt="hack-selector" />
                    <img className="connect-image" style={{gridArea: "connect-image"}} src={connectTile} alt="connect-tile" />
                    <div style={{ gridArea: "connect-caption"}} className="about-caption">
                        <div className="about-title">
                            <h3>{about.connectTitle}</h3>
                        </div>
                        <div className="about-description">
                            <p className="about-intro">{about.connectDates}</p>
                            <p>{about.connectCaption}</p>
                        </div>
                        
                    </div>
                </div>
            </div >
        </div>
    </SectionWrapper >
);

export default About;
