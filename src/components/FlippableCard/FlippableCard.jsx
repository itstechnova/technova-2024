import React, { useState, useEffect } from "react";
import "./FlippableCard.scss";

const FlippableCard = (props) => {
  return (
    <div class="flip-card">
      <div className={`flip-card-inner + ${props.color}`}>
        <div className={`flip-card-front + ${props.color}`}>
          <h3>{props.question}</h3>
        </div>
        <div className={`flip-card-back + ${props.color}`}>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
