import React from "react";
import "./Keynote.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import KeynoteSpeaker from "../../resources/images/keynoteSpeaker.jpg"

function Keynote() {
    return (
        <SectionWrapper id="keynote">
            <h1 className="keynote-title">Keynote Speaker</h1>
            <hr></hr>


            <div className="keynote-box">
                <div className="keynote-header">
                    {/* <h3 className="keynote-header-name">CEO and Founder of CodeGem</h3> */}
                </div>
                <div className="keynote-card">
                    <img className="keynote-card-img" src={KeynoteSpeaker} />
                    <div className="keynote-card-title">
                        <h3 className="keynote-card-name">
                        Maura Grossman
                        </h3>
                    </div>
                    <div className="keynote-card-desc-wrapper">
                        <p className="keynote-card-desc">
                        Maura R. Grossman is a Research Professor at the Cheriton School of Computer Science and the School of Public Health Sciences at the University of Waterloo, an Adjunct Professor at Osgoode Hall Law School of York University, and a Faculty Affiliate of the Vector Institute. Maura’s groundbreaking research on technology-assisted review (TAR), high-recall information retrieval, electronic discovery in law, and AI and Data Science relating to legal, ethical, and policy considerations, has set the standard for the responsible application of AI in critical legal contexts.
                        </p>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    )
}
export default Keynote;