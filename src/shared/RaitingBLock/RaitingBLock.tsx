import { FC } from "react";
import styles from "./raiting.module.scss";
import reactSvg from "@/assets/react.svg";

interface RaitingBLockProps {
  img?: string;
  text?: string;
}
const RaitingBLock: FC<RaitingBLockProps> = ({
  img = reactSvg,
  text = "lorem ipsum",
}) => {
  return (
    <div
      style={{ background: `url(${img}) no-repeat center` }}
      className={styles.raitingBLock}
    >
      <div className={styles.opacityBlock}>{text}</div>
    </div>
  );
};

export default RaitingBLock;
