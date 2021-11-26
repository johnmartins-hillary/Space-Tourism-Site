import { useEffect, useRef, useState, useLayoutEffect } from "react";

import classes from "./DestinationNav.module.css";

const DestinationNav = (props) => {
  const [activePlanet, setActivePlanet] = useState("MOON");

  const planetClicked = (event) => {
    const el = props.elements.image;
    const planet = event.target.innerHTML;
    props.planetChosen(planet);
    setActivePlanet(planet);

    el.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
  };

  return (
    <ul className={`${props.className} ${classes["mini-nav"]}`}>
      <li>
        <button
          className={activePlanet === "MOON" ? classes.active : ""}
          onClick={planetClicked}
        >
          MOON
        </button>
      </li>
      <li>
        <button
          className={activePlanet === "MARS" ? classes.active : ""}
          onClick={planetClicked}
        >
          MARS
        </button>
      </li>
      <li>
        <button
          className={activePlanet === "EUROPA" ? classes.active : ""}
          onClick={planetClicked}
        >
          EUROPA
        </button>
      </li>
      <li>
        <button
          className={activePlanet === "TITAN" ? classes.active : ""}
          onClick={planetClicked}
        >
          TITAN
        </button>
      </li>
    </ul>
  );
};

export default DestinationNav;
