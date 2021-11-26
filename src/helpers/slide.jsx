const slideTo = (elements, direction, selectedSlide) => {
  elements.forEach((el, i) => {
    el.style.transform = `translate${direction.toUpperCase()}(${
      i * 100 - +selectedSlide * 100
    }%)`;
  });
};

export default slideTo;
