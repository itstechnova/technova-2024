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

const seriousImages = importAll(require.context('../../resources/images/team/', false, /1\.(png|jpe?g|svg)$/));
const funnyImages = importAll(require.context('../../resources/images/team/', false, /2\.(png|jpe?g|svg)$/));

const photosByTeam = {
    "LEADERSHIP": [
        { hot: seriousImages['julianne1.png'], goof: funnyImages['julianne2.png'], name: "Julianne Jorda", role: "Leadership", linkedin: "" },
        { hot: seriousImages['angela1.png'], goof: funnyImages['angela2.png'], name: "Angela Law", role: "Leadership", linkedin: "" },
    ],
    "LOGISTICS": [
        { hot: seriousImages['malvika1.png'], goof: funnyImages['malvika2.png'], name: "Malvika Patel", role: "Logistics Lead", linkedin: "" },
        { hot: seriousImages['bhavneet1.png'], goof: funnyImages['bhavneet2.png'], name: "Bhavneet Bola", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['scarlett1.png'], goof: funnyImages['scarlett2.png'], name: "Scarlett Jett", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['sagun1.png'], goof: funnyImages['sagun2.png'], name: "Sagun Malwatkar", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['ivy1.png'], goof: funnyImages['ivy2.png'], name: "Ivy Lei", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['victoria1.png'], goof: funnyImages['victoria2.png'], name: "Victoria Chakma", role: "Logistics Coordinator", linkedin: "" },
        { hot: seriousImages['jasleen1.png'], goof: funnyImages['jasleen2.png'], name: "Jasleen Badwal", role: "Logistics Coordinator", linkedin: "" },
    ],
    "FINANCE": [
        { hot: seriousImages['joyce1.png'], goof: funnyImages['joyce2.png'], name: "Joyce Jorda", role: "Finance Lead", linkedin: "" },
        { hot: seriousImages['saanika1.png'], goof: funnyImages['saanika2.png'], name: "Saanika Sharma", role: "Finance Coordinator", linkedin: "" },
        { hot: seriousImages['amanda1.png'], goof: funnyImages['amanda2.png'], name: "Amanda Gressmann", role: "Finance Coordinator", linkedin: "" },
        { hot: seriousImages['bhavneet1.png'], goof: funnyImages['bhavneet2.png'], name: "Bhavneet Bola", role: "Logistics Coordinator", linkedin: "" },
    ],
    "DESIGN": [
        { hot: seriousImages['jennifer1.png'], goof: funnyImages['jennifer2.png'], name: "Jennifer Lin", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['rachel1.png'], goof: funnyImages['rachel2.png'], name: "Rachel Joy Copreros", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['clara1.png'], goof: funnyImages['clara2.png'], name: "Clara Liu", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['jessica1.png'], goof: funnyImages['jessica2.png'], name: "Jess Wu", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['kaley1.png'], goof: funnyImages['kaley2.png'], name: "Kaley Lam", role: "Design Coordinator", linkedin: "" },
        { hot: seriousImages['tasnouva1.png'], goof: funnyImages['tasnouva2.png'], name: "Tasnouva Khan", role: "Design Coordinator", linkedin: "" },
    ],
    "ENGINEERING": [
        { hot: seriousImages['mahzabin1.png'], goof: funnyImages['mahzabin2.png'], name: "Mahzabin Rashid Fariha", role: "Engineering Lead", linkedin: "" },
        { hot: seriousImages['rachelle1.png'], goof: funnyImages['rachelle2.png'], name: "Rachelle Fontanilla", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['lucy1.png'], goof: funnyImages['lucy2.png'], name: "Lucy Wang", role: "Engineering Coordinator", linkedin: "" },
        { hot: seriousImages['chun1.png'], goof: funnyImages['chun2.png'], name: "Chun Ye", role: "Engineering Coordinator", linkedin: "" },
    ],
    "SPONSORSHIP": [
        { hot: seriousImages['kriti1.png'], goof: funnyImages['kriti2.png'], name: "Kriti Sodhi", role: "Sponsorship Lead", linkedin: "" },
        { hot: seriousImages['darya1.png'], goof: funnyImages['darya2.png'], name: "Darya Zakharova", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['katherine1.png'], goof: funnyImages['katherine2.png'], name: "Katherine Li", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['prasanna1.png'], goof: funnyImages['prasanna2.png'], name: "Prasanna Thallapalli", role: "Sponsorship Coordinator", linkedin: "" },
        { hot: seriousImages['diliara1.jpg'], goof: funnyImages['member2.png'], name: "Diliara Kaniazova", role: "Sponsorship Coordinator", linkedin: "" },
    ],
    "MARKETING": [
        { hot: seriousImages['alenka1.png'], goof: funnyImages['alenka2.png'], name: "Alenka Rondon", role: "Marketing Lead", linkedin: "" },
        { hot: seriousImages['jasmine1.png'], goof: funnyImages['jasmine2.png'], name: "Jasmine Jiang", role: "Marketing Coordinator", linkedin: "" },
        { hot: seriousImages['haley1.png'], goof: funnyImages['haley2.png'], name: "Haley Song", role: "Marketing Coordinator", linkedin: "" },
        { hot: seriousImages['kshama1.png'], goof: funnyImages['kshama2.png'], name: "Kshama Patel", role: "Marketing Coordinator", linkedin: "" },    
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
