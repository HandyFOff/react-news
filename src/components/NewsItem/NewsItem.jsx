import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./NewsItem.module.scss";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <img src={item.image} alt="news" className={styles.image} />
      </div>
      <div className={styles.content}>
        <a href={item.url} target="_blank" className={styles.title}>
          {item.title}
        </a>
        <div className={styles.info}>
          <span className={styles.extra}>{formatTimeAgo(item.published)}</span>
          <span>·</span>
          <span className={styles.author}>{item.author}</span>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
