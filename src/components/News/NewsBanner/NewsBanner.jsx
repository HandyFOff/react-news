import Image from "../../Image/Image";
import styles from "./NewsBanner.module.scss";
import { formatTimeAgo } from "../../../helpers/formatTimeAgo";
import { withSkeleton } from "../../../helpers/hocs/withSkeleton";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <a href={item.url} target="_blank" className={styles.title}>{item.title}</a>
      <div className={styles.info}>
        <span className={styles.extra}>{formatTimeAgo(item.published)}</span>
        <span>·</span>
        <span className={styles.author}>{item.author}</span>
      </div>
    </div>
  );
};

const NewsBannerSkeleton = withSkeleton(NewsBanner);

export default NewsBannerSkeleton;
