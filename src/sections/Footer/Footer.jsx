import React from "react";
import "./Footer.scss";
import logo from "../../resources/images/logo/apple-touch-icon.png"
const Footer = () => (
    <React.Fragment id="footer">
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logo} alt="logo" />
                <p className="footer-title">Reach out to us at hello@itstechnova.org</p>    
                <div className="footer-email-box">
                    <p>name@example.com</p>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Footer;