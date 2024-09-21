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
        {img: communityImg, des: community},
        {img: createImg, des: create},
        {img: connectImg, des: connect}
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
            className="about-container-des-image" 
            src={description.at(0).img}
            alt="community"
            />
        </div>
    </SectionWrapper>
    )
};

export default About;
