import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Team from "../../sections/Team/Team";
import "./Contact.scss";
import contact from "../../resources/strings/contact";
import './ContactMethod.scss'
import arrow from "../../resources/images/icons/submit.svg";
import contactImage from "../../resources/images/contact.svg";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import socials from "../../resources/strings/socials";
import mail from "../../resources/images/socials/mailFill.svg";
import ig from "../../resources/images/socials/igFill.svg";
import linkedin from "../../resources/images/socials/linkedinFill.svg";
import facebook from "../../resources/images/socials/facebookFill.svg";
import twitter from "../../resources/images/socials/twitterFill.svg";
import wie from '../../resources/images/logo/wie.png'
import wics from '../../resources/images/logo/wics.png'
import Footer from '../Footer/Footer'
import Conduct from '../Footer/Conduct';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    console.log(state);

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
            <Team />
            <h1 className="contact-container">{contact.title}</h1>
            <br/>
            <div className="contact-method">
            <div className="contact-method-container">
                <div className="contact-method-shadow-container">
                <div className="contact-method-tab">
                    <div className="contact-method-square">  </div>
                    <div className="contact-method-square">  </div>
                    <div className="contact-method-square">  </div>
                </div>
                    <Footer />
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