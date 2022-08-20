import React from "react";
import "../Styles/circleimg.scss";
import rotate_img from "../images/rotateimg.png";
import middle_img from "../images/middle.png";
import arrow_img from "../images/arrow.png";

export const CircleImg = () => {
  return (
    <>
      <div className="img_section">
        <div className="img_section_inner">
          <div className="circled_img">
            <img src={rotate_img} alt="circle" />
          </div>
          <div className="middle_img">
            <img src={middle_img} alt="middlepic" />
          </div>
          <div className="arrow">
            <img src={arrow_img} alt="arrow" />
            <img src={arrow_img} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};
