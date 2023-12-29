import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import styles from "./main.module.scss";
import ProductCard from "@/shared/Card/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { fetchManyFood } from "@/redux/features/foodSlice";
import CityModal from "@/components/CityModal/CityModal";
import Footer from "@/components/Footer/Footer";

const Main = () => {
  const dispatch = useAppDispatch();
  const food = useAppSelector((state) => state.foodSlice.allFood);

  useEffect(() => {
    dispatch(fetchManyFood());
  }, [dispatch]);

  return (
    <main>
      <CityModal />
      <Content />
      <div className={styles.flex}>
        {food?.map((item) => (
          <ProductCard key={item._id} item={item} className={styles.card} />
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Main;
