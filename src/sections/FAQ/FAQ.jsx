import React from "react";
import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import speech from "../../resources/images/graphics/speech.svg";

import "./FAQ.scss";

const FAQ = () => (
  <SectionWrapper id="faq">
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <hr></hr>
      <div className="faq-questions">
        <div className="faq-left-col">
          <ExpandableCard color="pink" question={"What is a hackathon?"}>
            A hackathon is an event where students work together to build a
            technology-based solution to a problem. You can create an app, a
            website, a browser extension, whatever you’d like. The sky’s the
            limit, and we’ll be here to help along the way!
          </ExpandableCard>
          <ExpandableCard
            color="turqoise"
            question={"Is this event only for Waterloo students?"}
          >
            No! Our event is open to all women and nonbinary people in high
            school or post-secondary.
          </ExpandableCard>
          <ExpandableCard question={"How many people can form a team?"}>
            Teams can consist of up to 4 hackers. You can apply with or without a team
            and we will set you up with one!  There will be plenty of opportunities to
            connect with your teammates and others during the hackathon.
          </ExpandableCard>
          <ExpandableCard
            color="pink"
            question={"What kind of workshops are there?"}
          >
            There will be a variety of workshops, including both technical and
            career-related topics. Additionally, there will be workshops for
            both beginner and advanced hackers. Some examples could be Resume
            Writing, Networking, Intro to X, Artifical Intelligence.
          </ExpandableCard>
        </div>
        <div className="faq-right-col">
          <ExpandableCard
            color="pink"
            question={"What if I don't know how to code?"}
          >
            That's ok! Hackers have many roles including project management and
            prototyping! Your team will need people to help ideate, design, and
            pitch your hack in order to bring it to life, so your unique skills
            will definitely be an asset!
          </ExpandableCard>
          <ExpandableCard
            color="turqoise"
            question={"Why is this event women+ only?"}
          >
            Women+ are underrepresented in this field, and although there’s been
            progress, there is still a long way to go! Thus we want to create a
            safe and welcoming space for our hackers to grow and create unique
            projects.
          </ExpandableCard>
          <ExpandableCard question={"Is there a cost to attend?"}>
            TechNova is free to attend!
          </ExpandableCard>
          <ExpandableCard
            color="pink"
            question={"I applied, what happens next?"}
          >
            We will be reviewing applications on a rolling basis, so keep an eye
            on your email - that's how you’ll hear back from us about decisions.
          </ExpandableCard>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQ;
