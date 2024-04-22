import React from "react";
import "./Icons.scss";
import amazonPic from "../../images/amazon-logo.jpg";
import ebayPic from "../../images/ebay-logo.jpg";
import alibabaPic from "../../images/alibaba-logo.jpg";
import applePic from "../../images/apple-logo.jpg";
import amicaPic from "../../images/amica-logo.jpg";
import alikPic from "../../images/alik-logo.jpg";

const Icons = () => {
  return (
    <section className="icons-container">
      <div className="icons-container__item">
        <img src={amazonPic} alt="amazon-logo" className="" />
        <span />
      </div>
      <img src={ebayPic} alt="amazon-logo" className="icons-container__item" />
      <span />
      <img
        src={alibabaPic}
        alt="amazon-logo"
        className="icons-container__item"
      />
      <img src={applePic} alt="amazon-logo" className="icons-container__item" />
      <span />
      <img src={amicaPic} alt="amazon-logo" className="icons-container__item" />
      <span />
      <img src={alikPic} alt="amazon-logo" className="icons-container__item" />
      <span />
    </section>
  );
};

export default Icons;
