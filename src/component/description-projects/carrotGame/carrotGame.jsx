import React from "react";
import HomeB from "../../common/homeB";
import Videos from "../carrotGame/videos";
import styles from "./carrotGame.module.css";

const CarrotGame = () => {
  const handleClick = () => {
    window.open("https://github.com/hill0ne/catch-carrots-game", "_blank");
  };
  return (
    <>
      <HomeB />
      <div className={styles.header}>Catch Carrots Game</div>
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

export default CarrotGame;
