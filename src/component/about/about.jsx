import React from "react";
import styles from "./about.module.css";
import { Link } from "react-router-dom";
import Home from "../common/home";

const About = () => {
  return (
    <>
      <Home />
      <br />
      <p className={styles.comment}>
        "고객에게 만족을 주던 서비스인에서
        <br />
        이제는 모두가 웃을 수 있는 "서비스" 를 만들고 싶습니다."
      </p>
      <div className={styles.container}>
        <article className={styles.article}>
          <h2 className={styles.heading}>
            안녕하세요, 프론트엔드 개발자를 꿈꾸는 장지원 입니다.
            <br />
            저는 이런 사람 입니다.
          </h2>
          <h4 className={styles.subheading}>🙌🏻 고객 중심 마인드</h4>
          <p className={styles.content}>
            오랜 시간 서비스직에 몸 담으며 "진정한 고객 중심" 이 무엇인지
            고민했고,
            <br />
            기억되어 다시 찾는 서비스를 제공하는 사람이 되려고 노력했습니다.
            <br />
            이러한 고민은 "타인에 대한 배려" 로 이어지는 장점이 되었습니다.
            <br />
            함께 하는 동료들을 먼저 배려하는 개발자가 되겠습니다.
          </p>
          <h4 className={styles.subheading}>🙌🏻 원활한 의사소통 능력</h4>
          <p className={styles.content}>
            어린 아이부터 어르신들 까지 다양한 연령층들을 만나며
            <br />
            서로가 기분 좋은 대화로 마무리 될 수 있는 방법을 터득했습니다.
            <br />
            그건 바로 "경청" 입니다.
            <br />
            자기 주장보다는 먼저 경청하는 개발자가 되겠습니다.
          </p>
          <h4 className={styles.subheading}>🙌🏻 섬세함과 집념</h4>
          <p className={styles.content}>
            문제는 "괜찮겠지" 하고 넘어간 사소한 것에서 결국 발생합니다.
            <br />
            제가 할 수 있는 범위에서 포기하지 않고
            <br />
            작은 일도 큰 일 처럼 책임감을 가지고 임하는 개발자가 되겠습니다.
          </p>
          <p className={styles.horizon}></p>
          <h2 className={styles.heading}>저는 이런 것을 다룰 줄 압니다.</h2>
          <p className={styles.content}>
            HTML - CSS - PostCSS
            <br />
            Javscript - React - React Router
          </p>
          <h2 className={styles.heading}>저는 이런 것을 배웠습니다.</h2>
          <p className={styles.content}>
            비트교육센터 - 웹 개발자 양성과정
            <br />
            이듬 블렌디드러닝 - [CSS, Javascript] 프론트엔드 개발자 양성 과정
            <br />그 외 자바스크립트 마스터, 리액트 등은 온라인 강의와 공식
            문서를 바탕으로 학습하였습니다.
          </p>
        </article>
      </div>
      <Link to="/projects" className={styles.showProjects}>
        💻 project page 👉
      </Link>
      <div className={styles.footer}></div>
    </>
  );
};

export default About;
