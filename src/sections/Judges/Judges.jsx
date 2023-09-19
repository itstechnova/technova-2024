import React, { useRef, useEffect } from "react";
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
        centerPadding: '0px',
        dots: false,
        infinite: true,
        speed: 520,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,


      };
      const sliderRef = useRef(null);

    // this part is in progress
      useEffect(() => {
        const addClasses = () => {
            const slideMinus2 = document.querySelector('.slick-active[data-index="-2"]');
            const slideMinus1 = document.querySelector('.slick-active[data-index="-1"]');
            const slide1 = document.querySelector('.slick-active[data-index="1"]');
            const slide2 = document.querySelector('.slick-active[data-index="2"]');

            if (slideMinus2) {
                slideMinus2.classList.add('left2');
            }
            console.log(slideMinus1);

            if (slideMinus1) {
                slideMinus1.classList.add('left1');
            }
            if (slide1) {
                slide1.classList.add('right1');
            }
            if (slide2) {
                slide2.classList.add('right2');
            }
        };

        addClasses();
    }, []);

    var leftIdx = -2;

    const prevSlide = () => {
       let left2 = document.querySelector('.left2');
       if (left2) {
        left2.classList.remove('left2');
       }
       leftIdx -= 1;

       sliderRef?.current?.slickPrev();
       left2 = document.querySelector(`.slick-active[data-index="${leftIdx}"]`);
       if (left2) {
            left2.classList.add('left2');
        }
    }

    const nextSlide = () => {
        let right2 = document.querySelector('.right2');
        if (right2) {
            right2.classList.remove('right2');
        };
        sliderRef?.current?.slickNext();

        right2 = document.querySelector('.slick-active[data-index="3"]')
        if (right2) {
            right2.classList.add('right2');
        };
    }

    return (
        
        <SectionWrapper id="judges">
            <h1 className="judges-title">Judges</h1>
            <hr></hr>
            
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

          <img className="judges-flower" src={flower} />
        </SectionWrapper>
    );
};
export default Judges;