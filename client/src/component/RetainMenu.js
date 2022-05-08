import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import "../component/RetainMenu.css";

const RetainMenu = () => {
  const menuAnimation = () => {
    $(document).ready(function () {
      $(".menu").on("click", function () {
        $("#nav").slideToggle();
      });
    });
  };

  // when user clicks away from the menu quickly close the menu

  $(document).on("click", function (event) {
    let $trigger = $(".menu");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $("#nav").slideUp("fast");
    }
  });

  const retainMenuColor = () => {
    // retain menu color even if the scroll is greater than 470 || less than
    document.addEventListener("scroll", () => {
      if (window.scrollY > 470 && window.scrollY <= 1080) {
        try {
          document.querySelector(".menuIcon").style.color = "white";
          document.querySelector(".menuLink >li").style.color = "white";
          document.querySelector(".menuLink2 >li").style.color = "white";
          document.querySelector(".menuLink3 >li").style.color = "white";
          document.querySelector(".menuLink4 >li").style.color = "white";
        } catch (error) {}
      } else {
        try {
          document.querySelector(".menuIcon").style.color = "white";
          document.querySelector(".menuLink >li").style.color = "white";
          document.querySelector(".menuLink2>li").style.color = "white";
          document.querySelector(".menuLink3>li").style.color = "white";
          document.querySelector(".menuLink4>li").style.color = "white";
        } catch (error) {}
      }
    });
  };

  const smoothScroll = function () {
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    menuAnimation();
    smoothScroll();
    retainMenuColor();
  });

  return (
    <div>
      <div className="nav-hold">
        <div className="menuIcon">
          <div className="menu">
            {/* <i className = "fa fa-bars" onClick={showMenu}>
                  </i> */}
            {/* menu icon for responsive */}
            <span>&#9776;</span>
          </div>
          <ul className="nav-list" id="nav">
            <Link className="menuLink" to="/">
              <li>Home</li>
            </Link>
            <Link className="menuLink3" to="/about">
              <li>About</li>
            </Link>
            <Link className="menuLink3" to="/contact">
              <li>Contact</li>
            </Link>
            <Link className="menuLink4" to="/skillsandworks">
              <li>Skills&works</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RetainMenu;
