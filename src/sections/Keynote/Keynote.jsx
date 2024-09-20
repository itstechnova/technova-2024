import React from "react";
import "./Keynote.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import KeynoteSpeaker from "../../resources/images/keynote.svg"

function Keynote() {
    return (
        <SectionWrapper id="keynote">
            <h1 className="keynote-title">Keynote Speaker</h1>
            <hr></hr>


            <div className="keynote-box">
                <div className="keynote-header">
                    <h3 className="keynote-header-name">CEO and Founder of CodeGem</h3>
                </div>
                <div className="keynote-card">
                    <img className="keynote-card-img" src={KeynoteSpeaker} />
                    <div className="keynote-card-title">
                        <h3 className="keynote-card-name">
                        Stephanie Mills
                        </h3>
                    </div>
                    <div className="keynote-card-desc-wrapper">
                        <p className="keynote-card-desc">
                        Stephanie Mills is a 2020 Thiel fellow, and the CEO and founder of CodeGem; a people-first management platform built for software teams.
                        <br></br>
                        <br></br>
                        CodeGem was inspired by her combined experience studying management engineering at UWaterloo and working as a software engineer at top companies like Apple, Uber, Dapper, and Deloitte.</p>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    )
}
export default Keynote;