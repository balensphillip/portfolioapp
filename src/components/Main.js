import React from "react";
import phillip from "../images/phillip.JPG";

export default function Main() {
  return (
    <div className="profile">
        <img src={phillip} alt=".."/>
        <p id="name">Balenzi Phillip</p>
        <p id="title">Frontend Developer</p>
        <p id="site">balenziphillip.com</p>
    </div>
  );
}
