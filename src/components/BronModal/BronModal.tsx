import { Modal } from "@/shared/Modal/Modal";
import styles from "./bron.module.scss";
import Input from "@/shared/Input/Input";

const BronModal = () => {
  return (
    <Modal isOpen={true} onClose={() => false}>
      <div className={styles.bronWindow}>
        <h2>Кафе Пушкинъ</h2>
        <h6>Тверской б-р, д. 26а</h6>
        <hr />
        <div className={styles.greenBlock}>
          <div className={styles.green}>29 ДЕК</div>
          <div className={styles.green}> -- </div>
          <div className={styles.green}>2 ЧЕЛ</div>
        </div>
        <hr />
        <Input name="Имя" />
        <Input name="Фамилия" />
        <Input name="Телефон" />
        <Input name="E-mail" />
        <hr />
        <button className={styles.btn}>Забронировать</button>
      </div>
    </Modal>
  );
};

export default BronModal;
