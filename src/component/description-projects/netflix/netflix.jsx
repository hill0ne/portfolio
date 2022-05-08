import React from "react";
import styles from "./netflix.module.css";
import Home from "../../common/home";
import img_atomic from "../../../imgs/atomic.jpeg";
import img_copy from "../../../imgs/copy.png";
import Videos from "./videos";

const Netflix = () => {
  return (
    <>
      <Home />
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
    </>
  );
};

export default Netflix;
