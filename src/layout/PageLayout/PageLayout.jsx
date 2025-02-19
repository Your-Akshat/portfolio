import React from "react";
import styles from "./PageLayout.css";

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayoutContainer}>
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
};

export default PageLayout;
