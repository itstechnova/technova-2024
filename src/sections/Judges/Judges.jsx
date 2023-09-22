import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Judges.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import pic1 from "../../resources/images/testimonials/pic1.png";
import pic2 from "../../resources/images/testimonials/pic3.png";
import pointer from "../../resources/images/icons/judges-selector.png"
import star from "../../resources/images/icons/pixelStar.svg"
import leftarrow from "../../resources/images/icons/left-arrow.svg"
import rightarrow from "../../resources/images/icons/right-arrow.svg"
import flower from "../../resources/images/icons/judges-flower.svg"


var showcase = [
    {
        image: pic1,
      name: "Joe Doe"
    },
    {
        image: pic2,
        name: "Joe Doe"
    },
    {
        image: pic1,
        name: "Joe Doe"
    },
    {
        image: pic1,
        name: "Joe Doe"
    },
    {
        image: pic1,
        name: "Joe Doe"
    },
    {
        image: pic1,
        name: "Joe Doe"
    }
  ];

export const Judges = () => {    
    const settings = {
        centerMode: true,
        centerPadding: '160px',
        dots: false,
        infinite: true,
        speed: 520,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 3
                }
            }
        ]
      };
      const sliderRef = useRef(null);


    const prevSlide = () => {
       sliderRef.current?.slickPrev();
    }

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    }

    return (
        
        <SectionWrapper id="judges">
            <h1 className="judges-title">Judges</h1>
            <hr></hr>
            
            <div className="judges-carousel-wrapper">
                <div className="judges-carousel">
                <Slider ref={sliderRef} {...settings}>
                {showcase.map((content, index) => (
                    <div className="judges-card">
                        <img className="judges-pointer" src={pointer} />
                        <img className="judges-picture" src={content.image} />

                        <div className="judges-desc">
                            <img className="judges-arrow" src={leftarrow} onClick={prevSlide} />
                            <div className="judges-namecard">
                                <img className="judges-star" src={star}/>
                                {content.name}
                            </div>
                            <img className="judges-arrow" src={rightarrow} onClick={nextSlide}/>
                        </div>
                    </div>
                ))}
                </Slider>
                </div>
            </div>
            <img className="judges-flower" src={flower} />
    
        </SectionWrapper>
    );
};
export default Judges;