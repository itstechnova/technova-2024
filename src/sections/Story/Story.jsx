import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ourStoryStrings from "../../resources/strings/story";

import "./Story.scss";

var content = [
    {
        quote: ourStoryStrings.quote1Text,
        name: ourStoryStrings.quote1Name,
    },
    {
        quote: ourStoryStrings.quote2Text,
        name: ourStoryStrings.quote2Name,
    },
    {
        quote: ourStoryStrings.quote3Text,
        name: ourStoryStrings.quote3Name,

    }
]

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

    return (<SectionWrapper id="story" className="story">
      <h1 className="title">Testimonials</h1>
      <hr></hr>
    </SectionWrapper>)
}

export default Story;