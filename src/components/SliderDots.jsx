import { useState, useLayoutEffect, forwardRef } from "react";

import slideTo from "../helpers/slide";

import data from "./../data.json";

import classes from "./SliderDots.module.css";

const SliderDots = forwardRef((props, ref) => {
  const [activeDot, setActiveDot] = useState("0");

  const { list, image } = ref;

  const clickHandler = (event) => {
    const clicked = event.target.dataset.number;
    setActiveDot(clicked);
    slideTo(Object.values(list.current.children), "x", clicked);
    image.current.src = `/${data.crew[clicked].images.png}`;
    image.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
  };

  return (
    <div className={`${props.className} ${classes["dot-container"]}`}>
      <button
        onClick={clickHandler}
        className={activeDot === "0" ? classes.active : ""}
        data-number="0"
      ></button>
      <button
        onClick={clickHandler}
        className={activeDot === "1" ? classes.active : ""}
        data-number="1"
      ></button>
      <button
        onClick={clickHandler}
        className={activeDot === "2" ? classes.active : ""}
        data-number="2"
      ></button>
      <button
        onClick={clickHandler}
        className={activeDot === "3" ? classes.active : ""}
        data-number="3"
      ></button>
    </div>
  );
});

export default SliderDots;
