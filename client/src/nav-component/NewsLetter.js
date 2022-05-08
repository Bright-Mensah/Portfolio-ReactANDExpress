import React, { useState } from "react";
import "../CSS/NewsLetter.css";
import Spinner from "../spinner-loader/Spinner";
import RetainMenu from "../component/RetainMenu";

const NewsLetter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const showLoader = () => {
    if (firstName !== "" && lastName !== "" && email !== "") {
      document.querySelector(".ldio-z474xfwc4o8").style.display = "block";

      document.querySelector(".btn").style.display = "none";
    } else {
      document.querySelector(".ldio-z474xfwc4o8").style.display = "none";
    }
  };

  const hideLoader = () => {
    document.querySelector(".ldio-z474xfwc4o8").style.display = "none";
  };

  const showAndHideText = function () {
    if ((document.querySelector(".message").style.display = "block")) {
      setTimeout(() => {
        document.querySelector(".message").style.display = "none";
      }, 3000);
    } else {
      document.querySelector(".message").style.display = "block";
    }
  };

  function clearFields() {
    setFirstName("");
    setLastName("");
    setEmail("");
  }
  const subscribeUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-backend-21.herokuapp.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "subscribed") {
        hideLoader();
        document.querySelector(".btn").style.display = "";

        document.querySelector(".message").classList.remove("danger");
        document.querySelector(".message").classList.add("success");

        document.querySelector(".message").innerHTML =
          "you have successfully subscribed to the newsletter";

        showAndHideText();

        // if the subscription is successful clear all fields
        clearFields();
      } else if (data.status === "db-error") {
        document.querySelector(".message").innerHTML = "db connection error";
        hideLoader();
        document.querySelector(".message").classList.remove("success");
        document.querySelector(".message").classList.add("danger");
        document.querySelector(".btn").style.display = "";

        showAndHideText();
      } else {
        document.querySelector(".message").innerHTML =
          "something went wrong.kindly try again!!!";
        hideLoader();
        document.querySelector(".message").classList.remove("success");
        document.querySelector(".message").classList.add("danger");
        document.querySelector(".btn").style.display = "";
        showAndHideText();
      }
    } catch (error) {
      document.querySelector(".message").innerHTML =
        "something went wrong, kingly try again later !!!";
      hideLoader();
      document.querySelector(".message").classList.remove("success");
      document.querySelector(".message").classList.add("danger");
      document.querySelector(".btn").style.display = "";

      showAndHideText();
    }
  };

  return (
    <div className="subscription-page">
      <RetainMenu />
      <h2>subscribe to the newsletter</h2>
      <p className="message"></p>
      <form onSubmit={subscribeUser}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          className="btn"
          type="submit"
          value="subscribe"
          onClick={showLoader}
        />
        <Spinner />
      </form>
    </div>
  );
};

export default NewsLetter;
