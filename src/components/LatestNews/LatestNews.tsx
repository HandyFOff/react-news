import styles from "./LatestNews.module.scss";

import BannersList from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews: React.FC = () => {
  const { data, isLoading, isError } = useGetLatestNewsQuery(null);

  if (isError) {
    return (
      <div className={styles.error}>
        <span>Oops.. No news found :( Try on VPN</span>
      </div>
    );
  }

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
