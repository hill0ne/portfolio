import React from "react";
import styles from "./videos.module.css";
import video_intro from "../../../videos/intro.mp4";
import video_list from "../../../videos/list.mp4";
import Footer from "../../common/footer";

const Videos = () => {
  const videoStyle = {
    margin: "0",
  };

  return (
    <>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          Javascript 로 구현한 to do list Web Appllication Project 입니다.
          <br />
          Local Storage WEB API를 이용하여 User 이름을 지정할 수 있도록
          하였습니다.
          <br />
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_intro}
            className={styles.video_intro}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          리스트 작성 및 삭제 기능과 <br />
          중요도 높은 리스트를 따로 체크할 수 있는 기능을 구현하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_list}
            className={styles.video_list}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          현재 모바일 웹 버전과 캘린더 기능을 추가하는 리펙토링 중에 있습니다.
        </span>
      </section>
      <Footer />
    </>
  );
};

export default Videos;
