import React from "react";
import "../CSS/about.css";
import RetainMenu from "../component/RetainMenu";

const About = () => {
  return (
    <div className="about">
      {/* menu icon */}
      <RetainMenu />

      <div className="about-section">
        <div className="intro">
          <h1>Let me Introduce myself</h1>

          <p>
            I’m Fullstack Developer.
            <br /> I have the passion for computers since i was a child. <br />I
            went ahead to the university to pursue IT and that made me loved
            coding.
            <br /> I have tried all the technologies like HTML, CSS, JAVA,
            JAVASCRIPT, <br />
            PHP, React,node and more.
          </p>

          <div className="profile">
            <h1>profile</h1>
            <div className="about-details">
              <h4>FULL NAME:</h4>
              <p>Bright Mensah</p>
              <h4>BIRTH DATE:</h4>
              <p>January 29,1999</p>
              <h4>JOB:</h4>
              <p>Fullstack dev, software Enginner</p>
              <h4>Email:</h4>
              <p>mensahokobright@gmail.com</p>
              <p>mensahokobright@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
