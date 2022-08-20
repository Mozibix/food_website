import React from "react";
import "../Styles/contents.scss";

export const Contents = () => {
  return (
    <>
      <div className="contents">
        <div className="contents_inner">
          <div className="header_text">
            <p>Delicious</p>
          </div>
          <div className="sub_heading">
            <p>Quench the hunger</p>
          </div>
          <div className="main_text">
            <p>
              Lorem ipsum dolor sit amet. Non sapiente temporibus eum eius enim
              ut aspernatur fugiat. Est modi iure aut aliquid unde aut nostrum
              vero eos sunt sunt in veniam dolore?
            </p>
          </div>

          <button>Quench Now</button>
        </div>
      </div>
    </>
  );
};
