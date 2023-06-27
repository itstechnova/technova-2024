import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Team from "../../sections/Team/Team";
import "./Contact.scss";
import contact from "../../resources/strings/contact";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import socials from "../../resources/strings/socials";
import mail from "../../resources/images/socials/mail.svg";
import ig from "../../resources/images/socials/ins.svg";
import linkedin from "../../resources/images/socials/linkedin.svg";
import facebook from "../../resources/images/socials/facebook.svg";
import twitter from "../../resources/images/socials/twitter.svg";
import Conduct from '../Footer/Conduct';
import emailVector from "../../resources/images/icons/emailvector.svg";

function Contact() {

    const [state, setState] = useState({
        email: null,
        success: false,
        error: false,
        screenWidth: 0,
    })

    const updateWindowDimensions = () => {
        setState({ ...state, screenWidth: window.innerWidth });
    }

    useEffect(() => {
        function handleResize() {
            updateWindowDimensions();
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const validateEmailAddress = (email) => {
        const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
        const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
        const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
        return email.match(emailRegEx);
    };

    async function submitEmail() {
        console.log("here");
        const isValidEmail = state.email && validateEmailAddress(state.email);

        if (!isValidEmail) {
            setState({ ...state, error: true, success: false });
            setTimeout(() => { setState({ ...state, email: "", error: false }) }, 5000)
            return;
        }

        const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUCqXqrW53nkw3xM5MDDjreqfnCNYGuIMcZZe_EvKZItrgiw/formResponse`

        await fetch(url, {
            "method": "POST",
            "mode": "no-cors",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                'access-control-allow-origin': '*',
            },
            "body": `entry.1170762674=${state.email}`
        })
        setState({ ...state, email: "", success: true, error: false })
        setTimeout(() => { setState({ ...state, email: "", success: false }) }, 5000)
    }

    const contactInfo = () => {
        return (
            <div className="contact">
                <h2 className="inclusivityStatement">Inclusivity Statement</h2>
                <br/>
                <h3 className="statement">TechNova’s mission is to create safe, inclusive and empowering spaces for women and 
                    non-binary individuals to start, grow and thrive in the technology industry. We ensure that 
                    all members of the hackathon are respectful of our participants' gender expression. The TechNova
                     team would also like to acknowledge that “female” or “women” is not an accurate description
                      for many people and it may make some feel unwelcome. We use the term Women+ to specifically
                       and intentionally include cis and trans women, as well as non-binary, agender, or intersex
                        people, and other gender minorities.
                </h3>
            </div>
        )
    }

    return (
        <SectionWrapper id="contact">
            {/* <Team /> */}
            <h1 className="contact-container">{contact.title}</h1>
            <hr/>
            <div className="contact-method">
            <div className="contact-method-container">
                <div className="contact-method-shadow-container">
                <div className="contact-method-tab">
                    <div className="contact-method-square"></div>
                    <div className="contact-method-square"></div>
                    <div className="contact-method-square"></div>
                </div>
                <React.Fragment id="footer">
                        <div className="footer-container">
                            <span className="footer-title">Reach out to us at 
                                <span style={{color: "#7676E8"}}> hello@itstechnova.org</span>
                            </span>
                            <br/>
                            <div className="email-wrapper">
                            {state.screenWidth >= 400 ? 
                            <input className="email-input" placeholder="    name@example.com" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />
                            : <input className="email-input" placeholder="      name@example.com" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />}
                                <div className="submit-wrapper" onClick={e => submitEmail()}>
                                    <div className="wrapper">
                                        <img src={emailVector} className="submit-btn" alt="Submit" />
                                    </div>
                                </div>
                            </div>
                            {state.success && <p> Thanks for signing up, we'll keep you updated!</p>}
                            {state.error && <p> Please enter a valid email.</p>}
                        </div>
                </React.Fragment>
                    <br/>
                    <div className="socials-row">
                    <SocialMediaLink src={mail} link={socials.email} />
                    <SocialMediaLink src={ig} link={socials.instagram} />
                    <SocialMediaLink src={linkedin} link={socials.linkedin} />
                    <SocialMediaLink src={facebook} link={socials.facebook} />
                    <SocialMediaLink src={twitter} link={socials.twitter} />
                    </div>
                    <Conduct />
                </div>
            </div>
            </div>
            <br/><br/><br/>
            <div className="contact-container">
                <div className="contact-row">
                    {contactInfo()}
                </div>
            </div>
        </SectionWrapper>
    );

}
export default Contact;