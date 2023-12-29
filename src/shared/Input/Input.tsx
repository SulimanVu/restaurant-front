import styles from "./input.module.scss";

const Input = ({ name }: { name: string }) => {
  return (
    <div>
      <label className={styles.label}>{name}</label>
      <input type="string" className={styles.input} />
    </div>
  );
};

export default Input;
