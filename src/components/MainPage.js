import React from "react";
import "./Styles/mainpage.scss";
import { CircleImg } from "./pages/CircleImg";
import { ClipPath } from "./pages/ClipPath";
import { Contents } from "./pages/Contents";
import { NavBar } from "./pages/NavBar";

const MainPage = () => {
  return (
    <>
      <div className="main_page">
        <div className="main_page_inner">
          <section className="nav">
            <NavBar />
          </section>
          <section className="clipath">
            <ClipPath />
          </section>

          <section className="content">
            <Contents />
          </section>

          <section className="circled_sec">
            <CircleImg />
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPage;
