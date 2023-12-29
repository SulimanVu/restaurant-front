

import styles from './List.module.scss'
import { Item } from '../Item';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import PaymentForm from '../PaymentForm/Payment';
import PaymentModal from '@/components/PaymentModal/PaymentModal';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBasket } from '@/redux/features/basketSlice';
import { getUser } from '@/redux/features/userSlice';

export const List = () => {

  const sum = useAppSelector(state => state.basketSlice.sum)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.userSlice.user)
  const userID = useAppSelector((state) => state.authSlice.userID)

 console.log(userID, user)

 useEffect(() => {
    dispatch(getUser(userID))
  }, [dispatch])

  const data = [
    {
      name: 'Бургер',
      description: 'Описание еды',
      price: 140
    },
    {
      name: 'Бургер',
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      price: 130
    },
    {
      name: 'Бургер',
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
        <PaymentModal  />
      </div>
      
    </>

  )
}