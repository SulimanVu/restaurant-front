import { BASE_URL } from '@/utils'
import styles from './restaurant.module.scss'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ item }: any) => {
  console.log(BASE_URL + '/' + item?.image)

  const navigate = useNavigate()

  const navigateHandler = () => {
      navigate("basket")
  };

  console.log(item)
  return (
    <div className={styles.restaurantCard}>
        <div className={styles.img}><img src={BASE_URL + `/${item?.image}`} alt="" /></div>
        <div className={styles.rest_infa}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.rating}><img src="https://leclick.ru/img/icons/vtb_green.svg" alt="" /> &nbsp; 4.59 / 232 оценки</div>
            <div className={styles.street}><img src="https://leclick.ru/img/icons/loc.svg" alt="" />&nbsp; {item.address}</div>
            <div className={styles.street2}><img src="https://leclick.ru/img/icons/metro.svg" alt="" /> &nbsp;{item.city}</div>
            <div className={styles.citchen}><img src="https://leclick.ru/img/icons/kitchen.svg" alt="" />&nbsp; Европейская, Американская, Аргентинская</div>
            <button onClick={navigateHandler}>Забронировать</button>
        </div>
        
    </div>
  )
}

export default RestaurantCard