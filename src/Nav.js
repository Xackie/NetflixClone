import React, { useState, useEffect } from "react";
import "./nav.css";
import avatar from "./nxAvatar.png";
import Nlogo from "./Netflix_logo.svg.png";
function Nav() {
  const [show, handleShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="Nav-logo" src={Nlogo} alt="Netflix-logo" />
      <img className="Nav-Avatar" src={avatar} alt="Netflix-Avatar" />
    </div>
  );
}
export default Nav;
