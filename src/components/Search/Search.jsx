import styles from "./Search.module.scss";

const Search = ({ keywords, setKeywords, placeholder }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder={`${placeholder.slice(0, 20)}...`}
      />
    </div>
  );
};

export default Search;
