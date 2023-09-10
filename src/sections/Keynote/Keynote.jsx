import React from "react";
import "./Keynote.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import pixelStar from "../../resources/images/graphics/pixel-star.svg";
import KeynoteSpeaker from "../../resources/images/keynoteSpeaker.jpeg"

function Keynote() {
    return (
        <SectionWrapper id="keynote">
            <h1 className="keynote-title">Keynote Speaker</h1>
            <hr></hr>


            <div className="keynote-box">
                <div className="keynote-header">
                    <div className="white-box"></div>
                    <div className="white-box"></div>
                    <div className="white-box"></div>
                </div>
                <div className="keynote-card">
                    <img className="keynote-card-img" src={KeynoteSpeaker} />
                    <div className="keynote-card-title">
                        <h3 className="keynote-card-name">
                            Stephanie Mills
                        </h3>
                        <div className="keynote-card-title-box">
                            <div className="keynote-card-star">
                                <img src={pixelStar} />
                            </div>
                            <p className="keynote-card-role">
                                CEO and Founder of CodeGem
                            </p>
                        </div>
                    </div>
                    <div className="keynote-card-desc-wrapper">
                        <p className="keynote-card-desc">
                        Laura Money is Executive Vice-President, Chief Information and Technology Innovation Officer of Sun Life, advancing digital transformation to support Sun Life's Clients.
                        <br></br>
                        <br></br>
                        Her leadership and impact have led to recognitions including Canada’s Top 100 Most Powerful Women by the Women’s Executive Network, and one of the Top 10 Canadian CIOs by CIO Review. Laura is Chair of the Board at Bowtie Life Insurance Company and serves as Vice President of the University of Toronto Schools Alumni Association. Laura represents Canada internationally as a member of Age Group Team Canada for Standard Distance Triathlon.                        </p>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    )
}
export default Keynote;