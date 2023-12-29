import styles from './menu.module.scss'
const menuItems = [
    {
        name: "Southern Fried Pickles",
        price: 9.99,
        description: "Crispy spears with zesty ranch."
    },
    {
        name: "Vortex Shrimp Delight",
        price: 11.99,
        description: "Fried shrimp served with mango and cilantro sauce."
    },
    {
        name: "Mystical Mushroom Poppers",
        price: 8.99,
        description: "Fried mushroom bites seasoned with feta, served with garlic yogurt sauce."
    },
    {
        name: "Dragon's Breath Quesadillas",
        price: 10.99,
        description: "Thin quesadillas with spicy chicken filling, cheddar, and salsa, served with guacamole."
    },
    {
        name: "Enchanted Eggplant Towers",
        price: 9.99,
        description: "Fried towers of eggplant layered with tomatoes and mozzarella, drizzled."
    },
    {
        name: "Starlight Spinach Bites",
        price: 8.99,
        description: "Light spinach balls with feta and pine nuts, served with raspberry vinaigrette."
    },
    {
        name: "Cosmic Crab Cakes",
        price: 12.99,
        description: "Crab cakes blended with avocado and lime, served with cayenne pepper sauce."
    },
    {
        name: "Galactic Guacamole Explosion",
        price: 7.99,
        description: "Guacamole enriched with grated ricotta and pomegranate seeds, served with crispy tortilla chips."
    },

];
const starters = menuItems.slice(0, 4);
const mainCourses = menuItems.slice(4);
const Menu = () => {
    return (
        <div className={styles.menu}>
            <h1 className={styles.our_menu}>Our menu</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li><a className={styles.border} href="#">Startes</a></li>
                    <li><a className={styles.border} href="#">Drinks</a></li>
                    <li><a className={styles.border} href="#">Main Course</a></li>
                    <li><a href="#">Dessert</a></li>
                </ul>
            </nav>
            <div className={styles.menu_content}>
                <div className={styles.menu_left}>
                    <div>
                        {starters.map(item => {
                            return <div className={styles.menu_info}>
                                <div className={styles.menu_info_inner}><div>{item.name}</div> <div>$ {item.price}</div></div>
                                <div className={styles.menu_span}>{item.description}</div>
                            </div>
                        })}
                    </div>
                    <div>
                        {mainCourses.map(item => {
                            return <div className={styles.menu_info}>
                                <div className={styles.menu_info_inner}><div>{item.name}</div> <div>{item.price}</div></div>
                                <div className={styles.menu_span}>{item.description}</div>
                            </div>
                        })}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.menu_right_top}>
                        <div className={styles.menu_right_top_text}>
                            <div>Meat Skewers</div>
                            <div className={styles.percent}>30 %</div>
                            <div>OFF</div>
                        </div>
                    </div>
                    <div className={styles.menu_right_bottom}></div>
                </div>

            </div>
        </div>
    )
}

export default Menu