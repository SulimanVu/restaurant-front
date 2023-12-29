
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'
export const Header = () => {
  const navigate = useNavigate();

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
    <div className={styles.header}>
      <h1>Список заказов</h1>

      {/* <div className={styles.buttons}>
        <div className={styles.addButton} onClick={navigateHandler} title="addPlate">Добавить блюдо</div>
        <div className={styles.deleteButton} onClick={navigateHandler} title="deletePlate">Удалить блюдо</div>
      </div> */}
    </div>
  )
}