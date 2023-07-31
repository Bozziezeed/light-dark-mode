import React, { useState } from "react";
import "./Header.css";
import Switch from "react-switch";

export default function Header(props) {
  const { theme, toggleSwitch, truth } = props;

  return (
    <>
      <div className={"header-container " + theme}>
        <h1>Mode [{theme}]</h1>
        <Switch
          onChange={toggleSwitch}
          checked={truth}
          className={theme}
          checkedIcon=""
          uncheckedIcon=""
          onColor="ffa500"
        />
      </div>
    </>
  );
}
