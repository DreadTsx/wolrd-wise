import styles from "./Button.module.css";

function Button({ type, onclick, children }) {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
