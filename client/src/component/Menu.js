import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import "../component/Menu.css";

const Menu = () => {
  const changeMenuIconColor = () => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 470 && window.scrollY <= 1080) {
        try {
          document.querySelector(".menuIcon").style.color = "black";
          document.querySelector(".menuLink >li").style.color = "black";
          document.querySelector(".menuLink2 >li").style.color = "black";
          document.querySelector(".menuLink3 >li").style.color = "black";
          document.querySelector(".menuLink4 >li").style.color = "black";

          /* underline color when the scroll is greater 
                          than 470 and less than 1080
                          */
          //   document.querySelector(".menuLink").style.display =
          //     "none";
        } catch (error) {
          // document.write("please wait");
        }
      } else {
        try {
          document.querySelector(".menuIcon").style.color = "white";
          document.querySelector(".menuLink >li").style.color = "white";
          document.querySelector(".menuLink2>li").style.color = "white";
          document.querySelector(".menuLink3>li").style.color = "white";
          document.querySelector(".menuLink4>li").style.color = "white";

          /* underline color when the scroll is less  
                           than 470 and more than 1080
                          */
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

  let menuAnimation = () => {
    $(document).ready(function () {
      $(".menu").on("click", function () {
        $("#nav").slideToggle();
      });
    });

    // when user clicks away from the menu quickly close the menu

    $(document).on("click", function (event) {
      let $trigger = $(".menu");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#nav").slideUp("fast");
      }
    });
  };

  // always render when the page loads
  useEffect(() => {
    changeMenuIconColor();
    smoothScroll();
    menuAnimation();
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
            <Link className="menuLink2" to="/about">
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

export default Menu;
