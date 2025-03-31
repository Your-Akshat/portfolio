import React from "react";
import styles from "./PageLayout.css";
import NavBar from "../../library/components/NavBar/NavBar";
import Footer from "../../library/components/Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.pageLayoutContainer}>
        <div className={styles.childContainer}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
