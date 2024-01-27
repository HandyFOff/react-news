import styles from "./Search.module.scss";

const Search = ({ keywords, changeFilter }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => changeFilter('keywords', e.target.value)}
        placeholder={"Search"}
      />
    </div>
  );
};

export default Search;
