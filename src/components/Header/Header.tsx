import styles from './header.module.scss';
import menu from '@/assets/menu.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerMain}>
                <div className={styles.menu}>
                    <img src={menu} alt="" />
                </div>
                <div className={styles.logo}>H & H KITCHEN<span>.</span></div>
                <div className={styles.btn}>
                    <button>Book Your Table</button>
                </div>
            </div>
        </div>
    );
};

export default Header;