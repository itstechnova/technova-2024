import React, {onClick, useState} from "react";
import "./Button.scss";
import arrow from "../../resources/images/icons/arrow.svg";

const Button = ({ label, link, type }) => {
  return (
    <a
      href={link}
      className={`button ${type ?? ""}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="label">{label}</div>
      <img className="arrow" src={arrow} alt="Arrow" />
    </a>
  );
};

export default Button;
