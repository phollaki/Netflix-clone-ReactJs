import React, { useEffect, useState } from "react";
import "./Nav.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <div className="nav__left">
          <img
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          <p className="nav__navItem first">Homepage</p>
          <p className="nav__navItem">Series</p>
          <p className="nav__navItem">Films</p>
          <p className="nav__navItem">New and popular</p>
          <p className="nav__navItem">My list</p>
        </div>

        <div className="nav__right">
          <SearchOutlinedIcon className="nav__rightSearchIcon" />
          <p className="nav__rightText">For Kids</p>
          <NotificationsIcon className="nav__rightNoticon" />
          <div className="nav__right-notifications">7</div>
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <ArrowDropDownIcon className="nav__rightMoreIcon" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
