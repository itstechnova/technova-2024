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
                        Laura Money 
                        </h3>
                        <div className="keynote-card-title-box">
                            <div className="keynote-card-star">
                                <img src={pixelStar} />
                            </div>
                            <p className="keynote-card-role">
                            Chief Information and Technology Innovation Officer, Sun Life
                            </p>
                        </div>
                    </div>
                    <div className="keynote-card-desc-wrapper">
                        <p className="keynote-card-desc">
                        Laura Money is Executive Vice-President, Chief Information and Technology Innovation Officer of Sun Life.
                        <br></br>
                        <br></br>
                        She is a Top 100 Most Powerful Woman in Canada and a Top 10 Canadian CIO, serving as Chair at Bowtie Life Insurance Company and Vice President of the University of Toronto Schools Alumni Association. She's also an international representative for Age Group Team Canada in Standard Distance Triathlon.</p>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    )
}
export default Keynote;