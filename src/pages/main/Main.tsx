import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import styles from "./main.module.scss";
import ProductCard from "@/shared/Card/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { fetchManyFood } from "@/redux/features/foodSlice";
import CityModal from "@/components/CityModal/CityModal";
import Footer from "@/components/Footer/Footer";
import BrainPage from "@/components/BrainPage/BrainPage";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import { fetchManyRestaurant } from "@/redux/features/restaurantSlice";
import restaurantSlice from '../../redux/features/restaurantSlice';

const Main = () => {
  const dispatch = useAppDispatch();
  const restaurant = useAppSelector((state) => state.restaurantSlice.allRestaurants)?.slice(0, 4);

  console.log(restaurant);
  
  useEffect(() => {
    dispatch(fetchManyRestaurant());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <CityModal />
      <BrainPage />
      {/* <Content /> */}
      <h1>Популярные блюда:</h1>
      <div className={styles.flex}>
        {restaurant?.map((item) => (
          <RestaurantCard  item={item} />
        ))}
         {restaurant?.map((item) => (
          <RestaurantCard  item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Main;
