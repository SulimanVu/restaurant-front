import styles from "./about.module.scss";
import cn from "classnames";
import aboutMain from "@/assets/aboutMain.png";
import aboutTop from "@/assets/aboutTop.png";
import aboutBottom from "@/assets/aboutBottom.png";

const About = () => {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.leftImage}>
        <img src={aboutMain} alt="main" />
      </div>
      <div className={styles.mainInfo}>
        <div className={cn(styles.flex, styles.topInfo)}>
          <div className={styles.text}>
            <h3>О нашей кухне</h3>
            <h1>Здоровая еда для богатого настроения</h1>
            <h4>
              Наши талантливые шеф-повара с любовью создают изысканные блюда,
              вдохновленные мировой кухней, используя только свежие и
              высококачественные ингредиенты.
            </h4>
          </div>
          <div>
            <img src={aboutTop} alt="main" />
          </div>
        </div>
        <div className={cn(styles.flex, styles.buttomInfo)}>
          <div className={styles.buttomText}>
            <div className={styles.buttons}>
              <button>Онлайн покупки</button>
              <button>Пред-заказ блюд</button>
              <button>24/7 график работы</button>
              <button>Удобное местоположение</button>
            </div>
            <button>Заказать столик</button>
          </div>
          <div className={styles.rightImg}>
            <img src={aboutBottom} alt="aboutBottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
