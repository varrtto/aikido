/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import ReactImageGallery from "react-image-gallery";
import styles from "./Dojo.module.scss";

type DojoProps = {
  name: string;
  info: string;
  images: {
    original: string;
    thumbnail: string;
  }[];
  map: string;
};

const Dojo: FC<DojoProps> = ({ name, info, images, map }) => {
  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.dojo}>
        <ReactImageGallery
          items={images}
          showPlayButton={false}
          autoPlay={false}
        />
        <iframe
          src={map}
          width="800"
          className={styles.map}
          style={{ border: "0" }}
          // @ts-ignore
          allowfullscreen={false}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>{info}</p>
    </>
  );
};

export default Dojo;
