import styles from "./BannersList.module.scss";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../News/NewsBanner/NewsBanner";
import { INews } from "../../interfaces";

interface Props {
  banners: INews[] | undefined | null;
}

const BannersList: React.FC<Props> = ({ banners }) => {
  const list = banners?.map((banner) => {
    return <NewsBanner key={banner.id} item={banner} />;
  });

  return <div className={styles.banners}>{list}</div>;
};

const BannersListSkeleton = withSkeleton<Props>(BannersList);

export default BannersListSkeleton;
