import { Link } from "react-router-dom";
import { useRef, Fragment, useState } from "react";

import classes from "./Navbar.module.css";

import logo from "./../assets/shared/logo.svg";
import closeIcon from "./../assets/shared/icon-close.svg";
import menuIcon from "./../assets/shared/icon-hamburger.svg";

export const Navbar = (props) => {
  const [active, setActive] = useState("00");

  const clickHandler = (event) => {
    const clicked = event.target.dataset.number;
    setActive(clicked);
  };

  const menu = useRef();
  const mobileLinks = useRef();

  const openNav = () => {
    menu.current.classList.add(`${classes.hidden}`);
    mobileLinks.current.style.transform = "translateX(0)";
  };

  const closeNav = () => {
    menu.current.classList.remove(`${classes.hidden}`);
    mobileLinks.current.style.transform = "translateX(100%)";
  };

  return (
    <Fragment>
      <nav className={`${classes["desktop-nav"]}`}>
        <div className={classes["logo-frame"]}>
          <img src={logo} alt="" />
        </div>
        <hr className={classes["nav-line"]} />
        <div className={classes["nav-links"]}>
          <Link
            onClick={clickHandler}
            to="/"
            data-number="0"
            className={active === "0" ? classes.active : ""}
          >
            <span>00</span>HOME
          </Link>
          <Link
            onClick={clickHandler}
            to="/destinations"
            data-number="1"
            className={active === "1" ? classes.active : ""}
          >
            <span>01</span>DESTINATION
          </Link>
          <Link
            onClick={clickHandler}
            to="/crew"
            data-number="2"
            className={active === "2" ? classes.active : ""}
          >
            <span>02</span>CREW
          </Link>
          <Link
            onClick={clickHandler}
            to="/technology"
            data-number="3"
            className={active === "3" ? classes.active : ""}
          >
            <span>03</span>TECHNOLOGY
          </Link>
        </div>
      </nav>

      <div className={classes["mobile-navbar"]}>
        <div className={classes["mobile-logo-frame"]}>
          <img src={logo} alt="" />
        </div>
        <button onClick={openNav} className={classes["menu-icon"]} ref={menu}>
          <img src={menuIcon} alt="" />
        </button>
      </div>

      <nav className={classes["mobile-nav-links"]} ref={mobileLinks}>
        <button className={classes.close} id="close-icon">
          <img onClick={closeNav} src={closeIcon} alt="" />
        </button>
        <Link onClick={closeNav} to="/">
          <span>00</span>HOME
        </Link>
        <Link onClick={closeNav} to="/destinations">
          <span>01</span>DESTINATION
        </Link>
        <Link onClick={closeNav} to="/crew">
          <span>02</span>CREW
        </Link>
        <Link onClick={closeNav} to="/technology">
          <span>03</span>TECHNOLOGY
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
