import { FC } from "react";
import styles from "./Video.module.scss";

type VideoProps = {
  token: string;
};

const Video: FC<VideoProps> = ({ token }) => {
  return (
    <iframe
      className={styles.video}
      src={`https://www.youtube.com/embed/${token}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder={0}
      allowFullScreen
    ></iframe>
  );
};

export default Video;
