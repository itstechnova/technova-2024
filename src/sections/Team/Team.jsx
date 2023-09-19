import React, { useState } from "react";
import "./Team.scss";

import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import linkedin from "../../resources/images/socials/linkedinFill.svg";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const seriousImages = importAll(require.context('../../resources/images/team/', false, /1\.(png|jpe?g|svg)$/));
const funnyImages = importAll(require.context('../../resources/images/team/', false, /2\.(png|jpe?g|svg)$/));

const photos = [
    { hot: seriousImages['julianne1.png'], goof: funnyImages['julianne2.png'], name: "Julianne Jorda", role: "Leadership", linkedin: "" },
    { hot: seriousImages['angela1.png'], goof: funnyImages['angela2.png'], name: "Angela Law", role: "Leadership", linkedin: "" },
    { hot: seriousImages['joyce1.png'], goof: funnyImages['joyce2.png'], name: "Joyce Jorda", role: "Finance Lead", linkedin: "" },
    { hot: seriousImages['kriti1.png'], goof: funnyImages['kriti2.png'], name: "Kriti Sodhi", role: "Sponsorship Lead", linkedin: "" },
    { hot: seriousImages['alenka1.png'], goof: funnyImages['alenka2.png'], name: "Alenka Rondon", role: "Marketing Lead", linkedin: "" },
    { hot: seriousImages['mahzabin1.png'], goof: funnyImages['mahzabin2.png'], name: "Mahzabin Rashid Fariha", role: "Engineering Lead", linkedin: "" },
    { hot: seriousImages['malvika1.png'], goof: funnyImages['malvika2.png'], name: "Malvika Patel", role: "Logistics Lead", linkedin: "" },
    { hot: seriousImages['amanda1.png'], goof: funnyImages['amanda2.png'], name: "Amanda Gressmann", role: "Finance Coordinator", linkedin: "" },

    { hot: seriousImages['darya1.png'], goof: funnyImages['darya2.png'], name: "Darya Zakharova", role: "Sponsorship Coordinator", linkedin: "" },
    { hot: seriousImages['katherine1.png'], goof: funnyImages['katherine2.png'], name: "Katherine Li", role: "Sponsorship Coordinator", linkedin: "" },
    { hot: seriousImages['prasanna1.png'], goof: funnyImages['prasanna2.png'], name: "Prasanna Thallapalli", role: "Sponsorship Coordinator", linkedin: "" },
    { hot: seriousImages['darya1.png'], goof: funnyImages['darya2.png'], name: "Diliara Kaniazova", role: "Sponsorship Coordinator", linkedin: "" },


    { hot: seriousImages['bhavneet1.png'], goof: funnyImages['bhavneet2.png'], name: "Bhavneet Bola", role: "Logistics Coordinator", linkedin: "" },
    { hot: seriousImages['scarlett1.png'], goof: funnyImages['scarlett2.png'], name: "Scarlett Jett", role: "Logistics Coordinator", linkedin: "" },
    { hot: seriousImages['sagun1.png'], goof: funnyImages['sagun2.png'], name: "Sagun Malwatkar", role: "Logistics Coordinator", linkedin: "" },
    { hot: seriousImages['ivy1.png'], goof: funnyImages['ivy2.png'], name: "Ivy Lei", role: "Logistics Coordinator", linkedin: "" },
    { hot: seriousImages['victoria1.png'], goof: funnyImages['victoria2.png'], name: "Victoria Chakma", role: "Logistics Coordinator", linkedin: "" },
    { hot: seriousImages['jasleen1.png'], goof: funnyImages['jasleen2.png'], name: "Jasleen Badwal", role: "Logistics Coordinator", linkedin: "" },

    { hot: seriousImages['lucy1.png'], goof: funnyImages['lucy2.png'], name: "Lucy Wang", role: "Engineering Coordinator", linkedin: "" },
    { hot: seriousImages['chun1.png'], goof: funnyImages['chun2.png'], name: "Chun Ye", role: "Engineering Coordinator", linkedin: "" },
    { hot: seriousImages['rachelle1.png'], goof: funnyImages['rachelle2.png'], name: "Rachelle Fontanilla", role: "Engineering Coordinator", linkedin: "" },

    { hot: seriousImages['saanika1.png'], goof: funnyImages['saanika2.png'], name: "Saanika Sharma", role: "Finance Coordinator", linkedin: "" },

    { hot: seriousImages['jasmine1.png'], goof: funnyImages['jasmine2.png'], name: "Jasmine Jiang", role: "Marketing Coordinator", linkedin: "" },
    { hot: seriousImages['haley1.png'], goof: funnyImages['haley2.png'], name: "Haley Song", role: "Marketing Coordinator", linkedin: "" },
    { hot: seriousImages['kshama1.png'], goof: funnyImages['kshama2.png'], name: "Kshama Patel", role: "Marketing Coordinator", linkedin: "" },


    { hot: seriousImages['jennifer1.png'], goof: funnyImages['jennifer2.png'], name: "Jennifer Lin", role: "Design Coordinator", linkedin: "" },
    { hot: seriousImages['rachel1.png'], goof: funnyImages['rachel2.png'], name: "Rachel Joy Copreros", role: "Design Coordinator", linkedin: "" },
    { hot: seriousImages['clara1.png'], goof: funnyImages['clara2.png'], name: "Clara Liu", role: "Design Coordinator", linkedin: "" },
    { hot: seriousImages['jessica1.png'], goof: funnyImages['jessica2.png'], name: "Jess Wu", role: "Design Coordinator", linkedin: "" },
    { hot: seriousImages['kaley1.png'], goof: funnyImages['kaley2.png'], name: "Kaley Lam", role: "Design Coordinator", linkedin: "" },
    { hot: seriousImages['tasnouva1.png'], goof: funnyImages['tasnouva2.png'], name: "Tasnouva Khan", role: "Design Coordinator", linkedin: "" },
]

const PhotoCard = (props) => {
    const { photo, onHover, onUnhover } = props;
    const [imgSrc, setImgSrc] = useState(photo.hot);

    const handleHover = () => {
        setImgSrc(photo.goof);
        onHover && onHover();
    }

    const handleUnhover = () => {
        setImgSrc(photo.hot);
        onUnhover && onUnhover();
    }

    return (
        <img
            onMouseOver={() => handleHover()}
            onMouseOut={() => handleUnhover()}
            src={imgSrc}
            alt={photo.desc}
        />
    );
}

const Team = () => {
    const [id, setId] = useState(0);
    return (
        <div className="team-container">
            <div className="team-text">
                <h2>Meet the Team</h2>
                <div>
                    <SocialMediaLink src={linkedin} link={photos[id].linkedin} />
                    <p className="team-text-default">{photos[id].name} | {photos[id].role}</p>
                    <p className="team-text-mobile">{photos[id].name} <br /> {photos[id].role}</p>
                </div>

            </div>
            <div className="team-photos">
                {photos.map((photo, index) => {
                    return (
                        <PhotoCard photo={photo} id={index} onHover={() => setId(index)} />
                    )
                })}
            </div>
        </div>
    );
}

export default Team;
