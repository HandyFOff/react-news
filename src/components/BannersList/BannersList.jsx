import styles from "./BannersList.module.scss";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../News/NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
  const list = banners.map((banner) => {
    return <NewsBanner key={banner.id} item={banner} />;
  });

  return <div className={styles.banners}>{list}</div>;
};

const BannersListSkeleton = withSkeleton(BannersList);

export default BannersListSkeleton;
