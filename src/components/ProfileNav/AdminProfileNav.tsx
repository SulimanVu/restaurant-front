import { FC, HtmlHTMLAttributes } from "react";
import styles from "./profileNav.module.scss";
import Heart from "@/assets/HeartSVG";
import SignOutSVG from "@/assets/SignOutSVG";
import ProfileSVG from "@/assets/ProfileSVG";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/LogoNew.svg";

const AdminProfileNav: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path: string[] = location.pathname.split("/");

  const navigateHandler = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement>) => {
    const navPath: string = e.currentTarget.title;
    if (navPath == "logOut") {
      navigate("/");
      localStorage.removeItem("token");
    } else {
      navigate("/admin/" + navPath);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
        <img src={logo}  />
        </div>
        <ul className={styles.list}>
          <li
            className={path.includes("reservation") ? styles.active : styles.none}
            onClick={navigateHandler}
            title="reservation"
          >
            <ProfileSVG />
            <span className={styles.listItem}>Бронирование</span>
          </li>
          <li
            className={path.includes("orders") ? styles.active : styles.none}
            onClick={navigateHandler}
            title="orders"
          >
            <Heart />
            <span className={styles.listItem}>Заказы</span>
          </li>
          <li
            className={path.includes("menu") ? styles.active : styles.none}
            onClick={navigateHandler}
            title="menu"
          >
            <ProfileSVG />
            <span className={styles.listItem}>Меню</span>
          </li>
          {/* <li
            className={path.includes("settings") ? styles.active : styles.none}
            onClick={navigateHandler}
            title="settings"
          >
            <ProfileSVG />
            <span className={styles.listItem}>Настройки</span>
          </li> */}
          <li
            className={path.includes("statistics") ? styles.active : styles.none}
            onClick={navigateHandler}
            title="statistics"
          >
            <ProfileSVG />
            <span className={styles.listItem}>Статистика</span>
          </li>

        </ul>
      </div>

      <div className={styles.navFooter} onClick={navigateHandler} title="logOut">
        <div className={styles.info}>
          <div className={styles.user}>Ойбаев Р.П</div>
          <div className={styles.role}>Администратор</div>
        </div>
        <div className={styles.buttonExit}>Выйти</div>
      </div>

    </div>

  );
};

export default AdminProfileNav;
