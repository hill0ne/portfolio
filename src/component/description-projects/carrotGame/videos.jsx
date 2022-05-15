import React from "react";
import styles from "./videos.module.css";
import video_lose from "../../../videos/lose.mp4";
import video_start from "../../../videos/start.mp4";
import video_win from "../../../videos/win.mp4";

const Videos = () => {
  const videoStyle = {
    margin: "0",
  };

  return (
    <>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          Javascript 로 구현한 당근 찾기 Web Game Application 입니다. <br />
          play 버튼과 stop 버튼으로 게임을 시작, 정지 할 수 있습니다. <br />
          게임 플레이 중 정지 버튼을 클릭하면 게임이 일시정지 되며 <br />
          Replay 의사를 묻는 팝업창이 뜨도록 하였습니다. <br />
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_start}
            className={styles.video_start}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          타이머 기능을 만들어 시간 내에 당근을 모두 없애면 게임에서 이기게 되고
          <br />
          win 문구의 팝업이 뜨도록 구현하였습니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_win}
            className={styles.video_win}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          타이머 내에 당근을 없애지 못하거나 벌레를 클릭하면 <br />
          lose 문구의 팝업과 함께 게임이 종료됩니다.
        </span>
        <div className={styles.video__wrap}>
          <video
            src={video_lose}
            className={styles.video_lose}
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
      <section className={styles.video__layout_vertical}>
        <span className={styles.desText}>
          현재 모바일 웹 버전과 로그인 기능 등을 추가하는 리펙토링 중에
          있습니다.
        </span>
      </section>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Videos;
