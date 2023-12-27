import LocationSVG from '@/assets/icons/LocationSVG';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_inner}>
                <div className={styles.kitchen}>
                    <div>H&H KITCHEN</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae explicabo at ipsum saepe doloremque quaerat tempora ducimus ipsa
                        reiciendis, cumque vel qui. Dignissimos at iusto dolore voluptatum odit,
                        consequatur officiis.
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.address}>
                        <div className={styles.title}>ADDRESS</div>
                        <div className={styles.location}>
                            <div className={styles.location_icon}><LocationSVG/></div>
                            <div className={styles.location_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div className={styles.contucts}>
                        <div className={styles.title}>CONTUCT US</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;