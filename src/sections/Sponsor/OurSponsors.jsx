import React from "react";
import "./OurSponsors.scss";
/*
import google from "../../resources/images/sponsors/silver/google.png";
import wish from "../../resources/images/sponsors/silver/wish.png";
*/
import facebook from "../../resources/images/sponsors/facebook.png";
import scotiabank from "../../resources/images/sponsors/scotiabank.png";
import pagerduty from "../../resources/images/sponsors/pagerduty.png";
import amazon from "../../resources/images/sponsors/amazon.png";
import hrt from "../../resources/images/sponsors/hrt.png";
import zynga from "../../resources/images/sponsors/zynga.png";
import cockroach from "../../resources/images/sponsors/cockroach.png";
import expo from "../../resources/images/sponsors/expo.png";
import ratiocity from "../../resources/images/sponsors/ratiocity.png";
import sps from "../../resources/images/sponsors/sps.png";
import rogers from "../../resources/images/sponsors/rogers.png";
/*
import splunk from "../../resources/images/sponsors/bronze/splunk.png";
*/
import wie from "../../resources/images/logo/wie.jpg";
import wics from "../../resources/images/logo/wics.png";
import ai from  "../../resources/images/logo/ai4good.png";
import velocity from  "../../resources/images/logo/velocity.png";
import wolfram from "../../resources/images/logo/wolfram.png";
import voiceflow from "../../resources/images/logo/voiceflow.png";
import auntys from "../../resources/images/sponsors/auntys.jpg";



const OurSponsors = () => (
  <div className="our-sponsors-container">
    {/* <h2 className="our-sponsors-title">Our Sponsors</h2>
    <div className="our-sponsors-logos">
      <div className="our-sponsors-gold">
        <a href="https://www.aboutamazon.com/">
          <img src={amazon} alt="Amazon" style={{ width: '55%' }} />
        </a>
        <a href="https://www.cockroachlabs.com/careers/">
          <img src={cockroach} alt="Cockroach Labs" style={{ width: '90%' }} />
        </a>
        <a href="https://jobs.spscommerce.com/">
          <img src={sps} alt="SPS Commerce" style={{ width: '85%' }} />
        </a>
        
                    <a href="https://about.google/">
                        <img src={google} alt="Google" />
                    </a>
                    <a href="https://www.wish.com/careers?hide_login_modal=true">
                        <img src={wish} alt="Wish" />
                    </a>
                    <a href="https://www.scotiabank.com/ca/en/about.html">
                        <img src={scotiabank} alt="Scotiabank" />
                    </a>
                   
      </div>
      <div className="our-sponsors-silver">
        <a href="https://about.facebook.com/">
          <img src={facebook} alt="facebook" style={{ width: '90%' }} />
        </a>
        <a href="https://www.scotiabank.com/ca/en/about.html">
          <img src={scotiabank} alt="Scotiabank" style={{ width: '100%' }} />
        </a>
        <a href="https://www.pagerduty.com/careers/">
          <img src={pagerduty} alt="PagerDuty" style={{ width: '80%' }} />
        </a>
        
                    <a href="https://about.google/">
                        <img src={google} alt="Google" />
                    </a>
                    <a href="https://www.wish.com/careers?hide_login_modal=true">
                        <img src={wish} alt="Wish" />
                    </a>
                    
                   
      </div>
      <div className="our-sponsors-bronze">
        <a href="https://www.hudsonrivertrading.com/campus-recruiting/">
          <img src={hrt} alt="hrt" style={{ width: '70%' }} />
        </a>
        <a href="https://campus.rogers.com/">
          <img src={rogers} alt="Rogers" />
        </a>
        <a href="https://www.zynga.com/jobs/careers/">
          <img src={zynga} alt="zynga" />
        </a>
      </div>
      <div className="our-sponsors-startup">
        <a href="https://expo.io/">
          <img src={expo} alt="Expo" style={{ width: '100%' }} />
        </a>
        <a href="https://www.ratio.city/">
          <img src={ratiocity} alt="Ratio.city" style={{ width: '80%' }} />
        </a>
      </div>
    </div> */}
    <h1 className="our-sponsors-title">Our Partners</h1>
    <hr className="our-sponsors-divider"></hr>
    <div className="our-sponsors-shadow-container">
      <div className="our-sponsors-tab">
        <div className="our-sponsors-square"> </div>
        <div className="our-sponsors-square"> </div>
        <div className="our-sponsors-square"> </div>
      </div>
      <div className="our-sponsors-partners">
        <div className="our-sponsors-partners-row">
          <a href="https://cs.uwaterloo.ca/wics" target="_blank" rel="noreferrer noopener">
            <img src={wics} alt="wics" />
          </a>
          <a href="https://uwaterloo.ca/women-in-engineering/" target="_blank" rel="noreferrer noopener">
            <img src={wie} alt="wie" />
          </a>
          <a href="https://www.wolfram.com/" target="_blank" rel="noreferrer noopener">
            <img src={wolfram} alt="wolfram" />
          </a>
        </div>
        <div className="our-sponsors-partners-row">
          <a href="https://www.ai4goodlab.com/" target="_blank" rel="noreferrer noopener">
            <img src={ai} alt="ai" />
          </a>
          <a href="https://velocityincubator.com/" target="_blank" rel="noreferrer noopener">
            <img src={velocity} alt="velocity" />
          </a>
          <a href="https://www.voiceflow.com/" target="_blank" rel="noreferrer noopener">
            <img src={voiceflow} alt="voiceflow" />
          </a>
        </div>
        <div className="our-sponsors-partners-row">
          <a href="https://www.auntyskitchen.ca/" target="_blank" rel="noreferrer noopener">
            <img src={auntys} alt="auntys kitchen" />
          </a>
        </div>
        
      </div>
    </div>
  </div>
);

export default OurSponsors;
// here is  code
