import React from "react";
import HomeB from "../../common/homeB";
import Videos from "../carrotGame/videos";
import styles from "./carrotGame.module.css";

const CarrotGame = () => {
  return (
    <>
      <HomeB />
      <div className={styles.header}>Catch Carrots Game</div>
      <Videos />
    </>
  );
};

export default CarrotGame;
