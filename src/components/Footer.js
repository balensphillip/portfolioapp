import React from "react";
import twittericon from "../images/twittericon.png"
import facebookicon from "../images/facebookicon.png"
import instagramicon from "../images/instagramicon.png"
import gitbesticon from "../images/gitbesticon.png"

export default function Footer() {
  return (
    <div className="Socialmedia">
        <span>
          <img src={twittericon} alt=".." height="30px" width="30px" />
          <img src={facebookicon} alt=".." height="30px" width="30px" />
          <img src={instagramicon} alt=".." height="30px" width="30px" />
          <img src={gitbesticon} alt=".." height="30px" width="30px" />
        </span>
      </div>
  );
}
