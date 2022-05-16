import React from "react";
import styles from "./videos.module.css";
import video_youtube from "../../../videos/index.mp4";
import video_details from "../../../videos/details.mp4";

const Videos = () => {
  const videoStyle = {
    margin: "0",
  };

  return (
    <>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          리액트 Hooks 를 이용하여 구현한 유튜브 Web Application 입니다.
          <br />
          추천 영상, 검색, 동영상 재생 등의 페이지로 구성되어 있으며,
          <br />
          처음 홈 화면에서 가장 인기 있는 동영상을 자동으로 불러오도록
          구현하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_youtube}
            className={styles.video_youtube}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          동영상 우측에 추천 동영상을 배치하여 <br />
          사용자가 언제든지 다른 추천 영상을 볼 수 있도록 하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_details}
            className={styles.video_details}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          현재 모바일 웹 버전 리펙토링 중에 있습니다.
        </span>
      </section>
    </>
  );
};

export default Videos;
