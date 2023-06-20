import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
// import Button from "../../components/Button/Button";
import LandingButton from "./LandingButton";
import asterisk1 from "../../resources/images/graphics/asterisk-1.svg";
import asterisk2 from "../../resources/images/graphics/asterisk-2.svg";
import asterisk3 from "../../resources/images/graphics/asterisk-3.svg";
import asterisk4 from "../../resources/images/graphics/asterisk-4.svg";
import asterisk5 from "../../resources/images/graphics/asterisk-5.svg";
import msGoose from "../../resources/images/graphics/ms-goose.svg";
import softStar1 from "../../resources/images/graphics/soft-star-1.svg";
import softStar2 from "../../resources/images/graphics/soft-star-2.svg";


const Landing = () => {
    return (
        <SectionWrapper id="landing" paddingTop="0">
            <div className="landing-container">
                <div className="landing-main-container">
                    <div className="landing-text">
                        <h4 className="landing-logo-text">
                            <span className="landing-title">{landing.title1}</span>
                        </h4>
                        <h4 className="landing-logo-text-mobile">
                            <span className="landing-title" style={{marginBottom: "1px"}}>{landing.title1}</span>
                            <img 
                                className="mlh-mobile"
                                style={{height: "18px", marginRight: "2px", marginBottom: "4px"}} 
                                alt="mlh logo"
                            />
                        </h4>
                        <h4 className="landing-description">
                            {landing.description}
                        </h4>
                        <h4 className="landing-description-mobile">
                            {landing.description}
                        </h4>
                        <h4 className="landing-dates">{landing.dates}</h4>
                    </div>
                    <div className="landing-button-container">
                        <LandingButton link={landing.appLink} label={landing.applyCTA} />
                        <LandingButton link={landing.mentorAppLink} label={landing.mentorApplyCTA}/>
                    </div>
                </div>

                <div className="landing-graphic-container">
                    <img id="ms-goose" src={msGoose} alt="ms goose" />
                    {/* <img id="asterisk-1" src={asterisk1} alt="asterisk 1" />
                    <img src={asterisk2} alt="asterisk 2" />
                    <img src={asterisk3} alt="asterisk 3" />
                    <img src={asterisk4} alt="asterisk 4" />
                    <img src={asterisk5} alt="asterisk 5" />
                    <img src={softStar1} alt="asterisk 1" />
                    <img src={softStar2} alt="asterisk 2" /> */}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Landing;
