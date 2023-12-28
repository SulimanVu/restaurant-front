import { useState } from "react";
import styles from "./header.module.scss";
import menu from "@/assets/menu.svg";
import SettingsModal from "../SettingsModal/SettingsModal";

const Header = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.menu}>
          <img src={menu} alt="" onClick={() => setSettingsOpen(!settingsOpen)} />
          {settingsOpen && <SettingsModal />}
        </div>
        <div className={styles.logo}>
          H & H KITCHEN<span>.</span>
        </div>
        <div className={styles.btn}>
          <button>Book Your Table</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
