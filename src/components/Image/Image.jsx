import styles from "./Image.module.scss";

const Image = ({image}) => {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image} alt="news" className={styles.image} />}
    </div>
  );
};

export default Image;
