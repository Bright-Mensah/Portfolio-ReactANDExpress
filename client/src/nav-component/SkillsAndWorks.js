import React from "react";
import "../CSS/skills.css";
import RetainMenu from "../component/RetainMenu";
import login from "../Portfolio-images/login.jpg";
import signup from "../Portfolio-images/signup.jpg";
import forgotpassword from "../Portfolio-images/forgotPassword.jpg";
import splashscreen from "../Portfolio-images/splashscreen.jpg";
import signin from "../Portfolio-images/signin.png";
import tinderClone from "../Portfolio-images/tinder-clone.png";

const SkillsAndWorks = () => {
  return (
    <div className="skills">
      {/* menu icon */}
      <RetainMenu />

      <h1> SKILLS</h1>
      <div className="details">
        <div className="myskills">
          <h1>HTML5</h1>
          <div className="value">
            <progress value="90" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>CSS3</h1>
          <div className="value">
            <progress value="70" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>JavaScript</h1>
          <div className="value">
            <progress value="95" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>React</h1>
          <div className="value">
            <progress value="95" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>PHP</h1>
          <div className="value">
            <progress value="95" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>Java</h1>
          <div className="value">
            <progress value="90" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>Node.Js</h1>
          <div className="value">
            <progress value="90" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>Bootstrap</h1>
          <div className="value">
            <progress value="80" max="100"></progress>
          </div>
        </div>
        <div className="myskills">
          <h1>Express.Js</h1>
          <div className="value">
            <progress value="90" max="100"></progress>
          </div>
        </div>
      </div>
      <h1>WORKS</h1>
      <div className="details">
        <div className=" work myskills">
          <h1>Tinder-clone</h1>
          <div className="work-image">
            <img
              src={tinderClone}
              style={{ width: "190px", height: "300px" }}
              alt="pony collection "
            />
          </div>
        </div>
        <div className=" work myskills">
          <h1>login</h1>
          <div className="work-image">
            <img
              src={login}
              style={{ width: "170px", height: "300px" }}
              alt="pony collection "
            />
          </div>
        </div>
        <div className=" work myskills">
          <h1>signup</h1>
          <div className="work-image">
            <img
              src={signup}
              style={{ width: "170px", height: "300px" }}
              alt=" pony collection "
            />
          </div>
        </div>
        <div className=" work myskills">
          <h1>splash screen</h1>
          <div className="work-image">
            <img
              src={splashscreen}
              style={{ width: "170px", height: "300px" }}
              alt=" pony collection "
            />
          </div>
        </div>
        <div className=" work myskills">
          <h1>forgot-p</h1>
          <div className="work-image">
            <img
              src={forgotpassword}
              style={{ width: "170px", height: "300px" }}
              alt=" pony collection "
            />
          </div>
        </div>
        <div className=" work myskills">
          <h1>sign in</h1>
          <div className="work-image">
            <img
              src={signin}
              style={{ width: "170px", height: "300px" }}
              alt=" pony collection "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndWorks;
