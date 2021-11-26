import { useRef } from "react";

import classes from "./Crew.module.css";

import SliderDots from "../components/SliderDots";
import data from "./../data.json";

const Crew = () => {
  const crewList = data.crew;

  const list = useRef();
  const image = useRef();

  return (
    <main className={classes["crew-page"]}>
      <section className={classes.grid}>
        <h2 className="heading-5">
          <span>02</span>MEET YOUR CREW
        </h2>

        <ul className={classes.carousel} ref={list}>
          {crewList.map((crewmate, i) => {
            return (
              <li key={i} style={{ transform: `translateX(${i * 100}%)` }}>
                <p className="heading-4">{crewmate.role.toUpperCase()}</p>
                <h1 className="heading-3">{crewmate.name.toUpperCase()}</h1>
                <p>{crewmate.bio}</p>
              </li>
            );
          })}
        </ul>
        <SliderDots className={classes.dots} ref={{ image, list }} />

        <figure className={classes.figure}>
          <img
            ref={image}
            id="crew-pic"
            src="/src/assets/crew/image-douglas-hurley.png"
            alt=""
          />
        </figure>
      </section>
    </main>
  );
};

export default Crew;
