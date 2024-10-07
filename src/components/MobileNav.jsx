import React, { useState } from "react";
import "./MobileNav.css";
import "../index.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const MobileNav = ({ children }) => {
  // endre burgerclasser

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger - menu on/off

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="mobile-nav">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <h1
          style={{
            textAlign: "left",
            lineHeight: "0.7em",
            fontSize: "3em",
            fontWeight: "200",
          }}
        >
          kunstKaja
        </h1>
      </nav>

      <div className={menu_class}>
        <div style={{ paddingLeft: "1rem", lineHeight: "3em" }}>{children}</div>
      </div>
    </div>
  );
};

export default MobileNav;
