import styles from "./settings.module.scss";

const SettingsModal = () => {
  return (
    <div className={styles.settingsModal}>
      <ul>
        <li>Главная</li>
        <li>Меню</li>
        <li>О нас</li>
        <li>Корзина</li>
      </ul>
    </div>
  );
};

export default SettingsModal;
