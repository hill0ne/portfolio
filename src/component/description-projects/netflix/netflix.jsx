import React from "react";
import styles from "./netflix.module.css";
import Home from "../../common/homeA";
import img_atomic from "../../../imgs/atomic.jpeg";
import img_copy from "../../../imgs/copy.png";
import Videos from "./videos";
import HomeB from "../../common/homeB";

const Netflix = () => {
  const handleClick = () => {
    window.open("https://github.com/hill0ne/learning_netflix", "_blank");
  };
  return (
    <>
      <HomeB />
      <div className={styles.header}>Netflix</div>
      <section className={styles.section}>
        <p className={styles.desText}>
          본 프로젝트는 Javascript 없이 CSS 만으로 재사용 가능한 클래스 기반의
          상태에 따른 넷플릭스 UI 를 구현한 프로젝트 입니다. <br />
          Figma 디자인툴로 디자이너와 협업하여 Atomic 디자인 패턴으로 설계,
          작업하였습니다.
        </p>
        <blockquote>
          <img src={img_atomic} className={styles.img_atomic}></img>
          <p className={styles.blockquoteText}> ㅡ image credit : Brad Frost</p>
        </blockquote>
        <Videos />
      </section>
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

export default Netflix;
