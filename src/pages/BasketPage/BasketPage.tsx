import { useEffect } from "react";
import { IBasket, fetchBasket } from "@/redux/features/basketSlice";
import styles from "./basketPage.module.scss";
import Basket from "@/components/Basket/BasketCard";
import CreditCard from "@/components/CreaditCard/CreditCard";
import BasketEmpty from "@/components/BasketEmpty/BasketEmpty";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const BasketPage = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(
    (state) => state.basketSlice.basket
  ) as IBasket[];
  const user = useAppSelector((state) => state.userSlice.user);

  useEffect(() => {
    user && dispatch(fetchBasket({ id: user.basket }));
  }, [user, dispatch]);

  if (!basket.length) {
    return <BasketEmpty />;
  }

  return (
    <div className={styles.basketPage}>
      <div className={styles.products}>
        <div className={styles.navBlock}>
          <div className={styles.navInfo}>
            <div className={styles.displayMin}>Описание товара</div>
            <div className={styles.displayMin}>Цена</div>
            <div>Колличество</div>
            <div>Итого</div>
            <div>Купить</div>
            <div>Удалить</div>
          </div>
        </div>
        {/* {basket.map((item) => (
          <Basket
            key={item.product._id}
            product={item.product}
            size={item?.size}
          />
        ))} */}
      </div>
      <CreditCard />
    </div>
  );
};

export default BasketPage;
