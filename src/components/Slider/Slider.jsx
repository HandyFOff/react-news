import { cloneElement, useRef } from "react";
import styles from "./Slider.module.scss";

const Slider = ({ children, step = 150 }) => {
  const sliderRef = useRef(null);

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={handleScrollLeft}>
        {"<"}
      </button>
      {cloneElement(children, {ref: sliderRef})}
      <button className={styles.arrow} onClick={handleScrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
