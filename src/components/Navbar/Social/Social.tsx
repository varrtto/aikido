import { ReactComponent as Facebook } from "@assets/social/facebook.svg";
import { ReactComponent as Instagram } from "@assets/social/instagram.svg";
import { ReactComponent as Twitter } from "@assets/social/twitter.svg";
import styles from "./Social.module.scss";

const Social = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.socialWrapper}>
      <Facebook
        className={styles.socialIcon}
        onClick={() =>
          handleClick("https://www.facebook.com/profile.php?id=100063671435104")
        }
      />
      <Instagram
        className={styles.socialIcon}
        onClick={() =>
          handleClick("https://www.instagram.com/gustavo.moreno.aikido/")
        }
      />
      <Twitter
        className={styles.socialIcon}
        onClick={() => handleClick("https://www.twitter.com")}
      />
    </div>
  );
};

export default Social;
