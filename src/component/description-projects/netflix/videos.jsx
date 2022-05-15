import React from "react";
import styles from "./videos.module.css";
import video_copy from "../../../videos/copy.mp4";
import video_input from "../../../videos/input.mp4";
import video_select from "../../../videos/select.mp4";
import video_header from "../../../videos/header.mp4";
import video_promotion from "../../../videos/promotion.mp4";

const Videos = () => {
  const videoStyle = {
    margin: "0",
  };

  return (
    <>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          클래스의 확장으로 컴포넌트의 상태 UI를 더해나가는 방식으로, <br />
          간편하게 바로 코드를 복사할 수 있는 기능을 구현하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_copy}
            className={styles.video_copy}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          각 요소들을 원자 단위로 나누어 작업하고 각 요소의 활성화/비활성화,
          입력 상태 등 상황별 UI를 구현하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_input}
            className={styles.video_input}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          Desktop 과 mobile 환경에서 보여질 원자 단위의 컴포넌트들을
          <br />
          이후 분자로 결합시켜 다양한 인터페이스로 활용할 수 있도록 하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_select}
            className={styles.video_select}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.video__wrap} style={videoStyle}>
          <video
            src={video_header}
            className={styles.video_header}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.video__wrap} style={videoStyle}>
          <video
            src={video_promotion}
            className={styles.video_promotion}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
    </>
  );
};

export default Videos;
