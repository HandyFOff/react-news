import { useTheme } from "../../helpers/hooks/useTheme";
import styles from "./Button.module.scss";

interface PropsButton {
  text?: string | number | null;
  handler?: () => void;
  type?: "button" | "submit" | "reset";
  style?: string;
  disabled?: boolean;
}

const Button: React.FC<PropsButton> = ({
  text,
  handler,
  type,
  style,
  disabled,
}) => {
  const { isDark } = useTheme();

  return (
    <button
      type={type ? type : "button"}
      className={`${style ? style : styles.btn} ${
        isDark ? styles.dark : styles.light
      }`}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
