import Video from "@components/Video";
import styles from "./Media.module.scss";

const Media = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Seminario dictado por Shihan Christian Tissier 8°Dan en Bs As Diciembre
        2019
      </p>
      <div className={styles.videoWrapper}>
        <Video token="Kioqj8Aj1q4" />
        <Video token="FH9W8N4aCo8" />
        <Video token="0cgG5ph249s" />
        <Video token="hrZ2QxIE_4M" />
        <Video token="3jaeFyAK3hM" />
      </div>
    </div>
  );
};

export default Media;
