import styles from "./Button.module.scss";

interface PropsButton {
  text?: string | number | null;
  handler?: () => void;
  type?: "button" | "submit" | "reset";
  style?: string;
  disabled?: boolean;
}

const Button: React.FC<PropsButton> = ({ text, handler, type, style, disabled }) => {
  return (
    <button
      type={type ? type : "button"}
      className={style ? style : styles.btn}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
