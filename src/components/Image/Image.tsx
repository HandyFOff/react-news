import styles from "./Image.module.scss";

interface Props {
  image: string;
}

const Image: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image === "None" ? '' : image} alt="news" className={styles.image} />}
    </div>
  );
};

export default Image;
