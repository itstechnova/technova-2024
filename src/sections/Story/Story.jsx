import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import story from "../../resources/strings/story";
import pic1 from "../../resources/images/testimonials/pic1.png";
import pic2 from "../../resources/images/testimonials/pic2.png";
import pic3 from "../../resources/images/testimonials/pic3.png";
import pixelStar from "../../resources/images/icons/pixelStar.svg";
import flower from "../../resources/images/icons/HalfFlower.png";
import "./Story.scss";
import speech1 from "../../resources/images/testimonials/speechLeft.png";
import speech2 from "../../resources/images/testimonials/speechMiddle.png";
import speech3 from "../../resources/images/testimonials/speechRight.png";

const Story = () => {
    const [state, setState] = useState({
        screenWidth: window.innerWidth,
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
    }, [state])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const [hover1, setHover1] = useState(true);
    const handleHover1 = () => {
        if (hover1) {
            return;
        }
        if (hover2) {
            setHover2(!hover2);
        }
        if (hover3) {
            setHover3(!hover3);
        }
        setHover1(!hover1);
    }
    const [hover2, setHover2] = useState(false);
    const handleHover2 = () => {
        if (hover2) {
            return;
        }
        if (hover1) {
            setHover1(!hover1);
        }
        if (hover3) {
            setHover3(!hover3);
        }
        setHover2(!hover2);
    }
    const [hover3, setHover3] = useState(false);
    const handleHover3 = () => {
        if (hover3) {
            return;
        }
        if (hover1) {
            setHover1(!hover1);
        }
        if (hover2) {
            setHover2(!hover2);
        }
        setHover3(!hover3);
    }

    return (
    <SectionWrapper id="story" className="story">
    <img src={flower} alt="flower" style={{
        position: "absolute",
        right: "0",
        marginTop: "-10%",
        zIndex: "-1",
        width: "25%",
    }}></img>
      <h1 className="title">Testimonials</h1>
      <hr></hr>
      <h3 className="statement">
        Hackathons can be intimidating for those when you are new to the space, 
        and especially if you are a minority. So there needs to be a way to balance 
        the playing field and offer the opportunity, community, and support for women
        and non-binary individuals to thrive in tech.
      </h3>
      <div className="story-container">
            <div className="story-events">
                <img className="prep-image" style={{ gridArea: "prep-image" }} src={pic1} alt="prepare-tile" onMouseOver={handleHover1}/>
                <div style={{ gridArea: "prep-caption"}} className="story-caption">
                    <div className="story-description" onMouseOver={handleHover1}>
                        <img className="star" src={pixelStar} alt="star" />
                        <p className="story-intro">Rheea</p>    
                    </div>
                    {
                        hover1 ? <img className="speech1" src={speech1} alt="speech 1"/> : null
                    }
                </div>

                    <img className="hack-image" style={{ gridArea: "hack-image" }} src={pic2} alt="hack-tile" onMouseOver={handleHover2}/>
                    <div style={{ gridArea: "hack-caption"}} className="story-caption">
                        <div className="story-description" onMouseOver={handleHover2}>
                            <img className="star" src={pixelStar} alt="star" />    
                            <p className="story-intro">Emma</p>      
                        </div>
                        {hover2 ? <img className="speech2" src={speech2} alt="speech 2"/> : null}
                    </div>

                    <img className="connect-image" style={{gridArea: "connect-image"}} src={pic3} alt="connect-tile" onMouseOver={handleHover3}/>
                    <div style={{ gridArea: "connect-caption"}} className="story-caption">
                        <div className="story-description" onMouseOver={handleHover3}>
                            <img className="star" src={pixelStar} alt="star"/>
                            <p className="story-intro">Vanessa</p>   
                        </div>
                        {hover3 ? <img className="speech3" src={speech3} alt="speech 3"/> : null}  
                    </div>
            </div >

            <div className="story-mobile">
            <Slider {...settings}>
            <div className="story-slider-container">
                <img className="mobile-image" src={pic1} alt="profile pic 1" />
                <div className="mobile-text">
                    <div className="story-title">
                        <img className="star2" src={pixelStar} alt="star" /> 
                        <h3 className="name">{story.person1}</h3>       
                    </div>
                    <p className="testimonials">{story.testimonial1}</p>
                </div>
            </div>
            <div className="story-slider-container">
                <img className="mobile-image" src={pic2} alt="profile pic 2" />
                <div className="mobile-text">
                    <div className="story-title">
                    <img className="star2" src={pixelStar} alt="star" />
                    <h3 className="name">{story.person2}</h3> 
                        
                    </div>
                    <p className="testimonials">{story.testimonial2}</p>
                </div>
            </div>
            <div className="story-slider-container">
                <img className="mobile-image" src={pic3} alt="profile pic 3" />
                <div className="mobile-text">
                    <div className="story-title">
                    <img className="star2" src={pixelStar} alt="star" />  
                        <h3 className="name">{story.person3}</h3>
                        
                    </div>
                    <p className="testimonials">{story.testimonial3}</p>
                </div>
            </div>
            </Slider>
        </div>
        </div>
    </SectionWrapper>)
}

export default Story;