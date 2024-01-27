import styles from "./LatestNews.module.scss";

import BannersList from "../BannersList/BannersList";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <div className={styles.section}>
      <BannersList
        banners={banners && banners.news}
        isLoading={isLoading}
        type={"list"}
        direction={"grid"}
        count={24}
      />
    </div>
  );
};

export default LatestNews;
