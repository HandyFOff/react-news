import Image from "../Image/Image";
import styles from "./NewsBanner.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image item={item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.info}>
        <span className={styles.extra}>{formatTimeAgo(item.published)}</span>
        <span>·</span>
        <span className={styles.author}>{item.author}</span>
      </div>
    </div>
  );
};

export default NewsBanner;
