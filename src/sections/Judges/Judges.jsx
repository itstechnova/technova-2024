import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Judges.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import pic1 from "../../resources/images/testimonials/pic1.png";
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
                        <img className="judges-arrow" src={leftarrow} onClick={() => sliderRef?.current?.slickPrev()} />
                        <div className="judges-namecard">
                            <img className="judges-star" src={star}/>
                            {content.name}
                        </div>
                        <img className="judges-arrow" src={rightarrow} onClick={() => sliderRef?.current?.slickNext()}/>
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