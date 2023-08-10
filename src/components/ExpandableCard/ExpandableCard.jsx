import React, { useState, useEffect } from "react";
import expand from "../../resources/images/icons/expand_card.svg";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  const [expanded, setExpanded] = useState(props.expand);
  useEffect(() => {
    setExpanded(props.expand);
  }, [props.expand]);

  return (
    <button onClick={() => setExpanded(!expanded)} className={`card + ${props.color}`}>
      <div className="summary">
        <h1 className="question">{props.question}</h1>
        <img
          src={expand}
          alt="expand card"
          className="faq-arrow"
          aria-expanded={expanded}
        />
      </div>
      <div className="answer-container" aria-expanded={!expanded}>
        <div className="answer">{props.children}</div>
      </div>
    </button>
  );
};

export default ExpandableCard;
