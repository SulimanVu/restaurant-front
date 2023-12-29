import { useAppDispatch, useAppSelector } from '@/redux/hook';
import styles from './Content.module.scss'
import ColumnGroupingTable from './Table'
import { useEffect } from 'react';
import { fetchManyFood } from '@/redux/features/foodSlice';

export const Content = () => {
  const allFood = useAppSelector((state) => state.foodSlice.allFood);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchManyFood());
  }, [dispatch]);  

  if(!allFood) {
    return <div>...loading</div>
  }

  return (
    <ColumnGroupingTable allFood={allFood} />
  )
}