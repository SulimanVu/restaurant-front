import LocationSVG from '@/assets/icons/LocationSVG';
import styles from './footer.module.scss';
import MessageSVG from '@/assets/icons/MessageSVG';
import CallSVG from '@/assets/icons/CallSVG';
import InstaSVG from '@/assets/icons/InstaSVG';
import FacebookSVG from '@/assets/icons/FacebookSVG';
import YoutubeSVG from '@/assets/icons/YoutubeSVG';
import VkSVG from '@/assets/icons/VkSVG';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_inner}>
                <div className={styles.kitchen}>
                    <div className={styles.mb}>H&H KITCHEN</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae explicabo at ipsum saepe doloremque quaerat tempora ducimus ipsa
                       
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.address}>
                        <div className={styles.title}>ADDRESS</div>
                        <div className={styles.location}>
                            <div className={styles.location_icon}><LocationSVG /></div>
                            <div className={styles.location_text}>Lorem ipsum dolor, sit amet  consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.title}>CONTACT US</div>
                            <div className={styles.contacts_text}>
                                <MessageSVG/>
                                <div >djamalayl33@gmail.com</div>
                            </div>
                            <div className={styles.contacts_text}>
                                <CallSVG/>
                                <div >(805) 544-7759</div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_border}></div>
            <div className={styles.soc_icons}>
                <div className={styles.soc_icons_inner}>
                    <InstaSVG/>
                    <FacebookSVG/>
                    <YoutubeSVG/>
                    <VkSVG/>
                </div>
                <div className={styles.soc_title}>
                2023 © H & H Kitchen. All rights reserved. 
                </div>
            </div>
        </footer>
    );
};

export default Footer;