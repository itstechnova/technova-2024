import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
import landingBanner from "../../resources/images/logo/techNovaTiles.png";
import techTogether from "../../resources/images/logo/techtogether.png";
import Button from "../../components/Button/Button";
import tnLogo from "../../resources/images/logo/logo.png";
// import asterisk1 from "../../resources/images/graphics/asterisk-1.svg";
// import asterisk2 from "../../resources/images/graphics/asterisk-2.svg";
import asterisk3 from "../../resources/images/graphics/asterisk-3.svg";
// import asterisk4 from "../../resources/images/graphics/asterisk-4.svg";
// import asterisk5 from "../../resources/images/graphics/asterisk-5.svg";
// import softStar1 from "../../resources/images/graphics/soft-star-1.svg";
// import softStar2 from "../../resources/images/graphics/soft-star-2.svg";
import msGoose from "../../resources/images/graphics/ms-goose.svg";
import msGooseFlowers from "../../resources/images/graphics/ms-goose-flowers.png";
import mlh from "../../resources/images/logo/mlh.png";
import snakes from "../../resources/images/graphics/snakesnlatters.png"

const Landing = () => {
  return (
    <SectionWrapper id="landing" paddingTop="0">
      <div className="landing-container">
        <div className="landing-main-container">
          
          <div className="landing-graphic-container">
          <img
            id="snakes-and-latters"
            src={snakes}
            alt="snakes and latters"
          />
          </div>

          <div className="landing-text">
            <h4 className="landing-logo-text">
              <img
                src={landingBanner}
                className="landing-banner"
                alt="TechNova"
              />
            </h4>
            <h1 className="landing-statement"><b>Hack</b> with Us</h1>
            <h4 className="landing-description">{landing.description}</h4>
            <h4 className="landing-date">{landing.date}</h4>
            <div className = "landing-button-container">
            </div>
          </div>
        </div>
      
      </div>
    </SectionWrapper>
  );
};

export default Landing;
