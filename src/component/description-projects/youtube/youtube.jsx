import React from "react";
import styles from "./youtube.module.css";
import HomeB from "../../common/homeB";
import Videos from "./videos";

const Youtube = () => {
  const handleClick = () => {
    window.open("https://github.com/hill0ne/youtube-clonecoding", "_blank");
  };
  return (
    <>
      <HomeB />
      <div className={styles.header}>YouTube Page</div>
      <Videos />
      <footer className={styles.footer}>
        <div className={styles.buttonWrap}>
          <button className={styles.linkButton} onClick={handleClick}>
            View Github
          </button>
          {/* <button className={styles.linkButton}>Try using</button> */}
        </div>
      </footer>
    </>
  );
};

export default Youtube;
