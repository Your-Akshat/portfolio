import React from "react";
import styles from "./PageLayout.css";
import NavBar from "../../library/components/NavBar/NavBar";

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.pageLayoutContainer}>
        <div className={styles.childContainer}>{children}</div>
      </div>
    </>
  );
};

export default PageLayout;
