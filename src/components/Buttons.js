import React from "react";
import mailicon from "../images/mailicon.png";
import linkedin2 from "../images/linkedin2.png";

export default function Buttons() {
  return (
    <div className="buttons">
      <button id="email" type="submit">
        <span><img src={mailicon} alt=".." height="15px" width="15px"/></span>
        Email
      </button>
      <button id="linkedin" type="submit">
        <span><img src={linkedin2} alt=".." height="18px" width="18px"/></span>
        LinkedIn
      </button>
    </div>
  );
}
