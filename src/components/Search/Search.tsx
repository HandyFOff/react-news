import styles from "./Search.module.scss";

interface Props {
  keywords: string;
  changeFilter: (key: string, value: string | number | null) => void;
}

const Search: React.FC<Props> = ({ keywords, changeFilter }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => changeFilter("keywords", e.target.value)}
        placeholder={"Search"}
      />
    </div>
  );
};

export default Search;
