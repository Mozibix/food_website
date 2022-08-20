import React from "react";
import "../Styles/navbar.scss";
import lock_img from "../images/lock.png";

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <span>Food Hunt</span>

          <ul>
            <li>BreakFast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>

          <img src={lock_img} alt="lock" />
        </nav>
      </div>
    </>
  );
};
