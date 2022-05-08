import React, { useState } from "react";
import "../CSS/contact.css";
import RetainMenu from "../component/RetainMenu";
import Spinner from "../spinner-loader/Spinner";
import { useHistory } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const showLoader = () => {
    if (
      name !== "" &&
      email !== "" &&
      location !== "" &&
      number !== "" &&
      message !== ""
    ) {
      document.querySelector(".ldio-z474xfwc4o8").style.display = "block";

      document.querySelector(".btn").style.display = "none";
    } else {
      document.querySelector(".ldio-z474xfwc4o8").style.display = "none";
    }
  };

  function showAndHideText() {
    if ((document.querySelector(".message").style.display = "block")) {
      setTimeout(() => {
        document.querySelector(".message").style.display = "none";
      }, 3000);
    } else {
      document.querySelector(".message").style.display = "block";
    }
  }

  const hideLoader = () => {
    document.querySelector(".ldio-z474xfwc4o8").style.display = "none";
  };

  function clearFields() {
    setEmail("");
    setName("");
    setNumber("");
    setMessage("");
    setLocation("");
  }

  const contactMe = async (event) => {
    event.preventDefault();

    // showButton();

    try {
      const response = await fetch(
        "https://portfolio-backend-21.herokuapp.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            location,
            number,
            message,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (window.navigator.onLine) {
        if (data.status === "sent") {
          hideLoader();

          document.querySelector(".btn").style.display = "";

          document.querySelector(".message").classList.remove("danger");
          document.querySelector(".message").classList.add("success");

          document.querySelector(".message").innerHTML = "message sent ";

          // clear fields if the user-info  was sent
          clearFields();

          showAndHideText();

          // if the contact info sent successfully
          setTimeout(() => {
            history.push("/");
          }, 5000);
        } else {
          document.querySelector(".message").innerHTML =
            "something went wrong, kingly try again later !!!";
          hideLoader();
          document.querySelector(".message").classList.remove("success");
          document.querySelector(".message").classList.add("danger");
          document.querySelector(".btn").style.display = "";

          showAndHideText();
        }
      } else {
        // if no internet connection show no internet connection message
        setTimeout(() => {
          document.querySelector(".message").innerHTML =
            "no internet connection";
        }, 3000);
      }
    } catch (error) {
      document.querySelector(".message").innerHTML =
        "something went wrong, kingly try again later !!!";

      hideLoader();
      showAndHideText();
      document.querySelector(".message").classList.remove("success");
      document.querySelector(".message").classList.add("danger");
      document.querySelector(".btn").style.display = "";
    }
  };

  return (
    <div>
      <div className="contact">
        <RetainMenu />
        <h1>GET IN TOUCH </h1>

        <h5 className="message"></h5>
        <div className="form">
          <form onSubmit={contactMe}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <br />
            <textarea
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <br />
            <input
              className="btn"
              type="submit"
              value="Contact Me"
              onClick={showLoader}
            ></input>
            {/* spinner loader when the user clicks on the submit button  */}
            <Spinner />;
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
