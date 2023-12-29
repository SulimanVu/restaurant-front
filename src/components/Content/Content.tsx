import styles from "./content.module.scss";
import first from "@/assets/1.png";
import second from "@/assets/2.png";
import third from "@/assets/3.png";
import four from "@/assets/4.jpeg";
import five from "@/assets/5.png";
import six from "@/assets/6.png";
import title_img from "@/assets/title_img.png";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.cont}>
        <div className={styles.mainContent}>
          <div className={styles.category}>HARMONY HOUSE KITCHEN</div>
          <div className={styles.title}>
            Tasty Flavors &nbsp; <img src={title_img} alt="" />
          </div>
          <div className={styles.title}>from Around the</div>
          <div className={styles.title}>
             <img src={title_img} alt="" /> &nbsp;World
          </div>
          <div className={styles.title_2}>
            <b>Harmony House Kitchen:</b> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
          </div>
          <div></div>
        </div>
        <div className={styles.images}>
          <div className={styles.relativeBlock}>
            <div className={styles.firstBlock}>
              <img className={styles.first} src={first} alt="" />
              <img className={styles.second} src={second} alt="" />
            </div>
            <div className={styles.secondBlock}>
              <img className={styles.third} src={third} alt="" />
              <img className={styles.four} src={four} alt="" />
            </div>
            <div className={styles.thirdBlock}>
              <img className={styles.five} src={five} alt="" />
              <img className={styles.six} src={six} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
