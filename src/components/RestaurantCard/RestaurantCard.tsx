import styles from './restaurant.module.scss'

const RestaurantCard = () => {
  return (
    <div className={styles.restaurantCard}>
        <div className={styles.img}><img src="https://old.leclick.ru/i/files/restaurants/photo/869767.jpg" alt="" /></div>
        <div className={styles.rest_infa}>
            <div className={styles.name}>Эль гуачо на Павелецкой</div>
            <div className={styles.rating}><img src="https://leclick.ru/img/icons/vtb_green.svg" alt="" /> &nbsp; 4.59 / 232 оценки</div>
            <div className={styles.street}><img src="https://leclick.ru/img/icons/loc.svg" alt="" />&nbsp; ул. Зацепский Вал, д. 6/13</div>
            <div className={styles.street2}><img src="https://leclick.ru/img/icons/metro.svg" alt="" /> &nbsp;Павелецкая</div>
            <div className={styles.citchen}><img src="https://leclick.ru/img/icons/kitchen.svg" alt="" />&nbsp; Европейская, Американская, Аргентинская</div>
            <button>Забронировать</button>
        </div>
        
    </div>
  )
}

export default RestaurantCard