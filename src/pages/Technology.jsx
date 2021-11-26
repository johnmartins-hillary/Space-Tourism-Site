import { useRef } from "react";

import classes from "./Technology.module.css";

import SliderBigDots from "../components/SliderBigDots";
import data from "./../data.json";

const Technology = () => {
  const technologyList = data.technology;

  const list = useRef();
  const image = useRef();
  const mobileImage = useRef();

  return (
    <main className={classes["technology-page"]}>
      <section className={classes.grid}>
        <h2 className="heading-5">
          <span>03</span>SPACE LAUNCH 101
        </h2>

        <div className={classes["info-container"]}>
          <SliderBigDots
            ref={{ list, image, mobileImage }}
            className={classes["big-dots"]}
          />
          <div className={classes["slide-container"]}>
            <p>THE TERMINOLOGY…</p>
            <div className={classes.carousel} ref={list}>
              {technologyList.map((el, i) => {
                return (
                  <li key={i} style={{ transform: `translateY(${i * 100}%)` }}>
                    <h1 className="heading-3">{el.name.toUpperCase()}</h1>
                    <p>{el.description.toUpperCase()}</p>
                  </li>
                );
              })}
            </div>
          </div>
        </div>

        <figure className={classes.figure}>
          <img
            ref={image}
            className="tech-pic"
            src="/dist/assets/technology/image-launch-vehicle-portrait.jpg"
            alt="Space Technology"
          />
        </figure>

        <figure className={classes["landscape-image"]}>
          <img
            ref={mobileImage}
            src="/dist/assets/technology/image-launch-vehicle-landscape.jpg"
            alt="Space Technology"
          />
        </figure>
      </section>
    </main>
  );
};

export default Technology;
