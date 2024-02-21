import { useCategories } from "../../../helpers/hooks/useCategories";
import { CategoriesType } from "../../../interfaces";
import Button from "../../../ui/Button/Button";
import styles from "./CategoriesItem.module.scss";

interface Props {
  category: CategoriesType;
  currentCategory: CategoriesType;
}

const CategoriesItem: React.FC<Props> = ({ category, currentCategory }) => {
  const { changeCategory, formatedText } = useCategories();

  return (
    <Button
      key={category}
      text={formatedText(category)}
      style={`${styles.category} ${
        currentCategory === category && styles.active
      }`}
      handler={() => changeCategory(category)}
    />
  );
};

export default CategoriesItem;
