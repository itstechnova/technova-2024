import React, { useState, useEffect } from "react";
import "./Team.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function capitalizeFirstLetter(text) {
    if (!text) return text; 
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const seriousImages = importAll(require.context('../../resources/images/team/2024', false, /1\.(png|jpe?g|svg)$/));
const funnyImages = importAll(require.context('../../resources/images/team/2024', false, /2\.(png|jpe?g|svg)$/));
const teamIcons = importAll(require.context('../../resources/images/team/icons', false, /\.(png|jpe?g|svg)$/));

const photosByTeam = {
    "LEADERSHIP": [
        { hot: seriousImages['alenka1.png'], goof: funnyImages['alenka2.png'], name: "Alenka Rondon", role: "Leadership Co-director", linkedin: "" },
        { hot: seriousImages['kriti1.png'], goof: funnyImages['kriti2.png'], name: "Kriti Sodhi", role: "Leadership Co-director", linkedin: "" },
    ],
    "LOGISTICS": [
        { hot: seriousImages['malvika1.png'], goof: funnyImages['malvika2.png'], name: "Malvika Patel", role: "Logistics Lead", linkedin: "" },
        { hot: seriousImages['smridhi1.png'], goof: funnyImages['smridhi2.png'], name: "Smridhi Bawa", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['isabella1.png'], goof: funnyImages['isabella2.png'], name: "Isabella Rossi", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['victoria1.png'], goof: funnyImages['victoria2.png'], name: "Victoria Chakma", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['bhavneet1.png'], goof: funnyImages['bhavneet2.png'], name: "Bhavneet Bola", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['miranda1.png'], goof: funnyImages['miranda2.png'], name: "Miranda Guo", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['emily1.png'], goof: funnyImages['emily2.png'], name: "Emily Luo", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['jansi1.png'], goof: funnyImages['jansi2.png'], name: "Jansi Shah", role: "Logistics Coordinator", linkedin: "" },
    ],
    "FINANCE": [
        { hot: seriousImages['saanika1.png'], goof: funnyImages['saanika2.png'], name: "Saanika Sharma", role: "Finance Lead", linkedin: "" },
        { hot: seriousImages['yukttha1.png'], goof: funnyImages['yukttha2.png'], name: "Yukttha Sivaraju", role: "Finance Coordinator", linkedin: "" },
        { hot: seriousImages['michellex1.png'], goof: funnyImages['michellex2.png'], name: "Michelle Xu", role: "Finance Coordinator", linkedin: "" },
        { hot: seriousImages['samantha1.png'], goof: funnyImages['samantha2.png'], name: "Samantha La", role: "Finance Coordinator", linkedin: "" },
    ],
    "DESIGN": [
        { hot: seriousImages['jessica1.png'], goof: funnyImages['jessica2.png'], name: "Jess Wu", role: "Design Lead", linkedin: "" },
        { hot: seriousImages['kaley1.png'], goof: funnyImages['kaley2.png'], name: "Kaley Lam", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['michellen1.png'], goof: funnyImages['michellen2.png'], name: "Michelle Nguyen", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['rachel1.png'], goof: funnyImages['rachel2.png'], name: "Rachel Joy Copreros", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['clara1.png'], goof: funnyImages['clara2.png'], name: "Clara Liu", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['jasleen1.png'], goof: funnyImages['jasleen2.png'], name: "Jasleen Badwal", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['tasnouva1.png'], goof: funnyImages['tasnouva2.png'], name: "Tasnouva Khan", role: "Design Coordinator", linkedin: "" },
    ],
    "ENGINEERING": [
        { hot: seriousImages['lucy1.png'], goof: funnyImages['lucy2.png'], name: "Lucy Wang", role: "Engineering Lead", linkedin: "" },
        { hot: seriousImages['bhavneet1.png'], goof: funnyImages['bhavneet2.png'], name: "Bhavneet Bola", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['prachee1.png'], goof: funnyImages['prachee2.png'], name: "Prachee Nanda", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['shivali1.png'], goof: funnyImages['shivali2.png'], name: "Shivali Sen", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['lindsay1.png'], goof: funnyImages['lindsay2.png'], name: "Lindsay Zhang", role: "Engineering Coordinator", linkedin: "" },
    ],
    "SPONSORSHIP": [
        { hot: seriousImages['madeline1.png'], goof: funnyImages['madeline2.png'], name: "Madeline Kim", role: "Sponsorship Lead", linkedin: "" },
        { hot: seriousImages['mahzabin1.png'], goof: funnyImages['mahzabin2.png'], name: "Mahzabin Rashid Fariha", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['ivy1.png'], goof: funnyImages['ivy2.png'], name: "Ivy Lei", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['helena1.png'], goof: funnyImages['helena2.png'], name: "Helena Xu", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['scarlett1.png'], goof: funnyImages['scarlett2.png'], name: "Scarlett Jet", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['yukttha1.png'], goof: funnyImages['yukttha2.png'], name: "Yukttha Sivaraju", role: "Sponsorship Coordinator", linkedin: "" },
    ],
    "MARKETING": [
        { hot: seriousImages['kshama1.png'], goof: funnyImages['kshama2.png'], name: "Kshama Patel", role: "Marketing Lead", linkedin: "" },  
        { hot: seriousImages['amie1.png'], goof: funnyImages['amie2.png'], name: "Amie Ahn", role: "Marketing Coordinator", linkedin: "" },  
        { hot: seriousImages['vehara1.png'], goof: funnyImages['vehara2.png'], name: "Vehara Rupasinghe", role: "Marketing Coordinator", linkedin: "" }
    ],
}

const teams = [
    "LEADERSHIP", 
    "LOGISTICS",
    "FINANCE",
    "ENGINEERING",
    "DESIGN",
    "SPONSORSHIP",
    "MARKETING",
]

const MemberCard = (props) => {
    const { photo, name } = props;
    const [imgSrc, setImgSrc] = useState(photo.hot);

    const handleHover = () => {
        setImgSrc(photo.goof);
    }

    const handleUnhover = () => {
        setImgSrc(photo.hot);
    }

    return (
        <div className="team-member-card" >
            <div className="team-img-container">
                <img
                    onMouseOver={handleHover}
                    onMouseOut={handleUnhover}
                    src={imgSrc}
                    alt={name}
                    style = {{borderRadius: '50%', borderStyle:"solid", borderWidth: 2, borderColor:"black"}}
                />
            </div>
            <p>{name}</p>
        </div>
    );
}

const Team = () => {

    return (
        <SectionWrapper id="team" >
            <div className="team-container">
                <div className="team-text">
                    <h1 className="team-title">Meet the Team</h1>
                </div>
                <hr></hr>

            <div className="team-members">
            {
                teams.map((team) => {
                return (
                    <>
                    <div className="team-icon-card">
                        <div className="team-icon-container">
                            <img 
                            src = {teamIcons[`${team}.png`]}
                            alt={team} 
                            />
                            <p className="viaoda-libre-regular">{capitalizeFirstLetter(team.toLowerCase())}</p>
                        </div>
                    </div>
                    
                    {
                    photosByTeam[team].map((photo, index) => {
                        return (
                        <MemberCard
                            key={`${team}-${photo.name}`}
                            photo={photo}
                            name={photo.name}
                        />
                        );
                    })}
                    </>
                );
                })
            }
            </div>

            </div>
        </SectionWrapper>
    );
}

export default Team;
