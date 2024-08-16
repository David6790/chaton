import React, { useState } from "react";

import ListItem from "@mui/material/ListItem";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "Le Lieu",
    link: "#couple",
  },
  {
    id: 3,
    title: "Le programme",
    link: "#story",
  },
  {
    id: 4,
    title: "RSVP",
    link: "#formulaire",
  },
  {
    id: 5,
    title: "Infos Pratiques",
    link: "#info",
  },
  {
    id: 6,
    title: "Contact",
    link: "#temoin",
  },
];

const MobileMenu = () => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
    setMenuState(false); // Close the menu after clicking a link
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, index) => (
            <ListItem key={index}>
              <a href={item.link} onClick={ClickHandler}>
                {item.title}
              </a>
            </ListItem>
          ))}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
