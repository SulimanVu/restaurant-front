import { useAppDispatch, useAppSelector } from '@/redux/hook';
import styles from './fullResPage.module.scss';
import map from '@/assets/map.png'
import { useEffect, useState } from 'react';
import { fetchManyFood } from '@/redux/features/foodSlice';
import Restaraunts from '../Restaraunts/Restaraunts';
import ProductCard from '@/shared/Card/ProductCard';
import BronModal from '../BronModal/BronModal';
import { Box, CircularProgress } from '@mui/material';

const FullResPage = () => {
    const allFood = useAppSelector((state) => state.foodSlice.allFood);
  const dispatch = useAppDispatch()
const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchManyFood());
  }, [dispatch]);  

  if(!allFood) {
    return (
        <Box sx={{ display: 'flex', margin: '300px auto 300px 700px',  }}>
          <CircularProgress />
        </Box>
      );
  }

    return (
        <div className={styles.fullPage}>
            <div className={styles.main_content}>
                <div className={styles.title}>
                    <div className={styles.restaurant}>Ресторан</div>
                    <div className={styles.name}>Vasilchuki Чайхона №1 на Большой Полянке</div>
                    <div className={styles.logo}><img src="https://old.leclick.ru/files/chains/422.png" alt="" /></div>
                </div>

                <div className={styles.pop_up}>
                    <div className={styles.phone}>+7 (495) 374-9299</div>
                    <hr />
                    <div className={styles.street}><img src='https://leclick.ru/img/icons/loc.svg' alt="" /> &nbsp; <div>ул. Большая Полянка, д. 56/1</div></div>
                    <div className={styles.street}><img src="https://leclick.ru/img/icons/metro.svg" alt="" /> &nbsp; <div>Добрынинская, Полянка, Серпуховская</div></div>
                    <div className={styles.bron} onClick={() => setIsOpen(true)}>Забронировать</div>
                    <div className={styles.order}>Заказать банкет</div>
                </div>
            </div>


            <div className={styles.description}>
                <div className={styles.information_block}>
                    <div className={styles.text}>Стеклянный фасад VASILCHUKÍ Chaihona №1 на Большой Полянке привлекает внимание. Он буквально парит над вечно бегущим куда-то городом, а за его окнами течет размеренная жизнь. Мы сделали всё возможное, чтобы перенести гостей ресторана в Средиземноморье.</div>
                    <div className={styles.dop_infa}>
                        <div className={styles.top_blocks}>
                            <div><img src="https://leclick.ru/img/icons/price_w.svg" alt="" />
                                <ul>
                                    <li>Средний чек:</li>
                                    <li>1100—1600</li>
                                </ul>
                            </div>
                            <div><img src="https://leclick.ru/img/icons/kitchen_w.svg" alt="" />
                                <ul>
                                    <li>Кухня:</li>
                                    <li>Европейская, Русская,</li>
                                    <li>Японская, Вегетарианская,</li>
                                    <li>Восточная, Паназиатская, Узбекская</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.top_blocks}>
                            <div><img src="https://leclick.ru/img/icons/recommended_w.svg" alt="" />
                                <ul>
                                    <li>Цель посещения:</li>
                                    <li>Бизнес-ланч</li>
                                    <li>Деловая встреча</li>
                                    <li>Романтическая встреча</li>
                                    <li>Семейный ужин</li>
                                    <li>Ужин с друзьями</li>
                                </ul>
                            </div>
                            <div><img src="https://leclick.ru/img/icons/features_w.svg" alt="" />
                                <ul>
                                    <li>Особенности: </li>
                                    <li>DJ </li>
                                    <li>WiFi </li>
                                    <li>Детская анимация (по выходным)</li>
                                    <li>Детское меню</li>
                                    <li>Доставка</li>
                                    <li>Живая музыка</li>
                                    <li>Летняя терраса</li>
                                    <li>Настольные игры</li>
                                    <li>Принимаются карты</li>
                                    <li>Шоу-программа</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productsCards}>

                    {allFood.map((item) => <ProductCard item={item} />)}
                    </div>
                    <div className={styles.time_work}>
                        <h1>Время работы</h1>
                        <div className={styles.times}>
                            <table>
                                <tr>
                                    <td>ПН</td>
                                    <td>ВТ</td>
                                    <td>СР</td>
                                    <td>ЧТ</td>
                                    <td>ПТ</td>
                                    <td>СБ</td>
                                    <td>ВС</td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                    <td>11:00</td>
                                </tr>
                                <tr>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                    <td>16:00</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
                <div className={styles.bron_block}>
                    <div className={styles.pop_up2}>
                        <div className={styles.phone}>Ресторан
                            Vasilchuki Чайхона №1 на Большой Полянке
                        </div>
                        <div>
                            <img src={map} alt="" />
                        </div>
                        <hr />
                        <div className={styles.street}><img src='https://leclick.ru/img/icons/loc.svg' alt="" /> &nbsp; <div>ул. Большая Полянка, д. 56/1</div></div>
                        <div className={styles.street}><img src="https://leclick.ru/img/icons/metro.svg" alt="" /> &nbsp; <div>Добрынинская, Полянка, Серпуховская</div></div>
                        <div className={styles.bron}>Забронировать</div>
                        <div className={styles.order}>Заказать банкет</div>
                        <div className={styles.taxi}>
                            <div>Доехать на такси</div>
                            <div><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_yandex_taxi_app.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <BronModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    )
}

export default FullResPage