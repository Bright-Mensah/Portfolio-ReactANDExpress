import React from "react";
import "../CSS/Home.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import netflix from "../Portfolio-images/netflix-clone.png";
import firstportfolio from "../Portfolio-images/first-p-ipad.png";
import welcome from "../Portfolio-images/welcome-screen.png";
// import $ from "jquery";

import Menu from "../component/Menu";

const useStyles = makeStyles({
  root: {
    "& :hover": {
      color: "blue",
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      {/* first section */}
      {/* introduction  */}

      <div id="main-section">
        <Menu />
        <div className="main-text">
          <h1>I'm Bright Mensah</h1>
          <h4>FullStack Developer</h4>
          <Link class="btn-hire-me" to="/contact">
            <li>Hire me</li>
          </Link>
        </div>
      </div>
      {/* second section */}
      {/* what i do  */}
      <div className="second-section">
        <div className="second-text">
          <h1>What I Do</h1>
          <div className="header">
            <div className="first-section">
              <h3>Front-end</h3>
              <p>
                As a javascript developer, I have <br /> experience in HTML5 and
                CSS3 <br />
                techniques working with jQuery And more
              </p>
            </div>
            <div className="second-section">
              <h3>Back-end</h3>
              <p>
                Utilising javaScript, php to interact with the <br />
                sever, I have written few applications such as ecommerce app{" "}
                <br /> , building Portfolio and more.
              </p>
            </div>
            <div className="third-section">
              <h3>consultancy</h3>
              <p>
                As well as providing development <br /> services, you can reach
                me out if you <br /> have any problem.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* third-section */}
      {/* my works */}

      <div id="home-third-section">
        <div className="second-text">
          <h1 style={{ marginTop: "100px", color: "#fff" }}>My Works</h1>
          <div className="header">
            <div className="first-section">
              <h3 className="footer-item1" style={{ color: "#fff" }}>
                Netflix Clone
              </h3>

              <img
                onClick={() => {
                  window.location.href = "https://mobnetflix.tk";
                }}
                className="works-image"
                src={netflix}
                alt="demo of my works"
              />

              <p className="desc" style={{ color: "#fff" }}>
                This is a clone of netflix <br /> created using React Js <br />
                and themoviedb api <br />
                which provides the movies to <br /> use in your applications.
                <br /> Also you can click to watch the trailer of any movie
              </p>
            </div>
            <div className="second-section">
              <h3 style={{ color: "#fff" }}>First project</h3>
              <img
                onClick={() => {
                  window.location.href = "http://bright-mensah.github.io/";
                }}
                className="works-image"
                src={firstportfolio}
                alt="demo of my works"
              />
              <p className="desc" style={{ color: "#fff" }}>
                This is the first ever portfolio <br /> or project i created
                after <br />
                learning html css and javascript <br /> where i showcase my
                works or <br />
                what i have built so far with the skills learnt and user can
                contact me
              </p>
            </div>
            <div className="third-section">
              <h3 style={{ color: "#fff" }}>Pony Collections</h3>
              <img
                className="works-image"
                src={welcome}
                alt="demo of my works"
              />
              <p className="desc" style={{ color: "#fff" }}>
                An ecommerce app <br /> created using Java <br /> and to be able
                to use it <br /> you first have to sign up for an account <br />{" "}
                It also allow's you to insert your picture <br /> as a profile
                image
              </p>
            </div>

            <Link className="exploreLink" to="/skillsandworks">
              <li className="explore_btn">Explore more </li>
            </Link>
          </div>
          <Link className="lap-explore" to="/skillsandworks">
            <li className="lap-explore-btn">Explore more </li>
          </Link>
        </div>
      </div>

      {/* footer */}

      <div className="footer">
        <div className="social-icons">
          <h3>Get in touch with me</h3>
          <div className="icons">
            <IconButton className={classes.root}>
              <a
                href="https://twitter.com/BrightM30118896"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon sx={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton className={classes.root}>
              <a
                href="https://www.linkedin.com/in/m-ob-3a096b203/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton className={classes.root}>
              <a href="http://instagram.com">
                <InstagramIcon sx={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton className={classes.root}>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noreferrer"
              >
                <MailOutlineIcon sx={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton className={classes.root}>
              <a
                href="https://github.com/Bright-Mensah/Bright-Mensah.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon sx={{ color: "white" }} />
              </a>
            </IconButton>
          </div>
        </div>

        <div className="news-letter">
          <p>
            I will send you regular emails with <br /> practical coding advice
            and more
          </p>
          <Link className="sub" to="/newsLetter">
            <li className="sub-btn" style={{ whiteSpace: "nowrap" }}>
              subscribe
            </li>
          </Link>
        </div>
      </div>
      <div className="copyright">
        <h3>&copy;2021 All Right Reserved.</h3>
      </div>
    </div>
  );
};

export default Home;
