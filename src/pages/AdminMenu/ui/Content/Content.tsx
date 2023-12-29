import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { fetchManyFood } from '@/redux/features/foodSlice';
import EnhancedTable  from '../Table/Table';

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
    <EnhancedTable allFood={allFood} />
  )
}