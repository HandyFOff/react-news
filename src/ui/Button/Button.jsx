import styles from "./Button.module.scss";

const Button = ({ text, handler, type, style }) => {
  return (
    <button
      type={type ? type : "button"}
      className={style ? style : styles.btn}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
