

import styles from './List.module.scss'
import { Item } from '../Item';
import { useAppSelector } from '@/redux/hook';
import PaymentForm from '../PaymentForm/Payment';

export const List = () => {

  const sum = useAppSelector(state => state.basketSlice.sum)

  const data = [
    {
      name: 'Бурген',
      description: 'Описание еды',
      price: 140
    },
    {
      name: 'Бурген',
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      price: 130
    },
    {
      name: 'Бурген',
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      price: 30
    }
  ]

  return (
    <>
      <div className={styles.wrapper}>
        {data.map((item) => {
          return (
            <Item item={item}/>
          )
        })}

      </div>
      <div className={styles.wrapperSum}>
        <div className={styles.box}>
          <h1 className={styles.itogo}>Итого:</h1>
          <h2 className={styles.itogo}> {sum} руб</h2>
        </div>
        <div className={styles.oplataButton}>Оплатить</div>
      </div>
      <PaymentForm />
    </>

  )
}