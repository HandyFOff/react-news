import { cloneElement, useRef } from "react";
import styles from "./Slider.module.scss";

interface Props {
  children: React.ReactElement;
  step: number;
}

const Slider: React.FC<Props> = ({ children, step = 150 }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= step;
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += step;
    }
  };

  return (
    <div className={styles.slider}>
      <button type="button" className={styles.arrow} onClick={handleScrollLeft}>
        {"<"}
      </button>
      {cloneElement(children, {ref: sliderRef})}
      <button
        type="button"
        className={styles.arrow}
        onClick={handleScrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
