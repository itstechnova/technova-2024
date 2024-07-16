import React, { useState, useEffect } from "react";
import "./Team.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import linkedin from "../../resources/images/socials/linkedinFill.svg";

import folderClosed from "../../resources/images/graphics/folder-closed.png";
import folderHoverClosed from "../../resources/images/graphics/folder-hover-closed.png";
import folderOpen from "../../resources/images/graphics/folder-open.png";
import folderHoverOpen from "../../resources/images/graphics/folder-hover-open.png";

import carouselArrow from "../../resources/images/graphics/carousel-button-default.png";
import carouselArrowHover from "../../resources/images/graphics/carousel-button-hover.png";

import Carousel from "./Carousel";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const seriousImages = importAll(require.context('../../resources/images/team', false, /1\.(png|jpe?g|svg)$/));
const funnyImages = importAll(require.context('../../resources/images/team', false, /2\.(png|jpe?g|svg)$/));

const photosByTeam = {
    "LEADERSHIP": [
        { hot: seriousImages['julianne1.png'], goof: funnyImages['julianne2.png'], name: "Julianne Jorda", role: "Leadership Advisor", linkedin: "" },
        { hot: seriousImages['alenka1.png'], goof: funnyImages['alenka2.png'], name: "Alenka Rondon", role: "Leadership Co-director", linkedin: "" },
        { hot: seriousImages['kriti1.png'], goof: funnyImages['kriti2.png'], name: "Kriti Sodhi", role: "Leadership Co-director", linkedin: "" },
    ],
    "LOGISTICS": [
        { hot: seriousImages['malvika1.png'], goof: funnyImages['malvika2.png'], name: "Malvika Patel", role: "Logistics Lead", linkedin: "" },
        { hot: seriousImages['smridhi1.png'], goof: funnyImages['smridhi2.png'], name: "Smridhi Bawa", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['isabella1.png'], goof: funnyImages['isabella2.png'], name: "Isabella Rossi", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['victoria1.png'], goof: funnyImages['victoria2.png'], name: "Victoria Chakma", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['simrit1.png'], goof: funnyImages['simrit2.png'], name: "Simrit Mangat", role: "Logistics Coordinator", linkedin: "" },
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
                />
            </div>
            <p>{name}</p>
        </div>
    );
}

const Folder = (props) => {
    const { team, handleOnClick, isActive } = props;
    const [isHovered, setIsHovered] = useState(false);

    // Determine the folder image based on isActive and isHovered state
    let folderImage = folderClosed;
    if (isActive) {
        folderImage = isHovered ? folderHoverOpen : folderOpen;
    } else {
        folderImage = isHovered ? folderHoverClosed : folderClosed;
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`team-folder ${isActive ? 'active' : ''}`}
            onClick={() => handleOnClick(team)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="team-folder-img-container">
                <img src={folderImage} alt={team}/>
            </div>
            <h3>{team}</h3>
        </div>
    );
}

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState("LEADERSHIP");
    const [currentPage, setCurrentPage] = useState(0);
    const [foldersPerPage, setFoldersPerPage] = useState(3);

    const handleTeamSelect = (teamName) => {
        setSelectedTeam(teamName);
        console.log(selectedTeam)
    };

    const handleWindowSizeChange = () => {
        if (window.innerWidth <= 768) {
            setFoldersPerPage(1);
        } else {
            setFoldersPerPage(3);
        }
    };

    const filteredPhotos = photosByTeam[selectedTeam];
    const totalFolders = teams.length;
    const totalPages = Math.ceil(totalFolders / foldersPerPage);

    const startIndex = currentPage * foldersPerPage;
    const endIndex = Math.min(startIndex + foldersPerPage, totalFolders);

    const handlePrevPage = () => {
        const newPage = Math.max(currentPage - 1, 0);
        setCurrentPage(newPage);
        const newSelectedTeam = teams[newPage * foldersPerPage]; // Select the first folder on the new page
        setSelectedTeam(newSelectedTeam);
    };

    const handleNextPage = () => {
        const newPage = Math.min(currentPage + 1, totalPages - 1);
        setCurrentPage(newPage);
        const newSelectedTeam = teams[newPage * foldersPerPage]; // Select the first folder on the new page
        setSelectedTeam(newSelectedTeam);
    };

    useEffect(() => {
        handleWindowSizeChange();

        window.addEventListener("resize", handleWindowSizeChange);

        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <SectionWrapper id="team" >
            <div className="team-container">
                <div className="team-text">
                    <h1 className="team-title">Meet the Team</h1>
                </div>
                <hr></hr>
                <div className="team-carousel">
                    <div className="team-pagination prev" onClick={handlePrevPage}>
                        {currentPage !== 0 && ( <img src={carouselArrow} alt="Previous" />)}
                    </div>
                    <div className="team-folders">
                        {teams.slice(startIndex, endIndex).map((team, index) => {
                            return (
                                <Folder 
                                    team={team} 
                                    key={team}
                                    handleOnClick={() => handleTeamSelect(team)} 
                                    isActive={team === selectedTeam}
                                />
                            )
                        })}
                    </div>
                    <div className="team-pagination next" onClick={handleNextPage}>
                        {currentPage !== totalPages - 1 && ( <img src={carouselArrow} alt="Next" />)}
                    </div>
                    
                </div>

                <div className="team-members">
                    {filteredPhotos.map((photo, index) => {
                        return (
                            <MemberCard 
                                key={`${selectedTeam}-${photo.name}`}
                                photo={photo}  
                                name={photo.name} 
                            />
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Team;
