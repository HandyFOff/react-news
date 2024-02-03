import { cloneElement, useRef } from "react";
import styles from "./Slider.module.scss";
import Button from "../../ui/Button/Button";

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
      <Button style={styles.arrow} handler={handleScrollLeft} text={"<"} />
      {cloneElement(children, { ref: sliderRef })}
      <Button style={styles.arrow} handler={handleScrollRight} text={">"} />
    </div>
  );
};

export default Slider;
