import styles from "./LatestNews.module.scss";

import BannersList from "../BannersList/BannersList";
import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";

const LatestNews = () => {
  const { data, isLoading: isLoading } = useFetch(getLatestNews);
  return (
    <div className={styles.section}>
      <BannersList
        banners={data && data.news}
        isLoading={isLoading}
        type={"list"}
        direction={"grid"}
        count={24}
      />
    </div>
  );
};

export default LatestNews;
