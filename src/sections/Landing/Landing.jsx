import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
import landingBanner from "../../resources/images/logo/techNovaTiles.png";
import Button from "../../components/Button/Button";
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
              <Button 
                label={landing.mentorApplyCTAMobile}
                link={landing.mentorAppLink}
              />
              <Button 
                label={landing.hackerApplyCTA}
                link={landing.hackerApplyLink}
                type="pink"
              />
            </div>
          </div>
          {/* <div className="landing-button-container">
            <Button link={landing.instaLink} label={landing.instaCTA} />
            <Button link={landing.hackerApplyLink} label={landing.hackerApplyCTA} />
            <Button
              link={landing.mentorAppLink}
              label={landing.mentorApplyCTA}
            />
          </div> */}
        </div>
      
      </div>
    </SectionWrapper>
  );
};

export default Landing;
