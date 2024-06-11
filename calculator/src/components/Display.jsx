
import styles from "./Display.module.css";

const Display = ({displayBtn}) => {
  return <input className={styles.display} value={displayBtn} readOnly />;
};

export default Display;