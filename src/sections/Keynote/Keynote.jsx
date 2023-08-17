import React from "react";
import "./Keynote.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import msGoose from "../../resources/images/graphics/ms-goose.svg";
import pixelStar from "../../resources/images/graphics/pixel-star.svg";

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
                    <img className="keynote-card-img" src={msGoose} />
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
                        Stephanie Mills is a 2020 Thiel fellow, and the CEO and founder of CodeGem; a people-first management platform built for software teams. 

                        <br></br>
                        <br></br>
                        CodeGem was inspired by her combined experience studying management engineering at UWaterloo and working as a software engineer at top companies like Apple, Uber, Dapper, and Deloitte.
                        </p>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    )
}
export default Keynote;