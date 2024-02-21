import styles from "./LatestNews.module.scss";

import BannersList from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setNews } from "../../store/slices/newsSlice";

const LatestNews: React.FC = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNews(data?.news));
  }, [isLoading, data, dispatch]);

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
