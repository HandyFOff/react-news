import NewsItem from "../NewsItem/NewsItem";
import styles from './NewsList.module.scss';

const NewsList = ({news}) => {
  const list = news.map((item) => {
    return <NewsItem key={item.id} item={item} />;
  });

  return <ul className={styles.list}>{list}</ul>;
};

export default NewsList;
