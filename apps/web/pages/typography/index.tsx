import React from "react";
import styles from "./index.module.scss";

const TypoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.heading1}>Heading 1</div>
        <div className={styles.heading2}>Heading 2</div>
        <div className={styles.heading3}>Heading 3</div>
        <div className={styles.heading4}>Heading 4</div>
      </div>
      <div className={styles.card}>
        <div className={styles.subtitle1}>Subtitle 1</div>
        <div className={styles.subtitle2}>Subtitle 2</div>
        <div className={styles.subtitle3}>Subtitle 3</div>
      </div>
      <div className={styles.card}>
        <div className={styles.body1}>Body 1</div>
        <div className={styles.body2}>Body 2</div>
      </div>
      <div className={styles.card}>
        <div className={styles.caption1}>Caption 1</div>
        <div className={styles.caption2}>Caption 2</div>
      </div>
    </div>
  );
};

export default TypoPage;
