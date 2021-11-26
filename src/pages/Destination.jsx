import { useState, useRef, createRef } from "react";

import classes from "./Destination.module.css";

import DestinationNav from "../components/DestinationNav";

import data from "./../data.json";

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  const planetChosen = (planet) => {
    switch (planet) {
      case "MOON":
        return setDestination(data.destinations[0]);
      case "MARS":
        return setDestination(data.destinations[1]);
      case "EUROPA":
        return setDestination(data.destinations[2]);
      case "TITAN":
        return setDestination(data.destinations[3]);
    }
  };
  const image = useRef();

  return (
    <main className={classes["destination-page"]}>
      <section className={classes.grid}>
        <h2 className="heading-5">
          <span>01</span>PICK YOUR DESTINATION
        </h2>

        <div className={classes.frame}>
          <img
            ref={image}
            src={`/${destination.images.png}`}
            alt={destination.name}
          />
        </div>
        <div className={classes.destination}>
          <DestinationNav
            elements={{ image }}
            className={classes["mini-nav"]}
            planetChosen={planetChosen}
          />
          <h1 className="heading-2">{destination.name.toUpperCase()}</h1>
          <p>{destination.description}</p>
          <hr />
          <ul className={classes["destination-stats-box"]}>
            <li className={classes["destination-stats"]}>
              <p className="sub-heading-2">AVG. DISTANCE</p>
              <p className="sub-heading-1">
                {destination.distance.toUpperCase()}
              </p>
            </li>
            <li>
              <p className="sub-heading-2">EST. TRAVEL TIME</p>
              <p className="sub-heading-1">
                {destination.travel.toUpperCase()}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Destination;
