import classNames from "classnames";
import styles from "./BurgerButton.module.scss";
import { FC } from "react";

type BurgerButtonProps = {
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerButton: FC<BurgerButtonProps> = ({ handleClick }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.burgerWrapper}
        onClick={() => handleClick((prev) => !prev)}
      >
        <span className={classNames(styles.line, styles.openFirst)} />
        <span className={classNames(styles.line, styles.openSecond)} />
        <span className={classNames(styles.line, styles.openThird)} />
      </div>
    </div>
  );
};

export default BurgerButton;
