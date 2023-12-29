import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { getUser } from "@/redux/features/userSlice";
import Header from "@/components/Header/Header";
import { List } from "./List/List";
import { Userinfo } from "./UserInfo/UserInfo";


const Basket = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.authSlice.userID);
  const user = useAppSelector(state => state.userSlice.user)

  useEffect(() => {
    if (id) {
      getUser(id)
    }
  }, [dispatch])

  return (
    <div className={styles.mainBasket}>
      <Header />
      <h1 className={styles.cart}>Корзина</h1>
      <List />
      <Userinfo />
    </div>
  );
};

export default Basket;
