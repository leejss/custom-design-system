import React from "react";
import styles from "./Colors.module.scss";

const ColorsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.State}></div>
      <div className={styles.System}></div>
      <div className={styles.Interactive}></div>
    </div>
  );
};

export default ColorsPage;
