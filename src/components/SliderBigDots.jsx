import { useState, useLayoutEffect, forwardRef } from "react";
import slideTo from "./../helpers/slide";

import data from "./../data.json";

import classes from "./SliderBigDots.module.css";

const SliderBigDots = forwardRef((props, ref) => {
  const [active, setActive] = useState("1");

  const { list, image, mobileImage } = ref;

  const clickHandler = (event) => {
    const clicked = event.target;

    setActive(clicked.innerHTML);
    console.log(clicked.dataset.number);
    slideTo(Object.values(list.current.children), "y", clicked.dataset.number);

    mobileImage.current.src = `/${
      data.technology[clicked.dataset.number].images.landscape
    }`;

    image.current.src = `/${
      data.technology[clicked.dataset.number].images.portrait
    }`;
  };

  return (
    <div className={`${props.className} ${classes["dot-container"]}`}>
      <button
        onClick={clickHandler}
        className={active === "1" ? classes.active : ""}
        data-number="0"
      >
        1
      </button>
      <button
        onClick={clickHandler}
        className={active === "2" ? classes.active : ""}
        data-number="1"
      >
        2
      </button>
      <button
        onClick={clickHandler}
        className={active === "3" ? classes.active : ""}
        data-number="2"
      >
        3
      </button>
    </div>
  );
});

export default SliderBigDots;
