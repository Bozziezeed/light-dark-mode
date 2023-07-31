import React from "react";
import "./Content.css";
import dark from "../image/dark.svg";
import light from "../image/light.svg";

export default function Content(props) {
  const { theme, truth } = props;

  return (
    <>
      <div className="content-container">
        <div className={"text-container " + theme}>
          <h1>Bozziezeed Official</h1>
          <h3>Light/Dark Mode Workshop</h3>
        </div>
        <img src={truth ? dark : light} alt={truth ? dark : light} />
      </div>
    </>
  );
}
