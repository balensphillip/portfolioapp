import React from "react";
import phillip from "../images/phillip.JPG";
import twittericon from "../images/twittericon.png";
import facebookicon from "../images/facebookicon.png";
import instagramicon from "../images/instagramicon.png";
import gitbesticon from "../images/gitbesticon.png";
import mailicon from "../images/mailicon.png";
import linkedin2 from "../images/linkedin2.png";

export default function Main() {
  return (
    <div className="profile">
      <div id="picture">
        <img src={phillip} alt=".." width="250px" />
        <p id="name">Balenzi Phillip</p>
        <p id="title">Frontend Developer</p>
        <p id="site">balenziphillip.com</p>
      </div>
      <span className="buttons">
        <button id="email" type="submit">
          <span>
            <img src={mailicon} alt=".." height="15px" width="15px" />
          </span>{" "}
          Email
        </button>
        <button id="linkedin" type="submit">
          <span>
            <img src={linkedin2} alt=".." height="18px" width="18px" />
          </span>{" "}
          LinkedIn
        </button>
      </span>
      <div className="About">
        <h2>About</h2>
        <p>
          I am a Frontend Webdeveloper equipped with a skillset in various technologies. I am a work in progress and 
          mainly focussed in working in React.js. I am also flexible to work with different software tools.
        </p>
      </div>
      <div className="Interests">
        <h2>Interests</h2>
        <p>
          I am interested in computing due to my for love for tech. I do jogging
          and swimming during my free time as well.
        </p>
      </div>
      <div className="Socialmedia">
        <span>
          <img src={twittericon} alt=".." height="30px" width="30px" />
          <img src={facebookicon} alt=".." height="30px" width="30px" />
          <img src={instagramicon} alt=".." height="30px" width="30px" />
          <img src={gitbesticon} alt=".." height="30px" width="30px" />
        </span>
      </div>
    </div>
  );
}
