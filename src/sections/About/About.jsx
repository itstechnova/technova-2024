import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import connect from "../../resources/images/graphics/connect.svg"
import connectImg from "../../resources/images/graphics/connectImg.svg"
import community from "../../resources/images/graphics/community.svg"
import communityImg from "../../resources/images/graphics/communityImg.svg"
import create from "../../resources/images/graphics/create.svg"
import createImg from "../../resources/images/graphics/createImg.svg"

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const description = [
        {img: communityImg, des: community, cap: "Technical workshops and community-building events to prepare you for the hackathon and your career in technology!"},
        {img: createImg, des: create, cap: "A 36-hour virtual hackathon to work with a team of dedicated individuals to design, create, and build - brinding your project idea to life!"},
        {img: connectImg, des: connect, cap: "Tech fair to meet fellow hackers, make friends, and build bridges with industry professionals who want to connect with hackers like you!"}
    ]

    return (
    <SectionWrapper id="about" >
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>{about.title}</h1>
                    <br></br>
                    <p>{about.description1}</p>
                    <p>{about.description2}</p>
                </div>
            </div>
        </div>

        <div className = "about-container-des">
            <img 
            className="about-container-des-img" 
            src={description.at(0).img}
            alt="community"
            />

            <div className="about-container-des-caption">
                <img
                    src={description.at(0).des}
                    alt="communityDes"
                />
                
                <p className="about-text-cap">
                    {description.at(0).cap}
                </p>
            </div>
        </div>
    </SectionWrapper>
    )
};

export default About;
